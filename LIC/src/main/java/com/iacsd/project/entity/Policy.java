package com.iacsd.project.entity;

import java.util.List;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.Table;
import javax.persistence.*;

@Entity
@Table(name="policy")
public class Policy {
@Id
@GeneratedValue(strategy=GenerationType.IDENTITY)
int policyId;
String policyName;
String type;
int noOfYears;
String installments;
String premium;
String maturity;
String info;

@ManyToMany 
@JoinTable(name = "buyers", joinColumns= {@JoinColumn(name="policyId")}, inverseJoinColumns= {@JoinColumn(name="userId")} ) 
private List<User> userList;

public int getPolicyId() {
	return policyId;
}
public void setPolicyId(int policyId) {
	this.policyId = policyId;
}
public String getPolicyName() {
	return policyName;
}
public void setPolicyName(String policyName) {
	this.policyName = policyName;
}
public String getType() {
	return type;
}
public void setType(String type) {
	this.type = type;
}
public int getNoOfYears() {
	return noOfYears;
}
public void setNoOfYears(int noOfYears) {
	this.noOfYears = noOfYears;
}
public String getInstallments() {
	return installments;
}
public void setInstallments(String installments) {
	this.installments = installments;
}
public String getPremium() {
	return premium;
}
public void setPremium(String premium) {
	this.premium = premium;
}
public String getMaturity() {
	return maturity;
}
public void setMaturity(String maturity) {
	this.maturity = maturity;
}
public String getInfo() {
	return info;
}
public void setInfo(String info) {
	this.info = info;
}
public Policy(int policyId, String policyName, String type, int noOfYears, String installments, String premium,
		String maturity, String info) {
	this.policyId = policyId;
	this.policyName = policyName;
	this.type = type;
	this.noOfYears = noOfYears;
	this.installments = installments;
	this.premium = premium;
	this.maturity = maturity;
	this.info = info;
}

public Policy() {
	
}
@Override
public String toString() {
	return "Policy [policyId=" + policyId + ", policyName=" + policyName + ", type=" + type + ", noOfYears=" + noOfYears
			+ ", installments=" + installments + ", premium=" + premium + ", maturity=" + maturity + ", info=" + info
			+ "]";
}

}
