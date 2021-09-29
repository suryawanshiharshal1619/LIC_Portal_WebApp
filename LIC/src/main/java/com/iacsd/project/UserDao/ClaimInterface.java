package com.iacsd.project.UserDao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.iacsd.project.entity.Claim;

public interface ClaimInterface extends JpaRepository<Claim, Integer> {

	Claim getByClaimId(int claimId);

	Claim getByPolicyNum(int policyNum);

}
