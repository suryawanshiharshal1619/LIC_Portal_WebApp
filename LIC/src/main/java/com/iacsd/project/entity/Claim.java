package com.iacsd.project.entity;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="claim")
public class Claim {
@Id
int claimId;
int policyNum;
String status;
public int getClaimId() {
	return claimId;
}
public void setClaimId(int claimId) {
	this.claimId = claimId;
}
public int getPolicyNum() {
	return policyNum;
}
public void setPolicyNum(int policyNum) {
	this.policyNum = policyNum;
}
public String getStatus() {
	return status;
}
public void setStatus(String status) {
	this.status = status;
}
public Claim(int claimId, int policyNum, String status) {
	this.claimId = claimId;
	this.policyNum = policyNum;
	this.status = status;
}
public Claim() {
	
}
@Override
public String toString() {
	return "Claim [claimId=" + claimId + ", policyNum=" + policyNum + ", status=" + status + "]";
}

}
