import React, { useContext } from "react";

import { useTasks } from "../../context/TaskContext";
import { ThemeContext } from "../../context/ThemeContext";
import { ReactComponent as Moon } from "../../icon/moon.svg";
import { ReactComponent as Sun } from "../../icon/sun.svg";

import "./header.css";

export default function Header() {
  const { isLightTheme, toggleTheme } = useContext(ThemeContext);
  const { filter, setFilter } = useTasks();

  return (
    <header className="header">
      <select onChange={(e) => setFilter(e.target.value)} value={filter}>
        <option value="all">All</option>
        <option value="active">Active</option>
        <option value="completed">Completed</option>
      </select>
      <h1 className="header__title">Task list</h1>
      <button className="them__btn" onClick={toggleTheme}>
        {isLightTheme ? <Moon /> : <Sun className="sun__icon" />}
      </button>
    </header>
  );
}
