package com.app.service;

import java.util.List;
import java.util.Optional;

import com.app.pojos.Customer;

public interface ICustomerService {
	List<Customer> getAllDetails();
	Customer addorUpdateCustomerDetails(Customer cust);
	Customer fetchCustomerDetails(int custId);
	String deleteCustomerDetails(int id);

	//Customer validateEmail(String Email);
	
	Optional<Customer> findByEmail(String Email);
	boolean exists(String Email);
	
	long getDetails();
}
