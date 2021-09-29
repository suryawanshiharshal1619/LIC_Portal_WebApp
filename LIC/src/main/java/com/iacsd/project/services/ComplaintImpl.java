package com.iacsd.project.services;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;


import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.iacsd.project.UserDao.ComplaintInteface;
import com.iacsd.project.entity.Complaint;
@Transactional
@Service
public class ComplaintImpl {
    @Autowired
	ComplaintInteface dao;

	public Complaint save(Complaint comp) {
		Complaint c = dao.saveAndFlush(comp);
		return c;
	}

	public Complaint getByEmail(String email) {
		Complaint c = dao.getByEmail(email);
		return c;
	}

	public Complaint getById(int complaintId) {
		Optional<Complaint> c = dao.findById(complaintId);
		  return c.orElse(null);
	}

	public boolean ifexists(String email) {
	     Boolean d = dao.existsByEmail(email);
		return d;
	}

	public List<Complaint> findall() {
		List<Complaint> list=dao.findAll();
		List<Complaint> list1 = new ArrayList<>();
		for (Complaint complaint : list) {
			if(complaint.getStatus()==null)
				list1.add(complaint);
		}
		return list1;
	}

	public void Activate(int complaintId) {
	       Complaint c = dao.getById(complaintId);
	       c.setStatus("Processed");
	}
	
}
