import axios from "axios";
const PATIENT_API_BASE_URL = "http://localhost:8080/quickcareservice";
class PatientService {
  getPatients(cust_id) {
    return axios.get(
      PATIENT_API_BASE_URL + "/Customer/PatientList?cust_id=" + cust_id
    );
  }
  createPatient(patient) {
    var URL = PATIENT_API_BASE_URL + "/Addpatient";
    console.log("Patient data:" + patient);
    return axios.post(URL, patient);
  }

  getPatientById(patient_id) {
    console.log("PatientService-view :" + patient_id);
    var URL =
      PATIENT_API_BASE_URL +
      "/Customer/ViewPatientList?patient_id=" +
      patient_id;

    return axios.get(URL);
  }

  getPatientHistory(patient_id) {
    console.log("getid:" + patient_id);

    console.log("patient_id => " + JSON.stringify(patient_id));
    var URL =
      PATIENT_API_BASE_URL +
      "/Caretaker/PatientHistory?caretaker_id=" +
      patient_id;
    console.log("getid:" + patient_id);
    return axios.get(URL);
  }

  ////////////Status Patient List
  getPatientstatus(patient_id) {
    var URL = PATIENT_API_BASE_URL + "/PatientList/" + patient_id;
    const response = axios.get(URL);
    return response;
  }

  updatePatient(patient_id, patient) {
    var URL =
      PATIENT_API_BASE_URL + `/Customer/Patient/Update-Profile/${patient_id}`;
    console.log("update:" + patient_id);
    return axios.put(URL, patient);
  }
  deletePatient(id) {
    var URL = PATIENT_API_BASE_URL + `/Customer/DeletePatient/${id}`;
    console.log("getid:" + id);
    return axios.delete(URL);
  }

  customerlogin(LoginDetails) {
    var URL = PATIENT_API_BASE_URL + "/Customer/Login";
    return axios.post(URL, LoginDetails);
  }

  ////////////////caretaker login
  caretakerlogin(LoginDetails) {
    var URL = PATIENT_API_BASE_URL + "/Caretaker/Login";
    return axios.post(URL, LoginDetails);
  }

  /////Booking caretakerlist alldetails
  getBookCaretakerList() {
    return axios.get(PATIENT_API_BASE_URL + "/BookCaretakerList");
  }
  /////////onClick of view
  getBookCaretakerListById(id) {
    var URL = PATIENT_API_BASE_URL + "/BookCaretakerListById/" + id;
    return axios.get(URL);
  }
  /////dropdown
  getPatientByIddrop(cust_id) {
    var URL = PATIENT_API_BASE_URL + `/Dropdownpatient/${cust_id}`;
    return axios.get(URL);
  }
  ////////Update status caretakerid in patient_details
  finalBook(id, employee) {
    console.log("FinalBook" + id);
    var URL = PATIENT_API_BASE_URL + "/finalBook/" + id;
    return axios.put(URL, employee);
  }
  insertBooking(employee) {
    var URL = PATIENT_API_BASE_URL + "/insertBooking";
    return axios.post(URL, employee);
  }

  ///////////caretakerList
  getCaretakerListid(cust_id) {
    return axios.get(PATIENT_API_BASE_URL + "/CaretakerList/" + cust_id);
  }

  //////Payment
  Payment(employee) {
    var URL = PATIENT_API_BASE_URL + "/Payment";
    return axios.post(URL, employee);
  }

  //////Customer Registration
  CustomerRegister(CustomerRegister) {
    var URL = PATIENT_API_BASE_URL + "/Customer_register";
    console.log("Customer Register Successful : " + CustomerRegister);
    return axios.post(URL, CustomerRegister);
  }

  ///////////caretaker Registration
  createCaretaker(employee) {
    var URL = PATIENT_API_BASE_URL + "/Caretaker_register";
    console.log("Customer Register Successful : " + employee);
    return axios.post(URL, employee);
  }
  ///////////Accepted status
  AcceptedStatus(id, patient) {
    var URL = PATIENT_API_BASE_URL + `/Caretaker/Patient-AcceptedStatus/${id}`;
    console.log("update:" + id);
    return axios.put(URL, patient);
  }

  ///////////Rejected status
  Rejectedstatus(id, patient) {
    var URL = PATIENT_API_BASE_URL + `/Caretaker/Patient-RejectedStatus/${id}`;
    console.log("update:" + id);
    return axios.put(URL, patient);
  }

  /////////////Update Reason
  updateReason(id, patient) {
    var URL =
      PATIENT_API_BASE_URL + `/Caretaker/patient-ReasonOfRejection/${id}`;
    console.log("update:" + id);
    var obj = axios.put(URL, patient);
    console.log("obj:" + obj);
    return obj;
  }
  ////////////Drop Down

  dropdownCaretaker() {
    var URL = PATIENT_API_BASE_URL + `/GetcaretakerProfile`;
    return axios.get(URL);
  }
}
export default new PatientService();
