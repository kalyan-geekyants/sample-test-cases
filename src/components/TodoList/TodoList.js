import React from "react";
import TodoItem from "../TodoItem/TodoItem";

function TodoList({ todos, activeStatus, handleComplete, handleDelete }) {
  return (
    <div style={{ marginTop: "1rem" }}>
      {activeStatus === "all"
        ? todos.map((each) => {
            return (
              <TodoItem
                onClick={handleComplete}
                task={each.task}
                key={each.id}
                id={each.id}
                status={each.status}
                handleDelete={handleDelete}
              />
            );
          })
        : todos
            .filter((todo) => todo.status === activeStatus)
            .map((each) => {
              return (
                <TodoItem
                  onClick={handleComplete}
                  task={each.task}
                  key={each.id}
                  id={each.id}
                  status={each.status}
                  handleDelete={handleDelete}
                />
              );
            })}
    </div>
  );
}

export default TodoList;
