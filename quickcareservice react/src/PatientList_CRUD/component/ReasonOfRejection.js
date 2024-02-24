import React, { Component } from "react";
//import { render } from 'react-dom/cjs/react-dom.development';
import { render } from "react-dom";
//import EmployeeService from '../Services/EmployeeService
import PatientService from "../Services/PatientService";
import View from "./viewpatient.module.css";
//import "animate.css";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { BiCheckCircle } from "react-icons/bi";

class ReasonOfRejection extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: this.props.match.params.id,

      cust_id: 1,
      patient_name: "",
      patient_gender: "",
      patient_age: "",
      patient_location: "",
      service_hours: "",
      from_date: "",
      to_date: "",
      care_type: "",
      caretaker_id: 1,
      status: "",
      reason_ofrejection: "",
    };
    this.changeReasonHandler = this.changeReasonHandler.bind(this);

    this.saveOrUpdateEmployee = this.saveOrUpdateEmployee.bind(this);
    this.cancel = this.cancel.bind(this);
  }

  componentDidMount() {
    if (this.state.id === "/Reason-Of-Rejection") {
      return;
    }
  }
  saveOrUpdateEmployee(event) {
    let patient = { reason_ofrejection: this.state.reason_ofrejection };
    console.log("patient => " + JSON.stringify(patient));

    PatientService.updateReason(this.state.id, patient).then((res) => {
      console.log(res.data);
      toast.success(
        <div>
          <BiCheckCircle />
          Reason of Rejection Recorded!!
        </div>,
        {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: true,
          pauseOnHover: false,
        }
      );

      setTimeout(function () {
        //window.location.replace('/caretakerlogin');
      }, 3000);
      this.props.history.push("/patient-status");
    });

    event.preventDefault();
  }
  changeReasonHandler(event) {
    this.setState({ reason_ofrejection: event.target.value });
  }

  cancel() {
    this.props.history.push("/patient-status");
  }

  render() {
    const mystyle = {
      backgroundImage: "url(viewbg2.jpg)",
      backgroundSize: "cover",
      // background: "linear-gradient(to bottom, #993399 0%, #cc6699 100%)",
      height: "100vh",
      color: "white",
      padding: "40px",
      Width: "40%",
    };
    const style1 = {
      backgroundColor: "rgb(204, 102, 153)",
      padding: "40px",
      // Width:"90%",
      width: "1000px",
      borderRadius: "10px",
      marginLeft: "200px",
      color: "black",
    };
    return (
      <body className={View.bgimg}>
        <div style={mystyle}>
          <br />
          <br />
          <h5
            style={{
              fontSize: "30px",
              color: "black",
              fontWeight: "bold",
              marginBottom: "30px",
            }}
          >
            Please Enter Your Reason Of Rejection
          </h5>
          <div className="container">
            <div className="row">
              <div
                className="card col-md-6 offset-md-3 offset-md-3 animate__animated animate__fadeInDown"
                style={style1}
              >
                <div className="card-body">
                  <form>
                    <div className="form-group">
                      <label
                        style={{
                          fontFamily: "revert",
                          fontSize: "30px",
                          fontWeight: "bold",
                          marginBottom: "20px",
                        }}
                      >
                        Reason of Rejection
                      </label>
                      <input
                        style={{
                          fontFamily: "revert",
                          fontSize: "20px",
                          marginBottom: "20px",
                        }}
                        placeholder="Enter Reason of Rejection"
                        name="reason_ofrejection"
                        className="form-control"
                        value={this.state.reason_ofrejection}
                        onChange={this.changeReasonHandler}
                        required
                      />
                    </div>

                    <button
                      className="btn btn-success"
                      onClick={this.saveOrUpdateEmployee}
                      style={{
                        marginLeft: "40px",
                        fontSize: "25px",
                        fontFamily: "sans-serif",
                        width: "150px",
                        height: "60px",
                        borderRadius: "20px",
                        marginTop: "30px",
                      }}
                    >
                      Save
                    </button>
                    <button
                      className="btn btn-danger"
                      onClick={this.cancel}
                      style={{
                        marginLeft: "40px",
                        fontSize: "25px",
                        fontFamily: "sans-serif",
                        width: "150px",
                        height: "60px",
                        borderRadius: "20px",
                        marginTop: "30px",
                      }}
                    >
                      Cancel
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </body>
    );
  }
}
export default ReasonOfRejection;
