import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

export const TaskList = () => {
  const [task, setTask] = useState([]);

  useEffect(() => {
    getTask();
  }, []);

  const getTask = async () => {
    let result = await fetch("http://localhost:5000/tasks");
    result = await result.json();
    setTask(result);
  };

  const deleteTask = async (id) => {
    let result = await fetch(`http://localhost:5000/tasks/${id}`, {
      method: "Delete",
    });
    result = await result.json();
    if (result) {
      alert("Task Deleted");
      getTask();
    }
  };

  return (
    <>
      <div className="task-list">
        <h3>Task List</h3>
        <ul>
          <li>S. No</li>
          <li>Task Name</li>
          <li>Task Detals</li>
          <li>Operation</li>
        </ul>
        {task.length > 0 ? (
          task.map((e, i) => (
            <ul key={e._id}>
              <li>{i + 1}</li>
              <li>{e.task}</li>
              <li>{e.details}</li>
              <li>
                <button onClick={() => deleteTask(e._id)}>Delete</button>
                <Link to={"/update/" + e._id}>
                  <button>Update</button>
                </Link>
              </li>
            </ul>
          ))
        ) : (
          <h1>No Result Found</h1>
        )}
      </div>
    </>
  );
};
