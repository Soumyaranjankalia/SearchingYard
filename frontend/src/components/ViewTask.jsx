import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

export const ViewTask = () => {
  const [task, setTask] = useState({});
  const params = useParams();
  useEffect(() => {
    getTaskDetails();
  }, []);

  const getTaskDetails = async () => {
    let result = await fetch(
      `https://jolly-puce-scarab.cyclic.app/tasks/${params.id}`
    );
    result = await result.json();
    setTask(result);
  };
  return (
    <div style={{textAlign:"center"}}>
      <h3>{task.task}</h3>
      <p>{task.details}</p>
      <Link to={"/update/"+task._id}><button>Update Task</button></Link>
    </div>
  );
};
