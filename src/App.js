import React, { useContext } from "react";
import { ThemeContext } from "./context/ThemeContext";
import Header from "./component/header/Header";
import TaskList from "./component/taskList/TaskList";
import CreateTask from "./component/createTask/CreateTask";

function App() {
  const { isLightTheme } = useContext(ThemeContext);

  return (
    <div className={isLightTheme ? "light-theme" : "dark-theme"}>
      <Header />
      <main>
        <TaskList />
        <CreateTask />
      </main>
    </div>
  );
}

export default App;
