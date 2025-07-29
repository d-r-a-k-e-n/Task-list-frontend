import axios from "axios";

export const loginService = async (email, password) => {
  try {
    await axios.post("https://task-list-backend-1.onrender.com/auth/login", {
      email,
      password
    });
  } catch (err) {
    console.error("Failed to get login:", err);
  }
}

export const signupService = async (email, password, name) => {
  try {
    await axios.post("https://task-list-backend-1.onrender.com/auth/signup", {
      email,
      password,
      name
    });
  } catch (err) {
    console.error("Error SignUp:", err);
  }
}
