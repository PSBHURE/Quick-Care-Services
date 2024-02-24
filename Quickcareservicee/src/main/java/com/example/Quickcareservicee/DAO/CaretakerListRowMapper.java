package com.example.Quickcareservicee.DAO;

import java.sql.ResultSet;
import java.sql.SQLException;

import org.springframework.jdbc.core.RowMapper;

import com.example.Quickcareservicee.model.CaretakerList;



public class CaretakerListRowMapper implements RowMapper<CaretakerList>{
	@Override
	public CaretakerList mapRow(ResultSet rs, int rowNum) throws SQLException
	{
		CaretakerList caretakerList = new CaretakerList();
		//caretakerList.setCust_id(rs.getInt("cust_id"));
		caretakerList.setPatient_name(rs.getString("patient_name"));
		caretakerList.setCaretaker_name(rs.getString("caretaker_name"));
		caretakerList.setCaretaker_location(rs.getString("caretaker_location"));
		caretakerList.setCaretype(rs.getString("caretype"));
		caretakerList.setStatus(rs.getString("status"));
		caretakerList.setReason_ofrejection(rs.getString("reason_ofrejection"));
		return caretakerList;
	}

}
