package com.iacsd.project.model;

import com.fasterxml.jackson.annotation.JsonProperty;

public class PolicyCredintials {
	@JsonProperty("policyId")
	private String pid;

public String getPid() {
	return pid;
}

public void setPid(String pid) {
	this.pid = pid;
}

public PolicyCredintials(String pid) {
	this.pid = pid;
}
public PolicyCredintials() {
	
}
}
