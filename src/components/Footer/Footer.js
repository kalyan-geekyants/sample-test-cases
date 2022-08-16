import React from "react";

function Footer({ numberOfPendingTodos }) {
  return <p 
//   style={{ opacity: 0 }}
 data-testid="tasks"
  >{numberOfPendingTodos} {numberOfPendingTodos === 1? "task": "tasks"}</p>;
}

export default Footer;
