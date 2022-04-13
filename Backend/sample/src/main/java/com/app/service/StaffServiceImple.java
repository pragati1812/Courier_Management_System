package com.app.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.app.custom_exception.ResourceNotFoundException;
import com.app.dao.StaffRepository;
import com.app.pojos.Staff;
@Service
@Transactional
public class StaffServiceImple implements IStaffService {
	
	@Autowired
	private StaffRepository staffRepo;

	@Override
	public Staff addorUpdateStaffDetails(Staff staff) {
		
		return staffRepo.save(staff);
	}

	@Override
	public List<Staff> getAllDetails() {
		
		return staffRepo.findAll();
	}

	@Override
	public Staff fetchStaffDetails(int staffId) {
		// TODO Auto-generated method stub
		return staffRepo.findById(staffId)
				.orElseThrow(() -> new ResourceNotFoundException("Staff by ID " + staffId + " not found!!!!"));
	}

	@Override
	public String deleteStaffDetails(int id) {
		
			staffRepo.deleteById(id);
			return "Emp Details with ID " + id + " deleted successfuly... ";
		
	}

	@Override
	public long getDetails() {
		
		return staffRepo.count();
	}

	

}
