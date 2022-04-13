package com.app.service;

import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.http.ResponseEntity;

import com.app.pojos.Customer;
import com.app.pojos.Parcel;

public interface IParcelService {
	List<Parcel> getAllDetails();
	Parcel addorUpdateParcelDetails(Parcel p);
	
	// @Query("select p from parcel p join p.customer c where c.customer_id=:customerId and p.ref_no=:parcelId")
	// Parcel findByCustomerIdandParcelId(@Param("customerId") int customerId,@Param("parcelId")Long parcelId);

		long getDetails();
		
	//	@Query("select count(p) from parcel p where p.status='Accepted'")
	//long getAcceptedDetails(String status);
		
		
		Parcel fetchParcelDetails(long parcelId);
		
		//Parcel UpdateParcelDetails(String status);
		
}
