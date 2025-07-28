import {useState} from "react";
import Header from "../component/header/Header";
import TaskList from "../component/taskList/TaskList";

export default function CreateTask({onTaskCreated}) {
  const [filter, setFilter] = useState("all");
  const logout = () => {
    localStorage.setItem('isAuth', 'false');
    window.location.href = "/login";
  }
  return (
    <main>
      <Header filter={filter} setFilter={setFilter}/>
      <TaskList filter={filter}/>
      <button onClick={logout}>Logout</button>
    </main>
  );
}