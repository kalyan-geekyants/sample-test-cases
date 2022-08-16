import React, { useState } from "react";
import "./header.scss";

function LowerHeader({noOfTasks,activeStatus,handleActiveStatus, clearCompleted}) {
  return (
    <div className="lower-header">
      <p>{noOfTasks}{" "}{noOfTasks === 1? "task pending": "tasks pending"}</p>
      <div style={{ display: "flex" }}>
        <p
          className={`todo-status ${activeStatus === "all" ? "active" : ""}`}
          onClick={() => handleActiveStatus("all")}
        >
          All
        </p>
        <p
          className={`todo-status ${activeStatus === "active" ? "active" : ""}`}
          onClick={() => handleActiveStatus("active")}
        >
          Active
        </p>
        <p
          className={`todo-status ${activeStatus === "completed" ? "active" : ""}`}
          onClick={() => handleActiveStatus("completed")}
        >
          Completed
        </p>
      </div>    
      <p style={{cursor: "pointer"}} onClick={clearCompleted}>Clear Completed</p>
    </div>
  );
}

export default LowerHeader;
