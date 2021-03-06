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
	
	public Long uploadUserImage(User userInfo, MultipartFile file) {
		
		FileUpload fu = new FileUpload();
		String[] imgPath = fu.uploadUserImage(file);
		
		if(!imgPath[0].equals("failed")) {
			userInfo.setDirPath(imgPath[0]);
			userInfo.setImgPath(imgPath[1]);
			userInfo.setRes(imgPath[2]);
			userRepository.save(userInfo);
			User result = userRepository.findByImgPathAndDirPath(userInfo.getImgPath(), userInfo.getDirPath());
			long pk = result.getUserNum();
			return pk;
		}
		else {
			return -1l;
		}
	}
	public User result(long num) {
		return userRepository.findByUserNum(num);
	}
	
}