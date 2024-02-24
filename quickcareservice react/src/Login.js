import React, { useState } from "react";
//Two Variable UserId and password is declared and it is set to initial value, setUserId and setPassword
//is automatically called with to set the values.
//handleSubmit is called when submit button is clixked.
//Login form is created. Initial values are set with the userId and password and whenever there is change in
//each edit box, corresponding variable is set with the value.
//in handleSubmit, value of userId and password is printed.

export default function Login() {
  const [EmailId, setEmailId] = useState("");
  const [password, setPassword] = useState(" ");

  function handleSubmit(event) {
    alert("Given Data :" + EmailId + " Password :" + password);
    event.preventDefault(); //prevents refreshing the screen.. Uncomment this line and check it.
  }
  return (
    <div>
      <h1>Login Form</h1>
      <form onSubmit={handleSubmit}>
        Email ID :{" "}
        <input
          type="text"
          value={EmailId}
          onChange={(e) => setEmailId(e.target.value)}
        />
        <br />
        <br />
        Password :{" "}
        <input
          type="text"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <br />
        <button type="Submit">Login</button>
      </form>
    </div>
  );
}
