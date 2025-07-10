import { useState, useEffect, useCallback } from "react";
import axios from "axios";

import CreateTask from "../createTask/CreateTask";
import TaskItem from "../taskItem/TaskItem";

export default function TaskList({ filter }) {
  const [tasks, setTasks] = useState([]);

  const fetchTasks = useCallback(async () => {
    try {
      const response = await axios.get(
        "https://task-list-backend-1.onrender.com/tasks"
      );
      setTasks(response.data);
    } catch (error) {
      console.error("Failed to get tasks:", error);
    }
  }, []);

  useEffect(() => {
    fetchTasks();
  }, [fetchTasks]);

  const filteredTasks = tasks.filter((t) => {
    if (filter === "active") return !t.completed;
    if (filter === "completed") return t.completed;
    return true;
  });

  return (
    <ul>
      {filteredTasks.map((task) => (
        <TaskItem
          key={task._id}
          id={task._id}
          name={task.title}
          completed={task.completed}
          onTaskUpdated={fetchTasks}
        />
      ))}
      <CreateTask onTaskCreated={fetchTasks} />
    </ul>
  );
}
