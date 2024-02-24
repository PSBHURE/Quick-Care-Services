package com.example.Quickcareservicee.model;

public class Caretaker {
	int caretaker_id;
	String caretaker_name;
	String caretaker_pwd;
	String caretaker_email;
	String caretaker_gender;
	int caretaker_age;
	String caretaker_phone;
	String caretaker_profile;
	String caretaker_location;
	String caretaker_exp;

	String usertype;

	public String getUsertype() {
		return usertype;
	}

	public void setUsertype(String usertype) {
		this.usertype = usertype;
	}

	double charges;

	public String getCaretaker_gender() {
		return caretaker_gender;
	}

	public void setCaretaker_gender(String caretaker_gender) {
		this.caretaker_gender = caretaker_gender;
	}

	public int getCaretaker_id() {
		return caretaker_id;
	}

	public void setCaretaker_id(int caretaker_id) {
		this.caretaker_id = caretaker_id;
	}

	public String getCaretaker_name() {
		return caretaker_name;
	}

	public void setCaretaker_name(String caretaker_name) {
		this.caretaker_name = caretaker_name;
	}

	public String getCaretaker_pwd() {
		return caretaker_pwd;
	}

	public void setCaretaker_pwd(String caretaker_pwd) {
		this.caretaker_pwd = caretaker_pwd;
	}

	public String getCaretaker_email() {
		return caretaker_email;
	}

	public void setCaretaker_email(String caretaker_email) {
		this.caretaker_email = caretaker_email;
	}

	public int getCaretaker_age() {
		return caretaker_age;
	}

	public void setCaretaker_age(int caretaker_age) {
		this.caretaker_age = caretaker_age;
	}

	public String getCaretaker_phone() {
		return caretaker_phone;
	}

	public void setCaretaker_phone(String caretaker_phone) {
		this.caretaker_phone = caretaker_phone;
	}

	public String getCaretaker_location() {
		return caretaker_location;
	}

	public void setCaretaker_location(String caretaker_location) {
		this.caretaker_location = caretaker_location;
	}

	public String getCaretaker_profile() {
		return caretaker_profile;
	}

	public void setCaretaker_profile(String caretaker_profile) {
		this.caretaker_profile = caretaker_profile;
	}

	public String getCaretaker_exp() {
		return caretaker_exp;
	}

	public void setCaretaker_exp(String caretaker_exp) {
		this.caretaker_exp = caretaker_exp;
	}

	public double getCharges() {
		return charges;
	}

	public void setCharges(double charges) {
		this.charges = charges;
	}

}
