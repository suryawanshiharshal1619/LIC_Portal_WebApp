package com.iacsd.project.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.iacsd.project.UserDao.UserDao;
import com.iacsd.project.entity.Policy;
import com.iacsd.project.entity.User;

@Service
@Transactional
public class UserImpl implements UserInterface {
	@Autowired
    private UserDao dao;
	
	@Override
	public User getByEmail(String Email) {
		return dao.getByEmail(Email);
	}

	@Override
	public User authenticate(String email, String password) {
		User user = dao.getByEmail(email);
		if(user!=null) {
		if(user.getPassword().equals(password))
			return user;
		}
		return null;
	}

	@Override
	public User save(User user) {
		User a = dao.save(user);
		return a;
	}

	@Override
	public User findByEmail(String email, String password) {
		User a=dao.getByEmail(email);
		if(a!=null) {
			a.setPassword(password);
			return a;}
		return null;
	}

	public List<User> getAll() {
		List<User> list = dao.findAll();
		return list;
	}

	public void Activate(int userId) {
		  User user = dao.getById(userId);
		  user.setStatus("Activated");
		  dao.save(user);
	}

	public User getById(int userId) {
		User c = dao.getById(userId);
		return c;
	}
	
}
