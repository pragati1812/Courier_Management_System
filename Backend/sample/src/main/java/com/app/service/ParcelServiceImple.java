package com.app.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.app.custom_exception.ResourceNotFoundException;
import com.app.dao.ParcelRepository;
import com.app.pojos.Parcel;
@Service
@Transactional
public class ParcelServiceImple implements IParcelService {

	@Autowired
	private ParcelRepository parcelRepo;
	
	
	@Override
	public List<Parcel> getAllDetails() {
		
		return parcelRepo.findAll();
	}

	@Override
	public Parcel addorUpdateParcelDetails(Parcel p) {
		
		return parcelRepo.save(p);
	}

	@Override
	public long getDetails() {
		// TODO Auto-generated method stub
		return parcelRepo.count();
	}
/*
	@Override
	public long getAcceptedDetails(String status) 
	{
		
		return parcelRepo.getAccepted(status);
	}*/

	@Override
	public Parcel fetchParcelDetails(long parcelId) {
		// TODO Auto-generated method stub
		return parcelRepo.findById(parcelId).orElseThrow(()-> new ResourceNotFoundException("parcel by ID " + parcelId + " not found!!!!"));
	}

	/*@Override
	public Parcel UpdateParcelDetails(String status) {
		// TODO Auto-generated method stub
		return parcelRepo.save(status);
	}*/

/*	@Override
	public Parcel findByCustomerIdandParcelId(int customerId, Long parcelId) {
		// TODO Auto-generated method stub
		return parcelRepo.find(customerId, parcelId);
	}*/

	
}
