package com.example.Quickcareservicee.DAO;

import java.sql.ResultSet;
import java.sql.SQLException;

import org.springframework.jdbc.core.RowMapper;


import com.example.Quickcareservicee.model.PatientList;

public class PatientListRowMapper implements RowMapper<PatientList>{

	@Override
	public PatientList mapRow(ResultSet rs, int rowNum) throws SQLException {
		PatientList patientlist=new PatientList();
	     
		patientlist.setPatient_id(rs.getInt("patient_id"));
	     patientlist.setPatient_name(rs.getString("patient_name"));
		patientlist.setPatient_location(rs.getString("patient_location"));
		patientlist.setFrom_date(rs.getDate("from_date"));
		patientlist.setTo_date(rs.getDate("to_date"));
		patientlist.setCaretype(rs.getString("caretype"));
		patientlist.setStatus(rs.getString("status"));
		
		
		return patientlist;
		
	}

}
