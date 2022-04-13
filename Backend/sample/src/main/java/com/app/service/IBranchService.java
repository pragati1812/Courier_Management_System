package com.app.service;

import java.util.List;

import com.app.pojos.Branch;

public interface IBranchService {
	Branch addorUpdateBranchDetails(Branch b);
	List<Branch> getAllDetails();

}
