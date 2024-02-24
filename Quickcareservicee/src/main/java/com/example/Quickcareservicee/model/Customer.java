package com.example.Quickcareservicee.model;

public class Customer {
	
	int cust_id;
	String cust_name;
	String cust_pwd;
	String cust_email;
	String cust_phone;
	String cust_gender;
	String cust_location;
	String usertype;
	public String getUsertype() {
		return usertype;
	}
	public void setUsertype(String usertype) {
		this.usertype = usertype;
	}
	public int getCust_id() {
		return cust_id;
	}
	public void setCust_id(int cust_id) {
		this.cust_id = cust_id;
	}
	public String getCust_name() {
		return cust_name;
	}
	public void setCust_name(String cust_name) {
		this.cust_name = cust_name;
	}
	public String getCust_pwd() {
		return cust_pwd;
	}
	public void setCust_pwd(String cust_pwd) {
		this.cust_pwd = cust_pwd;
	}
	public String getCust_email() {
		return cust_email;
	}
	public void setCust_email(String cust_email) {
		this.cust_email = cust_email;
	}
	public String getCust_phone() {
		return cust_phone;
	}
	public void setCust_phone(String cust_phone) {
		this.cust_phone = cust_phone;
	}
	public String getCust_gender() {
		return cust_gender;
	}
	public void setCust_gender(String cust_gender) {
		this.cust_gender = cust_gender;
	}
	public String getCust_location() {
		return cust_location;
	}
	public void setCust_location(String cust_location) {
		this.cust_location = cust_location;
	}
	

}
