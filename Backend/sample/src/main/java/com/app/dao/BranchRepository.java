package com.app.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.app.pojos.Branch;

public interface BranchRepository extends JpaRepository<Branch, Integer> {

}
