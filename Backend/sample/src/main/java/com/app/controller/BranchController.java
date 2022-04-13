package com.app.controller;

import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.pojos.Branch;

import com.app.service.IBranchService;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/branch")
public class BranchController {
	
	@Autowired
	private IBranchService branchService;
	
	public BranchController()
	{
		System.out.println("in ctor of " + getClass());
	}
	
	
	@PostMapping
	public Branch addBranchDetails(@RequestBody @Valid Branch b)
	{
		System.out.println("in add branch "+b);
		return branchService.addorUpdateBranchDetails(b);
	}
	
	@GetMapping
	public List<Branch> getAllBranchDetails()
	{
		System.out.println("in get all customer details");
		return branchService.getAllDetails();
	}

}
