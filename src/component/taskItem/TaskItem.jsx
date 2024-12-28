import { ReactComponent as Remove } from "../../icon/remove.svg";

import "./task-item.css";

export default function TaskItem({ text }) {
  return (
    <li className="task__item">
      <div className="test">
        <label className="custom-checkbox">
          <input type="checkbox" />
          <span className="checkbox"></span>
        </label>
        {text}
      </div>
      <button className="remove__btn">
        <Remove className="remove__icon" />
      </button>
    </li>
  );
}
