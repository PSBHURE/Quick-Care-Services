import React, { Component } from "react";
import PatientService from "../Services/PatientService";
import View from "./viewpatient.module.css";

class ViewPatientComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      patient_id: this.props.match.params.patient_id,
      patient: [],
    };
    //this.state={patientshistory:[]}
    console.log("View" + this.state.patient_id);
    this.cancel = this.cancel.bind(this);
  }

  componentDidMount() {
    PatientService.getPatientById(this.state.patient_id).then((res) => {
      this.setState({ patient: res.data });
      console.log(res.data.patient_name);
    });
  }
  cancel() {
    this.props.history.push("/patients");
  }
  render() {
    const mystyle = {
      backgroundImage: "url(viewbg2.jpg)",
      backgroundPosition: "center",
      backgroundSize: "cover",
      height: "100vh",
      color: "white",
      padding: "40px",

      Width: "1000%",

      //width:'3000px',
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
        <div style={mystyle}>
          <br />
          <br />

          <div className="card col-md-6 offset-md-3" style={style1}>
            <h3
              className="text-center"
              style={{
                color: "white",
                fontfamily: "Georgia, 'Times New Roman', Times, serif",
                fontSize: "35px",
                textAlign: "bottom",
                background:
                  "linear-gradient(to bottom, #660066 0%, #660033 100%)",
                width: "600px",
                height: "60px",
                fontWeight: "bold",
                fontFamily: "revert",
                marginTop: "0px",
                marginLeft: "190px",
                borderRadius: "70px",
              }}
            >
              View Patient Details
            </h3>
            <div className="card-body" align="left">
              <div className="offset-md-3">
                <div className="row">
                  <div class="col-md-6">
                    <label
                      style={{
                        color: "black",
                        fontweight: "bold",
                        fontFamily: "Georgia, 'Times New Roman', Times, serif",
                        fontSize: "30px",
                      }}
                    >
                      Name :{" "}
                    </label>
                  </div>

                  <div
                    class="col-md-6"
                    style={{
                      color: "black",
                      fontweight: "bold",
                      fontFamily: "Georgia, 'Times New Roman', Times, serif",
                      fontSize: "30px",
                    }}
                  >
                    {this.state.patient.patient_name}
                  </div>
                </div>
                <br />
                <div className="row">
                  <div class="col-md-6">
                    <label
                      style={{
                        color: "black",
                        fontweight: "bold",
                        fontFamily: "Georgia, 'Times New Roman', Times, serif",
                        fontSize: "30px",
                      }}
                    >
                      Location :{" "}
                    </label>
                  </div>

                  <div
                    class="col-md-6"
                    style={{
                      color: "black",
                      fontweight: "bold",
                      fontFamily: "Georgia, 'Times New Roman', Times, serif",
                      fontSize: "30px",
                    }}
                  >
                    {this.state.patient.patient_location}
                  </div>
                </div>
                <br />

                <div className="row">
                  <div class="col-md-6">
                    <label
                      style={{
                        color: "black",
                        fontweight: "bold",
                        fontFamily: "Georgia, 'Times New Roman', Times, serif",
                        fontSize: "30px",
                      }}
                    >
                      From Date:{" "}
                    </label>
                  </div>
                  <div
                    class="col-md-6"
                    style={{
                      color: "black",
                      fontweight: "bold",
                      fontFamily: "Georgia, 'Times New Roman', Times, serif",
                      fontSize: "30px",
                    }}
                  >
                    {this.state.patient.from_date}
                  </div>
                </div>
                <br />

                <div className="row">
                  <div class="col-md-6">
                    <label
                      style={{
                        color: "black",
                        fontweight: "bold",
                        fontFamily: "Georgia, 'Times New Roman', Times, serif",
                        fontSize: "30px",
                      }}
                    >
                      To Date:{" "}
                    </label>
                  </div>
                  <div
                    class="col-md-6"
                    style={{
                      color: "black",
                      fontweight: "bold",
                      fontFamily: "Georgia, 'Times New Roman', Times, serif",
                      fontSize: "30px",
                    }}
                  >
                    {this.state.patient.to_date}
                  </div>
                </div>
                <br />

                <div className="row">
                  <div class="col-md-6">
                    <label
                      style={{
                        color: "black",
                        fontweight: "bold",
                        fontFamily: "Georgia, 'Times New Roman', Times, serif",
                        fontSize: "30px",
                      }}
                    >
                      care Type{" "}
                    </label>
                  </div>
                  <div
                    class="col-md-6"
                    style={{
                      color: "black",
                      fontweight: "bold",
                      fontFamily: "Georgia, 'Times New Roman', Times, serif",
                      fontSize: "30px",
                    }}
                  >
                    {this.state.patient.caretype}
                  </div>
                </div>
              </div>
            </div>
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
        </div>
      </body>
    );
  }
}

export default ViewPatientComponent;
