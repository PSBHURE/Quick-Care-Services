package com.example.Quickcareservicee.DAO;

import java.util.List;
import java.util.Map;

import javax.sql.DataSource;

import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.datasource.DriverManagerDataSource;

import com.example.Quickcareservicee.model.BookCaretakerList;
import com.example.Quickcareservicee.model.Caretaker;
import com.example.Quickcareservicee.model.CaretakerList;
import com.example.Quickcareservicee.model.Customer;
import com.example.Quickcareservicee.model.Patient;

public class CustomerDAOImpl {
	public DataSource dataSource() {
		DriverManagerDataSource dataSource = new DriverManagerDataSource();

		dataSource.setDriverClassName("com.mysql.cj.jdbc.Driver");
		dataSource.setUrl("jdbc:mysql://localhost:3306/quickcare");
		dataSource.setUsername("root");
		dataSource.setPassword("1998");
		return dataSource;
	}

	JdbcTemplate template = new JdbcTemplate(dataSource());

/////////////CustomerLogin Valid user on frontend
	public String customerLogin(String cust_email, String cust_pwd, String usertype) {
		String sql = "Select * from customer_details where cust_email=\"" + cust_email + "\" and cust_pwd=\"" + cust_pwd
				+ "\"and usertype=\"" + usertype + "";
		System.out.println("Given sql is " + sql);

		CustomerRowMapper customerRowMapperobj = new CustomerRowMapper();
		List<Customer> loginobj = template.query(sql, customerRowMapperobj);

		if (loginobj.size() == 0) {
			System.out.println("Size of the List of objects retured are" + loginobj.size());
			return "Invalid User";
		} else {
			System.out.println("Valid user");
			return "Valid User";

		}
	}

	public List<Customer> getAllLogin() {
		String sql = "select * from customer_details";
		CustomerRowMapper customerRowMapperobj = new CustomerRowMapper();

		List<Customer> loginobj = template.query(sql, customerRowMapperobj);
		System.out.println(loginobj.get(0));
		return loginobj;
	}

	public List<Customer> getCustomerById(int cust_id) {
		String sql = "select * from customer_details where cust_id=?";
		CustomerRowMapper customerRowMapperobj = new CustomerRowMapper();
		List<Customer> cust = template.query(sql, customerRowMapperobj, cust_id);
		return cust;
	}

////////Working
	public List<Customer> custlogin(String cust_email, String cust_pwd, String usertype) {

		System.out.println("Dao class" + cust_email);
		String sql = "Select * from customer_details where cust_email=\"" + cust_email + "\" and cust_pwd=\"" + cust_pwd
				+ "\"and usertype=\"" + usertype + "\"";
		CustomerRowMapper customerRowMapperobj = new CustomerRowMapper();

		List<Customer> login = template.query(sql, customerRowMapperobj);
		System.out.println("Dao return:");
		return login;
	}

///////////Customer Registration
	public String CustomerRegistration(Customer customer) {
		String sql = "Insert into customer_details values (?,?,?,?,?,?,?,?)";
		System.out.println("CustomerRegistratation() dao");

		if (template.update(sql, customer.getCust_id(), customer.getCust_name(), customer.getCust_pwd(),
				customer.getCust_email(), customer.getCust_phone(), customer.getCust_gender(),
				customer.getCust_location(), customer.getUsertype()) > 0) {
			return "Registration Successfull!!";
		} else {
			return "Registration Failed!!";
		}
	}

///////////////////////Booking-5 functionality////////////////////////////////////

//////////////CaretakerList for Booking
	public List<BookCaretakerList> bookingList() {

		String query = "select caretaker_id,caretaker_name,caretaker_location,caretaker_profile from caretaker_details;";
		System.out.println("bookingList() dao");
		BookCaretakerListRowMapper brm = new BookCaretakerListRowMapper();
		return template.query(query, brm);
	}

///////////////////View Selected caretakerDetails by caretaker_id
	public Caretaker getListById(int caretaker_id) {

		List<Caretaker> list = caretakerAll();
		for (Caretaker caretaker : list) {
			if (caretaker.getCaretaker_id() == caretaker_id) {
				return caretaker;
			}
		}
		return null;
	}

	public List<Caretaker> caretakerAll() {
		String query = "Select * from caretaker_details";
		System.out.println("caretakerAll() dao");
		CaretakerRowMapper caretakerRowMapper = new CaretakerRowMapper();
		return template.query(query, caretakerRowMapper);
	}
/////////////////// End of View Selected caretakerDetails by caretaker_id

//////////DropDown Caretaker booking
	public List<Map<String, Object>> dropdownpatients(int cust_id) {
		List<Map<String, Object>> rows = template
				.queryForList("select patient_name from patient_details where cust_id=?", new Object[] { cust_id });
		return rows;

	}

/////////Onclick of book///////////////
////////////////1. Update status Book caretaker////////////////////////////
	public Object updateStatus(int caretaker_id, Patient patient) {

		String sqlSelect = "UPDATE patient_details SET status = 'Pending' , caretaker_id=? WHERE patient_name=? ";
		System.out.println("updateStatus() dao");
		if ((template.update(sqlSelect, caretaker_id, patient.getPatient_name())) > 0) {
			System.out.println("OK");
			return "updated";
		}
		return "error";
	}

///////////2.Insert into booking table
	public boolean insertBooking(Patient patient) {

		String sql = "insert into booking_details (cust_id,caretaker_id,patient_id,status) select cust_id,caretaker_id,patient_id,status from patient_details where patient_name=?";

		System.out.println("insertBooking() dao");
		if ((template.update(sql, patient.getPatient_name())) > 0) {
			return true;
		}
		return false;
	}

///////////caretakerList
	public List<CaretakerList> getCaretakerList(int cust_id) {
		String sql = "select p.patient_name,c.caretaker_name,c.caretaker_location,p.caretype,p.status,b.reason_ofrejection from patient_details p join caretaker_details c on p.caretaker_id=c.caretaker_id join booking_details b on p.patient_id=b.patient_id where b.cust_id=?;";
		System.out.println("getCaretakerList() dao");
		CaretakerListRowMapper caretakerListRowMapper = new CaretakerListRowMapper();
		List<CaretakerList> caretakerListObj = template.query(sql, caretakerListRowMapper, cust_id);
		return caretakerListObj;
	}

}