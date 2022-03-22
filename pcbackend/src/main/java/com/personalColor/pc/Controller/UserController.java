package com.personalColor.pc.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RestController;

import com.personalColor.pc.Service.UserService;

@RestController
public class UserController {

	@Autowired
	UserService userService;
	
	
}
