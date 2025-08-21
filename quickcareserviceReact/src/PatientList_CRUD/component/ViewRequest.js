import React, { Component } from "react";
import PatientService from "../Services/PatientService";

export default class ViewRequest extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.match.params.id,
    };
  }

  accept(id) {
    PatientService.AcceptedStatus(id);
    // this.props.history.push(`/patient-status/${id}`);
    // this.props.history.push({
    //     pathname: "/patient-status",
    //     state: { statusA: "Accepted" }
    // });
  }

  componentDidMount() {}

  render() {
    return (
      <div className="edit-form">
        <h4 align="center"> Tutorial </h4>
        <form>
          <div className="form-group">
            <label htmlFor="title">Title</label>
            {/* <input type="text" className="form-control" id="title" value={this.state.currentTutorial.title} onChange ={this.onChangeTitle}/> */}
          </div>
          <br />

          <div className="form-group">
            <label htmlFor="description">Description</label>
            {/* <input type="text" className="form-control" id="description" value={this.state.currentTutorial.description}  */}
            {/* onChange ={this.onChangeDescription}/> */}
          </div>
          <br />

          <div className="form-group">
            <label>
              <strong>Status :&nbsp;</strong>
            </label>
            {/* {this.state.currentTutorial.published?"Published":"Pending"} */}
            <button onClick={() => this.accept(this.state.id)}>
              Accept1234
            </button>
          </div>
          <br />
        </form>
      </div>
    );
  }

  reject(id) {
    PatientService.RejectedStatus(id);
    // this.props.history.push(`/patient-status/${id}`);
    // this.props.history.push({
    //     pathname: "/patient-status",
    //     state: { statusA: "Accepted" }
    // });
  }

  componentDidMount() {}

  render() {
    return (
      <div className="edit-form">
        <h4 align="center"> Tutorial </h4>
        <form>
          <div className="form-group">
            <label htmlFor="title">Title</label>
            {/* <input type="text" className="form-control" id="title" value={this.state.currentTutorial.title} onChange ={this.onChangeTitle}/> */}
          </div>
          <br />

          <div className="form-group">
            <label htmlFor="description">Description</label>
            {/* <input type="text" className="form-control" id="description" value={this.state.currentTutorial.description}  */}
            {/* onChange ={this.onChangeDescription}/> */}
          </div>
          <br />

          <div className="form-group">
            <label>
              <strong>Status :&nbsp;</strong>
            </label>
            {/* {this.state.currentTutorial.published?"Published":"Pending"} */}
            <button onClick={() => this.reject(this.state.id)}>
              Reject1234
            </button>
          </div>
          <br />
        </form>
      </div>
    );
  }
}
