import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Routes,
} from "react-router-dom";
import "./navBar.css";
import CaretakerDashboard from "./CaretakerDashboard";
import PatientHistoryComponent from "./PatientHistoryComponent";
import StatusPatientList from "./StatusPatientList";
import ReasonOfRejection from "./ReasonOfRejection";

const CaretakerMenu = () => {
  return (
    <>
      <Router>
        <div class="menu-bar">
          <ul>
            <li class="active">QUICKCARESERVICE</li>
            <li>
              <a href="#">
                <Link to={"/caretaker-dashboard"}>Caretaker Dashboard</Link>
              </a>
            </li>
            <li>
              <a href="#">
                <Link to={"/patient-status"}>Status</Link>
              </a>{" "}
            </li>
            <li>
              <a href="#">
                <Link to={"/patient-history"}>Patient History</Link>
              </a>
            </li>
          </ul>
        </div>

        <div>
          <Switch>
            <Route
              path="/caretaker-dashboard"
              component={CaretakerDashboard}
            ></Route>
            <Route path="/patient-status" component={StatusPatientList}></Route>
            <Route
              path="/patient-history"
              component={PatientHistoryComponent}
            ></Route>
            <Route
              path="/Reason-Of-Rejection/:id"
              exact
              component={ReasonOfRejection}
            ></Route>
          </Switch>
        </div>
      </Router>
    </>
  );
};

export default CaretakerMenu;
