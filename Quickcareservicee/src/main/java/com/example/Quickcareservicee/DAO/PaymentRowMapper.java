package com.example.Quickcareservicee.DAO;

import java.sql.ResultSet;
import java.sql.SQLException;

import org.springframework.jdbc.core.RowMapper;

import com.example.Quickcareservicee.model.Payment;

public class PaymentRowMapper implements RowMapper<Payment>{
   
	@Override
	public Payment mapRow(ResultSet rs, int rowNum) throws SQLException
	{
		Payment payment = new Payment();
		payment.setPayment_id(rs.getInt("payment_id"));
		payment.setCaretaker_id(rs.getInt("caretaker_id"));
		payment.setPatient_id(rs.getInt("patient_id"));
		payment.setCredit_cardno(rs.getString("credit_cardno"));
		payment.setCvv(rs.getInt("cvv"));
		payment.setExpiry(rs.getDate("expiry"));
		payment.setNameoncard(rs.getString("nameoncard"));
		
		return payment;
		
		
	}
}
