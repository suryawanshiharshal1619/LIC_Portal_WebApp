package com.iacsd.project.entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;

@Entity
@Table(name = "buyers")
public class Buyers {
	
	@Id
	@GeneratedValue(strategy = GenerationType.SEQUENCE,generator ="policy_gen")
	@SequenceGenerator(name = "policy_gen",sequenceName = "policyseq",allocationSize = 1)
	private int policyNum;
	private int userid;
	private int policyId;
	
	public Buyers() {
		// TODO Auto-generated constructor stub
	}


	public Buyers(int policyNum, int userid, int policyId) {
		super();
		this.policyNum = policyNum;
		this.userid = userid;
		this.policyId = policyId;
	}


	public int getPolicyNum() {
		return policyNum;
	}


	public void setPolicyNum(int policyNum) {
		this.policyNum = policyNum;
	}


	public int getUserid() {
		return userid;
	}


	public void setUserid(int userid) {
		this.userid = userid;
	}


	public int getPolicyId() {
		return policyId;
	}


	public void setPolicyId(int policyId) {
		this.policyId = policyId;
	}


	@Override
	public String toString() {
		return "Buyers [policyNum=" + policyNum + ", userid=" + userid + ", policyId=" + policyId + "]";
	}
	
	
}
