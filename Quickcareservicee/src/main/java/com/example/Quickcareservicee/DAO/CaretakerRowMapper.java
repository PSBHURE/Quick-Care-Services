package com.example.Quickcareservicee.DAO;

import java.sql.ResultSet;
import java.sql.SQLException;

import org.springframework.jdbc.core.RowMapper;

import com.example.Quickcareservicee.model.Caretaker;



public class CaretakerRowMapper implements RowMapper<Caretaker>{

	@Override
	public Caretaker mapRow(ResultSet rs, int rowNum) throws SQLException {
		Caretaker caretaker=new Caretaker();
		
		caretaker.setCaretaker_id(rs.getInt("caretaker_id"));
		caretaker.setCaretaker_name(rs.getString("caretaker_name"));
		caretaker.setCaretaker_pwd(rs.getString("caretaker_pwd"));
		caretaker.setCaretaker_email(rs.getString("caretaker_email"));
		caretaker.setCaretaker_age(rs.getInt("caretaker_age"));
		caretaker.setCaretaker_phone(rs.getString("caretaker_phone"));
		caretaker.setCaretaker_location(rs.getString("caretaker_location"));
		caretaker.setCaretaker_profile(rs.getString("caretaker_profile"));
		caretaker.setCaretaker_exp(rs.getString("caretaker_exp"));
		caretaker.setCharges(rs.getDouble("charges"));
		caretaker.setCaretaker_gender(rs.getString("caretaker_gender"));
		caretaker.setUsertype(rs.getString("usertype"));
		
		
		return caretaker;
	}

}
