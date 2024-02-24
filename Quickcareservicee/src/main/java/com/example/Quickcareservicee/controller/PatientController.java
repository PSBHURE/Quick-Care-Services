package com.example.Quickcareservicee.controller;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;



import com.example.Quickcareservicee.model.Patient;
import com.example.Quickcareservicee.model.PatientList;
import com.example.Quickcareservicee.service.CustomerService;
import com.example.Quickcareservicee.service.PatientService;


@RestController
@CrossOrigin(origins="http://localhost:3000")
@RequestMapping("/quickcareservice")
public class PatientController {
	
	////PatientList
	@GetMapping("/Customer/PatientList")
	ResponseEntity<Object> displayPatient(@RequestParam int  cust_id) {
		
		PatientService patientservice=new PatientService();
		List<PatientList> patientlist=patientservice.patientList(cust_id);
		return new ResponseEntity<>(patientlist,HttpStatus.OK);
		
		
	}
	@GetMapping("/patientdetails")
    public List<PatientList> getAllPatients(){
       
		PatientService patientservice=new PatientService();
        return patientservice.patientList();
    }
 
	
	/////////////////GetpatientDetails
	@GetMapping("/patientAlldetails")
    public List<PatientList> getAllPatientsDetails(){
       
		PatientService patientservice=new PatientService();
        return patientservice.patientAllList();
    }
 //////////////////View PatientList
	
	@GetMapping("/Customer/ViewPatientList")
	ResponseEntity<Object> ViewPatient(@RequestParam int  patient_id) {
		System.out.println("ViewPatientList"+patient_id);
		
		PatientService patientservice=new PatientService();
		List<Patient> patientlist=patientservice.ViewpatientList(patient_id);
		return new ResponseEntity<>(patientlist.get(0),HttpStatus.OK);
		
	}

	
	
	
	
	
	
	
	
	@DeleteMapping("Customer/DeletePatient/{patient_id}")
	public ResponseEntity<Object> Delete(@PathVariable int patient_id){
		PatientService patientservice=new PatientService();
		//try {
			if((patientservice.delete(patient_id)).equals("PatientList deleted"))
		        return new ResponseEntity<>("Deleted Successfully",HttpStatus.OK);
		          return new ResponseEntity<>("No Patient information found",HttpStatus.NOT_FOUND);
		//}catch(Exception e)
		////{
			//return new ResponseEntity<>("No Patient information found",HttpStatus.BAD_REQUEST);
			
		//}
		}
		
	
	
	
	
	
	
	
	
	
	/////////Update Patient
	@PutMapping("/Customer/Patient/Update-Profile/{patient_id}")
    ResponseEntity<Object> updatePatientProfile(@PathVariable int patient_id,@RequestBody Patient patient){
	     System.out.println(patient_id);
		 PatientService patientservice=new PatientService();
		 //try {
		        if((patientservice.updateProfile(patient_id,patient)).equals("updated"))
		        	return new ResponseEntity<>("Data updated successfully",HttpStatus.OK);
		            return new ResponseEntity<>("Searched not found",HttpStatus.NOT_FOUND);
	//}catch(Exception e) {
		//return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
		//}
		
	}
	
	
	
	
	@PostMapping("/Addpatient")
	public String AddPatient(@RequestBody Patient patient)
	{
		System.out.println("AddPatient() done..Received data");
		PatientService patientService = new PatientService();
		return patientService.patientAdd(patient);
	}
}
