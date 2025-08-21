import React from "react";
class Contact extends React.Component {
  render() {
    const mystyle = {
      backgroundImage: "url(st3.jpg)",
      backgroundSize: "cover",
      height: "100vh",
      padding: "5px",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
    };

    return (
      <div style={mystyle} align="center">
        <h1>This is Contact Page</h1>
        <h2>Contact : Khamla, Nagpur</h2>
      </div>
    );
  }
}
export default Contact;
