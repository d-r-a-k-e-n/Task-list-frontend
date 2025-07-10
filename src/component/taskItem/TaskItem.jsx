import axios from "axios";
import { ReactComponent as Remove } from "../../icon/remove.svg";

import "./task-item.css";

export default function TaskItem({ id, name, completed, onTaskUpdated }) {
  const handleToggleCompleted = async () => {
    try {
      await axios.put(`https://task-list-backend-1.onrender.com/tasks/${id}`, {
        completed: !completed,
      });
      if (onTaskUpdated) {
        onTaskUpdated();
      }
    } catch (error) {
      console.error("Error updating task status:", error);
    }
  };

  const handleDeleteTask = async () => {
    try {
      await axios.delete(
        `https://task-list-backend-1.onrender.com/tasks/${id}`
      );
      if (onTaskUpdated) {
        onTaskUpdated();
      }
    } catch (error) {
      console.error("Error while deleting task:", error);
    }
  };

  return (
    <li className="task__item">
      <div className="test">
        <label className="custom-checkbox">
          <input
            type="checkbox"
            checked={completed}
            onChange={handleToggleCompleted}
          />
          <span className="checkbox"></span>
        </label>
        {name}
      </div>
      <button
        className="remove__btn"
        type={"button"}
        onClick={handleDeleteTask}
      >
        <Remove className="remove__icon" />
      </button>
    </li>
  );
}
