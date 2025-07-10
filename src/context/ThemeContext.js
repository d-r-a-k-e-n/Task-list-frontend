import React, { createContext, useState, useEffect } from "react";

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [isLightTheme, setIsLightTheme] = useState(() => {
    const stored = localStorage.getItem("theme");
    return stored ? stored === "light" : true;
  });

  const toggleTheme = () => {
    setIsLightTheme((prevTheme) => !prevTheme);
  };

  useEffect(() => {
    localStorage.setItem("theme", isLightTheme ? "light" : "dark");
    document.body.className = isLightTheme ? "light-theme" : "dark-theme";
  }, [isLightTheme]);

  return (
    <ThemeContext.Provider value={{ isLightTheme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
