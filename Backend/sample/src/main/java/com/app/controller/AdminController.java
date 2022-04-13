package com.app.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.custom_exception.ResourceNotFoundException;
import com.app.pojos.Admin;
import com.app.service.IAdminService;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/admin")
public class AdminController {
	
	@Autowired
	private IAdminService adminService;
	
	public AdminController()
	{
		System.out.println("in ctor of " + getClass());
	}
	
	@PostMapping("/login")
	public ResponseEntity<?> fetchDetails(@RequestBody Admin a)
	{
		Admin admin=new Admin();
		System.out.println("in fetch customer email : " + a.getEmail() + "	password : " + a.getPassword());
		if((admin = adminService.login(a.getEmail(),a.getPassword())) != null)
		{
			System.out.println("in admin login "+a);
			return ResponseEntity.ok(admin); 
		}
		else {
			//return new ResponseEntity<>(HttpStatus.NOT_FOUND);
			return new ResponseEntity<>(new ResourceNotFoundException("invalid login credentials"),HttpStatus.NO_CONTENT);
		}
	}
	

}
