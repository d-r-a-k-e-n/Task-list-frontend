import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { loginService, setAuthData } from "../../services/authService";
import "./login.css";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const isFormValid = email.trim() !== "" && password.trim() !== "";

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const data = await loginService(email, password);
      setAuthData(data);
      navigate("/", { replace: true });
    } catch (err) {
      const message = err.response?.data?.message || "Sign in failed";
      setError(message);
    }
  };

  return (
    <section className="login">
      <h2 className="login__title">Sign in</h2>
      {error && <p className="login__error">{error}</p>}
      <form
        style={{ display: "flex", flexDirection: "column" }}
        onSubmit={handleSubmit}
      >
        <input
          className="login__input"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="email"
          required
        />
        <input
          className="login__input"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="password"
          required
        />
        <button className="login__btn" type="submit" disabled={!isFormValid}>
          SIGN IN
        </button>
      </form>
      <p className="login__text">
        Don't have an account? <Link className="login__link" to="/signup">Sign Up</Link>
      </p>
    </section>
  );
}
