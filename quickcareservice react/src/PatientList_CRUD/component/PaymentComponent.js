import React, { Component } from "react";
import PatientService from "../Services/PatientService";

class PaymentComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.match.params.id,
      credit_cardno: "",
      cvv: "",
      expiry: "",
      nameoncard: "",
      caretaker_id: 3,
      patient_id: 1,
    };

    this.changecredit_cardnoHandler =
      this.changecredit_cardnoHandler.bind(this);
    this.changecvvHandler = this.changecvvHandler.bind(this);
    this.changeexpiryHandler = this.changeexpiryHandler.bind(this);
    this.changenameoncardHandler = this.changenameoncardHandler.bind(this);

    this.onAddPayment = this.onAddPayment.bind(this);
  }
  componentDidMount() {
    PatientService.Payment().then((res) => {
      this.setState({ employees: res.data });
    });
  }
  onAddPayment(event) {
    let employee = {
      caretaker_id: sessionStorage.getItem("caretaker_id"),
      patient_id: sessionStorage.getItem("patient_id"),
      caretaker_id: 3,
      patient_id: 1,
      credit_cardno: this.state.credit_cardno,
      cvv: this.state.cvv,
      expiry: this.state.expiry,
      nameoncard: this.state.nameoncard,
    };
    console.log("employee =>" + JSON.stringify(employee));
    PatientService.Payment(employee).then((res) => {
      alert("Your Payment is Successfully Done!!");
      console.log("After adding Payment, data returned is " + res.data);
      this.props.history.push("/caretakerlist"); //routing to caretakerList page
    });
    event.preventDefault();
  }
  changecredit_cardnoHandler(event) {
    this.setState({ credit_cardno: event.target.value });
  }
  changecvvHandler(event) {
    this.setState({ cvv: event.target.value });
  }
  changeexpiryHandler(event) {
    this.setState({ expiry: event.target.value });
  }
  changenameoncardHandler(event) {
    this.setState({ nameoncard: event.target.value });
  }
  getTitle() {
    <h3 className="text-center">Make Payment</h3>;
  }
  render() {
    const style1 = {
      //backgroundImage: "url(cash.jpg)",
      backgroundColor: "rgba(230, 230, 230, 0.7000)",
      padding: "50px",
      borderRadius: "10px",
      color: "black",
    };
    return (
      <div style={{ backgroundImage: "url(cdbg.jpg)", height: "1500px" }}>
        <br />
        <br />
        <div
          className="container animate_animated animate_fadeInDown"
          style={style1}
        >
          <div>
            {this.getTitle()}
            <div style={{ marginBottom: "50px" }}>
              <h1
                class="display-4"
                style={{
                  color: "white",
                  fontfamily: "Georgia, 'Times New Roman', Times, serif",
                  fontSize: "40px",
                  textAlign: "bottom",
                  background:
                    "linear-gradient(to bottom, #660033 0%, #cc6600 100%)",
                  width: "800px",
                  height: "70px",
                  fontWeight: "bold",
                  fontFamily: "revert",
                  marginLeft: "250px",
                  marginTop: "10px",
                  borderRadius: "50px",
                  align: "center",
                }}
              >
                Enter Payment Details
              </h1>
            </div>
            <table align="center" style={{ width: "1000px" }}>
              <tr className="col-md-9">
                <td>Enter your Card number: </td>
                <td>
                  <input
                    className="form-control"
                    placeholder=" Credit Card number"
                    name="credit_cardno"
                    value={this.state.credit_card}
                    onChange={this.changecredit_cardnoHandler}
                  />
                </td>
              </tr>
              <br></br>
              <tr>
                <td>Enter cvv:</td>
                <td>
                  <input
                    className="form-control"
                    placeholder=" cvv"
                    name="cvv"
                    value={this.state.cvv}
                    onChange={this.changecvvHandler}
                    style={{ width: "200px" }}
                  />
                </td>
              </tr>
              <br></br>
              <tr>
                <td>Expiry:</td>
                <td>
                  <input
                    className="form-control"
                    placeholder=" expiry"
                    name="expiry"
                    value={this.state.expiry}
                    onChange={this.changeexpiryHandler}
                    style={{ width: "200px" }}
                  />
                </td>
              </tr>
              <br></br>
              <tr>
                <td>Name On Card:</td>
                <td>
                  {" "}
                  <input
                    className="form-control"
                    placeholder=" Name On Card"
                    name="nameoncard"
                    value={this.state.nameoncard}
                    onChange={this.changenameoncardHandler}
                  />
                </td>
              </tr>
              <tr>
                <td></td>
                <td>
                  {" "}
                  <button
                    className="btn btn-success"
                    onClick={this.onAddPayment}
                    align="center"
                    style={{ height: "70px", width: "150px" }}
                  >
                    <b>Pay Rs.{}</b>
                  </button>
                </td>
              </tr>
            </table>
          </div>
        </div>
      </div>
    );
  }
}
export default PaymentComponent;
