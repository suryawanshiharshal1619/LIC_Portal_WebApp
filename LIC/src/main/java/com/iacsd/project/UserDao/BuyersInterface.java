package com.iacsd.project.UserDao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.iacsd.project.entity.Buyers;

public interface BuyersInterface  extends JpaRepository<Buyers, Integer>{
   
	 
 
//	 @Modifying
//		@Query(" insert into buyers (userid,policyId)  select :userid ,:policyId from Buyers ")
//	Buyers saveBuyer( @Param("userid")int userid,@Param("policyId")int policyId);
	
	    
	
}
