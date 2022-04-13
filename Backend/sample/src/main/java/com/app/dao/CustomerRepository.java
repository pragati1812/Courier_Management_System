package com.app.dao;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.app.pojos.Customer;
import com.app.pojos.Parcel;

public interface CustomerRepository extends JpaRepository<Customer, Integer> {
	//Customer findbyEmail(String Email);
	
	boolean existsByEmail(String email);
	Optional<Customer> findByEmail(String email);
}
