import { useTasks } from "../../context/TaskContext";

import TaskItem from "../taskItem/TaskItem";

import "./task-list.css";

export default function TaskList() {
  const {
    tasks,
    filter,
    filteredTasks,
    setFilter,
    toggleTaskCompleted,
    deleteTask,
  } = useTasks();

  return (
    <ul>
      {filteredTasks.map((task) => (
        <TaskItem
          key={task.id}
          id={task.id}
          name={task.name}
          completed={task.completed}
          toggleTaskCompleted={toggleTaskCompleted}
          deleteTask={deleteTask}
        />
      ))}
      {/* <TaskItem text={"Hello world"} />
      <TaskItem text={"Hello world 2"} />
      <TaskItem text={"Hello world 3"} /> */}
    </ul>
  );
}
