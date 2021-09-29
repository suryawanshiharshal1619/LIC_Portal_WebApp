package com.iacsd.project.controller;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.http.ResponseEntity.BodyBuilder;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.iacsd.project.entity.Buyers;
import com.iacsd.project.entity.Claim;
import com.iacsd.project.entity.Complaint;
import com.iacsd.project.entity.Policy;
import com.iacsd.project.entity.User;
import com.iacsd.project.model.Display;
import com.iacsd.project.services.BuyerImpl;
import com.iacsd.project.services.ClaimImpl;
import com.iacsd.project.services.ComplaintImpl;
import com.iacsd.project.services.PolicyImpl;
import com.iacsd.project.services.UserImpl;


@CrossOrigin
@RestController
public class LICController {
	@Autowired
	ClaimImpl serv;
	@Autowired
	ComplaintImpl servs;
	@Autowired
	BuyerImpl sr;
	@Autowired
	PolicyImpl srv;
	@Autowired
	UserImpl service;

	@PostMapping("/claim")
	public ResponseEntity<Claim> claim(@RequestBody Claim dc) {
		if(sr.ifexists(dc.getPolicyNum())){
	        Claim d = serv.save(dc);
	        if(d!=null) {
	             Claim e = serv.getByPolicyId(d.getPolicyNum());
		         return ResponseEntity.ok(e);
	        }     
		}
		return null;
	}

	@PostMapping("/trackclaim")
	public ResponseEntity<Claim> trackclaim(@RequestBody Claim c) {
		Claim p = serv.getByClaimId(c.getClaimId());
		System.out.println(p);
		if (p != null)
			return ResponseEntity.ok(p);
		return null;
	}

	@PostMapping("/complaint")
	public ResponseEntity<Complaint> complaint(@RequestBody Complaint c) {
			   Complaint d = servs.save(c);
			   return ResponseEntity.ok(d);
	}

	@PostMapping("/complaintstatus")
	public  ResponseEntity<Complaint> complaintstatus(@RequestBody Complaint c) {

		Complaint e = servs.getById(c.getComplaintId());
			return ResponseEntity.ok(e);
	}

	@PostMapping("/buy")
	public ResponseEntity<Buyers> buy(@RequestBody Buyers b) {
                    Buyers buyer = sr.save(b);
		return  ResponseEntity.ok(buyer);
	}
	
	@GetMapping("/policydetails")
	public ResponseEntity<List<Policy>> policydetails(){
		    List<Policy> list = srv.getAll();
		return ResponseEntity.ok(list);
	}
	
	@PostMapping("/delete")
	public BodyBuilder delete(@RequestBody Policy id){
	       srv.delete(id.getPolicyId());
	       return ResponseEntity.status(200);
    }
	@PostMapping("/addpolicy")
	public ResponseEntity<Policy> addpolicy(@RequestBody Policy policy){
	        if(srv.exists(policy.getPolicyName())) 
	        	return null;
		Policy pol = srv.save(policy);   
	       return ResponseEntity.ok(pol);
    }
	
	@GetMapping("/userdetails")
	public ResponseEntity<List<User>> userdetails(){
	    List<User> list = service.getAll();
	  return ResponseEntity.ok(list);
    }
	
	@PostMapping("/activatestatus")
	public void activatestatus(@RequestBody User user){
	      service.Activate(user.getUserId());
	 
    }
	
	@GetMapping("/policyinfo")
	public ResponseEntity<List<Policy>> policyInfo(){
	    List<Policy> list = srv.getAll();
	  return ResponseEntity.ok(list);
    }
    
	@PostMapping("/mypolicies")
	public ResponseEntity<User> userpolicies(@RequestBody User user){
		User u=service.getById(user.getUserId());
		return ResponseEntity.ok(u);
	} 
	
	@GetMapping("/getcomplaints")
	public ResponseEntity<List<Complaint>> getcomplaints(){
		List<Complaint> list=servs.findall();
		return ResponseEntity.ok(list);
	}
	@PostMapping("/setstatus")
	public void comlaintstatus(@RequestBody Complaint comp){
	      servs.Activate(comp.getComplaintId());
	 
    }
	@GetMapping("/getclaims")
	public ResponseEntity<List<Display>> getclaims(){
		List<Claim> list=serv.findall();
		List<Display> list1=new ArrayList<Display>();
		for (Claim claim : list) {
			 Display display=new Display();
			  Buyers buyer = sr.getByPolicyNum(claim.getPolicyNum());
			  User user = service.getById(buyer.getUserid());
			  Policy policy=srv.getById(buyer.getPolicyId());
			   display.setClaimId(claim.getClaimId());
			   display.setPolicyNum(claim.getPolicyNum());
			   display.setFirstName(user.getFirstName());
			   display.setLastName(user.getLastName());
			   display.setPolicyName(policy.getPolicyName());
			   display.setUserId(user.getUserId());
			   list1.add(display);
		}
		return ResponseEntity.ok(list1);
	}
	@PostMapping("/processclaim")
	public void processclaim(@RequestBody Claim claim) {
		Claim c = serv.getByClaimId(claim.getClaimId());
		c.setStatus("Processed");
		serv.save(c);
	}
	
	@PostMapping("/editpolicy")
	public ResponseEntity<Policy> editpolicy(@RequestBody Policy policy){
		   Policy pol = srv.save(policy);   
	       return ResponseEntity.ok(pol);
    }
	
}
