package com.example.Quickcareservicee.DAO;

import java.sql.ResultSet;
import java.sql.SQLException;

import org.springframework.jdbc.core.RowMapper;

import com.example.Quickcareservicee.model.Customer;

public class CustomerRowMapper implements RowMapper<Customer>{

@Override
public Customer mapRow(ResultSet rs, int rowNum) throws SQLException {
Customer customer=new Customer();

customer.setCust_id(rs.getInt("cust_id"));
customer.setCust_name(rs.getString("cust_name"));
customer.setCust_pwd(rs.getString("cust_pwd"));
customer.setCust_email(rs.getString("cust_email"));
customer.setCust_phone(rs.getString("cust_phone"));
customer.setCust_gender(rs.getNString("cust_gender"));
customer.setCust_location(rs.getString("cust_location"));
customer.setUsertype(rs.getString("usertype"));

return customer;
}



}