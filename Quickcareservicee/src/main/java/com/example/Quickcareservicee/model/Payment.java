package com.example.Quickcareservicee.model;

import java.sql.Date;

public class Payment {
	int payment_id;
	String credit_cardno;
	int cvv;
	Date expiry;
	String nameoncard;
	int caretaker_id;
	int patient_id;
	public int getPayment_id() {
		return payment_id;
	}
	public void setPayment_id(int payment_id) {
		this.payment_id = payment_id;
	}
	public String getCredit_cardno() {
		return credit_cardno;
	}
	public void setCredit_cardno(String credit_cardno) {
		this.credit_cardno = credit_cardno;
	}
	public int getCvv() {
		return cvv;
	}
	public void setCvv(int cvv) {
		this.cvv = cvv;
	}
	public Date getExpiry() {
		return expiry;
	}
	public void setExpiry(Date expiry) {
		this.expiry = expiry;
	}
	public String getNameoncard() {
		return nameoncard;
	}
	public void setNameoncard(String nameoncard) {
		this.nameoncard = nameoncard;
	}
	public int getCaretaker_id() {
		return caretaker_id;
	}
	public void setCaretaker_id(int caretaker_id) {
		this.caretaker_id = caretaker_id;
	}
	public int getPatient_id() {
		return patient_id;
	}
	public void setPatient_id(int patient_id) {
		this.patient_id = patient_id;
	}
	
}
