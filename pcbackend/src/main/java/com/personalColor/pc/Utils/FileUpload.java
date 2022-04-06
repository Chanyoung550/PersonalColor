package com.personalColor.pc.Utils;

import java.io.File;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.web.multipart.MultipartFile;

public class FileUpload {

	
	public String uploadUserImage(MultipartFile file) {
		
		long time = System.currentTimeMillis();
		
		try {
			File imgFile = new File(time+"_"+file.getOriginalFilename());
			file.transferTo(imgFile);
		} catch (Exception e) {
			e.printStackTrace();
			return "failed";
		}
		
		return time+"_"+file.getOriginalFilename();
	}
	
}
