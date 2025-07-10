import { useState } from "react";
import axios from "axios";

import "./create-task.css";

export default function CreateTask({ onTaskCreated }) {
  const [taskInput, setTaskInput] = useState("");

  const handleInputChange = (e) => {
    setTaskInput(e.target.value);
  };

  const handleKeyDown = async (e) => {
    if (e.key === "Enter" && taskInput.trim()) {
      try {
        await axios.post(
          "https://task-list-backend-1.onrender.com/tasks/:userId",
          {
            title: taskInput,
          }
        );

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
