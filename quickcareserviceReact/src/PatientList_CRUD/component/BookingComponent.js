import React, { Component } from "react";
import PatientService from "../Services/PatientService";
//import "animate.css";
import { MDBTable, MDBTableBody, MDBTableHead } from "mdbreact";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

class BookingComponent extends Component {
  constructor(props) {
    super(props);

    this.state = { employees: [] };
    this.viewCaretaker = this.viewCaretaker.bind(this);
  }
  viewCaretaker(id) {
    this.props.history.push(`/view-caretaker/${id}`);
  }
  componentDidMount() {
    PatientService.getBookCaretakerList().then((res) => {
      this.setState({ employees: res.data });
    });
  }

  render() {
    const mystyle = {
      backgroundImage: "url(bookbg.jpg)",
      backgroundPosition: "center",
      backgroundSize: "cover",
      height: "100vh",
      color: "white",
      padding: "40px",
      Width: "1000%",
    };
    return (
      <div style={mystyle}>
        <h1
          class="display-4"
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
            marginTop: "10px",
            borderRadius: "50px",
          }}
        >
          Booking Caretaker
        </h1>
        <br /> <br />
        <div className="row">
          <MDBTable scrollY maxHeight="500px">
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
                    {" "}
                    Caretaker ID
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
                    Service Type
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
                {this.state.employees.map((employee) => (
                  <tr key={employee.caretaker_id}>
                    <td
                      style={{
                        color: "white",
                        fontWeight: "bold",
                        fontFamily: "sans-serif",
                        fontSize: "25px",
                      }}
                    >
                      {employee.caretaker_id}
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
                      {employee.caretaker_profile}
                    </td>
                    <td>
                      <button
                        onClick={() =>
                          this.viewCaretaker(employee.caretaker_id)
                        }
                        className="btn btn-outline-warning btn-rounded waves-effect"
                        style={{
                          marginLeft: "40px",
                          fontSize: "25px",
                          fontFamily: "sans-serif",
                          width: "150px",
                          height: "60px",
                          borderRadius: "20px",
                        }}
                      >
                        <i className="fas fa-car pr-2" aria-hidden="true"></i>
                        View{" "}
                      </button>{" "}
                      &nbsp;&nbsp;
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
export default BookingComponent;
