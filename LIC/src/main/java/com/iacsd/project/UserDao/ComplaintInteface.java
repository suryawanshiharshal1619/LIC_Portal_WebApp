package com.iacsd.project.UserDao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.iacsd.project.entity.Complaint;

public interface ComplaintInteface extends JpaRepository<Complaint,Integer> {

	Complaint getByEmail(String email);

	Boolean existsByEmail(String email);

}
