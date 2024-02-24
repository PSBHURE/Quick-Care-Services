import React, { Component } from "react";
import { Container } from "react-bootstrap";
import { MDBTable, MDBTableBody, MDBTableHead } from "mdbreact";
//import "animate.css";
import PatientService from "../Services/PatientService";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { VscError } from "react-icons/vsc";
import { BiCheckCircle } from "react-icons/bi";

class ListPatientComponent extends Component {
  constructor(props) {
    super(props);

    this.state = { patients: [] };

    this.addPatient = this.addPatient.bind(this);
    this.editPatient = this.editPatient.bind(this);
    this.deletePatient = this.deletePatient.bind(this);
    this.viewPatient = this.viewPatient.bind(this);
  }
  deletePatient(patient_id) {
    PatientService.deletePatient(patient_id).then((res) => {
      this.setState({
        patients: this.state.patients.filter(
          (patient) => patient.patient_id !== patient_id
        ),
      });
      toast.success(
        <div>
          <BiCheckCircle />
          Patient Deleted Successfully!!
        </div>,
        {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: true,
          pauseOnHover: false,
        }
      );

      setTimeout(function () {}, 3000);
    });
  }
  viewPatient(patient_id) {
    console.log("ListCompoenent-View" + patient_id);
    this.props.history.push(`/view-patient/${patient_id}`);
  }
  editPatient(patient_id) {
    console.log("ListComponentid:" + patient_id);
    this.props.history.push(`/update-patient/${patient_id}`);
  }
  componentDidMount() {
    PatientService.getPatients(sessionStorage.getItem("cust_id")).then(
      (res) => {
        console.log("PatientList :" + sessionStorage.getItem("cust_id"));
        this.setState({ patients: res.data });
      }
    );
  }
  addPatient() {
    this.props.history.push("/add-patient/_add");
  }
  render() {
    const mystyle = {
      backgroundImage: "url(bg2.jpg)",
      backgroundPosition: "center",
      backgroundSize: "cover",
      height: "130vh",
      color: "white",
      padding: "40px",
      Width: "300%",
    };

    return (
      <div style={mystyle}>
        <h2
          className="text-center"
          style={{
            color: "white",
            fontfamily: "Georgia, 'Times New Roman', Times, serif",
            fontSize: "40px",
            textAlign: "bottom",
            background: "linear-gradient(to bottom, #ff9966 0%, #ff6699 100%)",
            width: "1200px",
            height: "70px",
            fontWeight: "bold",
            fontFamily: "revert",
            marginLeft: "500px",
            borderRadius: "50px",
          }}
        >
          PATIENT LIST
        </h2>
        <div className="row"></div>
        <br></br>

        <div className="row">
          <MDBTable scrollY maxHeight="700px">
            <table className="table table-striped table-dark animate__animated animate__fadeInDown">
              <thead>
                <tr>
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
                      fontWeight: "bold",
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
                      fontWeight: "bold",
                      fontFamily: "sans-serif",
                      fontSize: "27px",
                    }}
                  >
                    Frome Date
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
                    To Date
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
                    Caretype
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
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                {this.state.patients.map((patient) => (
                  <tr key={patient.patient_id}>
                    <td>{patient.patient_id}</td>
                    <td>{patient.patient_name}</td>
                    <td>{patient.patient_location}</td>
                    <td>{patient.from_date}</td>
                    <td>{patient.to_date}</td>
                    <td>{patient.caretype}</td>
                    <td>
                      <td>
                        <button
                          onClick={() => this.viewPatient(patient.patient_id)}
                          className="btn btn-outline-warning"
                          style={{
                            marginLeft: "40px",
                            fontSize: "25px",
                            fontFamily: "sans-serif",
                            width: "150px",
                            height: "60px",
                            borderRadius: "20px",
                          }}
                        >
                          View{" "}
                        </button>{" "}
                      </td>
                      <td>
                        <button
                          onClick={() => this.editPatient(patient.patient_id)}
                          className="btn btn-outline-success"
                          style={{
                            marginLeft: "40px",
                            fontSize: "25px",
                            fontFamily: "sans-serif",
                            width: "150px",
                            height: "60px",
                            borderRadius: "20px",
                          }}
                        >
                          Update{" "}
                        </button>{" "}
                      </td>
                      <td>
                        <button
                          style={{
                            marginLeft: "40px",
                            fontSize: "25px",
                            fontFamily: "sans-serif",
                            width: "150px",
                            height: "60px",
                            borderRadius: "20px",
                          }}
                          onClick={() => this.deletePatient(patient.patient_id)}
                          className="btn btn-outline-danger"
                        >
                          Delete{" "}
                        </button>
                      </td>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </MDBTable>
        </div>
      </div>
    );
  }
}
export default ListPatientComponent;
