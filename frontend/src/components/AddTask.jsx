import React from "react";
import { useState } from "react";

export const AddTask = () => {
  const [task, setTask] = React.useState("");
  const [details, setDetails] = React.useState("");

  const addTask = async () => {
    let result = await fetch("http://localhost:5000/add-task", {
      method: "post",
      body: JSON.stringify({ task, details }),
      headers: {
        "Content-type": "application/json",
      },
    });
    result = await result.json();
    alert("Task Added");
  };

  return (
    <div className="login">
      <h1>Add Task</h1>
      <input
        className="inputBox"
        type="text"
        value={task}
        onChange={(e) => {
          setTask(e.target.value);
        }}
        placeholder="Enter Task"
      />
      <textarea
        className="inputBox"
        type="text"
        value={details}
        onChange={(e) => {
          setDetails(e.target.value);
        }}
        placeholder="Enter Details"
      />
      <button onClick={addTask} className="appButton">
        Add Task
      </button>
    </div>
  );
};
