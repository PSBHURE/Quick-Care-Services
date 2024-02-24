import axios from "axios";
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import LoginModelClass from "./Model_Classes/LoginModelClass";

export default function Register() {
  const [userId, setUserId] = useState("");
  const [pwd, setPwd] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const mystyle = {
    backgroundImage: "url(st4.jpg)",
    backgroundSize: "cover",
    height: "100vh",
    padding: "5px",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  };
  const style1 = {
    backgroundColor: "rgba(230, 230, 230, 0.7000)",
    padding: "40px",
    borderRadius: "10px",
    color: "black",
  };
  function handleSubmit(event) {
    //alert ("given data :" + UserId + " Password :"+password + " Confirm Password "+ confirmPassword);

    //alert (UserId + " " +password)
    if (pwd === confirmPassword) {
      let LoginObj = new LoginModelClass(userId, pwd);
      //alert (LoginObj)
      console.log(LoginObj);

      URL = "http://localhost:8080/employee/Register";

      axios.post(URL, LoginObj).then(
        (res) => {
          alert(res.data);
        },
        (error) => {
          alert(error);
        }
      );
    } else
      alert(
        "User not Registered. reason is: Password and Confirm password is not same..."
      );

    event.preventDefault();
  }
  return (
    <div style={mystyle}>
      <div class="container" style={style1}>
        <h1>Register Form</h1>
        <form onSubmit={handleSubmit}>
          User ID :{" "}
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
          Confirm Password :{" "}
          <input
            type="text"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <br />
          <br />
          <button type="Submit"> Register </button> <br /> <br />
          <NavLink to="/Login" exact activeStyle={{ color: "megenta" }}>
            Login
          </NavLink>
        </form>
      </div>
    </div>
  );
}
