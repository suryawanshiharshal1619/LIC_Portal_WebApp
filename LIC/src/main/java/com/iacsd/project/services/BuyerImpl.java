package com.iacsd.project.services;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.iacsd.project.UserDao.BuyersInterface;
import com.iacsd.project.entity.Buyers;

@Service
@Transactional
public class BuyerImpl {
	@Autowired
	private BuyersInterface dao;

	public Buyers save(Buyers b) {
          Buyers buyer = dao.save(b);
		return buyer;
	}
   
	public boolean ifexists(int policyNum) {
		boolean p = dao.existsById(policyNum);
		return p;
	}

	public Buyers getByPolicyNum(int policyNum) {
		return dao.getById(policyNum);
	}

	
	
}
