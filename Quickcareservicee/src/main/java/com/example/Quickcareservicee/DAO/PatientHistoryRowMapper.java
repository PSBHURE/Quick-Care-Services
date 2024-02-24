package com.example.Quickcareservicee.DAO;

import java.sql.ResultSet;
import java.sql.SQLException;

import org.springframework.jdbc.core.RowMapper;

import com.example.Quickcareservicee.model.PatientHistory;

public class PatientHistoryRowMapper implements RowMapper<PatientHistory>{

	@Override
	public PatientHistory mapRow(ResultSet rs, int rowNum) throws SQLException {
		PatientHistory patienthistory=new PatientHistory();
		patienthistory.setPatient_name(rs.getString("patient_name"));
		patienthistory.setPatient_location(rs.getString("patient_location"));
		patienthistory.setStatus(rs.getString("status"));
		return patienthistory;
	}

}
