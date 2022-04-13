package com.app.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.app.custom_exception.ResourceNotFoundException;
import com.app.dao.CustomerRepository;
import com.app.pojos.Customer;

@Service
@Transactional
public class CustomerServiceImple implements ICustomerService {
	@Autowired
	private CustomerRepository custRepo;
	
	@Override
	public List<Customer> getAllDetails() {
		return custRepo.findAll();
	}

	@Override
	public Customer addorUpdateCustomerDetails(Customer cust) {
		
		return custRepo.save(cust);
	}

	@Override
	public Customer fetchCustomerDetails(int custId) {
		
		return custRepo.findById(custId).orElseThrow(()-> new ResourceNotFoundException("customer by ID " + custId + " not found!!!!"));
	}

	@Override
	public String deleteCustomerDetails(int id) {
		
		custRepo.deleteById(id);
		return "customer Details with ID " + id + " deleted successfuly... ";
	}

	@Override
	public Optional<Customer> findByEmail(String Email) {
		// TODO Auto-generated method stub
		return custRepo.findByEmail(Email);
	}

	@Override
	public boolean exists(String Email) {
		// TODO Auto-generated method stub
		return custRepo.existsByEmail(Email);
	}

	@Override
	public long getDetails() {
		// TODO Auto-generated method stub
		return custRepo.count();
	}

/*	@Override
	public Customer validateEmail(String Email) {
		
		return custRepo.findbyEmail(Email);
	}*/

}
