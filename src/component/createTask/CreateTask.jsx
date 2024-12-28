import "./create-task.css";

export default function CreateTask() {
  return (
    <input
      className="task__add"
      type="text"
      placeholder="Add a task"
      // value={input}
      // onChange={(e) => setInput(e.target.value)}
      // onKeyDown={(e) => e.key === "Enter" && handleAddTask()}
    />
  );
}
