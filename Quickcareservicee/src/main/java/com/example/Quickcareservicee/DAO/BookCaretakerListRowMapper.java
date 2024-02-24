package com.example.Quickcareservicee.DAO;

import java.sql.ResultSet;
import java.sql.SQLException;

import org.springframework.jdbc.core.RowMapper;


import com.example.Quickcareservicee.model.BookCaretakerList;

public class BookCaretakerListRowMapper implements RowMapper<BookCaretakerList> {

	@Override
	public BookCaretakerList mapRow(ResultSet rs, int rowNum) throws SQLException {
		
		BookCaretakerList bookingList = new BookCaretakerList() ;
		bookingList.setCaretaker_id(rs.getInt("caretaker_id"));
		bookingList.setCaretaker_name(rs.getString("caretaker_name"));
		bookingList.setCaretaker_location(rs.getString("caretaker_location"));
		bookingList.setCaretaker_profile(rs.getString("caretaker_profile"));
		
		return bookingList;
	}

	
	
}
