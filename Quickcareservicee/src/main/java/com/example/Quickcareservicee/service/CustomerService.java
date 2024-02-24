package com.example.Quickcareservicee.service;

import java.util.List;
import java.util.Map;

import com.example.Quickcareservicee.DAO.CustomerDAOImpl;
import com.example.Quickcareservicee.model.BookCaretakerList;
import com.example.Quickcareservicee.model.Caretaker;
import com.example.Quickcareservicee.model.CaretakerList;
import com.example.Quickcareservicee.model.Customer;
import com.example.Quickcareservicee.model.Patient;

public class CustomerService {

	CustomerDAOImpl customerdaoimpl = new CustomerDAOImpl();

////////////Working login
	public List<Customer> custlogin(String cust_email, String cust_pwd, String usertype) {
		List<Customer> login = customerdaoimpl.custlogin(cust_email, cust_pwd, usertype);
		System.out.println("Serviceclass " + cust_email);
		return login;

	}

////////////Customer Registration
	public String CustomerService(Customer customer) {
		return customerdaoimpl.CustomerRegistration(customer);
	}

///////////////caretakerList
	public List<CaretakerList> getCaretakerList(int cust_id) {
		return customerdaoimpl.getCaretakerList(cust_id);

	}

//////////Booking-5 functionality////////////////////////////////

////////////CaretakerList for Booking
	public List<BookCaretakerList> bookingList() {
		System.out.println("Service found...");
		return customerdaoimpl.bookingList();

	}

/////////View Selected caretakerDetails by caretaker_id
	public Caretaker BookCaretakerListById(int caretaker_id) {
		return customerdaoimpl.getListById(caretaker_id);

	}

	public List<Caretaker> caretakerAll() {
		return customerdaoimpl.caretakerAll();
	}
///////// End of View Selected caretakerDetails by caretaker_id

//////////DropDown Caretaker booking
	public List<Map<String, Object>> dropdownpatient(int cust_id) {

		return customerdaoimpl.dropdownpatients(cust_id);
	}

////////////////Update status Book caretaker////////////////////////////
	public Object updateStatus(int caretaker_id, Patient patient) {

		System.out.println("inside service");
		return customerdaoimpl.updateStatus(caretaker_id, patient);
	}

///////////////Insert into Booking table
	public boolean insertBooking(Patient patient) {

		return customerdaoimpl.insertBooking(patient);
	}

///////////////////////End of Booking-5 functionality////////////////////////////////////

}