import React, { Component } from "react";
import { Container } from "react-bootstrap";
import PatientService from "../Services/PatientService";

class PatientHistoryComponent extends Component {
  constructor(props) {
    super(props);
    this.state = { patient_id: 1 };
    this.state = { patientshistory: [] };
  }

  componentDidMount() {
    //let patient_id = {patient_id:101};
    //console.log('patient_id => ' + JSON.stringify(patient_id));

    PatientService.getPatientHistory(
      sessionStorage.getItem("caretaker_id")
    ).then((res) => {
      console.log("PatientHistoryComponent::::" + this.state.patient_id);

      this.setState({ patientshistory: res.data });
    });
  }

  render() {
    const mystyle = {
      backgroundImage: "url(phbg1.jpg)",
      // background: "linear-gradient(to bottom, #ff66cc 0%, #ffcccc 100%)",
      backgroundSize: "cover",
      height: "100vh",
      color: "white",
      padding: "40px",
      Width: "40%",
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
            background: "linear-gradient(to bottom, #ff9966 0%, #cc0066 100%)",
            width: "1200px",
            height: "70px",
            fontWeight: "bold",
            fontFamily: "revert",
            marginLeft: "500px",
            borderRadius: "50px",
          }}
        >
          PATIENT HISTORY
        </h2>

        <div className="row">
          <table
            className="table table-striped table-dark   animate__animated animate__fadeInDown"
            style={{ marginTop: "30px" }}
          >
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
                  Status
                </th>
              </tr>
            </thead>
            <tbody>
              {this.state.patientshistory.map((patient) => (
                <tr key={patient.patient_id}>
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
                    {patient.status}
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
export default PatientHistoryComponent;
