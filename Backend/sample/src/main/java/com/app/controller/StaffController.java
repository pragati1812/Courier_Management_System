package com.app.controller;

import javax.servlet.http.HttpSession;
import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.app.pojos.Staff;
import com.app.service.IStaffService;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/staff")
public class StaffController {
	@Autowired
	private IStaffService staffService;
	
	public StaffController() {
		System.out.println("in ctor of " + getClass());
	}
	
	@PostMapping
	public Staff addStaffDetails(@RequestBody @Valid Staff s)
	{
		System.out.println("in add staff "+s);
		return staffService.addorUpdateStaffDetails(s);
	}
	
	@GetMapping
	public ResponseEntity<?> getAllSatffDetails()
	{
		System.out.println("in get all staff details");
		return new ResponseEntity<>(staffService.getAllDetails(),HttpStatus.OK);
	}
	
	@PutMapping
	public Staff updateStaffDetails(@RequestBody @Valid  Staff s) // de-serial (un marshalling)
	{
		// e : DETACHED POJO , containing updated state
		System.out.println("in update staff " + s);
		return staffService.addorUpdateStaffDetails(s);
	}
	
	@DeleteMapping("/{id}")
	public String deletestaffDetails(@PathVariable int id) {
		System.out.println("in del staff details " + id);
		return staffService.deleteStaffDetails(id);
	}
	
	@GetMapping("/{staffId}")
	public ResponseEntity<?> getstaffDetails(@PathVariable int staffId) 
	{
		System.out.println("in get staff dtls " + staffId);
	
			return new ResponseEntity<>(staffService.fetchStaffDetails(staffId), HttpStatus.OK);

	}
	
	@GetMapping("/count")
	public long getCountDetails()
	{
		System.out.println("in get all emps");
		return staffService.getDetails();
	}
	
	

}
