package com.personalColor.pc.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.personalColor.pc.Board.User;

public interface UserRepository extends JpaRepository<User, Long> {
	
	User findByImgPathAndDirPath(String imgPath, String dirPath);
	
	User findByUserNum(long userNum);

}
