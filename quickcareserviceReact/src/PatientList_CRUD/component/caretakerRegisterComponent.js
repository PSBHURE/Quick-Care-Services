import React, { Component } from "react";
import CaretakerService from "../Services/PatientService";

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
      profileOptions: [],

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
    CaretakerService.createCaretaker().then((res) => {
      this.setState({ employees: res.data });
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
    };
    console.log("employee =>" + JSON.stringify(employee));
    CaretakerService.createCaretaker(employee).then((res) => {
      alert("Registration Successfull!!");
      console.log("After Register, data returned is " + res.data);
      this.props.history.push("/"); //routing to caretakerList page
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

  cancel() {
    this.props.history.push("/login");
  }

  getTitle() {
    <h3 className="text-center">Register As a Caretaker</h3>;
  }

  render() {
    return (
      <div>
        <br />
        <br />
        <div className="Container">
          <div className="row">
            <div>
              {this.getTitle()}
              <div className="card-body">
                <form>
                  <div className="form-group">
                    <label>Your Name</label>
                    <input
                      placeholder="Caretaker Name"
                      name="caretaker_name"
                      className="form-control"
                      value={this.state.caretaker_name}
                      onChange={this.changeCaretaker_nameHandler}
                    />
                  </div>

                  <div className="form-group">
                    <label>Your Password</label>
                    <input
                      placeholder="Caretaker pwd"
                      name="caretaker_pwd"
                      className="form-control"
                      value={this.state.caretaker_pwd}
                      onChange={this.changeCaretaker_pwdHandler}
                    />
                  </div>

                  <div className="form-group">
                    <label>Your Email</label>
                    <input
                      placeholder="Caretaker Email"
                      name="caretaker_email"
                      className="form-control"
                      value={this.state.caretaker_email}
                      onChange={this.changeCaretaker_emailHandler}
                    />
                  </div>

                  <div className="form-group">
                    <label>Your Gender</label>
                    <input
                      placeholder="Caretaker Gender"
                      name="caretaker_gender"
                      className="form-control"
                      value={this.state.caretaker_gender}
                      onChange={this.changeCaretaker_genderHandler}
                    />
                  </div>

                  <div className="form-group row">
                    <div className="radio col-md-4">
                      <label>
                        <input
                          type="radio"
                          name="gender"
                          value="Male"
                          required
                          checked={this.state.gender === "Male"}
                          onChange={this.changeCaretaker_genderHandler}
                        />
                        Male
                      </label>
                    </div>
                    <div className="radio col-md-4">
                      <label>
                        <input
                          type="radio"
                          name="gender"
                          value="Female"
                          required
                          checked={this.state.gender === "Female"}
                          onChange={this.changeCaretaker_genderHandler}
                        />
                        Female
                      </label>
                    </div>
                    <div className="radio col-md-4">
                      <label>
                        <input
                          type="radio"
                          name="gender"
                          value="Other"
                          required
                          checked={this.state.gender === "Other"}
                          onChange={this.changeCaretaker_genderHandler}
                        />
                        Other
                      </label>
                    </div>
                  </div>

                  <div className="form-group">
                    <label>Your Age</label>
                    <input
                      placeholder="Caretaker Age"
                      name="caretaker_age"
                      className="form-control"
                      value={this.state.caretaker_age}
                      onChange={this.changeCaretaker_ageHandler}
                    />
                  </div>

                  <div className="form-group">
                    <label>Your Phone</label>
                    <input
                      placeholder="Caretaker Phone"
                      name="caretaker_phone"
                      className="form-control"
                      value={this.state.caretaker_phone}
                      onChange={this.changeCaretaker_phoneHandler}
                    />
                  </div>

                  <div className="form-group">
                    <label>Your location</label>
                    <input
                      placeholder="Caretaker Location"
                      name="caretaker_location"
                      className="form-control"
                      value={this.state.caretaker_location}
                      onChange={this.changeCaretaker_locationHandler}
                    />
                  </div>

                  <div className="form-group">
                    <label>Your Profile</label>
                    <input
                      placeholder="Caretaker profile"
                      name="caretaker_profile"
                      className="form-control"
                      value={this.state.caretaker_profile}
                      onChange={this.changeCaretaker_profileHandler}
                    />
                  </div>

                  <div className="form-group">
                    <label>Your Experience In your Service</label>
                    <input
                      placeholder="Caretaker Experience"
                      name="caretaker_exp"
                      className="form-control"
                      value={this.state.caretaker_exp}
                      onChange={this.changeCaretaker_expHandler}
                    />
                  </div>

                  <div className="form-group">
                    <label>Your Charges per hours</label>
                    <input
                      placeholder="Charges"
                      name="charges"
                      className="form-control"
                      value={this.state.charges}
                      onChange={this.changeChargesHandler}
                    />
                  </div>

                  <button
                    className="btn btn-success"
                    onClick={this.createCaretaker}
                    style={{ marginLeft: "10px" }}
                  >
                    Save
                  </button>
                  <button
                    className="but btn-danger"
                    onClick={this.cancel}
                    style={{ marginLeft: "10px" }}
                  >
                    Cancel
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CaretakerRegisterComponent;
