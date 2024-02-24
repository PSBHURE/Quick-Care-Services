import React, { Component } from "react";
import { Container } from "react-bootstrap";
import PatientService from "../Services/PatientService";
import image1 from "./image/image3.jpg";
import "./myStyle.css";
import CaretakerMenu from "./CaretakerMenu";

class CaretakerDashboard extends Component {
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
        <div>
          <div style={mystyle}>
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
        </div>
      </body>
    );
  }
}
export default CaretakerDashboard;
