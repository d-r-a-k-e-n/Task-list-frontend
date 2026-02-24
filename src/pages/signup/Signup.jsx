import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signupService, setAuthData } from "../../services/authService";
import "./signup.css";

export default function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const isFormValid = email.trim() !== "" && password.trim() !== "" && name.trim() !== "";

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const data = await signupService(email, password, name);
      setAuthData(data);
      navigate("/", { replace: true });
    } catch (err) {
      const message = err.response?.data?.message || "Signup failed";
      setError(message);
    }
  };

  return (
    <section className="signup">
      <h2 className="signup__title">Sign up</h2>
      {error && <p className="signup__error">{error}</p>}
      <form
        style={{ display: "flex", flexDirection: "column" }}
        onSubmit={handleSubmit}
      >
        <input
          className="signup__input"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="email"
          required
        />
        <input
          className="signup__input"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="password"
          required
        />
        <input
          className="signup__input"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="name"
          required
        />
        <button className="signup__btn" type="submit" disabled={!isFormValid}>
          SIGN UP
        </button>
      </form>
      <p className="signup__text">
        Have an account? <Link className="signup__link" to="/login">Sign in</Link>
      </p>
    </section>
  );
}
