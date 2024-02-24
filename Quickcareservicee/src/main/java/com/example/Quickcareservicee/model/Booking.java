package com.example.Quickcareservicee.model;

public class Booking {
	int booking_id;
	int cust_id;
	int caretaker_id;
	double total_amount;
	String reason_ofrejection;
	int patient_id;
	String payment_status;
	public int getBooking_id() {
		return booking_id;
	}
	public void setBooking_id(int booking_id) {
		this.booking_id = booking_id;
	}
	public int getCust_id() {
		return cust_id;
	}
	public void setCust_id(int cust_id) {
		this.cust_id = cust_id;
	}
	public int getCaretaker_id() {
		return caretaker_id;
	}
	public void setCaretaker_id(int caretaker_id) {
		this.caretaker_id = caretaker_id;
	}
	public double getTotal_amount() {
		return total_amount;
	}
	public void setTotal_amount(double total_amount) {
		this.total_amount = total_amount;
	}
	public String getReason_ofrejection() {
		return reason_ofrejection;
	}
	public void setReason_ofrejection(String reason_ofrejection) {
		this.reason_ofrejection = reason_ofrejection;
	}
	public int getPatient_id() {
		return patient_id;
	}
	public void setPatient_id(int patient_id) {
		this.patient_id = patient_id;
	}
	public String getPayment_status() {
		return payment_status;
	}
	public void setPayment_status(String payment_status) {
		this.payment_status = payment_status;
	}

}
