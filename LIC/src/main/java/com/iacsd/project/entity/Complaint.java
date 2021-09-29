package com.iacsd.project.entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@Entity
@Table(name="complaints")
@JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
public class Complaint {
	@Id
	@GeneratedValue(strategy = GenerationType.SEQUENCE,generator = "complaint_id")
	@SequenceGenerator(name = "complaint_id",sequenceName = "com_gen",initialValue = 4604,allocationSize = 1)
	private int complaintId;
	private String cusName;
	private String email;
	private String details;
	private String status;
	private String type;
	 public Complaint() {
		// TODO Auto-generated constructor stub
	}
	
	public Complaint(int complaintId, String cusName, String email, String details, String status, String type) {
		this.complaintId = complaintId;
		this.cusName = cusName;
		this.email = email;
		this.details = details;
		this.status = status;
		this.type = type;
	}

	public int getComplaintId() {
		return complaintId;
	}
	public void setComplaintId(int complaintId) {
		this.complaintId = complaintId;
	}
	public String getCusName() {
		return cusName;
	}
	public void setCusName(String cusName) {
		this.cusName = cusName;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getDetails() {
		return details;
	}
	public void setDetails(String details) {
		this.details = details;
	}
	public String getStatus() {
		return status;
	}
	public void setStatus(String status) {
		this.status = status;
	}
	public String getType() {
		return type;
	}
	public void setType(String type) {
		this.type = type;
	}

	@Override
	public String toString() {
		return "Complaint [complaintId=" + complaintId + ", cusName=" + cusName + ", email=" + email + ", details="
				+ details + ", status=" + status + ", type=" + type + "]";
	}
	

}
