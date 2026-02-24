import { useState } from "react";
import Header from "../component/header/Header";
import TaskList from "../component/taskList/TaskList";

export default function TaskListPage({ onAuthChange }) {
  const [filter, setFilter] = useState("all");

  return (
    <main>
      <Header filter={filter} setFilter={setFilter} onAuthChange={onAuthChange} />
      <TaskList filter={filter} />
    </main>
  );
}