import {useState} from "react";

import "./create-task.css";
import {createTask} from "../../services/taskService";


export default function CreateTask({onTaskCreated}) {
  const [taskInput, setTaskInput] = useState("");

  const handleInputChange = (e) => {
    setTaskInput(e.target.value);
  };

  const handleKeyDown = async (e) => {
    if (e.key === "Enter" && taskInput.trim()) {
      try {
        await createTask(taskInput);

        setTaskInput("");

        if (onTaskCreated) {
          onTaskCreated();
        }
      } catch (error) {
        console.error("Error creating task:", error);
      }
    }
  };

  return (
    <input
      className="task__add"
      type="text"
      placeholder="Add Task"
      value={taskInput}
      onChange={handleInputChange}
      onKeyDown={handleKeyDown}
    />
  );
}
