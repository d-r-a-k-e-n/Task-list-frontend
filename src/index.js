import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

import { ThemeProvider } from "./context/ThemeContext";
import { TaskProvider } from "./context/TaskContext";

import "./styles/common.css";
import "./styles/reset.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ThemeProvider>
    <TaskProvider>
      <App />
    </TaskProvider>
  </ThemeProvider>
);
