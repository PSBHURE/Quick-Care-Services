package com.example.Quickcareservicee.DAO;

import java.sql.ResultSet;
import java.sql.SQLException;

import org.springframework.jdbc.core.RowMapper;


import com.example.Quickcareservicee.model.StatusPatientList;

public class StatusPatientListRowMapper implements RowMapper<StatusPatientList> {

	@Override
	public StatusPatientList mapRow(ResultSet rs, int rowNum) throws SQLException {
		
		
		return null;
	}

}
