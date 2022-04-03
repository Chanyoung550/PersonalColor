package com.personalColor.pc.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.personalColor.pc.Board.User;
import com.personalColor.pc.Service.UserService;

@RestController
public class UserController {

	@Autowired
	UserService userService;
	
//	@RequestMapping(value = "fileUpload.do" )
//	public String fileUpload(@RequestParam("name") String name, 
//			@RequestParam("img") MultipartFile file,
//			@RequestParam("age") String age,
//			@RequestParam("gender") String gender) {
//		System.out.println(name);
//		System.out.println(file.getOriginalFilename());
//		System.out.println(age);
//		System.out.println(gender);
//		return "success";
//	}
	
	@RequestMapping(value = "fileUpload.do" )
	public String fileUpload(User userInfo,
			@RequestParam("img") MultipartFile file) {
		
		return "success";
	}
}