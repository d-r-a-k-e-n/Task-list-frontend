import { apiClient } from "./client";

const AUTH_BASE = "/auth";

export const loginService = async (email, password) => {
  const { data } = await apiClient.post(`${AUTH_BASE}/login`, {
    email,
    password
  });
  return data;
};

export const signupService = async (email, password, name) => {
  const { data } = await apiClient.post(`${AUTH_BASE}/signup`, {
    email,
    password,
    name
  });
  return data;
};

export const setAuthData = (data) => {
  if (data.accessToken) localStorage.setItem("accessToken", data.accessToken);
  if (data.refreshToken) localStorage.setItem("refreshToken", data.refreshToken);
  if (data.user) localStorage.setItem("user", JSON.stringify(data.user));
};

export const clearAuthData = () => {
  localStorage.removeItem("accessToken");
  localStorage.removeItem("refreshToken");
  localStorage.removeItem("user");
};

export const getStoredUser = () => {
  try {
    const user = localStorage.getItem("user");
    return user ? JSON.parse(user) : null;
  } catch {
    return null;
  }
};

export const isAuthenticated = () => !!localStorage.getItem("accessToken");
