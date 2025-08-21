import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";
import PatientService from "../Services/PatientService";
import "bootstrap/dist/css/bootstrap.min.css";
import ListPatientComponent from "./ListPatientComponent";
//import "animate.css";
import LoginCSS from "./login.module.css";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { VscError } from "react-icons/vsc";
import { BiCheckCircle } from "react-icons/bi";

class CustomerLogin extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      cust_email: "",
      cust_pwd: "",
      usertype: "",
      cust_id: "",
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
      cust_email: this.state.cust_email,
      cust_pwd: this.state.cust_pwd,
      usertype: "customer",
    };

    PatientService.customerlogin(LoginDetails).then((res) => {
      if (
        res.data.cust_email == this.state.cust_email &&
        res.data.cust_pwd == this.state.cust_pwd &&
        res.data.usertype == "customer"
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
          // window.location.replace('/Login');
        }, 3000);
        sessionStorage.setItem("cust_id", res.data.cust_id);
        sessionStorage.setItem("usertype", res.data.usertype);
        console.log("LoginComponentid:" + res.data.cust_name);

        //this.props.history.push(`/dashboard/${this.state.cust_email}`);
        this.props.history.push("/dashboard");
        const reloadCount = sessionStorage.getItem("reloadCount");
        if (reloadCount < 2) {
          sessionStorage.setItem("reloadCount", String(reloadCount + 1));
          window.location.reload();
        } else {
          sessionStorage.removeItem("reloadCount");
        }
      } else if (res.data.cust_email == "Invalid") {
        toast.error(
          <div>
            <VscError /> Invalid Login Credentials,Please Enter Correct EmailID
            or Password
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
    return (
      <body className={LoginCSS.custbody}>
        <div class="container  animate__animated animate__fadeInDown ">
          <div class="row">
            <div class="col-md-3"></div>

            <div className={LoginCSS.mainform}>
              <form>
                <div class="col-md-6">
                  <h1
                    class="text-center"
                    style={{
                      fontFamily: "Georgia, 'Times New Roman', Times, serif",
                    }}
                  >
                    User Login
                  </h1>

                  <img className={LoginCSS.loginlogo} src="usericon.png" />

                  <input
                    type="email"
                    name="cust_email"
                    placeholder="Enter Your Email ID"
                    required
                    value={this.state.cust_email}
                    onChange={this.handleChange}
                    className={LoginCSS.formlogin}
                    
                  ></input>

                  <input
                    type="password"
                    name="cust_pwd"
                    placeholder="Enter Your Password"
                    required
                    value={this.state.cust_pwd}
                    onChange={this.handleChange}
                    className={LoginCSS.formlogin}
                    
                  ></input>

                  <button
                    type="button"
                    onClick={this.Login}
                    style={{
                      marginTop: "24px",
                      fontSize: "30px",
                      width: "600px",
                      fontfamily: "Georgia, 'Times New Roman', Times, serif'",
                      marginLeft: "50px",
                      color: "aliceblue",
                      align: "center",
                    }}
                    class="btn btn-success"
                  >
                    Login
                  </button>
                </div>
              </form>
            </div>
            <div class="col-md-3"></div>
          </div>
        </div>
      </body>
    );
  }
}

export default CustomerLogin;
