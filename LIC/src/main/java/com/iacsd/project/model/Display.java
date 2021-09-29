package com.iacsd.project.model;

public class Display {
	 private int claimId;
	 private int policyNum;
	 private int userId;
	 private String firstName;
	 private String lastName;
	 private String policyName;
	 public Display() {
		// TODO Auto-generated constructor stub
	}
	 
	public Display(int claimId, int policyNum, int userId, String firstName, String lastName, String policyName) {
		this.claimId = claimId;
		this.policyNum = policyNum;
		this.userId = userId;
		this.firstName = firstName;
		this.lastName = lastName;
		this.policyName = policyName;
	}

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
	public int getUserId() {
		return userId;
	}
	public void setUserId(int userId) {
		this.userId = userId;
	}
	public String getFirstName() {
		return firstName;
	}
	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}
	public String getLastName() {
		return lastName;
	}
	public void setLastName(String lastName) {
		this.lastName = lastName;
	}
	public String getPolicyName() {
		return policyName;
	}
	public void setPolicyName(String policyName) {
		this.policyName = policyName;
	}

	@Override
	public String toString() {
		return "Display [claimId=" + claimId + ", policyNum=" + policyNum + ", userId=" + userId + ", firstName="
				+ firstName + ", lastName=" + lastName + ", policyName=" + policyName + "]";
	}

}
