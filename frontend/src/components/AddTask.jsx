import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const AddTask = () => {
  const [task, setTask] = React.useState("");
  const [details, setDetails] = React.useState("");
  const navigate = useNavigate();

  const addTask = async () => {
    let result = await fetch("https://jolly-puce-scarab.cyclic.app/add-task", {
      method: "post",
      body: JSON.stringify({ task, details }),
      headers: {
        "Content-type": "application/json",
      },
    });
    result = await result.json();
    alert("Task Added");
    navigate("/");
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
