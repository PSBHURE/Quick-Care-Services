package com.example.Quickcareservicee.model;

import java.sql.Date;

public class Patient {
	
	int patient_id;
	int cust_id;
	String patient_name;
	String patient_gender;
	int patient_age;
	String patient_location;
	int service_hr;
	Date from_date;
	Date to_date;
	String caretype;
	int caretaker_id;
	String status;
	public Patient() {
		
	}
	public Patient(int patient_id, int cust_id, String patient_name, String patient_gender, int patient_age,
			String patient_location, int service_hr, Date from_date, Date to_date, String caretype, int caretaker_id,
			String status) {
		super();
		this.patient_id = patient_id;
		this.cust_id = cust_id;
		this.patient_name = patient_name;
		this.patient_gender = patient_gender;
		this.patient_age = patient_age;
		this.patient_location = patient_location;
		this.service_hr = service_hr;
		this.from_date = from_date;
		this.to_date = to_date;
		this.caretype = caretype;
		this.caretaker_id = caretaker_id;
		this.status = status;
	}
	public int getPatient_id() {
		return patient_id;
	}
	public void setPatient_id(int patient_id) {
		this.patient_id = patient_id;
	}
	public int getCust_id() {
		return cust_id;
	}
	public void setCust_id(int cust_id) {
		this.cust_id = cust_id;
	}
	public String getPatient_name() {
		return patient_name;
	}
	public void setPatient_name(String patient_name) {
		this.patient_name = patient_name;
	}
	public String getPatient_gender() {
		return patient_gender;
	}
	public void setPatient_gender(String patient_gender) {
		this.patient_gender = patient_gender;
	}
	public int getPatient_age() {
		return patient_age;
	}
	public void setPatient_age(int patient_age) {
		this.patient_age = patient_age;
	}
	public String getPatient_location() {
		return patient_location;
	}
	public void setPatient_location(String patient_location) {
		this.patient_location = patient_location;
	}
	public int getService_hr() {
		return service_hr;
	}
	public void setService_hr(int service_hr) {
		this.service_hr = service_hr;
	}
	public Date getFrom_date() {
		return from_date;
	}
	public void setFrom_date(Date from_date) {
		this.from_date = from_date;
	}
	public Date getTo_date() {
		return to_date;
	}
	public void setTo_date(Date to_date) {
		this.to_date = to_date;
	}
	public String getCaretype() {
		return caretype;
	}
	public void setCaretype(String caretype) {
		this.caretype = caretype;
	}
	public int getCaretaker_id() {
		return caretaker_id;
	}
	public void setCaretaker_id(int caretaker_id) {
		this.caretaker_id = caretaker_id;
	}
	public String getStatus() {
		return status;
	}
	public void setStatus(String status) {
		this.status = status;
	}
	
	
	
	

}
