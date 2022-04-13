package com.app.dao;

import java.time.LocalDateTime;
import java.util.List;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.app.pojos.Parcel;


public interface ParcelRepository extends JpaRepository<Parcel, Long> {
	 List<Parcel> findByCustomerId(int postId);
	//Parcel find(int customerId, Long parcelId);
	// 
	//long getAccepted(@Param("status") String status);
	// long getAccepted(String status);
	 List<Parcel> findByStatus(String status);
	// long count(String status); 
	// @Query("select p.customer_id from parcel p where p.ref_no=:ref_no")
	// List<Parcel> findbyCustId(@Param("ref_no") long ref_no);
	 
	 @Transactional
	 @Modifying(clearAutomatically=true)//=> DML
	@Query("update Parcel p set p.status=:status,p.datecreated=:datecreated where p.ref_no=:ref_no") //=> custom query method : no method naming pattern is expected
	void updateParcelStatus(@Param("status") String status,@Param("ref_no") long ref_no,@Param("datecreated") LocalDateTime datecreated);
	}
