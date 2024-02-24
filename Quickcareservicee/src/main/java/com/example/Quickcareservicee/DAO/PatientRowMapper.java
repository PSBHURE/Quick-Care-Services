package com.example.Quickcareservicee.DAO;

import java.sql.ResultSet;
import java.sql.SQLException;

import org.springframework.jdbc.core.RowMapper;

import com.example.Quickcareservicee.model.Patient;



public class PatientRowMapper implements RowMapper<Patient>{

	@Override
	public Patient mapRow(ResultSet rs, int rowNum) throws SQLException {
		Patient patient=new Patient();
		patient.setPatient_id(rs.getInt("patient_id"));
		patient.setCust_id(rs.getInt("cust_id"));
		patient.setPatient_name(rs.getString("patient_name"));
		patient.setPatient_gender(rs.getString("patient_gender"));
		patient.setPatient_age(rs.getInt("patient_age"));
		patient.setPatient_location(rs.getString("patient_location"));
		patient.setService_hr(rs.getInt("service_hr"));
		patient.setFrom_date(rs.getDate("from_date"));
		patient.setTo_date(rs.getDate("to_date"));
		patient.setCaretype(rs.getString("caretype"));
		patient.setCaretaker_id(rs.getInt("caretaker_id"));
		patient.setStatus(rs.getString("status"));
		return patient;
	}

}
