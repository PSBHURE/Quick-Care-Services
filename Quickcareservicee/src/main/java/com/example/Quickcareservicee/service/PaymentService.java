package com.example.Quickcareservicee.service;

import java.util.List;

import com.example.Quickcareservicee.model.Payment;
import com.example.Quickcareservicee.DAO.PaymentDAOImpl;

public class PaymentService {
     PaymentDAOImpl paymentDAOImpl = new PaymentDAOImpl();
     
	public String PaymentService(Payment payment) {
		return paymentDAOImpl.PaymentService(payment);
	}

	public List<Payment> getAllPayment() {
		System.out.println("Inside Service getAllPayment()...");
		return paymentDAOImpl.getAllPayment();
	}

}
