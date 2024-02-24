import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";

export default function Login1() {
  const [userId, setUserId] = useState("");
  const [pwd, setPwd] = useState(" ");

  const mystyle = {
    backgroundImage: "url(11.jpg)",
    backgroundSize: "cover",
    height: "100vh",
    color: "white",
    padding: "40px",
    Width: "40%",
  };
  const style1 = {
    backgroundColor: "rgba(230, 230, 230, 0.7000)",
    padding: "40px",
    borderRadius: "10px",
    color: "black",
  };
  function handleSubmit(event) {
    URL =
      "http://localhost:8080/employee/isValid?userId=" + userId + "&pwd=" + pwd;

    axios.get(URL).then(
      (res) => {
        alert(res.data);
      },
      (error) => {
        alert(error);
      }
    );
    event.preventDefault();
  }
  return (
    <body style={mystyle}>
      <div class="container" style={style1}>
        <h1> Login Form </h1>
        <form onSubmit={handleSubmit}>
          UserId :{" "}
          <input
            type="text"
            value={userId}
            onChange={(e) => setUserId(e.target.value)}
          />
          <br />
          <br />
          Password :{" "}
          <input
            type="text"
            value={pwd}
            onChange={(e) => setPwd(e.target.value)}
          />
          <br />
          <br />
          <button type="Submit"> Login </button> <br /> <br />
          <NavLink to="/Register" exact activeStyle={{ color: "magenta" }}>
            Register
          </NavLink>
        </form>
      </div>
    </body>
  );
}
