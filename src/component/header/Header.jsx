import React, { useState } from "react";

import { ReactComponent as Moon } from "../../icon/moon.svg";
import { ReactComponent as Sun } from "../../icon/sun.svg";

import "./header.css";

export default function Header() {
  const [isLightTheme, setIsLightTheme] = useState(true);

  const toggleTheme = () => {
    setIsLightTheme(!isLightTheme);
  };

  return (
    <header className="header">
      <select>
        <option value="all">All</option>
        <option value="active">Active</option>
        <option value="completed">Completed</option>
      </select>
      <h1 className="header__title">Task list</h1>
      <button className="them__btn" onClick={toggleTheme}>
        {isLightTheme ? <Moon /> : <Sun />}
      </button>
    </header>
  );
}
