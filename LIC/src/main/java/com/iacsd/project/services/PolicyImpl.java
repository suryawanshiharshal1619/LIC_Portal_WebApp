package com.iacsd.project.services;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.iacsd.project.UserDao.PolicyInterface;
import com.iacsd.project.entity.Policy;
@Service
@Transactional
public class PolicyImpl  {
	@Autowired
	PolicyInterface dao;

	public List<Policy> getAll() {
		List<Policy> list = dao.findAll();
		return list;
	}

	public void delete(int id) {
		 dao.deleteById(id);
	}

	public Policy save(Policy policy) {
		Policy p = dao.save(policy);
		return p;
	}

	public Policy getById(int policyId) {
		return dao.getById(policyId);
	}

	public boolean exists(String policyName) {
		boolean b = dao.existsByPolicyName(policyName);
		return b;
	}

	
}
