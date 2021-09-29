package com.iacsd.project.UserDao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.iacsd.project.entity.Policy;

public interface PolicyInterface extends JpaRepository<Policy, Integer>{

	boolean existsByPolicyName(String policyName);

}
