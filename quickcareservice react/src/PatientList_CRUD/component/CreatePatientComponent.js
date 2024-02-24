import React, { Component } from "react";
//import { render } from 'react-dom/cjs/react-dom.development';
import { render } from "react-dom";
import PatientService from "../Services/PatientService";
import View from "./viewpatient.module.css";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { BiCheckCircle } from "react-icons/bi";
class CreatePatientComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      patient_id: this.props.match.params.patient_id,

      cust_id: "",
      patient_name: "",
      patient_gender: "",
      patient_age: "",
      patient_location: "",
      service_hr: "",
      from_date: "",
      to_date: "",
      caretype: "",
      profileoptions: [],
    };
    this.changeNameHandler = this.changeNameHandler.bind(this);
    this.changeGenderHandler = this.changeGenderHandler.bind(this);
    this.changeAgeHandler = this.changeAgeHandler.bind(this);
    this.changeLocationHandler = this.changeLocationHandler.bind(this);
    this.changeServicehrHandler = this.changeServicehrHandler.bind(this);
    this.changeFromDateHandler = this.changeFromDateHandler.bind(this);
    this.changeToDateHandler = this.changeToDateHandler.bind(this);
    this.changeCareTypeHandler = this.changeCareTypeHandler.bind(this);

    //this.changeStatusHandler = this.changeStatusHandler.bind(this);
    this.saveOrUpdatePatient = this.saveOrUpdatePatient.bind(this);
    this.cancel = this.cancel.bind(this);
  }
  componentDidMount() {
    if (this.state.patient_id === "_add") {
      PatientService.dropdownCaretaker().then((res) => {
        this.setState({ profileoptions: res.data });
      });

      return;
    } else {
      PatientService.getPatientById(this.state.patient_id).then((res) => {
        let patient = res.data;
        PatientService.dropdownCaretaker().then((res) => {
          this.setState({ profileoptions: res.data });
        });

        this.setState({
          // patient_id:patient.patient_id,

          patient_name: patient.patient_name,
          patient_gender: patient.patient_gender,
          patient_age: patient.patient_age,
          patient_location: patient.patient_location,
          service_hr: patient.service_hr,
          from_date: patient.from_date,
          to_date: patient.to_date,
          caretype: patient.caretype,
        });
      });
    }
  }
  saveOrUpdatePatient(event) {
    let patient = {
      cust_id: sessionStorage.getItem("cust_id"),
      patient_name: this.state.patient_name,
      patient_gender: this.state.patient_gender,
      patient_age: this.state.patient_age,
      patient_location: this.state.patient_location,
      service_hr: this.state.service_hr,
      from_date: this.state.from_date,
      to_date: this.state.to_date,
      caretype: this.state.caretype,
    };
    console.log("patient => " + JSON.stringify(patient));

    if (this.state.patient_id === "_add") {
      PatientService.createPatient(patient).then((res) => {
        toast.success(
          <div>
            <BiCheckCircle />
            Patient Added Successfully!!
          </div>,
          {
            position: "top-center",
            autoClose: 3000,
            hideProgressBar: true,
            pauseOnHover: false,
          }
        );

        setTimeout(function () {}, 3000);
        console.log("After adding, data returned is " + res.data);
        this.props.history.push("/patients");
      });
    } else {
      PatientService.updatePatient(this.state.patient_id, patient).then(
        (res) => {
          console.log(res.data);
          toast.success(
            <div>
              <BiCheckCircle />
              Patient Updated Successfully!!
            </div>,
            {
              position: "top-center",
              autoClose: 3000,
              hideProgressBar: true,
              pauseOnHover: false,
            }
          );

          setTimeout(function () {}, 3000);
          this.props.history.push("/patients");
        }
      );
    }
    event.preventDefault();
  }
  changeNameHandler(event) {
    this.setState({ patient_name: event.target.value });
  }

  changeGenderHandler(event) {
    this.setState({ patient_gender: event.target.value });
  }
  changeAgeHandler(event) {
    this.setState({ patient_age: event.target.value });
  }
  changeLocationHandler(event) {
    this.setState({ patient_location: event.target.value });
  }
  changeServicehrHandler(event) {
    this.setState({ service_hr: event.target.value });
  }
  changeFromDateHandler(event) {
    this.setState({ from_date: event.target.value });
  }
  changeToDateHandler(event) {
    this.setState({ to_date: event.target.value });
  }
  changeCareTypeHandler(event) {
    this.setState({ caretype: event.target.value });
  }
  changeStatusHandler(event) {
    this.setState({ status: event.target.value });
  }
  cancel() {
    this.props.history.push("/patients");
  }
  getTitle() {
    if (this.state.patient_id === "_add")
      return (
        <h3
          className="text-center"
          style={{
            color: "white",
            fontfamily: "Georgia, 'Times New Roman', Times, serif",
            fontSize: "35px",
            textAlign: "bottom",
            background: "linear-gradient(to bottom, #660066 0%, #660033 100%)",
            width: "600px",
            height: "60px",
            fontWeight: "bold",
            fontFamily: "revert",
            marginTop: "0px",
            marginLeft: "110px",
            borderRadius: "70px",
          }}
        >
          {" "}
          Add Patient Details
        </h3>
      );
    else
      return (
        <h3
          className="text-center"
          style={{
            color: "white",
            fontfamily: "Georgia, 'Times New Roman', Times, serif",
            fontSize: "35px",
            textAlign: "bottom",
            background: "linear-gradient(to bottom, #660066 0%, #660033 100%)",
            width: "600px",
            height: "60px",
            fontWeight: "bold",
            fontFamily: "revert",
            marginTop: "0px",
            marginLeft: "110px",
            borderRadius: "70px",
          }}
        >
          {" "}
          Update Patient Details
        </h3>
      );
  }
  check() {
    var x = document.getElementById("caretype").selectedOptions[0].label;

    if (x == "Choose caretype") {
      alert("Please select an option.");
    }
  }
  render() {
    const mystyle = {
      backgroundImage: "url(caree4.jpg)",
      backgroundSize: "cover",
      height: "100vh",
      color: "white",
      padding: "40px",
      Width: "60%",
      height: "190vh",
    };
    const style1 = {
      backgroundColor: "rgba(100, 200, 190, 0.7000)",
      padding: "40px",
      width: "1100px",

      borderRadius: "10px",
      color: "black",
    };
    return (
      <body className={View.bgimg}>
        <center>
          <div style={mystyle}>
            <br />
            <br />

            <div className="container  animate__animated animate__fadeInDown">
              <div className="row">
                <div
                  className="card col-md-8 offset-md-3 offset-md-3 "
                  style={style1}
                >
                  {this.getTitle()}
                  <div className="card-body">
                    <form onSubmit={this.saveOrUpdatePatient}>
                      <div className="updateform-group ">
                        <label
                          style={{
                            color: "black",
                            fontWeight: "bold",
                            fontFamily: "sans-serif",
                            fontSize: "25px",
                          }}
                        >
                          First name
                        </label>
                        <input
                          placeholder="First Name"
                          name="firstName"
                          required
                          className="form-control"
                          value={this.state.patient_name}
                          onChange={this.changeNameHandler}
                          style={{
                            color: "black",
                            fontWeight: "bold",
                            fontFamily: "sans-serif",
                            fontSize: "25px",
                          }}
                        />
                      </div>

                      <br></br>
                      <div className="row">
                        <div className="updateform-group col-md-6">
                          <label
                            style={{
                              color: "black",
                              fontWeight: "bold",
                              fontFamily: "sans-serif",
                              fontSize: "25px",
                            }}
                          >
                            Gender
                          </label>
                          <input
                            placeholder="gender"
                            name="gender"
                            required
                            className="form-control"
                            value={this.state.patient_gender}
                            onChange={this.changeGenderHandler}
                            style={{
                              color: "black",
                              fontWeight: "bold",
                              fontFamily: "sans-serif",
                              fontSize: "25px",
                            }}
                          />
                        </div>
                        <br></br>

                        <div className="updateform-group col-md-6">
                          <label
                            style={{
                              color: "black",
                              fontWeight: "bold",
                              fontFamily: "sans-serif",
                              fontSize: "25px",
                            }}
                          >
                            Age
                          </label>
                          <input
                            placeholder="age"
                            name="age"
                            required
                            className="form-control"
                            value={this.state.patient_age}
                            onChange={this.changeAgeHandler}
                            style={{
                              color: "black",
                              fontWeight: "bold",
                              fontFamily: "sans-serif",
                              fontSize: "25px",
                            }}
                          />
                        </div>
                      </div>
                      <br></br>

                      <div className="row">
                        <div className="updateform-group col-md-6">
                          <label
                            style={{
                              color: "black",
                              fontWeight: "bold",
                              fontFamily: "sans-serif",
                              fontSize: "25px",
                            }}
                          >
                            Location
                          </label>
                          <input
                            placeholder="Location"
                            name="location"
                            required
                            className="form-control"
                            value={this.state.patient_location}
                            onChange={this.changeLocationHandler}
                            style={{
                              color: "black",
                              fontWeight: "bold",
                              fontFamily: "sans-serif",
                              fontSize: "25px",
                            }}
                          />
                        </div>
                        <br></br>

                        <div className="updateform-group col-md-6">
                          <label
                            style={{
                              color: "black",
                              fontWeight: "bold",
                              fontFamily: "sans-serif",
                              fontSize: "25px",
                            }}
                          >
                            Service hr
                          </label>
                          <input
                            placeholder="service hr"
                            name="servicehr"
                            required
                            className="form-control"
                            value={this.state.service_hr}
                            onChange={this.changeServicehrHandler}
                            style={{
                              color: "black",
                              fontWeight: "bold",
                              fontFamily: "sans-serif",
                              fontSize: "25px",
                            }}
                          />
                        </div>
                      </div>
                      <br></br>

                      <div className="row">
                        <div className="updateform-group col-md-6">
                          <label
                            style={{
                              color: "black",
                              fontWeight: "bold",
                              fontFamily: "sans-serif",
                              fontSize: "25px",
                            }}
                          >
                            From_date:
                          </label>

                          <input
                            type="date"
                            placeholder="From date"
                            name="from_date"
                            className="form-control"
                            required
                            value={this.state.from_date}
                            onChange={this.changeFromDateHandler}
                            style={{
                              color: "black",
                              fontWeight: "bold",
                              fontFamily: "sans-serif",
                              fontSize: "25px",
                            }}
                          />
                        </div>

                        <br></br>
                        <div className="updateform-group col-md-6">
                          <label
                            style={{
                              color: "black",
                              fontWeight: "bold",
                              fontFamily: "sans-serif",
                              fontSize: "25px",
                            }}
                          >
                            To_date:
                          </label>

                          <input
                            type="date"
                            placeholder="To_date"
                            name="to_date"
                            className="form-control"
                            required
                            value={this.state.to_date}
                            onChange={this.changeToDateHandler}
                            style={{
                              color: "black",
                              fontWeight: "bold",
                              fontFamily: "sans-serif",
                              fontSize: "25px",
                            }}
                          />
                        </div>
                      </div>
                      <br></br>
                      <div>
                        <div className="col-md-6">
                          <label
                            style={{
                              color: "black",
                              fontWeight: "bold",
                              fontFamily: "sans-serif",
                              fontSize: "25px",
                            }}
                          >
                            Select Caretaker Type :{" "}
                          </label>
                        </div>
                        <br />
                        <select
                          class="btn btn-lg btn-secondary dropdown-toggle dropdown-toggle-split"
                          id="caretype"
                          name="caretype"
                          onfocusout="check()"
                          value={this.state.caretype}
                          onChange={this.changeCareTypeHandler}
                          style={{
                            color: "white",
                            fontWeight: "bold",
                            fontFamily: "sans-serif",
                            fontSize: "25px",
                          }}
                          required
                        >
                          <option value="">Choose caretype</option>
                          <option value="">Choose caretype</option>
                          <option value="BABAY_SITTER">BABAY SITTER</option>
                          <option value="NURSE">NURSE</option>
                          <option value="PHYSIOTHERAPISTS">PHYSIOTHERAPISTS</option>
                          {this.state.profileoptions.map((profileoptions) => (
                            <option value={`${profileoptions.profession}`}>
                              {profileoptions.profession}
                            </option>
                          ))}
                        </select>
                      </div>
                      <br />

                      <div align="center">
                        <button
                          className="btn btn-success"
                          style={{
                            marginLeft: "40px",
                            fontSize: "25px",
                            fontFamily: "sans-serif",
                            width: "150px",
                            height: "60px",
                            borderRadius: "20px",
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
                          }}
                        >
                          Cancel
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </center>
      </body>
    );
  }
}
export default CreatePatientComponent;
