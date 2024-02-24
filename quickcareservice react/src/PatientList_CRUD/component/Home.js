import React, { Component } from "react";
import { Container } from "react-bootstrap";
import PatientService from "../Services/PatientService";
import {
  Button,
  Carousel,
  Navbar,
  NavDropdown,
  Nav,
  Form,
  FormControl,
} from "react-bootstrap";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import About from "./about";
import homecss from "./Home.module.css";

class Home extends Component {
  componentDidMount() {
    sessionStorage.clear();
    window.onload = function () {
      if (!window.location.hash) {
        window.location = window.location + "#loaded";
        window.location.reload();
      }
    };
  }

  render() {
    const mystyle = {
      backgroundImage: "url(bg7.jpg)",
      backgroundSize: "cover",
      height: "100%",
      color: "white",
      padding: "40px",
      Width: "40%",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
    };
    const style1 = {
      background: "linear-gradient(to bottom, #ffffff 0%, #ccffff 100%)",
      padding: "70px",
      borderRadius: "10px",
      color: "black",
    };

    return (
      <body style={style1}>
        <div style={mystyle}>
          <Navbar
            className="navbar navbar-expand-lg fixed-top navbar-dark justify-content-between ps-4 pe-5"
            bg="dark"
            expand="lg"
          >
            <Navbar.Brand href="/">
              &nbsp;&nbsp;&nbsp;
              <a href="/">
                <img src="QCSlogo.png" width="300px" />
              </a>
              {/* <b>QUICK CARE SERVICES</b> */}
            </Navbar.Brand>
            &nbsp;&nbsp;
            <div style={{ float: "right" }}>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <a
                  href="/customerlogin"
                  style={{ color: "white", textDecoration: "none" }}
                >
                  User Login &nbsp;|
                </a>
                &nbsp;&nbsp;{" "}
                <a
                  href="/caretakerlogin"
                  style={{ color: "white", textDecoration: "none" }}
                >
                  Caretaker Login
                </a>
              </Navbar.Collapse>
            </div>
          </Navbar>

          <div
            className="animate__animated animate__fadeInDown"
            style={{ marginTop: "100px" }}
          >
            <h5
              className="display-4"
              style={{ textAlign: "center" }}
              style={{
                color: "black",
                fontWeight: "bold",
                fontFamily: "Georgia, 'Times New Roman', Times, serif",
                fontSize: "50px",
              }}
            >
              Let's Get Started! Please Tell Us Why you Are here
            </h5>
          </div>

          <div>
            <div className={homecss.wrapper}>
              <h5
                style={{
                  fontSize: "35px",
                  fontWeight: "bold",
                  marginRight: "40px",
                  marginLeft: "-120px",
                  color: "black",
                }}
              >
                Appointment For Patients
              </h5>
              <div className={homecss.card}>
                <img src="caree1.jpg" />
                <div className={homecss.info}>
                  <h1>Appointment For Patients</h1>
                  <p class="card-text" style={{ fontSize: "25px" }}>
                    Search for Caretaker Who suits your needs.We will help you
                    to find best Caretaker
                  </p>
                  <button
                    className="btn btn-outline-warning btn-rounded waves-effect"
                    style={{ fontSize: "25px", fontWeight: "bold" }}
                  >
                    <Link
                      to={"/CustomerRegister"}
                      class="text-dark"
                      style={{ textDecoration: "none" }}
                    >
                      Appointments for Patients
                    </Link>
                  </button>
                </div>
              </div>

              <h5
                style={{
                  fontSize: "35px",
                  fontWeight: "bold",
                  marginLeft: "150px",
                  marginRight: "40px",
                  color: "black",
                }}
              >
                Join Us As a Caretaker
              </h5>

              <div className={homecss.card}>
                <img src="caree2.jpg" />
                <div className={homecss.info}>
                  <h1>Join Us as a Caretaker</h1>
                  <p class="card-text" style={{ fontSize: "25px" }}>
                    Get your Appointment Scheduling platform.Your patient can
                    book appointment online.
                  </p>
                  <button
                    className="btn btn-outline-warning btn-rounded waves-effect"
                    style={{ fontSize: "25px", fontWeight: "bold" }}
                  >
                    <Link
                      to={"/CaretakerRegistration"}
                      class="text-dark"
                      style={{ textDecoration: "none" }}
                    >
                      Join Us As a Caretaker
                    </Link>
                  </button>
                </div>
              </div>
            </div>

            <div style={{ marginTop: "100px" }}>
              <h5
                style={{
                  color: "white",
                  fontWeight: "bold",
                  fontSize: "50px",
                  color: "black",
                }}
              >
                What We Provide?
              </h5>
            </div>

            <div
              style={{
                width: "2000px",
                marginLeft: "10px",
                marginTop: "90px",
              }}
            >
              <Carousel>
                <Carousel.Item interval={2000}>
                  <img
                    height="800px"
                    margin="auto"
                    className="d-block w-100"
                    src="care1.jpg"
                    alt="1st slide"
                  />
                  <Carousel.Caption>
                    <h5
                      style={{
                        fontSize: "35px",
                        fontWeight: "bold",
                        color: "black",
                      }}
                    >
                      Elderly Caretaker
                    </h5>
                  </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item interval={2000}>
                  <img
                    height="800px"
                    margin="auto"
                    className="d-block w-100"
                    src="caree9.jpg"
                    alt="2nd slide"
                  />
                  <Carousel.Caption>
                    <h5
                      style={{
                        fontSize: "35px",
                        fontWeight: "bold",
                        color: "black",
                      }}
                    >
                      Physiotherapist{" "}
                    </h5>
                  </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item interval={2000}>
                  <img
                    height="800px"
                    margin="auto"
                    className="d-block w-100"
                    src="caree8.jpg"
                    alt="3rd slide"
                  />
                  <Carousel.Caption>
                    <h5
                      style={{
                        fontSize: "35px",
                        fontWeight: "bold",
                        color: "black",
                      }}
                    >
                      Nanny
                    </h5>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={2000}>
                  <img
                    height="800px"
                    margin="auto"
                    className="d-block w-100"
                    src="babysitter.jpg"
                    alt="3rd slide"
                  />
                  <Carousel.Caption>
                    <h5
                      style={{
                        fontSize: "35px",
                        fontWeight: "bold",
                        color: "black",
                      }}
                    >
                      Baby Sitter
                    </h5>
                  </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item interval={2000}>
                  <img
                    height="800px"
                    margin="auto"
                    className="d-block w-100"
                    src="nurse.jpg"
                    alt="3rd slide"
                  />
                  <Carousel.Caption>
                    <h5
                      style={{
                        fontSize: "35px",
                        fontWeight: "bold",
                        color: "black",
                      }}
                    >
                      NURSE
                    </h5>
                  </Carousel.Caption>
                </Carousel.Item>
              </Carousel>
            </div>
            <br />

            <div>
              <h5
                style={{
                  fontSize: "60px",
                  fontweight: "bold",
                  marginTop: "20px",
                  bottomBorder: "red",
                  color: "black",
                }}
              >
                <u>About Us</u>
              </h5>
            </div>

            <div
              className="animate__animated animate__fadeInDown"
              style={{ marginTop: "100px" }}
            >
              <About />
            </div>
          </div>
        </div>
      </body>
    );
  }
}
export default Home;
