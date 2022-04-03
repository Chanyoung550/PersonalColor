package com.personalColor.pc.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.personalColor.pc.Board.User;
import com.personalColor.pc.Repository.UserRepository;

@Service
public class UserService {

	@Autowired
	UserRepository userrepository;
	
	public List<User> select() {
		return userrepository.findAll();
	}
	
}