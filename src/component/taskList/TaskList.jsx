import TaskItem from "../taskItem/TaskItem";
import "./task-list.css";

export default function TaskList() {
  return (
    <ul>
      <TaskItem text={"Hello world"} />
      <TaskItem text={"Hello world 2"} />
      <TaskItem text={"Hello world 3"} />
    </ul>
  );
}
