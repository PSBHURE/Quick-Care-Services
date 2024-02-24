import React, { Component } from "react";
import PatientService from "../Services/PatientService";
//import "animate.css";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { BiCheckCircle } from "react-icons/bi";

class CaretakerRegisterComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: this.props.match.params.id,
      caretaker_name: "",
      caretaker_pwd: "",
      caretaker_email: "",
      caretaker_gender: "",
      caretaker_age: "",
      caretaker_phone: "",
      caretaker_location: "",
      caretaker_profile: "",
      //profession:'',
      profileoptions: [],
      caretaker_exp: "",
      charges: "",
    };

    this.changeCaretaker_nameHandler =
      this.changeCaretaker_nameHandler.bind(this);
    this.changeCaretaker_pwdHandler =
      this.changeCaretaker_pwdHandler.bind(this);
    this.changeCaretaker_emailHandler =
      this.changeCaretaker_emailHandler.bind(this);
    this.changeCaretaker_genderHandler =
      this.changeCaretaker_genderHandler.bind(this);
    this.changeCaretaker_ageHandler =
      this.changeCaretaker_ageHandler.bind(this);
    this.changeCaretaker_phoneHandler =
      this.changeCaretaker_phoneHandler.bind(this);
    this.changeCaretaker_locationHandler =
      this.changeCaretaker_locationHandler.bind(this);
    this.changeCaretaker_profileHandler =
      this.changeCaretaker_profileHandler.bind(this);
    this.changeCaretaker_expHandler =
      this.changeCaretaker_expHandler.bind(this);
    this.changeChargesHandler = this.changeChargesHandler.bind(this);

    this.createCaretaker = this.createCaretaker.bind(this);
    this.cancel = this.cancel.bind(this);
  }

  componentDidMount() {
    PatientService.createCaretaker().then((res) => {
      this.setState({ employees: res.data });
    });
    PatientService.dropdownCaretaker().then((res) => {
      this.setState({ profileoptions: res.data });
    });
  }

  createCaretaker(event) {
    let employee = {
      caretaker_name: this.state.caretaker_name,
      caretaker_pwd: this.state.caretaker_pwd,
      caretaker_email: this.state.caretaker_email,
      caretaker_gender: this.state.caretaker_gender,
      caretaker_age: this.state.caretaker_age,
      caretaker_phone: this.state.caretaker_phone,
      caretaker_location: this.state.caretaker_location,
      caretaker_profile: this.state.caretaker_profile,
      caretaker_exp: this.state.caretaker_exp,
      charges: this.state.charges,
      usertype: "caretaker",
    };
    console.log("employee =>" + JSON.stringify(employee));
    PatientService.createCaretaker(employee).then((res) => {
      toast.success(
        <div>
          <BiCheckCircle /> Registration Successfull!!
        </div>,
        {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: true,
          pauseOnHover: false,
        }
      );

      setTimeout(function () {
        window.location.replace("/caretakerlogin");
      }, 3000);

      console.log("After Register, data returned is " + res.data);
    });
    event.preventDefault();
  }

  changeCaretaker_nameHandler(event) {
    this.setState({ caretaker_name: event.target.value });
  }

  changeCaretaker_pwdHandler(event) {
    this.setState({ caretaker_pwd: event.target.value });
  }

  changeCaretaker_emailHandler(event) {
    this.setState({ caretaker_email: event.target.value });
  }

  changeCaretaker_genderHandler(event) {
    this.setState({ caretaker_gender: event.target.value });
  }
  changeCaretaker_ageHandler(event) {
    this.setState({ caretaker_age: event.target.value });
  }
  changeCaretaker_phoneHandler(event) {
    this.setState({ caretaker_phone: event.target.value });
  }
  changeCaretaker_locationHandler(event) {
    this.setState({ caretaker_location: event.target.value });
  }
  changeCaretaker_profileHandler(event) {
    this.setState({ caretaker_profile: event.target.value });
  }
  changeCaretaker_expHandler(event) {
    this.setState({ caretaker_exp: event.target.value });
  }
  changeChargesHandler(event) {
    this.setState({ charges: event.target.value });
  }
  check() {
    var x = document.getElementById("caretype").selectedOptions[0].label;

    if (x == "Choose caretype") {
      alert("Please select an option.");
    }
  }

  cancel() {
    this.props.history.push("/");
  }

  render() {
    const mystyle = {
      backgroundImage: "url(crbg1.jpg)",
      backgroundPosition: "center",
      backgroundSize: "cover",
      height: "200vh",
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
      <div style={mystyle}>
        <br />
        <br />
        <h5
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
            marginBottom: "30px",
          }}
        >
          CARETAKER REGISTRATION
        </h5>
        <center>
          <div
            className="Container animate__animated animate__fadeInDown"
            style={style1}
          >
            <div className="row">
              <div>
                <div className="card-body">
                  <form onSubmit={this.createCaretaker}>
                    <div className="form-group col-md-9  ">
                      <label>Name</label>
                      <input
                        placeholder="Caretaker Name"
                        name="caretaker_name"
                        required
                        className="form-control"
                        value={this.state.caretaker_name}
                        onChange={this.changeCaretaker_nameHandler}
                        style={{
                          color: "black",
                          fontWeight: "bold",
                          fontFamily: "sans-serif",
                          fontSize: "25px",
                        }}
                      />
                    </div>

                    <div className="form-group col-md-9">
                      <label>Password</label>
                      <input
                        placeholder="Caretaker pwd"
                        name="caretaker_pwd"
                        type="password"
                        required
                        className="form-control"
                        value={this.state.caretaker_pwd}
                        onChange={this.changeCaretaker_pwdHandler}
                        style={{
                          color: "black",
                          fontWeight: "bold",
                          fontFamily: "sans-serif",
                          fontSize: "25px",
                        }}
                      />
                    </div>

                    <div className="form-group col-md-9">
                      <label>Email</label>
                      <input
                        placeholder="Caretaker Email"
                        type="email"
                        name="caretaker_email"
                        required
                        className="form-control"
                        value={this.state.caretaker_email}
                        onChange={this.changeCaretaker_emailHandler}
                        style={{
                          color: "black",
                          fontWeight: "bold",
                          fontFamily: "sans-serif",
                          fontSize: "25px",
                        }}
                      />
                    </div>

                    <div className="row offset-md-3">
                      <div className="form-group col-md-4">
                        <label>Gender</label>
                        <input
                          placeholder="Gender"
                          name="caretaker_gender"
                          required
                          className="form-control"
                          value={this.state.caretaker_gender}
                          onChange={this.changeCaretaker_genderHandler}
                          style={{
                            color: "black",
                            fontWeight: "bold",
                            fontFamily: "sans-serif",
                            fontSize: "25px",
                          }}
                        />
                      </div>

                      <div className="form-group col-md-4">
                        <label>Age</label>
                        <input
                          placeholder="Age"
                          name="caretaker_age"
                          required
                          className="form-control"
                          value={this.state.caretaker_age}
                          onChange={this.changeCaretaker_ageHandler}
                          style={{
                            color: "black",
                            fontWeight: "bold",
                            fontFamily: "sans-serif",
                            fontSize: "25px",
                          }}
                        />
                      </div>
                    </div>

                    <div className="row offset-md-3">
                      <div className="form-group col-md-4">
                        <label>Phone</label>
                        <input
                          placeholder="Phone"
                          name="caretaker_phone"
                          className="form-control"
                          type="tel"
                          //name="phone_number"
                          id="phone_number"
                          pattern="[789][0-9]{9}"
                          required="required"
                          value={this.state.caretaker_phone}
                          onChange={this.changeCaretaker_phoneHandler}
                          style={{
                            color: "black",
                            fontWeight: "bold",
                            fontFamily: "sans-serif",
                            fontSize: "25px",
                          }}
                        />
                      </div>

                      <div className="form-group col-md-4">
                        <label>Location</label>
                        <input
                          placeholder="Location"
                          name="caretaker_location"
                          required
                          className="form-control"
                          value={this.state.caretaker_location}
                          onChange={this.changeCaretaker_locationHandler}
                          style={{
                            color: "black",
                            fontWeight: "bold",
                            fontFamily: "sans-serif",
                            fontSize: "25px",
                          }}
                        />
                      </div>
                    </div>

                    <div className="row offset-md-3">
                      <div className="form-group col-md-4">
                        <label>Experience</label>
                        <input
                          placeholder="Experience"
                          name="caretaker_exp"
                          required
                          className="form-control"
                          value={this.state.caretaker_exp}
                          onChange={this.changeCaretaker_expHandler}
                          style={{
                            color: "black",
                            fontWeight: "bold",
                            fontFamily: "sans-serif",
                            fontSize: "25px",
                          }}
                        />
                      </div>
                      <br />
                      <div className="form-group col-md-4">
                        <label>Charges per hour</label>
                        <input
                          placeholder="Charges"
                          name="charges"
                          required
                          className="form-control"
                          value={this.state.charges}
                          onChange={this.changeChargesHandler}
                          style={{
                            color: "black",
                            fontWeight: "bold",
                            fontFamily: "sans-serif",
                            fontSize: "25px",
                          }}
                        />
                      </div>
                    </div>
                    <br />
                   
                    <div>
  <label>Caretaker Profile</label>
  <br />
  <select
    className="btn btn-lg btn-secondary dropdown-toggle dropdown-toggle-split"
    id="caretype"
    name="caretype"
    value={this.state.caretaker_profile}
    onChange={this.changeCaretaker_profileHandler}
    style={{
      color: "white",
      fontWeight: "bold",
      fontFamily: "sans-serif",
      fontSize: "25px",
    }}
    required
  >
    <option value="">Choose caretype</option>
    <option value="BABAY_SITTER">BABAY SITTER</option>
    <option value="NURSE">NURSE</option>
    <option value="PHYSIOTHERAPISTS">PHYSIOTHERAPISTS</option>
  </select>
</div>

                    <br />

                    <div className="row offset-md-3">
                      <button
                        className="btn btn-success"
                        style={{
                          marginLeft: "40px",
                          fontSize: "25px",
                          fontFamily: "sans-serif",
                          width: "150px",
                          height: "60px",
                          borderRadius: "20px",
                          marginTop: "20px",
                        }}
                      >
                        Register
                      </button>
                      <button
                        className="but btn-danger"
                        onClick={this.cancel}
                        style={{
                          marginLeft: "40px",
                          fontSize: "25px",
                          fontFamily: "sans-serif",
                          width: "150px",
                          height: "60px",
                          borderRadius: "20px",
                          marginTop: "20px",
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
        </center>
      </div>
    );
  }
}

export default CaretakerRegisterComponent;
