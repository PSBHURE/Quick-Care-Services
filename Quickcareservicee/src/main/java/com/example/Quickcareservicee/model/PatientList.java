package com.example.Quickcareservicee.model;

import java.sql.Date;

public class PatientList {
	    
	    
	    int patient_id;
		String patient_name;
		String patient_location;
		Date from_date;
		Date to_date;
		String caretype;
		String status;
		
		
		
		
		
		
		public String getStatus() {
			return status;
		}
		public void setStatus(String status) {
			this.status = status;
		}
		public int getPatient_id() {
			return patient_id;
		}
		public void setPatient_id(int patient_id) {
			this.patient_id = patient_id;
		}
		public String getPatient_name() {
			return patient_name;
		}
		public void setPatient_name(String patient_name) {
			this.patient_name = patient_name;
		}
		public String getPatient_location() {
			return patient_location;
		}
		public void setPatient_location(String patient_location) {
			this.patient_location = patient_location;
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
		

}
