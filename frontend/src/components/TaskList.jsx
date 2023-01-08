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
    let result = await fetch("https://jolly-puce-scarab.cyclic.app/tasks");
    result = await result.json();
    setTask(result);
  };

  const deleteTask = async (id) => {
    let result = await fetch(`https://jolly-puce-scarab.cyclic.app/tasks/${id}`, {
      method: "Delete",
    });
    result = await result.json();
    if (result) {
      alert("Task Deleted");
      getTask();
    }
  };

  const sortTask = () => {
    let res = [...task];
    res.sort((a, b) => {
      const dateA = new Date(a.deadline);
      const dateB = new Date(b.deadline);
      return dateA - dateB;
    });
    setTask(res);
  };

  const sortTaskB = () => {
    let res = [...task];
    res.sort((a, b) => {
      const dateA = new Date(b.deadline);
      const dateB = new Date(a.deadline);
      return dateA - dateB;
    });
    setTask(res);
  }

  return (
    <>
      <div className="task-list">
        <h3>Task List</h3>
        <button onClick={sortTask}>SortA</button>
        <button onClick={sortTaskB}>SortB</button>

        <ul>
          <li>S. No</li>
          <li>Task Name</li>
          <li>Task Detals</li>
          <li>Deadline</li>
          <li>Operation</li>
        </ul>
        {task.length > 0 ? (
          task.map((e, i) => (
            <ul key={e._id}>
              <li>{i + 1}</li>
              <li>{e.task}</li>
              <li className="taskDetails">{e.details}</li>
              <li>{e.deadline}</li>
              <li>
                <button onClick={() => deleteTask(e._id)}>Delete</button>
                <Link to={"/update/" + e._id}>
                  <button>Update</button>
                </Link>
                <Link to={"/view/" + e._id}>
                  <button>View</button>
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
