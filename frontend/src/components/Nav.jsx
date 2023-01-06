import React from "react";
import { Link, useNavigate } from "react-router-dom";

export const Nav = () => {
  const navigate = useNavigate();
  const auth = localStorage.getItem("user");
  const logout = () => {
    localStorage.clear();
    navigate("/register");
  };
  return (
    <div>
      <Link to="/">
        {" "}
        <img
          className="logo"
          src="https://content.jdmagicbox.com/comp/bhubaneshwar/q9/0674px674.x674.180910194006.d2q9/catalogue/searchingyard-software-pvt-ltd-bhubaneswar-bhubaneshwar-software-companies-hrakyloate-250.jpg"
          alt=""
        ></img>
      </Link>
      {auth ? (
        <ul className="nav-ul">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/add">Add Task</Link>
          </li>
          <li className="logout-btn">
            <Link onClick={logout} to="/login">
              Logout ({JSON.parse(auth).name})
            </Link>
          </li>
        </ul>
      ) : (
        <ul className="nav-ul nav-right">
          <li>
            <Link to="/register">Sign Up</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
        </ul>
      )}
    </div>
  );
};
