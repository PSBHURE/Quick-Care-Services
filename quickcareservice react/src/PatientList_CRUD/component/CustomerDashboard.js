import React, { Component } from "react";
import { Container } from "react-bootstrap";
import PatientService from "../Services/PatientService";
import image1 from "./image/image3.jpg";
import Menu from "./Menu";
import "./myStyle.css";

class CustomerDashboard extends Component {
  render() {
    const mystyle = {
      backgroundImage: "url(bg8.jpg)",
      backgroundSize: "cover",
      height: "100%",
      color: "white",
      padding: "40px",
      Width: "40%",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
    };

    return (
      <body>
        <div style={mystyle}>
          <h5
            style={{
              fontFamily: "Georgia, 'Times New Roman', Times, serif",
              fontWeight: "bold",
              fontSize: "40px",
              textDecorationColor: "#cc6600",
              color: "black",
            }}
          >
            Find the Best Caretaker
          </h5>
          <h5
            style={{
              fontFamily: "Georgia, 'Times New Roman', Times, serif",
              fontWeight: "bold",
              fontSize: "35px",
              textDecorationColor: "#660066",
              color: "black",
            }}
          >
            “Bringing healthcare facilities within the reach of every
            individual.”
          </h5>

          <section id="slider">
            <input type="radio" name="slider" id="s1" />
            <input type="radio" name="slider" id="s2" />
            <input type="radio" name="slider" id="s3" checked />
            <input type="radio" name="slider" id="s4" />
            <input type="radio" name="slider" id="s5" />
            <label for="s1" id="slide1">
              <img src="cf1.jpg" height="100%" width="100%" />
            </label>
            <label for="s2" id="slide2">
              <img src="cf2.jpg" height="100%" width="100%" />
            </label>
            <label for="s3" id="slide3">
              <img src="cf3.jpg" height="100%" width="100%" />
            </label>
            <label for="s4" id="slide4">
              <img src="cf6.jpg" height="100%" width="100%" />
            </label>
            <label for="s5" id="slide5">
              <img src="cf5.jpg" height="100%" width="100%" />
            </label>
          </section>
        </div>
      </body>
    );
  }
}
export default CustomerDashboard;
