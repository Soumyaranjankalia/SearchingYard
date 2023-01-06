import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export const UpdateTask = () => {
  const [task, setTask] = useState("");
  const [details, setDetails] = useState("");
  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    getTaskDetails();
  }, []);

  const getTaskDetails = async () => {
    let result = await fetch(`http://localhost:5000/tasks/${params.id}`);
    result = await result.json();
    setTask(result.task);
    setDetails(result.details);
  };

  const updateTask = async () => {
    let result = await fetch(`http://localhost:5000/tasks/${params.id}`, {
      method: "put",
      body: JSON.stringify({ task, details }),
      headers: {
        "Content-Type": "Application/json",
      },
    });
    result = await result.json();
    if (result) {
      alert("update successfully");
      navigate("/");
    }
  };

  return (
    <div className="login">
      <h1>Update Task</h1>
      <input
        className="inputBox"
        type="text"
        value={task}
        onChange={(e) => {
          setTask(e.target.value);
        }}
        placeholder="Enter task"
      />
      <textarea
        className="inputBox"
        type="text"
        value={details}
        onChange={(e) => {
          setDetails(e.target.value);
        }}
        placeholder="Enter Answer"
      />
      <button onClick={updateTask} className="appButton">
        Update Task
      </button>
    </div>
  );
};
