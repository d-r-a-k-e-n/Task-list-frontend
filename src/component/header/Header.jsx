import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";

import { ThemeContext } from "../../context/ThemeContext";
import { ReactComponent as Moon } from "../../icon/moon.svg";
import { ReactComponent as Sun } from "../../icon/sun.svg";
import { clearAuthData } from "../../services/authService";

import "./header.css";

export default function Header({ filter, setFilter, onAuthChange }) {
  const { isLightTheme, toggleTheme } = useContext(ThemeContext);
  const navigate = useNavigate();

  const logout = () => {
    clearAuthData();
    onAuthChange?.();
    navigate("/login", { replace: true });
  };

  return (
    <header className="header">
      <select onChange={(e) => setFilter(e.target.value)} value={filter}>
        <option value="all">All</option>
        <option value="active">Active</option>
        <option value="completed">Completed</option>
      </select>
      <h1 className="header__title">Task list</h1>
      <div className="header__actions">
        <button className="header__logout" type="button" onClick={logout}>
          Logout
        </button>
        <button className="them__btn" onClick={toggleTheme}>
          {isLightTheme ? <Moon /> : <Sun className="sun__icon" />}
        </button>
      </div>
    </header>
  );
}
