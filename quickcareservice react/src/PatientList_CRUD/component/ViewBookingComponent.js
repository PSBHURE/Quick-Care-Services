import React, { Component } from "react";
import View from "./viewpatient.module.css";
//import "animate.css";
import PatientService from "../Services/PatientService";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { BiCheckCircle } from "react-icons/bi";

class ViewBookingComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.match.params.id,
      employee: {},
      patient_name: "",
      patientOptions: [],
    };
    this.changePnameHandler = this.changePnameHandler.bind(this);
    this.bookCaretaker = this.bookCaretaker.bind(this);
    this.cancel = this.cancel.bind(this);
  }
  componentDidMount() {
    PatientService.getBookCaretakerListById(this.state.id).then((res) => {
      this.setState({ employee: res.data });
    });

    PatientService.getPatientByIddrop(sessionStorage.getItem("cust_id")).then(
      (res) => {
        this.setState({ patientOptions: res.data });
      }
    );
  }

  bookCaretaker(event) {
    let employee = { patient_name: this.state.patient_name };
    console.log("employee =>" + JSON.stringify(employee));
    PatientService.finalBook(this.state.id, employee).then((res) => {
      console.log(res.data);
      this.props.history.push("/BookingCaretaker");
    });
    PatientService.insertBooking(employee).then((res) => {
      toast.success(
        <div>
          <BiCheckCircle /> Booking Successfull!!
        </div>,
        {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: true,
          pauseOnHover: false,
        }
      );

      setTimeout(function () {}, 3000);

      console.log(res.data);
      this.props.history.push("/BookingCaretaker");
    });
    event.preventDefault();
  }
  changePnameHandler(event) {
    this.setState({ patient_name: event.target.value });
  }

  cancel() {
    this.props.history.push("/BookingCaretaker");
  }
  render() {
    const mystyle = {
      backgroundImage: "url(snow8.jpg)",
      backgroundPosition: "center",
      backgroundSize: "cover",
      height: "100vh",
      color: "white",
      padding: "40px",
      Width: "300%",
    };

    const style1 = {
      backgroundColor: "rgba(210, 166, 121, 0.7000)",
      padding: "30px",
      width: "900px",
      borderRadius: "90px",
      color: "black",
    };
    return (
      <body className={View.bgimg}>
        <div
          className="card col-md-8 offset-md-2 animate__animated animate__fadeInDown"
          style={style1}
        >
          <div>
            <br />
            <br />

            <div>
              <h1
                className="display-4"
                style={{ textAlign: "center" }}
                class="text-dark"
              >
                View Caretaker
              </h1>{" "}
              <br />
              <div classname="card-body" align="left">
                <div className="offset-md-2">
                  <div className="row">
                    <div className="col-md-6">
                      {" "}
                      <label
                        style={{
                          color: "white",
                          fontWeight: "bold",
                          fontFamily: "sans-serif",
                          fontSize: "25px",
                        }}
                      >
                        Caretaker ID :{" "}
                      </label>
                    </div>
                    <div className="col-md-6">
                      <h5
                        style={{
                          color: "white",
                          fontWeight: "bold",
                          fontFamily: "sans-serif",
                          fontSize: "25px",
                        }}
                      >
                        {this.state.employee.caretaker_id}
                      </h5>
                    </div>
                  </div>
                  <br />

                  <div className="row">
                    <div className="col-md-6">
                      <label
                        style={{
                          color: "white",
                          fontWeight: "bold",
                          fontFamily: "sans-serif",
                          fontSize: "25px",
                        }}
                      >
                        Caretaker Name :{" "}
                      </label>
                    </div>
                    <div className="col-md-6">
                      <h5
                        style={{
                          color: "white",
                          fontWeight: "bold",
                          fontFamily: "sans-serif",
                          fontSize: "25px",
                        }}
                      >
                        {this.state.employee.caretaker_name}
                      </h5>
                    </div>
                  </div>
                  <br />

                  <div className="row">
                    <div className="col-md-6">
                      <label
                        style={{
                          color: "white",
                          fontWeight: "bold",
                          fontFamily: "sans-serif",
                          fontSize: "25px",
                        }}
                      >
                        Email Id :{" "}
                      </label>
                    </div>
                    <div className="col-md-6">
                      {" "}
                      <h5
                        style={{
                          color: "white",
                          fontWeight: "bold",
                          fontFamily: "sans-serif",
                          fontSize: "25px",
                        }}
                      >
                        {this.state.employee.caretaker_email}
                      </h5>
                    </div>
                  </div>
                  <br />

                  <div className="row">
                    <div className="col-md-6">
                      <label
                        style={{
                          color: "white",
                          fontWeight: "bold",
                          fontFamily: "sans-serif",
                          fontSize: "25px",
                        }}
                      >
                        Gender :{" "}
                      </label>
                    </div>
                    <div className="col-md-6">
                      <h5
                        style={{
                          color: "white",
                          fontWeight: "bold",
                          fontFamily: "sans-serif",
                          fontSize: "25px",
                        }}
                      >
                        {this.state.employee.caretaker_gender}
                      </h5>
                    </div>
                  </div>
                  <br />

                  <div className="row">
                    <div className="col-md-6">
                      <label
                        style={{
                          color: "white",
                          fontWeight: "bold",
                          fontFamily: "sans-serif",
                          fontSize: "25px",
                        }}
                      >
                        {" "}
                        Age :{" "}
                      </label>
                    </div>
                    <div className="col-md-6">
                      <h5
                        style={{
                          color: "white",
                          fontWeight: "bold",
                          fontFamily: "sans-serif",
                          fontSize: "25px",
                        }}
                      >
                        {this.state.employee.caretaker_age}
                      </h5>
                    </div>
                  </div>
                  <br />

                  <div className="row">
                    <div className="col-md-6">
                      <label
                        style={{
                          color: "white",
                          fontWeight: "bold",
                          fontFamily: "sans-serif",
                          fontSize: "25px",
                        }}
                      >
                        Phone number :{" "}
                      </label>
                    </div>
                    <div className="col-md-6">
                      <h5
                        style={{
                          color: "white",
                          fontWeight: "bold",
                          fontFamily: "sans-serif",
                          fontSize: "25px",
                        }}
                      >
                        {this.state.employee.caretaker_phone}
                      </h5>
                    </div>
                  </div>
                  <br />

                  <div className="row">
                    <div className="col-md-6">
                      {" "}
                      <label
                        style={{
                          color: "white",
                          fontWeight: "bold",
                          fontFamily: "sans-serif",
                          fontSize: "25px",
                        }}
                      >
                        Caretaker profile:{" "}
                      </label>
                    </div>
                    <div className="col-md-6">
                      {" "}
                      <h5
                        style={{
                          color: "white",
                          fontWeight: "bold",
                          fontFamily: "sans-serif",
                          fontSize: "25px",
                        }}
                      >
                        {this.state.employee.caretaker_profile}
                      </h5>
                    </div>
                  </div>
                  <br />

                  <div className="row">
                    <div className="col-md-6">
                      {" "}
                      <label
                        style={{
                          color: "white",
                          fontWeight: "bold",
                          fontFamily: "sans-serif",
                          fontSize: "25px",
                        }}
                      >
                        Caretaker Location :{" "}
                      </label>
                    </div>
                    <div className="col-md-6">
                      <h5
                        style={{
                          color: "white",
                          fontWeight: "bold",
                          fontFamily: "sans-serif",
                          fontSize: "25px",
                        }}
                      >
                        {this.state.employee.caretaker_location}
                      </h5>
                    </div>
                  </div>
                  <br />

                  <div className="row">
                    <div className="col-md-6">
                      {" "}
                      <label
                        style={{
                          color: "white",
                          fontWeight: "bold",
                          fontFamily: "sans-serif",
                          fontSize: "25px",
                        }}
                      >
                        Experience:{" "}
                      </label>
                    </div>
                    <div className="col-md-6">
                      {" "}
                      <h5
                        style={{
                          color: "white",
                          fontWeight: "bold",
                          fontFamily: "sans-serif",
                          fontSize: "25px",
                        }}
                      >
                        {this.state.employee.caretaker_exp}
                      </h5>
                    </div>
                  </div>
                  <br />

                  <div className="row">
                    <div className="col-md-6">
                      <label
                        style={{
                          color: "white",
                          fontWeight: "bold",
                          fontFamily: "sans-serif",
                          fontSize: "25px",
                        }}
                      >
                        Hourly Charges :{" "}
                      </label>
                    </div>
                    <div className="col-md-6">
                      {" "}
                      <h5
                        style={{
                          color: "white",
                          fontWeight: "bold",
                          fontFamily: "sans-serif",
                          fontSize: "25px",
                        }}
                      >
                        {this.state.employee.charges}
                      </h5>
                    </div>
                  </div>
                  <br />

                  <div className="row">
                    <div className="col-md-6">
                      <label
                        style={{
                          color: "white",
                          fontWeight: "bold",
                          fontFamily: "sans-serif",
                          fontSize: "25px",
                        }}
                      >
                        Select Patient from here :{" "}
                      </label>
                    </div>
                    <div className="col-md-6">
                      <select
                        name="patient_name"
                        class="btn btn-lg btn-secondary dropdown-toggle dropdown-toggle-split"
                        value={this.state.patient_name}
                        onChange={this.changePnameHandler}
                      >
                        <option>Choose patient</option>
                        {this.state.patientOptions.map((patientOption) => (
                          <option value={`${patientOption.patient_name}`}>
                            {patientOption.patient_name}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                </div>
                <br />
              </div>
              <button
                className="btn btn-success"
                onClick={this.bookCaretaker}
                style={{
                  marginLeft: "40px",
                  fontSize: "25px",
                  fontFamily: "sans-serif",
                  width: "150px",
                  height: "60px",
                  borderRadius: "20px",
                }}
              >
                Book
              </button>
              <button
                className="btn btn-danger"
                onClick={this.cancel}
                style={{ marginLeft: "10px" }}
                // //style={{
                //   marginLeft: "40px",
                //   fontSize: "25px",
                //   fontFamily: "sans-serif",
                //   width: "150px",
                //   height: "60px",
                //   borderRadius: "20px",
                // }}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </body>
    );
  }
}
export default ViewBookingComponent;
