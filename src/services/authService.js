import axios from "axios";

export const loginService = async (email, password) => {
  try {
    await axios.post("http://localhost:3001/auth/login", {
      email,
      password
    });
  } catch (err) {
    console.error("Failed to get login:", err);
  }
}

export const signupService = async (email, password, name) => {
  try {
    await axios.post("http://localhost:3001/auth/signup", {
      email,
      password,
      name
    });
  } catch (err) {
    console.error("Error SignUp:", err);
  }
}
