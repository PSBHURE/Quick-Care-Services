package com.example.Quickcareservicee.DAO;

import java.util.List;

import javax.sql.DataSource;


import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.datasource.DriverManagerDataSource;



import com.example.Quickcareservicee.model.Patient;
import com.example.Quickcareservicee.model.PatientList;

public class PatientDaoImpl {
	
	public DataSource dataSource() {
		DriverManagerDataSource dataSource=new DriverManagerDataSource();
		
		dataSource.setDriverClassName("com.mysql.cj.jdbc.Driver");
		dataSource.setUrl("jdbc:mysql://localhost:3306/quickcare");
	    dataSource.setUsername("root");
	    dataSource.setPassword("1998");
	    return dataSource;
	}
	JdbcTemplate template=new JdbcTemplate(dataSource());

	public List<PatientList> patientList(int cust_id) {
		System.out.println("dao Class Found id:"+cust_id);
		String query="select patient_details.patient_id,patient_details.patient_name,patient_details.patient_location,patient_details.from_date,patient_details.to_date,patient_details.caretype,patient_details.status from patient_details inner join customer_details  on patient_details.cust_id=customer_details.cust_id where customer_details.cust_id=?";
		System.out.println(query);
		
		PatientListRowMapper prm=new PatientListRowMapper();
		return template.query(query,prm,cust_id);
		//return template.queryForList(query,cust_id,prm);
		}
	
	public List<PatientList> patientList() {
		System.out.println("dao Class Found id:");
		String query="select patient_details.patient_id,patient_details.patient_name,patient_details.patient_location,patient_details.from_date,patient_details.to_date,patient_details.caretype from patient_details inner join customer_details  on patient_details.cust_id=customer_details.cust_id ";
		System.out.println(query);
		
		PatientListRowMapper prm=new PatientListRowMapper();
		return template.query(query,prm);
		//return template.queryForList(query,cust_id,prm);
		
	}
	

	public String delete(int patient_id) {
          String query="delete from patient_details where patient_id = ?";
		
		if(template.update(query,patient_id)>0) {
			return "PatientList deleted";
		}
		return "Not Deleted";
	}
	
	
	
	
	

	public Object updateProfile(int patient_id,Patient patient) {
		String sqlSelect="select * from patient_details where patient_id='"+patient_id+"'";
		System.out.println(sqlSelect);
		if(template.query(sqlSelect,new PatientRowMapper())==null)
			return "not found";
		
		
		String sqlUpdate="update patient_details set patient_name=?,patient_gender=?,patient_age=?,patient_location=?,service_hr=?,from_date=?,to_date=?,caretype=? where patient_id=?";
		if((template.update(sqlUpdate,patient.getPatient_name(),patient.getPatient_gender(),patient.getPatient_age(),patient.getPatient_location(),patient.getService_hr(),patient.getFrom_date(),patient.getTo_date(),patient.getCaretype(),patient_id))>0)
		
		return "updated";
		
		return "error";
	
	}
	


    




	
	

	public List<PatientList> patientAllList() {
		System.out.println("dao Class Found id:");
		String query="select patient_details.patient_id, patient_details.patient_name,patient_details.patient_location,patient_details.from_date,patient_details.to_date,patient_details.caretype from patient_details  ";
		System.out.println(query);
		
		PatientListRowMapper prm=new PatientListRowMapper();
		return template.query(query,prm);
		
	}

	///////////////Add Patient

public String PatientAdd(Patient patient) {
		
		//String sql ="Insert into patient_details value (?,?,?,?,?,?,?,?,?,?,?,?);";
		
		String sql ="Insert into patient_details(cust_id,patient_name,patient_gender,patient_age,patient_location,service_hr,from_date,to_date,caretype) value (?,?,?,?,?,?,?,?,?);";
		System.out.println("Dao Implemented");
		if(template.update(sql,patient.getCust_id(),patient.getPatient_name(),patient.getPatient_gender(),patient.getPatient_age(),patient.getPatient_location(),patient.getService_hr(),
				patient.getFrom_date(),patient.getTo_date(),
		patient.getCaretype())>0)
		{
			return "Patient Registration Successfull!!";
		}
		else {
			return "Registration Failed";
		}
			
		}



	public List<Patient> ViewpatientList(int patient_id) {
		System.out.println("Dao View Patient:"+patient_id);
		String query="select * from patient_details where  patient_id=? ";
		System.out.println(query);
		
		PatientRowMapper prm=new PatientRowMapper();
		
		return template.query(query,prm,patient_id);
		
		
	}

	

	
	

}
