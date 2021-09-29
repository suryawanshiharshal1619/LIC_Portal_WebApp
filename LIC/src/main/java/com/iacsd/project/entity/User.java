package com.iacsd.project.entity;

import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToMany;
import javax.persistence.Table;

@Entity
@Table(name="users")
public class User {
   @Id
   @GeneratedValue(strategy = GenerationType.IDENTITY)
   @Column(name="userid")
   private int userId;
   @Column(name="firstname")
   private String firstName;
   @Column(name="lastname")
   private String lastName;
   private String address;
   private String contact;
   private String email;
   private String password;
   private String role;
   private String status;
   
   @ManyToMany(mappedBy = "userList", cascade = CascadeType.MERGE,fetch = FetchType.LAZY)
	private List<Policy> policyList;

   public User() {
   }
   public User(int userId, String firstName, String lastName, String address, String contact, String email,
		String password, String role,String status) {
	
	this.userId = userId;
	this.firstName = firstName;
	this.lastName = lastName;
	this.address = address;
	this.contact = contact;
	this.email = email;
	this.password = password;
	this.role = role;
	this.status=status;
  }
   
public String getStatus() {
	return status;
}
public void setStatus(String status) {
	this.status = status;
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
public String getAddress() {
	return address;
}
public void setAddress(String address) {
	this.address = address;
}
public String getContact() {
	return contact;
}
public void setContact(String contact) {
	this.contact = contact;
}
public String getEmail() {
	return email;
}
public void setEmail(String email) {
	this.email = email;
}
public String getPassword() {
	return password;
}
public void setPassword(String password) {
	this.password = password;
}
public String getRole() {
	return role;
}
public void setRole(String role) {
	this.role = role;
}

public List<Policy> getPolicyList() {
	return policyList;
}
public void setPolicyList(List<Policy> policyList) {
	this.policyList = policyList;
}
@Override
public String toString() {
	return "User [userId=" + userId + ", firstName=" + firstName + ", lastName=" + lastName + ", address=" + address
			+ ", contact=" + contact + ", email=" + email + ", password=" + password + ", role=" + role + ", status="
			+ status + "]";
}

   
}
