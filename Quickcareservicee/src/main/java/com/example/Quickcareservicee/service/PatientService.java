package com.example.Quickcareservicee.service;

import java.util.List;

import com.example.Quickcareservicee.DAO.PatientDaoImpl;

import com.example.Quickcareservicee.model.Patient;
import com.example.Quickcareservicee.model.PatientList;

public class PatientService {
	
	PatientDaoImpl patientdaoimpl=new PatientDaoImpl();
	
	//// Display Patient List
	public List<PatientList> patientList(int cust_id) {
		System.out.println("Service Class Found id:"+cust_id);
		
		return patientdaoimpl.patientList(cust_id);
	}
	public List<PatientList> patientList() {
		System.out.println("Service Class Found id:");
		
		return patientdaoimpl.patientList();
	}
	
	
	///Delete Patient List
	public String delete(int patient_id) {
		
		return patientdaoimpl.delete(patient_id);
	}

	public Object updateProfile(int patient_id,Patient patient) {
		return patientdaoimpl.updateProfile(patient_id,patient);
		
	}

/////////GetAllpatientList Dummy
	public List<PatientList> patientAllList() {
System.out.println("Service Class Found:");
		
		return patientdaoimpl.patientAllList();
	}


	public String patientAdd(Patient patient) {
		return patientdaoimpl.PatientAdd(patient);
		
	}


	public List<Patient> ViewpatientList(int patient_id) {
		System.out.println("SerViceClass View Patient:"+patient_id);
		return patientdaoimpl.ViewpatientList(patient_id);
		
		
	}
	
	
	
	

}
