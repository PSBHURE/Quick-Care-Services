import React, { Component } from "react";
//import { render } from 'react-dom/cjs/react-dom.development';
import { render } from "react-dom";
import PatientService from "../Services/PatientService";
//import "animate.css";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { BiCheckCircle } from "react-icons/bi";

class CustomerRegistration extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.match.params.id,
      cust_name: "",
      cust_pwd: "",
      cust_email: "",
      cust_phone: "",
      cust_gender: "",
      cust_location: "",
    };
    this.changeCnameHandler = this.changeCnameHandler.bind(this);
    this.changeCpwdHandler = this.changeCpwdHandler.bind(this);
    this.changeCemailHandler = this.changeCemailHandler.bind(this);
    this.changeCphoneHandler = this.changeCphoneHandler.bind(this);
    this.changeCgenderHandler = this.changeCgenderHandler.bind(this);
    this.changeClocationHandler = this.changeClocationHandler.bind(this);
    this.custregister = this.custregister.bind(this);
    this.cancel = this.cancel.bind(this);
  }
  componentDidMount() {
    PatientService.CustomerRegister().then((res) => {
      this.setState({ employees: res.data });
    });
  }

  custregister(event) {
    let employee = {
      cust_name: this.state.cust_name,
      cust_pwd: this.state.cust_pwd,
      cust_email: this.state.cust_email,
      cust_phone: this.state.cust_phone,
      cust_gender: this.state.cust_gender,
      cust_location: this.state.cust_location,
      usertype: "customer",
    };
    console.log("employee =>" + JSON.stringify(employee));
    PatientService.CustomerRegister(employee).then((res) => {
      toast.success(
        <div>
          <BiCheckCircle />
          User Registration Successfull!!
        </div>,
        {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: true,
          pauseOnHover: false,
        }
      );

      setTimeout(function () {}, 3000);
      console.log("After Register, data returned is " + res.data);
      this.props.history.push("/customerlogin"); //routing to caretakerList page
    });
    event.preventDefault();
  }
  changeCnameHandler(event) {
    this.setState({ cust_name: event.target.value });
  }
  changeCpwdHandler(event) {
    this.setState({ cust_pwd: event.target.value });
  }
  changeCemailHandler(event) {
    this.setState({ cust_email: event.target.value });
  }
  changeCphoneHandler(event) {
    this.setState({ cust_phone: event.target.value });
  }
  changeCgenderHandler(event) {
    this.setState({ cust_gender: event.target.value });
  }
  changeClocationHandler(event) {
    this.setState({ cust_location: event.target.value });
  }
  cancel() {
    this.props.history.push("/");
  }

  render() {
    const mystyle = {
      backgroundImage: "url(crbg2.jpg)",
      backgroundPosition: "center",
      backgroundSize: "cover",
      height: "100vh",
      color: "white",
      padding: "40px",
      Width: "300%",
      height: "150vh",
    };

    const style1 = {
      backgroundColor: "rgba(210, 166, 121, 0.7000)",
      padding: "30px",
      width: "900px",
      borderRadius: "90px",
      color: "black",
    };
    return (
      <body style={mystyle}>
        <div>
          <h5
            className="text-center"
            style={{
              color: "black",
              fontfamily: "Georgia, 'Times New Roman', Times, serif",
              fontSize: "40px",
              textAlign: "bottom",
              background:
                "linear-gradient(to bottom, #ff9966 0%, #ff8000 100%)",
              width: "1200px",
              height: "70px",
              fontWeight: "bold",
              fontFamily: "revert",
              marginLeft: "500px",
              borderRadius: "50px",
            }}
          >
            CUSTOMER REGISTRATION
          </h5>
          <br />
          <br />
          <div
            className="container  animate__animated animate__fadeInDown "
            style={style1}
          >
            <center>
              <div className="row">
                <div>
                  <div className="card-body ">
                    <form onSubmit={this.custregister}>
                      <div className="form-group col-md-8  animate__animated animate__fadeInDown ">
                        <label
                          style={{
                            color: "black",
                            fontWeight: "bold",
                            fontFamily: "sans-serif",
                            fontSize: "25px",
                          }}
                        >
                          Name
                        </label>
                        <br></br>
                        <input
                          placeholder="Customer Name"
                          name="cust_name"
                          required
                          className="form-control"
                          value={this.state.cust_name}
                          onChange={this.changeCnameHandler}
                          style={{
                            color: "black",
                            fontWeight: "bold",
                            fontFamily: "sans-serif",
                            fontSize: "25px",
                          }}
                        />
                        <br></br>
                      </div>

                      <div className="form-group col-md-8">
                        <label
                          style={{
                            color: "black",
                            fontWeight: "bold",
                            fontFamily: "sans-serif",
                            fontSize: "25px",
                          }}
                        >
                          Password
                        </label>
                        <br></br>
                        <input
                          placeholder="Customer Password"
                          name="cust_pwd"
                          type="password"
                          required
                          className="form-control"
                          value={this.state.cust_pwd}
                          onChange={this.changeCpwdHandler}
                          style={{
                            color: "black",
                            fontWeight: "bold",
                            fontFamily: "sans-serif",
                            fontSize: "25px",
                          }}
                        />
                        <br></br>
                      </div>

                      <div className="form-group col-md-8">
                        <label
                          style={{
                            color: "black",
                            fontWeight: "bold",
                            fontFamily: "sans-serif",
                            fontSize: "25px",
                          }}
                        >
                          {" "}
                          Email ID
                        </label>
                        <br></br>
                        <input
                          placeholder="Customer EmailId"
                          name="cust_email"
                          type="email"
                          required
                          className="form-control"
                          value={this.state.cust_email}
                          onChange={this.changeCemailHandler}
                          style={{
                            color: "black",
                            fontWeight: "bold",
                            fontFamily: "sans-serif",
                            fontSize: "25px",
                          }}
                        />
                        <br></br>
                      </div>

                      <div className="form-group col-md-8">
                        <label
                          style={{
                            color: "black",
                            fontWeight: "bold",
                            fontFamily: "sans-serif",
                            fontSize: "25px",
                          }}
                        >
                          Phone Number
                        </label>
                        <br></br>
                        <input
                          placeholder="Customer Phone"
                          name="cust_phone"
                          className="form-control"
                          type="tel"
                          name1="phone_number"
                          id="phone_number"
                          pattern="[789][0-9]{9}"
                          required="required"
                          value={this.state.cust_phone}
                          onChange={this.changeCphoneHandler}
                          style={{
                            color: "black",
                            fontWeight: "bold",
                            fontFamily: "sans-serif",
                            fontSize: "25px",
                          }}
                        />
                        <br></br>
                      </div>

                      <div className="form-group col-md-8">
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
                        <br></br>
                        <input
                          placeholder="Gender"
                          name="cust_gender"
                          required
                          className="form-control"
                          value={this.state.cust_gender}
                          onChange={this.changeCgenderHandler}
                          style={{
                            color: "black",
                            fontWeight: "bold",
                            fontFamily: "sans-serif",
                            fontSize: "25px",
                          }}
                        />
                        <br></br>
                      </div>

                      {/*--------------------------------------------------------------------*/}

                      <div className="form-group col-md-8">
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
                        <br></br>
                        <input
                          placeholder="Customer Location"
                          name="cust_location"
                          required
                          className="form-control"
                          value={this.state.cust_location}
                          onChange={this.changeClocationHandler}
                          style={{
                            color: "black",
                            fontWeight: "bold",
                            fontFamily: "sans-serif",
                            fontSize: "25px",
                          }}
                        />
                        <br></br>
                      </div>

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
                        Register
                      </button>
                      <button
                        className="btn btn-danger"
                        onClick={this.cancel}
                        //style={{ marginLeft: "10px" }}
                        Style={{
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
                    </form>
                  </div>
                </div>
              </div>
            </center>
          </div>
        </div>
      </body>
    );
  }
}
export default CustomerRegistration;
