import React, { Component } from "react";
import { Container } from "react-bootstrap";
//import EmployeeService from '../Services/EmployeeService';
//import "animate.css";
import PatientService from "../Services/PatientService";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { BiCheckCircle } from "react-icons/bi";
//<script src="component/jquery-3.4.0.js"></script>;
import $ from "jquery";

class StatusPatientList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      patients: [],
      isToggleOn: false,
      status: false,
      visibility: "",
    };

    this.changeStatus = this.changeStatus.bind(this);
    this.accept = this.accept.bind(this);
    this.reject = this.reject.bind(this);
  }

  changeStatus() {
    this.setState({ isToggleOn: false });
    this.setState({ status: false });
  }

  componentDidMount() {
    console.log("status is: ", this.state.patients.status);
    PatientService.getPatientstatus(
      sessionStorage.getItem("caretaker_id")
    ).then((res) => {
      this.setState({ patients: res.data });
      console.log("patient object:: ", this.state.patients[0].status);
    });
  }

  accept(id) {
    // this.props.history.push(`/viewRequest/${id}`);

    PatientService.AcceptedStatus(id);
    this.state.patients.status = "Rejected";
    console.log("ListComponentid:" + id);
    this.setState((state) => ({
      isToggleOn: !state.isToggleOn,
      visibility: "Accepted",
    }));
    this.setState({ status: true });

    toast.success(
      <div>
        <BiCheckCircle />
        Accepted Request Successfully!!
      </div>,
      {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: true,
        pauseOnHover: false,
      }
    );

    setTimeout(function () {}, 3000);
  }

  reject(id) {
    PatientService.Rejectedstatus(id);
    this.state.patients.status = "Rejected";
    this.setState((state) => ({
      isToggleOn: !state.isToggleOn,
      visibility: "Rejected",
    }));
    this.setState({ status: true });
    toast.success(
      <div>
        <BiCheckCircle /> You've Successfully Rejected the Request!!
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

    this.props.history.push(`/Reason-Of-Rejection/${id}`);
  }

  render() {
    const mystyle = {
      backgroundImage: "url(phbg.jpg)",
      backgroundSize: "cover",
      height: "100vh",
      color: "white",
      padding: "40px",
      Width: "40%",
    };

    console.log("visibility:", this.state.visibility);

    return (
      <div style={mystyle}>
        <h2
          className="text-center"
          style={{
            color: "white",
            fontfamily: "Georgia, 'Times New Roman', Times, serif",
            fontSize: "40px",
            textAlign: "bottom",
            background: "linear-gradient(to bottom, #ff9966 0%, #cc0066 100%)",
            width: "1200px",
            height: "70px",
            fontWeight: "bold",
            fontFamily: "revert",
            marginLeft: "500px",
            borderRadius: "50px",
          }}
        >
          PATIENT REQUESTED STATUS
        </h2>

        <div className="row" style={{ marginTop: "30px" }}>
          <table className="table table-striped table-dark animate__animated animate__fadeInDown">
            <thead>
              <tr>
                <th
                  style={{
                    color: "#ffcc99",
                    fontWeight: "bold",
                    background:
                      "linear-gradient(to bottom, #660066 0%, #660033 100%)",
                    fontFamily: "sans-serif",
                    fontSize: "27px",
                  }}
                >
                  Patient ID
                </th>
                <th
                  style={{
                    color: "#ffcc99",
                    textAlign: "center",
                    background:
                      "linear-gradient(to bottom, #660066 0%, #660033 100%)",
                    fontWeight: "bold",
                    fontFamily: "sans-serif",
                    fontSize: "27px",
                  }}
                >
                  {" "}
                  Name
                </th>
                <th
                  style={{
                    color: "#ffcc99",
                    textAlign: "center",
                    background:
                      "linear-gradient(to bottom, #660066 0%, #660033 100%)",
                    fontFamily: "sans-serif",
                    fontSize: "27px",
                  }}
                >
                  Location
                </th>
                <th
                  style={{
                    color: "#ffcc99",
                    textAlign: "center",
                    background:
                      "linear-gradient(to bottom, #660066 0%, #660033 100%)",
                    fontFamily: "sans-serif",
                    fontSize: "27px",
                  }}
                >
                  FromDate
                </th>
                <th
                  style={{
                    color: "#ffcc99",
                    textAlign: "center",
                    background:
                      "linear-gradient(to bottom, #660066 0%, #660033 100%)",
                    fontFamily: "sans-serif",
                    fontSize: "27px",
                  }}
                >
                  ToDate
                </th>
                <th
                  style={{
                    color: "#ffcc99",
                    textAlign: "center",
                    background:
                      "linear-gradient(to bottom, #660066 0%, #660033 100%)",
                    fontFamily: "sans-serif",
                    fontSize: "27px",
                  }}
                >
                  Caretype
                </th>
                <th
                  style={{
                    color: "#ffcc99",
                    textAlign: "center",
                    background:
                      "linear-gradient(to bottom, #660066 0%, #660033 100%)",
                    fontFamily: "sans-serif",
                    fontSize: "27px",
                  }}
                >
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {this.state.patients.map((patient) => (
                <tr key={patient.patient_id}>
                  <td
                    style={{
                      color: "white",
                      fontWeight: "bold",
                      fontFamily: "sans-serif",
                      fontSize: "25px",
                    }}
                  >
                    {patient.patient_id}
                  </td>
                  <td
                    style={{
                      color: "white",
                      fontWeight: "bold",
                      fontFamily: "sans-serif",
                      fontSize: "25px",
                    }}
                  >
                    {patient.patient_name}
                  </td>
                  <td
                    style={{
                      color: "white",
                      fontWeight: "bold",
                      fontFamily: "sans-serif",
                      fontSize: "25px",
                    }}
                  >
                    {patient.patient_location}
                  </td>
                  <td
                    style={{
                      color: "white",
                      fontWeight: "bold",
                      fontFamily: "sans-serif",
                      fontSize: "25px",
                    }}
                  >
                    {patient.from_date}
                  </td>
                  <td
                    style={{
                      color: "white",
                      fontWeight: "bold",
                      fontFamily: "sans-serif",
                      fontSize: "25px",
                    }}
                  >
                    {patient.to_date}
                  </td>
                  <td
                    style={{
                      color: "white",
                      fontWeight: "bold",
                      fontFamily: "sans-serif",
                      fontSize: "25px",
                    }}
                  >
                    {patient.caretype}
                  </td>
                  <td
                    style={{
                      color: "white",
                      fontWeight: "bold",
                      fontFamily: "sans-serif",
                      fontSize: "25px",
                    }}
                  >
                    {/* <td><button onClick={() => this.accept(patient.patient_id)} className="btn btn-success" style={{ marginLeft: "40px", fontSize: '25px', fontFamily: 'sans-serif', width: '150px', height: '60px', borderRadius: '50%' }}>
                                                    {this.state.isToggleOn ? "Accepted" : "View Request"}</button>

                                                </td> */}

                    <td>
                      {this.state.status || patient.status != "Pending" ? (
                        patient.status
                      ) : (
                        <>
                          <button
                            id="acceptbtn"
                            onClick={() => this.accept(patient.patient_id)}
                            className="btn btn-success"
                            style={{
                              marginLeft: "40px",
                              fontSize: "25px",
                              fontFamily: "sans-serif",
                              width: "150px",
                              height: "60px",
                              borderRadius: "50%",
                            }}
                          >
                            Accept
                            {/* {this.state.isToggleOn ? "Accepted" : "Accept"} */}
                          </button>
                          <button
                            id="rejectbtn"
                            onClick={() => this.reject(patient.patient_id)}
                            className="btn btn-danger"
                            style={{
                              marginLeft: "40px",
                              fontSize: "25px",
                              fontFamily: "sans-serif",
                              width: "150px",
                              height: "60px",
                              borderRadius: "50%",
                            }}
                          >
                            Reject
                            {/* {this.state.isToggleOn ? "Rejected" : "Reject"} */}
                          </button>
                        </>
                      )}
                      {/* </td>

                    <td> */}
                      {/* {this.state.status ? (
                        this.state.visibility
                      ) : ( */}

                      {/* )} */}
                    </td>
                    {/* <td><button onClick={() => this.reject(patient.patient_id)} className="btn btn-danger" style={{ marginLeft: "40px", fontSize: '25px', fontFamily: 'sans-serif', width: '150px', height: '60px', borderRadius: '50%' }}>Reject</button> </td> */}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}
export default StatusPatientList;
