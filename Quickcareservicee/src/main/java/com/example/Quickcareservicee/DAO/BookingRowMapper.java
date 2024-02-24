package com.example.Quickcareservicee.DAO;

import java.sql.ResultSet;
import java.sql.SQLException;

import org.springframework.jdbc.core.RowMapper;

import com.example.Quickcareservicee.model.Booking;

public class BookingRowMapper implements RowMapper<Booking> {

	@Override
	public Booking mapRow(ResultSet rs, int rowNum) throws SQLException {
		Booking booking = new Booking();

		booking.setBooking_id(rs.getInt("booking_id"));
		booking.setCust_id(rs.getInt("cust_id"));
		booking.setCaretaker_id(rs.getInt("caretaker_id"));

		booking.setReason_ofrejection(rs.getString("reason_ofrejection"));
		booking.setPatient_id(rs.getInt("patient_id"));

		return booking;
	}

}