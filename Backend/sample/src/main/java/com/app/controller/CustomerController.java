package com.app.controller;

import java.util.List;
import java.util.Optional;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.custom_exception.ResourceNotFoundException;
import com.app.dao.CustomerRepository;
import com.app.dao.ParcelRepository;
import com.app.pojos.Admin;
import com.app.pojos.Customer;
import com.app.pojos.Parcel;
import com.app.pojos.Staff;
import com.app.service.ICustomerService;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/customer")
public class CustomerController {
	
	@Autowired
	private ICustomerService customerService;
	@Autowired
	private CustomerRepository custRepo;
	@Autowired
	private ParcelRepository parcelRepo;
	
	public CustomerController()
	{
		System.out.println("in ctor of " + getClass());
	}
	
/*	@PostMapping
	public Customer addCustomerDetails(@RequestBody @Valid Customer c)
	{
		System.out.println("in add customer "+c);
		return customerService.addorUpdateCustomerDetails(c);
				
	}*/
	@PostMapping
	public Customer addCustomerDetails(@RequestBody @Valid Customer c)
	{
		if(customerService.exists(c.getEmail())==true){
		    return c;
		}
		else {
			return customerService.addorUpdateCustomerDetails(c);
		}
		
	}
	
	@GetMapping
	public List<Customer> getAllCustomerDetails()
	{
		System.out.println("in get all customer details");
		return custRepo.findAll();
	}
	
	@PutMapping
	public Customer updateCustomerDetails(@RequestBody @Valid  Customer c) // de-serial (un marshalling)
	{
		// e : DETACHED POJO , containing updated state
		System.out.println("in update customer " + c);
		return customerService.addorUpdateCustomerDetails(c);
	}
	
	@GetMapping("/{custId}")
	public ResponseEntity<?> getCustomerDetails(@PathVariable int custId) 
	{
		/*Optional<Customer> optCust=custRepo.findById(custId);
		if(optCust.isPresent())
		{
			return optCust.get();
		}
		else
		{
			throw new ResourceNotFoundException("Customer not found "+custId); 
		}*/
		System.out.println("in get customer dtls " + custId);
	
		return new ResponseEntity<>(customerService.fetchCustomerDetails(custId), HttpStatus.OK);

	}
	
	
	@DeleteMapping("/{id}")
	public String deletecustomerDetails(@PathVariable int id) {
		System.out.println("in del customer details " + id);
		return customerService.deleteCustomerDetails(id);
	}
	
	
	
	@GetMapping("/count")
	public long getCountDetails()
	{
		System.out.println("in get all emps");
		return customerService.getDetails();
	}
	
	
	
	
	
	
	
}
