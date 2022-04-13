package com.app.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.app.pojos.Staff;

public interface StaffRepository extends JpaRepository<Staff, Integer> {
	
	
}
