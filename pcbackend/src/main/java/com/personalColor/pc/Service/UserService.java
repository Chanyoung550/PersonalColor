package com.personalColor.pc.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.personalColor.pc.Board.User;
import com.personalColor.pc.Repository.UserRepository;
import com.personalColor.pc.Utils.FileUpload;

@Service
public class UserService {

	@Autowired
	UserRepository userRepository;
	
	public List<User> select() {
		return userRepository.findAll();
	}
	
	public String uploadUserImage(User userInfo, MultipartFile file) {
		
		FileUpload fu = new FileUpload();
		String[] imgPath = fu.uploadUserImage(file);
		
		if(!imgPath[0].equals("failed")) {
			userInfo.setDirPath(imgPath[0]);
			userInfo.setImgPath(imgPath[1]);
			userRepository.save(userInfo);
			return "success";
		}
		else {
			return "failed";
		}
	}
	
}