import React from "react";
import "./header.scss";

function Header({ title }) {
  return <h1 className="todo-title">{title}</h1>;
}

export default Header;
