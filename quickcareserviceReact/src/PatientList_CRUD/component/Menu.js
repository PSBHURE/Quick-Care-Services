import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Routes,
} from "react-router-dom";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import "./navBar.css";
import ListPatientComponent from "./ListPatientComponent";
import CreatePatientComponent from "./CreatePatientComponent";
import ViewPatientComponent from "./ViewPatientComponent";
import BookingComponent from "./BookingComponent";
import ViewBookingComponent from "./ViewBookingComponent";
import CaretakerList from "./CaretakerList";
import CaretakerDashboard from "./CaretakerDashboard";
import StatusPatientList from "./StatusPatientList";
import PatientHistoryComponent from "./PatientHistoryComponent";
import ReasonOfRejection from "./ReasonOfRejection";
import CustomerDashboard from "./CustomerDashboard";
import Home from "./Home";
import CaretakerLogin from "./CaretakerLogin";
import CustomerLogin from "./CustomerLogin";
import CaretakerRegistration from "./CaretakerRegistration";
import CustomerRegistration from "./CustomerRegistration";
import ViewRequest from "./ViewRequest";
import PaymentComponent from "./PaymentComponent";
import { ToastContainer } from "react-toastify";

class Menu extends React.Component {
  menu() {
    if (
      sessionStorage.getItem("caretaker_id") !== null &&
      sessionStorage.getItem("usertype") === "caretaker"
    ) {
      return (
        <div
          class="menu-bar"
          style={{
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "center",
          }}
        >
          <a href="/" class="ms-3">
            <img src="QCSlogo.png" width="300px" />
          </a>
          <ul style={{ marginLeft: "200px" }}>
            <li>
              <a href="/caretaker-dashboard">Caretaker Dashboard</a>
            </li>
            <li>
              <a href="/patient-status">Status</a>{" "}
            </li>
            <li>
              <a href="/patient-history">Patient History</a>
            </li>
            <li>
              <a href="/">Logout</a>
            </li>
          </ul>
        </div>
      );
    } else if (
      sessionStorage.getItem("cust_id") !== null &&
      sessionStorage.getItem("usertype") === "customer"
    ) {
      return (
        <div class="menu-bar">
          <a href="/">
            <img src="QCSlogo.png" width="300px" />
          </a>
          <ul>
            <li>
              <a href="/dashboard">User Dashboard</a>
            </li>
            <li>
              <a href="#">Patient Details</a>
              <div class="sub-menu-1">
                <ul>
                  <li>
                    <a href="/update-patient/_add">Add Patient List</a>
                  </li>
                  <li>
                    <a href="/patients">View Patient List</a>
                  </li>
                </ul>
              </div>
            </li>
            <li>
              <a href="/BookingCaretaker"> Book Caretaker</a>
            </li>
            <li>
              <a href="/caretakerList">Requested caretaker List</a>
            </li>
            <li>
              <a href="/Payment">Payment</a>
            </li>
            <li>
              <a href="/">Logout</a>
            </li>
          </ul>
        </div>
      );
    } else {
      return null;
    }
  }

  render() {
    return (
      <div>
        <div>{this.menu()}</div>

        <Router>
          <div className="App">
            <Switch>
              <Route
                path="/dashboard"
                exact
                component={CustomerDashboard}
              ></Route>
              <Route path="/" exact component={Home}></Route>
              <Route
                path="/patients"
                exact
                component={ListPatientComponent}
              ></Route>
              <Route
                path="/update-patient/:patient_id"
                exact
                component={CreatePatientComponent}
              ></Route>
              <Route
                path="/view-patient/:patient_id"
                exact
                component={ViewPatientComponent}
              ></Route>
              <Route
                path="/BookingCaretaker"
                exact
                component={BookingComponent}
              ></Route>
              <Route
                path="/caretakerList"
                exact
                component={CaretakerList}
              ></Route>
              <Route
                path="/view-caretaker/:id"
                exact
                component={ViewBookingComponent}
              ></Route>
              <Route
                path="/caretaker-dashboard"
                exact
                component={CaretakerDashboard}
              ></Route>
              <Route
                path="/patient-status"
                exact
                component={StatusPatientList}
              ></Route>
              <Route
                path="/caretakerlogin"
                exact
                component={CaretakerLogin}
              ></Route>
              <Route
                path="/customerlogin"
                exact
                component={CustomerLogin}
              ></Route>
              <Route
                path="/patient-history"
                exact
                component={PatientHistoryComponent}
              ></Route>
              <Route
                path="/CaretakerRegistration"
                exact
                component={CaretakerRegistration}
              ></Route>
              <Route
                path="/CustomerRegister"
                exact
                component={CustomerRegistration}
              ></Route>
              <Route path="/viewRequest" exact component={ViewRequest}></Route>

              <Route
                path="/Reason-Of-Rejection/:id"
                exact
                component={ReasonOfRejection}
              ></Route>
              <Route path="/Payment" exact component={PaymentComponent}></Route>
            </Switch>
            <ToastContainer />
          </div>
        </Router>
      </div>
    );
  }
}
export default Menu;
