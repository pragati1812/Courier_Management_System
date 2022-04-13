package com.app.service;

import java.util.List;

import com.app.pojos.Staff;

public interface IStaffService {
	List<Staff> getAllDetails();
	Staff addorUpdateStaffDetails(Staff transientStaff);
	Staff fetchStaffDetails(int staffId);
	String deleteStaffDetails(int id);
	
	long getDetails();
	
}
