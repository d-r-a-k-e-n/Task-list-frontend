import {useState, useEffect, useCallback} from "react";

import CreateTask from "../createTask/CreateTask";
import TaskItem from "../taskItem/TaskItem";
import {getTask} from "../../services/taskService";

export default function TaskList({filter}) {
  const [tasks, setTasks] = useState([]);

  const fetchTasks = useCallback(async () => {
    try {
      const data = await getTask();
      setTasks(data);
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
      <CreateTask onTaskCreated={fetchTasks}/>
    </ul>
  );
}
