import { useState } from "react";
import "./App.scss";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import TodoList from "./components/TodoList/TodoList";
import InputBox from "./components/InputBox/InputBox";
import LowerHeader from "./components/Header/LowerHeader";

function App() {
  const [todos, setTodos] = useState([]);
  const [activeStatus, setActiveStatus] = useState("all");

  const addTodo = (todo) => {
    setTodos((prev) => [...prev, todo]);
  };

  const handleComplete = (id) => {
    let updatedTodos = todos.map((todo) => {
      if (todo.id === id)
        return {
          ...todo,
          status: todo.status === "active" ? "completed" : "active",
        };
      else {
        return todo;
      }
    });
    setTodos(updatedTodos);
  };

  const handleDelete = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  // console.log(todos,activeStatus);
  const clearCompleted = () => {
    setTodos((prev) => prev.filter((todo) => todo.status !== "completed"));
  };

  return (
    <div className="app-body">
      <p>Learn React</p>
      <div style={{ width: "30vw" }}></div>
      <div style={{ width: "40vw" }}>
        <Header title="Todo" />
        <InputBox addTodo={addTodo} />
        <TodoList
          todos={todos}
          activeStatus={activeStatus}
          handleComplete={handleComplete}
          handleDelete={handleDelete}
        />
        <LowerHeader
          noOfTasks={todos.filter((each) => each.status === "active").length}
          activeStatus={activeStatus}
          handleActiveStatus={setActiveStatus}
          clearCompleted={clearCompleted}
        />
      </div>
      <div style={{ width: "30vw" }}></div>
      {/* <Footer numberOfPendingTodos={todos.length} /> */}
    </div>
  );
}

export default App;
