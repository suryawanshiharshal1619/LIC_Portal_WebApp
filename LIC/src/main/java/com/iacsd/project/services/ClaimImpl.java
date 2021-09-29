package com.iacsd.project.services;

import java.util.ArrayList;
import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.iacsd.project.UserDao.ClaimInterface;
import com.iacsd.project.entity.Claim;
@Service
@Transactional
public class ClaimImpl {
	@Autowired
	ClaimInterface dao;

	public Claim save(Claim c) {
		Claim cd=dao.getByPolicyNum(c.getPolicyNum());
		if(cd!=null)
			return null;
		Claim cm=dao.save(c);
		return cm;
	
	}



	public Claim getByClaimId(int claimId) {
		Claim c = dao.getByClaimId(claimId);
		return c;
	}



	public Claim getByPolicyId(int policyNum) {
		 Claim c = dao.getByPolicyNum(policyNum);
		return c;
	}



	public List<Claim> findall() {
		List<Claim> list=dao.findAll();
		List<Claim> list1 = new ArrayList<>();
		for (Claim claim : list) {
			if(claim.getStatus()==null)
				list1.add(claim);
		}
		return list1;
	}
}
