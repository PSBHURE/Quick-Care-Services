package com.example.Quickcareservicee.DAO;

import java.util.List;

import javax.sql.DataSource;

import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.datasource.DriverManagerDataSource;

import com.example.Quickcareservicee.model.Booking;
import com.example.Quickcareservicee.model.CareType;
import com.example.Quickcareservicee.model.Caretaker;
import com.example.Quickcareservicee.model.CaretakerList;
import com.example.Quickcareservicee.model.Customer;
import com.example.Quickcareservicee.model.Patient;
import com.example.Quickcareservicee.model.PatientHistory;
import com.example.Quickcareservicee.model.PatientList;

public class CaretakerDaoImpl {
	public DataSource dataSource() {
		DriverManagerDataSource dataSource = new DriverManagerDataSource();

		dataSource.setDriverClassName("com.mysql.cj.jdbc.Driver");
		dataSource.setUrl("jdbc:mysql://localhost:3306/quickcare");
		dataSource.setUsername("root");
		dataSource.setPassword("1998");
		return dataSource;
	}

	JdbcTemplate template = new JdbcTemplate(dataSource());

/////Registration
	public String Caretaker(Caretaker caretaker) {

		String sql = "Insert into caretaker_details(caretaker_id,caretaker_name,caretaker_pwd,caretaker_email,caretaker_gender,caretaker_age,caretaker_phone,caretaker_profile,caretaker_location,caretaker_exp,charges,usertype) values (?,?,?,?,?,?,?,?,?,?,?,?)";

		System.out.println("RegistrationCaretaker() dao");

		if (template.update(sql, caretaker.getCaretaker_id(), caretaker.getCaretaker_name(),
				caretaker.getCaretaker_pwd(), caretaker.getCaretaker_email(), caretaker.getCaretaker_gender(),
				caretaker.getCaretaker_age(), caretaker.getCaretaker_phone(), caretaker.getCaretaker_profile(),
				caretaker.getCaretaker_location(), caretaker.getCaretaker_exp(), caretaker.getCharges(),
				caretaker.getUsertype()) > 0) {
			return " Registration completed successfully";
		} else {
			return "Registration Failed!!";
		}

	}

////PatientHistory
	public List<PatientHistory> patientHistory(Integer caretaker_id) {
		String query = "select p.patient_name,p.patient_location,p.status from patient_details p inner join caretaker_details c on p.caretaker_id=c.caretaker_id where p.status='accepted'and c.caretaker_id=?";

		PatientHistoryRowMapper prm = new PatientHistoryRowMapper();
		System.out.println("PatientHistory() dao");
		return template.query(query, prm, caretaker_id);

	}

///////////PatientRejection
	public Object updateProfile(int patient_id, Patient patient) {
		String sqlSelect = "select * from patient_details where patient_id='" + patient_id + "'";
		if (template.query(sqlSelect, new PatientRowMapper()) == null)
			return "not found";

		String sqlUpdate = "update patient_details set patient_name=?,patient_gender=?,patient_age=?,patient_location=?,service_hr=?,from_date=?,to_date=?,caretype=? where patient_id=?";
		System.out.println("updateProfile() dao");
		if ((template.update(sqlUpdate, patient.getPatient_name(), patient.getPatient_gender(),
				patient.getPatient_age(), patient.getPatient_location(), patient.getService_hr(),
				patient.getFrom_date(), patient.getTo_date(), patient.getCaretype(), patient_id)) > 0)

			return "updated";

		return "error";

	}

	public Object PatientStatusRejected(int patient_id, Booking booking) {

		String sqlSelect = "select * from booking_details where patient_id='" + patient_id + "'";
		System.out.println(" dao");
		if (template.query(sqlSelect, new BookingRowMapper()) == null)
			return "not found";

		System.out.println(" dao1");
		String sqlUpdate = "update booking_details set reason_ofrejection=? where patient_id=?";
		System.out.println("patientStatusRejected() dao");
		if ((template.update(sqlUpdate, booking.getReason_ofrejection(), patient_id)) > 0)

			return "updated";

		return "error";
	}

///////////////////////////RejectedStatus
	public Object StatusRejected(int patient_id) {

		String sqlSelect = "UPDATE patient_details SET status = 'Rejected' WHERE patient_id = ? ";
		System.out.println("StatusRejected() dao");
		if ((template.update(sqlSelect, patient_id)) > 0) {
			System.out.println("OK");
			return "updated";
		}
		return "error";

	}

/////////Status Accepted

	public Object StatusAccepted(int patient_id) {

		String sqlSelect = "UPDATE patient_details SET status = 'Accepted' WHERE patient_id = ? ";
		System.out.println("StatusAccepted() dao");
		if ((template.update(sqlSelect, patient_id)) > 0) {
			System.out.println("OK");
			return "updated";
		}
		return "error";

	}

////////////////Booked caretaker patientlist
	public List<PatientList> getPatientList(int caretaker_id) {

		System.out.println("dao Class Found id:" + caretaker_id);
		String query = "select patient_details.patient_id,patient_details.patient_name,patient_details.patient_location,patient_details.from_date,patient_details.to_date,patient_details.caretype,patient_details.status from patient_details inner join caretaker_details  on patient_details.caretaker_id=caretaker_details.caretaker_id where caretaker_details.caretaker_id=?";
		System.out.println("getPatientList() dao");
		PatientListRowMapper prm = new PatientListRowMapper();
		return template.query(query, prm, caretaker_id);
	}

	public List<Caretaker> caretakerlogin(String caretaker_email, String caretaker_pwd, String usertype) {

		System.out.println("Dao class" + caretaker_email);
		String sql = "Select * from caretaker_details where caretaker_email=\"" + caretaker_email
				+ "\" and caretaker_pwd=\"" + caretaker_pwd + "\"and usertype=\"" + usertype + "\"";
		CaretakerRowMapper caretakerRowMapperobj = new CaretakerRowMapper();

		List<Caretaker> login = template.query(sql, caretakerRowMapperobj);
		System.out.println("Dao return:");
		return login;

	}

	public List<CareType> GetcaretakerProfile() {
		String sql = "select * from caretype;";
		System.out.println("GetcaretakerProfile() dao");
		CareTypeRowMapper crm = new CareTypeRowMapper();
		return template.query(sql, crm);
	}
}