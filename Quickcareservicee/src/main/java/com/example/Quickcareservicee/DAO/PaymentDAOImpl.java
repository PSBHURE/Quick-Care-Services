package com.example.Quickcareservicee.DAO;

import java.util.List;

import javax.sql.DataSource;

import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.datasource.DriverManagerDataSource;

import com.example.Quickcareservicee.DAO.PaymentRowMapper;
import com.example.Quickcareservicee.model.Payment;


public class PaymentDAOImpl {
	
	public DataSource dataSource() {
		DriverManagerDataSource dataSource=new DriverManagerDataSource();
		
		dataSource.setDriverClassName("com.mysql.cj.jdbc.Driver");
		dataSource.setUrl("jdbc:mysql://localhost:3306/quickcare");
	    dataSource.setUsername("root");
	    dataSource.setPassword("1998");
	    return dataSource;
	}
	JdbcTemplate template=new JdbcTemplate(dataSource());

	public List<Payment> getAllPayment() {
		System.out.println("Inside DAO...");
		String sql = "select * from payment ;";
		PaymentRowMapper paymentRowMapper = new PaymentRowMapper();
		List<Payment> payment = template.query(sql, paymentRowMapper);
		return payment;
	}

	public String PaymentService(Payment payment) {
		System.out.println("Inside dao...");
		String sql = "Insert into payment values (?,?,?,?,?,?,?)";
		System.out.println("Dao implemented");
		if(template.update(sql, payment.getPayment_id(),payment.getCaretaker_id(),payment.getPatient_id(),payment.getCredit_cardno(),payment.getCvv(),payment.getExpiry(),payment.getNameoncard())>0)
		{
			return "Payment Successfull";
		}
		else
		{
			return "Payment Failed";
		}
			
	}

}
