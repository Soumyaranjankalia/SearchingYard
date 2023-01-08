import React from "react";
import { Route, Routes } from "react-router-dom";
import { AddTask } from "./AddTask";
import { Login } from "./Login";
import { PrivateComponent } from "./PrivateComponent";
import { TaskList } from "./TaskList";
import { SignUp } from "./SignUp";
import { UpdateTask } from "./UpdateTask";
import { ViewTask } from "./ViewTask";

export const AllRoute = () => {
  const auth = localStorage.getItem("user");
  return (
    <>
      <Routes>
        <Route element={<PrivateComponent />}>
          <Route path="/" element={<TaskList />} />
          <Route path="/add" element={<AddTask />} />
          <Route path="/update/:id" element={<UpdateTask />} />
          <Route path="/view/:id" element={<ViewTask />} />
        </Route>
      </Routes>
      <Routes>
        <Route path="/register" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
};
