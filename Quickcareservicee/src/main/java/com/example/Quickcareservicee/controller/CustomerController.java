package com.example.Quickcareservicee.controller;

import java.util.List;
import java.util.Map;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.Quickcareservicee.exception.ResourceNotFoundException;
import com.example.Quickcareservicee.model.BookCaretakerList;
import com.example.Quickcareservicee.model.Caretaker;
import com.example.Quickcareservicee.model.CaretakerList;
import com.example.Quickcareservicee.model.Customer;
import com.example.Quickcareservicee.model.Patient;
import com.example.Quickcareservicee.model.Payment;
import com.example.Quickcareservicee.service.CustomerService;
import com.example.Quickcareservicee.service.PaymentService;

@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/quickcareservice")
@RestController
public class CustomerController {

/////////////Customer Login
	@PostMapping("/Customer/Login")
	ResponseEntity<Object> Login(@RequestBody Customer customer) throws ResourceNotFoundException {
		CustomerService customerservice = new CustomerService();
		List<Customer> login = customerservice.custlogin(customer.getCust_email(), customer.getCust_pwd(),
				customer.getUsertype());
		if (login.size() == 1)
			return new ResponseEntity<>(login.get(0), HttpStatus.OK);
		else {
			Customer customerobj = new Customer();
			customerobj.setCust_email("Invalid");
			return new ResponseEntity<>(customerobj, HttpStatus.OK);
		}
	}

////////////Customer Registration//////////////////////////////////////////
	@PostMapping("/Customer_register")
	public String customer(@RequestBody Customer customer) {
		System.out.println("Registration Done");
		CustomerService customerService = new CustomerService();
		return customerService.CustomerService(customer);
	}

//////////Caretaker List
	@GetMapping("/CaretakerList/{cust_id}")
	public List<CaretakerList> getCaretakerList(@PathVariable int cust_id) {
		CustomerService caretakerlist = new CustomerService();
		return caretakerlist.getCaretakerList(cust_id);
	}

//////////Booking-5 functionality////////////////////////////////

///////Get All Caretakerlist for booking
	@GetMapping("/BookCaretakerList")
	public List<BookCaretakerList> BookCaretakerList() {
		CustomerService bookcaretakerlist = new CustomerService();
		return bookcaretakerlist.bookingList();
	}

/////////View Selected caretakerDetails by caretaker_id
	@GetMapping(path = "BookCaretakerListById/{caretaker_id}")
	public Caretaker BookCaretakerListById(@PathVariable int caretaker_id) {
		System.out.println("BookCaretakerListById() executed..." + caretaker_id);
		CustomerService customerservice = new CustomerService();
		return customerservice.BookCaretakerListById(caretaker_id);

	}

////////////////Display Whole Caretaker list//////////////////////////
	@GetMapping("/DisplayAllCaretaker")
	public List<Caretaker> AllCaretaker() {
		CustomerService customerservice = new CustomerService();
		return customerservice.caretakerAll();
	}

/////////End of View Selected caretakerDetails by caretaker_id

//////////DropDown Caretaker booking
	@GetMapping("/Dropdownpatient/{cust_id}")
	public List<Map<String, Object>> dropdownpatient(@PathVariable int cust_id) {
		CustomerService customerservice = new CustomerService();
		return customerservice.dropdownpatient(cust_id);

	}

//////////Payment
	@PostMapping("/Payment")
	public String Payment(@RequestBody Payment payment) {
		System.out.println("Payment Done");
		PaymentService paymentService = new PaymentService();
		return paymentService.PaymentService(payment);
	}

/////////////Onclick of Book//////////

/////////////Insert into booking table
	@PostMapping("/insertBooking")
	public boolean insertBooking(@RequestBody Patient patient) {
		System.out.println("inside insertBooking()...");
		CustomerService customerservice = new CustomerService();
		return customerservice.insertBooking(patient);
	}

////////////////Update status Book caretaker////////////////////////////
	@PutMapping("/finalBook/{caretaker_id}")
	ResponseEntity<Object> finalBook(@PathVariable int caretaker_id, @RequestBody Patient patient) {
		System.out.println("Final Book caretaker_id" + caretaker_id);
		CustomerService customerservice = new CustomerService();
		System.out.println("Updated status Success....");
		if ((customerservice.updateStatus(caretaker_id, patient)).equals("updated"))
			return new ResponseEntity<>("Updated Success...", HttpStatus.OK);
		return new ResponseEntity<>("searched not found", HttpStatus.NOT_FOUND);
	}

}