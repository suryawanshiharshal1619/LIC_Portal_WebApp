package com.iacsd.project.UserDao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.iacsd.project.entity.User;

public interface UserDao extends JpaRepository<User,Integer>{

	User getByEmail(String email);

}
