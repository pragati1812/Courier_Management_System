package com.app.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.app.dao.BranchRepository;

import com.app.pojos.Branch;
@Service
@Transactional
public class BranchServiceImple implements IBranchService {
	
	@Autowired
	private BranchRepository branchRepo;

	@Override
	public Branch addorUpdateBranchDetails(Branch b) {
		
		return branchRepo.save(b);
	}

	@Override
	public List<Branch> getAllDetails() {
		return branchRepo.findAll();
	}

}
