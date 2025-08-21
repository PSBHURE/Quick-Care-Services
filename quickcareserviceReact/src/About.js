import React from "react";
class About extends React.Component {
  render() {
    const mystyle = {
      backgroundImage: "url(fo2.jpg)",
      backgroundSize: "cover",
      height: "100vh",
      padding: "5px",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
    };
    return (
      <div style={mystyle} align="center">
        <h1>This is About Page</h1>
        <h2>I Live in Nagpur, Maharashtra</h2>
      </div>
    );
  }
}
export default About;
