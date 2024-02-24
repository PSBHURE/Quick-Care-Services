package com.example.Quickcareservicee.service;

import java.util.List;

import com.example.Quickcareservicee.DAO.CaretakerDaoImpl;
import com.example.Quickcareservicee.model.Booking;
import com.example.Quickcareservicee.model.CareType;
import com.example.Quickcareservicee.model.Caretaker;
import com.example.Quickcareservicee.model.CaretakerList;
import com.example.Quickcareservicee.model.Customer;
import com.example.Quickcareservicee.model.Patient;
import com.example.Quickcareservicee.model.PatientHistory;
import com.example.Quickcareservicee.model.PatientList;

public class CaretakerService {

	CaretakerDaoImpl caretakerdaoimpl = new CaretakerDaoImpl();

	public String caretakerRegister(Caretaker caretaker) {
		System.out.println(caretaker);
		return caretakerdaoimpl.Caretaker(caretaker);
	}

	public List<PatientHistory> patientHistory(Integer caretaker_id) {

		return caretakerdaoimpl.patientHistory(caretaker_id);
	}

/////////////Rejected Status
	public Object StatusRejected(int patient_id) {
		return caretakerdaoimpl.StatusRejected(patient_id);

	}

///////////Accepted Status
	public Object StatusAccepted(int patient_id) {

		return caretakerdaoimpl.StatusAccepted(patient_id);
	}

////////////Reason of rejection
	public Object PatientStatusRejected(int patient_id, Booking booking) {
		System.out.println("inside service");
		return caretakerdaoimpl.PatientStatusRejected(patient_id, booking);

	}

//////////Booked caretaker patient list
	public List<PatientList> getPatientList(int caretaker_id) {
		return caretakerdaoimpl.getPatientList(caretaker_id);

	}

	public String CaretakerService(Caretaker caretaker) {
		return caretakerdaoimpl.Caretaker(caretaker);

	}

	public List<Caretaker> caretakerlogin(String caretaker_email, String caretaker_pwd, String usertype) {

		List<Caretaker> login = caretakerdaoimpl.caretakerlogin(caretaker_email, caretaker_pwd, usertype);
		System.out.println("Serviceclass" + caretaker_email);
		return login;
	}

	public List<CareType> GetcaretakerProfile() {
		return caretakerdaoimpl.GetcaretakerProfile();
	}
}