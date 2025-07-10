import React, { useContext, useState } from "react";
import { ThemeContext } from "./context/ThemeContext";
import Header from "./component/header/Header";
import TaskList from "./component/taskList/TaskList";

function App() {
  const { isLightTheme } = useContext(ThemeContext);
  const [filter, setFilter] = useState("all");

  return (
    <div className={isLightTheme ? "light-theme" : "dark-theme"}>
      <Header filter={filter} setFilter={setFilter} />
      <main>
        <TaskList filter={filter} />
      </main>
    </div>
  );
}

export default App;
