package com.example.Quickcareservicee.controller;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.Quickcareservicee.exception.ResourceNotFoundException;
import com.example.Quickcareservicee.model.Booking;
import com.example.Quickcareservicee.model.CareType;
import com.example.Quickcareservicee.model.Caretaker;
import com.example.Quickcareservicee.model.CaretakerList;
import com.example.Quickcareservicee.model.Customer;
import com.example.Quickcareservicee.model.Patient;
import com.example.Quickcareservicee.model.PatientHistory;
import com.example.Quickcareservicee.model.PatientList;
import com.example.Quickcareservicee.service.CaretakerService;
import com.example.Quickcareservicee.service.CustomerService;
import com.example.Quickcareservicee.service.PatientService;

@RestController
@CrossOrigin(origins="http://localhost:3000")
@RequestMapping("/quickcareservice")
public class CaretakerController {


//////////booked caretaker Patient list
@GetMapping("/PatientList/{caretaker_id}")
public List <PatientList> getCaretakerList(@PathVariable int caretaker_id)
{
CaretakerService caretakerservice=new CaretakerService();
return caretakerservice.getPatientList(caretaker_id);
}

///Reason of rejection
@PutMapping("/Caretaker/patient-ReasonOfRejection/{patient_id}")

ResponseEntity<Object> PatientStatusRejected(@PathVariable int patient_id,@RequestBody Booking booking){
    System.out.println(patient_id);
CaretakerService caretakerservice=new CaretakerService();
try {
       if((caretakerservice.PatientStatusRejected(patient_id,booking)).equals("updated"))
        return new ResponseEntity<>("Reason of Rejection updated successfully",HttpStatus.OK);
           return new ResponseEntity<>("Searched not found",HttpStatus.NOT_FOUND);
}catch(Exception e) {
return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
}

}

//////////////Rejected
@PutMapping("/Caretaker/Patient-RejectedStatus/{patient_id}")

ResponseEntity<Object> StatusRejected(@PathVariable int patient_id){
    System.out.println(patient_id);
CaretakerService caretakerservice=new CaretakerService();
try {
       if((caretakerservice.StatusRejected(patient_id)).equals("updated"))
        return new ResponseEntity<>(" Status Rejected Updated",HttpStatus.OK);
           return new ResponseEntity<>("Searched not found",HttpStatus.NOT_FOUND);
}catch(Exception e) {
return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
}

}

//////////////Accepted Status
@PutMapping("/Caretaker/Patient-AcceptedStatus/{patient_id}")

ResponseEntity<Object> StatusAccepted(@PathVariable int patient_id){
    System.out.println(patient_id);
CaretakerService caretakerservice=new CaretakerService();
try {
       if((caretakerservice.StatusAccepted(patient_id)).equals("updated"))
        return new ResponseEntity<>(" Status Accepted Updated",HttpStatus.OK);
           return new ResponseEntity<>("Searched not found",HttpStatus.NOT_FOUND);
}catch(Exception e) {
return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
}

}


///PatientHistory
@GetMapping("/Caretaker/PatientHistory")
ResponseEntity<Object> displayPatient(@RequestParam("caretaker_id") Integer caretaker_id) {
System.out.println("CaretakerController"+caretaker_id);
CaretakerService caretakerservice=new CaretakerService();
List<PatientHistory> patientHistory=caretakerservice.patientHistory(caretaker_id);
return new ResponseEntity<>(patientHistory,HttpStatus.OK);

}


/////////Getcaretaker profile
@GetMapping("/GetcaretakerProfile")
public List<CareType> GetcaretakerProfile()
{
CaretakerService crs = new CaretakerService();
return crs.GetcaretakerProfile();
}

//////////Add patient
@PostMapping("/AddPatient")
public String AddPatient(@RequestBody Patient patient)
{
System.out.println("AddPatient() done..Received data");
PatientService patientService = new PatientService();
return patientService.patientAdd(patient);
}

/////////////Registration
@PostMapping("/Caretaker_register")
public String caretaker (@RequestBody Caretaker caretaker)
{
  System.out.println("Caretaker Registration Done");
  CaretakerService caretakerService = new CaretakerService();
  return caretakerService.CaretakerService(caretaker);
}

/////////////Caretaker Login
     @PostMapping("/Caretaker/Login")
      ResponseEntity<Object> Login(@RequestBody Caretaker caretaker) throws ResourceNotFoundException{
CaretakerService caretakerService = new CaretakerService();
List<Caretaker> login=caretakerService.caretakerlogin(caretaker.getCaretaker_email(), caretaker.getCaretaker_pwd(),caretaker.getUsertype());
if(login.size()==1)
       return new ResponseEntity<>(login.get(0),HttpStatus.OK);
else
{
Caretaker caretakerobj=new Caretaker();
caretakerobj.setCaretaker_email("Invalid");
return new ResponseEntity<>(caretakerobj,HttpStatus.OK);
}
}
}