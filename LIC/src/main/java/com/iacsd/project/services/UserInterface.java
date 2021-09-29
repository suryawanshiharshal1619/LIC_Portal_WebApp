package com.iacsd.project.services;

import com.iacsd.project.entity.User;

public interface UserInterface {

	User getByEmail(String Email);

	User authenticate(String email, String password);

	User save(User user);

	User findByEmail(String email, String password);

}