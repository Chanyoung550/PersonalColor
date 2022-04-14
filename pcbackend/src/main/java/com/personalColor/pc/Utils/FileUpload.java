package com.personalColor.pc.Utils;

import java.io.File;
import java.util.UUID;

import org.springframework.web.multipart.MultipartFile;


public class FileUpload {

	
	public String[] uploadUserImage(MultipartFile file) {
		
		long time = System.currentTimeMillis();
		
		try {///Users/chan/PersonalColor/pcfrontend/public/images/1ea4bda6-e9eb-4fc4-9dec-ea39055d8368
			String uid = UUID.randomUUID().toString();
			String extension = file.getOriginalFilename().substring(file.getOriginalFilename().lastIndexOf(".") + 1);
			File imgFile = new File("/Users/chan/PersonalColor/pcfrontend/public/images/"+uid+"/"+time+"."+extension);
			imgFile.mkdirs();
			file.transferTo(imgFile);
			String[] resArr = new String[3];
			resArr[0] = uid;
			resArr[1] = time+"."+extension;
			
			
			Command startPython = new Command();
			String res = startPython.startPython(resArr);
			
			System.out.println("file upload"+res);
			
			if(!res.equals("failed")) {
				resArr[2] = res;
			}
			else {
				String[] resArr2 = new String[1];
				resArr[0] = "failed";
				return resArr2;
			}
			
			return resArr;
		} catch (Exception e) {
			e.printStackTrace();
			String[] resArr = new String[1];
			resArr[0] = "failed";
			return resArr;
		}
	}
	
}
