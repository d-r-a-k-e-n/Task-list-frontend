import {useRef} from "react";

import "./login.css";
import {loginService} from "../../services/authService";
import {Link} from "react-router-dom";

export default function Login() {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const LogIn = async (e) => {
    e.preventDefault();

    try {
      await loginService(emailRef.current.value, passwordRef.current.value);
      localStorage.setItem("isAuth", "true");
      window.location.href = "/";
    } catch (error) {
      console.error("Error LogIn:", error);
      localStorage.setItem("isAuth", "false");
    }
  };

  return (
    <section className="login">
      <h2 className="login__title">Login</h2>
      <form
        style={{display: "flex", flexDirection: "column"}}
        onSubmit={LogIn}
      >
        <input
          className="login__input"
          type="email"
          ref={emailRef}
          placeholder="email"
        />
        <input
          className="login__input"
          type="password"
          ref={passwordRef}
          placeholder="password"
        />
        <button className="login__btn" type="submit">
          LOG IN
        </button>
      </form>
      <p className="login__text">Don't have an account?{' '}
        <Link className="login__link" to="/signup">Sign Up</Link></p>
    </section>
  );
}
