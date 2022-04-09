package com.personalColor.pc.Utils;

import java.io.File;
import java.util.UUID;

import org.springframework.web.multipart.MultipartFile;


public class FileUpload {

	
	public String[] uploadUserImage(MultipartFile file) {
		
		long time = System.currentTimeMillis();
		
		try {
			String uid = UUID.randomUUID().toString();
			File imgFile = new File("/Users/chan/PersonalColor/pcbackend/src/main/resources/static/images/"+uid+"/"+time+"_"+file.getOriginalFilename());
			imgFile.mkdirs();
			file.transferTo(imgFile);
			String[] resArr = new String[2];
			resArr[0] = uid;
			resArr[1] = time+"_"+file.getOriginalFilename();
			
			
			Command startPython = new Command();
			startPython.startPython(resArr);
			
			return resArr;
		} catch (Exception e) {
			e.printStackTrace();
			String[] resArr = new String[1];
			resArr[0] = "failed";
			return resArr;
		}
	}
	
}
