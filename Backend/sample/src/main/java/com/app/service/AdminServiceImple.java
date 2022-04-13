package com.app.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.app.custom_exception.ResourceNotFoundException;
import com.app.dao.AdminRepository;
import com.app.pojos.Admin;

@Service
@Transactional
public class AdminServiceImple implements IAdminService {
	
	@Autowired
	private AdminRepository adminRepo;
	
	@Override
	public Admin login(String email, String password) {
	
		return adminRepo.findByEmailAndPassword(email, password);
		
		
	}

}
