import {Profiler, useRef} from "react";

import "./signup.css";
import {signupService} from "../../services/authService";
import {Link} from "react-router-dom";

export default function Signup() {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const nameRef = useRef(null);


  const SignUp = async (e) => {
    e.preventDefault();

    try {
      await signupService(emailRef.current.value, passwordRef.current.value, nameRef.current.value);
      localStorage.setItem("isAuth", "true");
      window.location.href = "/";
    } catch (error) {
      console.error("Error LogIn:", error);
      localStorage.setItem("isAuth", "false");
    }
  };

  return (
    <section className="signup">
      <h2 className="signup__title">signup</h2>
      <form
        style={{display: "flex", flexDirection: "column"}}
        onSubmit={SignUp}
      >
        <input
          className="signup__input"
          type="email"
          ref={emailRef}
          placeholder="email"
        />
        <input
          className="signup__input"
          type="password"
          ref={passwordRef}
          placeholder="password"
        />
        <input
          className="signup__input"
          type="text"
          ref={nameRef}
          placeholder="name"
        />
        <button className="signup__btn" type="submit">
          SIGN UP
        </button>
      </form>

      <p className="signup__text">Have an account?{' '}
        <Link className="signup__link" to="/login">Log In</Link></p>
    </section>
  );
}
