import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";
import PatientService from "../Services/PatientService";
import "bootstrap/dist/css/bootstrap.min.css";
import ListPatientComponent from "./ListPatientComponent";
import LoginCSS from "./login.module.css";
//import "animate.css";
import CaretakerMenu from "./CaretakerMenu";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { VscError } from "react-icons/vsc";
import { BiCheckCircle } from "react-icons/bi";

class CaretakerLogin extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      caretaker_email: "",
      caretaker_pwd: "",
      usertype: "",
      caretaker_id: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.Login = this.Login.bind(this);
  }

  handleChange(event) {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({ [name]: value });
  }

  Login() {
    let LoginDetails = {
      caretaker_email: this.state.caretaker_email,
      caretaker_pwd: this.state.caretaker_pwd,
      usertype: "caretaker",
    };

    PatientService.caretakerlogin(LoginDetails).then((res) => {
      if (
        res.data.caretaker_email == this.state.caretaker_email &&
        res.data.caretaker_pwd == this.state.caretaker_pwd &&
        res.data.usertype == "caretaker"
      ) {
        toast.success(
          <div>
            <BiCheckCircle /> Login Successfull!
          </div>,
          {
            position: "top-center",
            autoClose: 3000,
            hideProgressBar: true,
            pauseOnHover: false,
          }
        );

        setTimeout(function () {
          //window.location.replace('/Login');
        }, 3000);
        sessionStorage.setItem("caretaker_id", res.data.caretaker_id);
        sessionStorage.setItem("usertype", res.data.usertype);
        // localStorage.setItem('cust_id',res.data.caretaker_id);
        console.log("LoginComponentid:" + res.data);

        this.props.history.push("/caretaker-dashboard");
        const reloadCount = sessionStorage.getItem("reloadCount");
        if (reloadCount < 2) {
          sessionStorage.setItem("reloadCount", String(reloadCount + 1));
          window.location.reload();
        } else {
          sessionStorage.removeItem("reloadCount");
        }
      } else if (res.data.caretaker_email == "Invalid") {
        // alert("Invalid Login Credentials,Please Enter Correct EmailID and Password");
        toast.error(
          <div>
            <VscError /> Invalid Login Credentials,Please Enter Correct EmailID
            and Password
          </div>,
          {
            position: "top-center",
            hideProgressBar: false,
          }
        );
      }
    });
  }

  render() {
    const mystyle = {};

    return (
      <body className={LoginCSS.custbody}>
        <div class="container animate__animated animate__fadeInDown">
          <div class="row">
            <div class="col-md-3"></div>
            <div className={LoginCSS.mainform}>
              <div class="col-md-6">
                <h1
                  class="text-center"
                  style={{
                    fontFamily: "Georgia, 'Times New Roman', Times, serif",
                  }}
                >
                  Caretaker Login
                </h1>

                <img className={LoginCSS.loginlogo} src="usericon.png" />

                <input
                  type="email"
                  name="caretaker_email"
                  placeholder="Enter Your Email ID"
                  value={this.state.caretaker_email}
                  onChange={this.handleChange}
                  className={LoginCSS.formlogin}
                  required
                ></input>

                <input
                  type="password"
                  name="caretaker_pwd"
                  placeholder="Enter Your Password"
                  value={this.state.caretaker_pwd}
                  onChange={this.handleChange}
                  className={LoginCSS.formlogin}
                  required
                ></input>

                <button
                  type="button"
                  onClick={this.Login}
                  style={{
                    marginTop: "24px",
                    fontSize: "30px",
                    width: "600px",
                    fontfamily: "Georgia, 'Times New Roman', Times, serif'",
                    marginLeft: "100px",
                    color: "aliceblue",
                  }}
                  class="btn btn-success"
                >
                  Login
                </button>
              </div>
              <div class="col-md-3"></div>
            </div>
          </div>
        </div>
      </body>
    );
  }
}

export default CaretakerLogin;
