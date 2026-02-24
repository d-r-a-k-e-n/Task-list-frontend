import { ReactComponent as Remove } from "../../icon/remove.svg";
import {deleteTask, updateTask} from "../../services/taskService";

import "./task-item.css";

export default function TaskItem({id, name, completed, onTaskUpdated}) {
  const handleToggleCompleted = async () => {
    try {
      await updateTask(id, completed);
      if (onTaskUpdated) {
        onTaskUpdated();
      }
    } catch (error) {
      console.error("Error updating task status:", error);
    }
  };

  const handleDeleteTask = async () => {
    try {
      await deleteTask(id)
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
        <Remove className="remove__icon"/>
      </button>
    </li>
  );
}
