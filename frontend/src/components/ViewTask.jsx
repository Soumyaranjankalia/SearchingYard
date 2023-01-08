import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

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
    <div>
      <p>{task.task}</p>
      <p>{task.details}</p>
    </div>
  );
};
