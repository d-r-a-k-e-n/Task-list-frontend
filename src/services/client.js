import axios from "axios";

const API_BASE = process.env.REACT_APP_API_URL || "";

export const apiClient = axios.create({
  baseURL: API_BASE,
  headers: { "Content-Type": "application/json" }
});

let isRefreshing = false;
let failedQueue = [];

const processQueue = (error, token = null) => {
  failedQueue.forEach((prom) => (error ? prom.reject(error) : prom.resolve(token)));
  failedQueue = [];
};

const getRefreshUrl = () => `${API_BASE}/auth/refresh`;

apiClient.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("accessToken");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

apiClient.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    if (error.response?.status !== 401 || originalRequest._retry) {
      return Promise.reject(error);
    }

    if (isRefreshing) {
      return new Promise((resolve, reject) => {
        failedQueue.push({ resolve, reject });
      })
        .then((token) => {
          return apiClient({
            ...originalRequest,
            headers: {
              ...originalRequest.headers,
              Authorization: `Bearer ${token}`
            },
            _retry: true
          });
        })
        .catch((err) => Promise.reject(err));
    }

    originalRequest._retry = true;
    isRefreshing = true;

    const refreshToken = localStorage.getItem("refreshToken");
    if (!refreshToken) {
      localStorage.removeItem("accessToken");
      localStorage.removeItem("refreshToken");
      localStorage.removeItem("user");
      window.location.href = "/login";
      isRefreshing = false;
      return Promise.reject(error);
    }

    try {
      const refreshUrl = getRefreshUrl();
      const { data } = await axios.post(
        refreshUrl,
        { refreshToken },
        { headers: { "Content-Type": "application/json" } }
      );

      const accessToken = data?.accessToken;
      const newRefreshToken = data?.refreshToken;
      const user = data?.user;

      if (!accessToken || !newRefreshToken) {
        throw new Error("Invalid refresh response");
      }

      localStorage.setItem("accessToken", accessToken);
      localStorage.setItem("refreshToken", newRefreshToken);
      if (user) localStorage.setItem("user", JSON.stringify(user));

      processQueue(null, accessToken);

      return apiClient({
        ...originalRequest,
        headers: {
          ...originalRequest.headers,
          Authorization: `Bearer ${accessToken}`
        }
      });
    } catch (refreshError) {
      processQueue(refreshError, null);
      localStorage.removeItem("accessToken");
      localStorage.removeItem("refreshToken");
      localStorage.removeItem("user");
      window.location.href = "/login";
      return Promise.reject(refreshError);
    } finally {
      isRefreshing = false;
    }
  }
);
