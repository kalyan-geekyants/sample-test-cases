import React from "react";
import "./todoitem.scss";

function TodoItem({ task, id, status, onClick, handleDelete }) {
  return (
    <div className="todo-item">
      <div className="flex">
        <input
          type="checkbox"
          className="check-box"
          checked={status === "completed"}
          onChange={() => onClick(id)}
        />
        <p
          className={`todo-task ${status === "completed" ? "stike" : ""}`}
          onClick={() => onClick(id)}
        >
          {task}
        </p>
      </div>
      {status === "completed" ? (
        <p className="delete" onClick={() => handleDelete(id)}>
          Delete
        </p>
      ) : null}
    </div>
  );
}

export default TodoItem;
