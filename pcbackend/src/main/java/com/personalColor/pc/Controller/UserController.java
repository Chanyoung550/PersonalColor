package com.personalColor.pc.Controller;

import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
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
	public long fileUpload(User userInfo,
			@RequestParam("img") MultipartFile file) {
		
		long res = userService.uploadUserImage(userInfo, file);
		
		return res;
	}
	@RequestMapping(value = "result.do")//User user, 
	public User result(@RequestBody Map<String, Object> num) {
		String pkStr = num.get("userNum").toString();
		System.out.println("테스트 "+pkStr);
		long pk = Long.parseLong(pkStr);
		User res = userService.result(pk);
		
		
		return res;
	}
	
	
	@RequestMapping(value = "test.do/{idx}")//User user, 
	public User test(@PathVariable("idx") long num) {
		
		System.out.println("test.do : " + num);
		User res = userService.result(num);
		return res;
	}
}
