import React, { Component } from "react";
import PatientService from "../Services/PatientService";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import { MDBTable, MDBTableBody, MDBTableHead } from "mdbreact";
//import "animate.css";
import CaretakerCss from "./caretakerlist.module.css";

class CaretakerList extends Component {
  constructor(props) {
    super(props);

    this.state = { employees: [] };
  }
  componentDidMount() {
    //    PatientService.getCaretakerList().then((res =>{
    //        this.setState ({employees:res.data});
    //    }));
    PatientService.getCaretakerListid(sessionStorage.getItem("cust_id")).then(
      (res) => {
        this.setState({ employees: res.data });
      }
    );
  }
  render() {
    const mystyle = {
      backgroundImage: "url(carebg.jpg)",
      backgroundPosition: "center",
      backgroundSize: "cover",
      height: "100vh",
      color: "white",
      padding: "40px",
      Width: "1000%",
    };
    return (
      <body className={CaretakerCss.bgimg}>
        <div style={{ mystyle }}>
          <h1
            class="display-4"
            style={{
              color: "white",
              fontfamily: "Georgia, 'Times New Roman', Times, serif",
              fontSize: "40px",
              textAlign: "bottom",
              background:
                "linear-gradient(to bottom, #660033 0%, #cc6600 100%)",
              width: "1200px",
              height: "70px",
              fontWeight: "bold",
              fontFamily: "revert",
              marginLeft: "500px",
              marginTop: "10px",
              borderRadius: "50px",
            }}
          >
            CARETAKER LIST
          </h1>
          <br /> <br />
          <div className="row">
            <MDBTable scrollY maxHeight="500px">
              <table className="table table-striped table-dark table-bordered animate__animated animate__fadeInDown">
                <thead className="thead-dark">
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
                      Patient Name
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
                      Caretaker Name
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
                      Caretaker Location
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
                      Patient Service Type
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
                      Status
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
                      Reason
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {this.state.employees.map((employee) => (
                    <tr key={employee.patient_id}>
                      <td
                        style={{
                          color: "white",
                          fontWeight: "bold",
                          fontFamily: "sans-serif",
                          fontSize: "25px",
                        }}
                      >
                        {employee.patient_name}
                      </td>
                      <td
                        style={{
                          color: "white",
                          fontWeight: "bold",
                          fontFamily: "sans-serif",
                          fontSize: "25px",
                        }}
                      >
                        {employee.caretaker_name}
                      </td>
                      <td
                        style={{
                          color: "white",
                          fontWeight: "bold",
                          fontFamily: "sans-serif",
                          fontSize: "25px",
                        }}
                      >
                        {employee.caretaker_location}
                      </td>
                      <td
                        style={{
                          color: "white",
                          fontWeight: "bold",
                          fontFamily: "sans-serif",
                          fontSize: "25px",
                        }}
                      >
                        {employee.caretype}
                      </td>
                      <td
                        style={{
                          color: "white",
                          fontWeight: "bold",
                          fontFamily: "sans-serif",
                          fontSize: "25px",
                        }}
                      >
                        {employee.status}
                      </td>

                      <td
                        style={{
                          color: "white",
                          fontWeight: "bold",
                          fontFamily: "sans-serif",
                          fontSize: "25px",
                        }}
                      >
                        {employee.reason_ofrejection}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </MDBTable>
          </div>
        </div>
      </body>
    );
  }
}
export default CaretakerList;
