import { ReactComponent as Remove } from "../../icon/remove.svg";

import "./task-item.css";

export default function TaskItem({
  id,
  name,
  completed,
  toggleTaskCompleted,
  deleteTask,
}) {
  return (
    <li className="task__item">
      <div className="test">
        <label className="custom-checkbox">
          <input
            type="checkbox"
            checked={completed}
            onChange={() => toggleTaskCompleted(id)}
          />
          <span className="checkbox"></span>
        </label>
        {name}
      </div>
      <button
        className="remove__btn"
        type={"button"}
        onClick={() => deleteTask(id)}
      >
        <Remove className="remove__icon" />
      </button>
    </li>
  );
}
