package com.iacsd.project.controller;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.iacsd.project.UserDao.PolicyInterface;
import com.iacsd.project.entity.Policy;
import com.iacsd.project.entity.User;
import com.iacsd.project.model.Credentials;
import com.iacsd.project.model.PolicyCredintials;
import com.iacsd.project.services.UserInterface;

@CrossOrigin
@RestController
public class LoginController {
	@Autowired
	UserInterface serv;
	
	@Autowired
	PolicyInterface servs;
	@PostMapping("/login")
	public ResponseEntity<User> authenticate(@RequestBody Credentials cred){
		     User user = serv.authenticate(cred.getEmail(),cred.getPassword());
		  if(user!=null)
			 return ResponseEntity.ok(user);
		  return null;
	}
	@PostMapping("/signup")
	public ResponseEntity<User> signup(@RequestBody User user){
		User us = serv.save(user);
				if(us!=null)
					return ResponseEntity.ok(us);
				return null;
	}
	@PostMapping("/forgot")
	public ResponseEntity<User> forgot(@RequestBody Credentials cred){
		     User user = serv.findByEmail(cred.getEmail(),cred.getPassword());
		  if(user!=null)
			 return ResponseEntity.ok(user);
		  return null;
	}
//	@PostMapping("/claim")
//	public void claim(@RequestBody Credentials cred,int pid){
//	     User user = serv.findByEmail(cred.getEmail(),cred.getPassword());
//	int []pids=user.getpids();
//	int t=0;
//	foreach(int id : pids){
//		if(pid==id)
//			t=1;
//	}
//	if(t==1)
//		"Redirect To:/policy";
//	 
//}
	@PostMapping("/details")
	public ResponseEntity<Policy> details(@RequestBody PolicyCredintials policyId) {
		
		int id=Integer.parseInt(policyId.getPid());
		Policy c = servs.getById(id);
		return ResponseEntity.ok(c);
	
	}
	
}
