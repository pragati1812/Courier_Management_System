package com.app.controller;


import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;
import java.util.function.Function;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.mail.MailException;
import org.springframework.web.bind.annotation.CrossOrigin;
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
import com.app.pojos.Customer;
import com.app.pojos.Parcel;
import com.app.service.ICustomerService;
import com.app.service.IParcelService;
import com.app.service.MailService;


@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api")
public class ParcelController {
	

	@Autowired
	private IParcelService parcelService;
	@Autowired
	private ParcelRepository parcelRepo;
	@Autowired
	private CustomerRepository customerRepo;
	@Autowired
	private MailService mailService;
	
	
	public ParcelController()
	{
		System.out.println("in ctor of " + getClass());
	}
	
	@PostMapping
	public Parcel addParcelDetails(@RequestBody @Valid Parcel p)
	{
		System.out.println("in add parcel "+p);
		return parcelService.addorUpdateParcelDetails(p);
	}
	
	
	@PostMapping("/customer/{customerId}/parcel")
	  public Parcel createParcel(@PathVariable int customerId,
	      @Valid @RequestBody Parcel p) {
	    return customerRepo.findById(customerId).map(customer->{
	    	p.setCustomer(customer);
	    	return parcelRepo.save(p);
	    }).orElseThrow(()->new ResourceNotFoundException("customer not found"));
	  }

	
	@GetMapping
	public List<Parcel> getAllParcelDetails()
	{
		System.out.println("in get all parcel details");
		return parcelRepo.findAll();
	}
	
	@GetMapping("/customer/{customerId}/parcel")
	  public ResponseEntity<List<Parcel>> getAllParcelByCustomerId(@PathVariable(value = "customerId") int customerId) {
	    if (!customerRepo.existsById(customerId)) {
	      throw new ResourceNotFoundException("Not found customer with id = " + customerId);
	    }

	    List<Parcel> parcel = parcelRepo.findByCustomerId(customerId);
	    return new ResponseEntity<>(parcel, HttpStatus.OK);
	  }
	

	
	
	@GetMapping("/parcel/count")
	public long getCountDetails()
	{
		System.out.println("in get all parcels");
		return parcelService.getDetails();
	}
	
	@GetMapping("/status/{Accepted}")
	public ResponseEntity<List<Parcel>> getAcceptedCountDetails(@PathVariable(value = "Accepted") String status)
	{
		System.out.println("in get all emps");
	//	return parcelService.getAcceptedDetails("Accepted");
		List<Parcel> parcel = parcelRepo.findByStatus(status);
		//long count=parcelRepo.count(status);
	//	System.out.println(count);
	    return new ResponseEntity<>(parcel, HttpStatus.OK);
	}
	
	
/*	@PutMapping
	public Parcel updateParcelDetails(@RequestBody @Valid  Parcel p) // de-serial (un marshalling)
	{
		// e : DETACHED POJO , containing updated state
		System.out.println("in update parcel " + p);
		return parcelService.addorUpdateParcelDetails(p);
	}*/
	
	
	@PutMapping("/{status}/{ref_no}")
	public void updateParcelDetails(@PathVariable String status,@PathVariable long ref_no) // de-serial (un marshalling)
	{
		// e : DETACHED POJO , containing updated state
		System.out.println("in update parcel " + status);
		LocalDateTime datecreated=LocalDateTime.now();
		parcelRepo.updateParcelStatus(status, ref_no,datecreated);
		
	}
	
	
	@GetMapping("/{parcelId}")
	public ResponseEntity<?> getParcelDetails(@PathVariable long parcelId) 
	{
		System.out.println("in get parcel dtls " + parcelId);
	
		return new ResponseEntity<>(parcelService.fetchParcelDetails(parcelId), HttpStatus.OK);

	}
	
	@RequestMapping("/{email}/{ref_no}")
	public String sendMailDetails(@PathVariable String email,@PathVariable long ref_no) // de-serial (un marshalling)
	{
		// e : DETACHED POJO , containing updated state
		System.out.println("in sending mail- email id =" + email+" Parcel Id="+ref_no);
		try {
			mailService.sendSimpleEmail(email, ref_no);
			
		}catch (MailException mailException) {
			System.out.println(mailException);
		}
		return "Your mail has been send to the customer.";
		
		
	}
	
	
	

	

	
	
}
