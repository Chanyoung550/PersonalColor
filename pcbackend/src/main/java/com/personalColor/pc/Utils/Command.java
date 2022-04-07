package com.personalColor.pc.Utils;

import java.io.BufferedReader;
import java.io.InputStreamReader;

public class Command {

	public String startPython(String[] path) {
		
		try{
			System.out.println("들어");
			String cmd = "/bin/bash -c conda activate pcolor && python /Users/chan/PersonalColor/pcbackend/src/main/resources/static/src/main.py --image /Users/chan/PersonalColor/pcbackend/src/main/resources/static/images/"+path[0]+"/"+path[1];

		    Process p = Runtime.getRuntime().exec(cmd);
		    BufferedReader br = new BufferedReader(new InputStreamReader(p.getInputStream()));
		    String line = null;

		    while((line = br.readLine()) != null){
		        System.out.println(line);
		    }
		    p.waitFor();
		    p.destroy();
		    return "seccess";

		}catch(Exception e){
		    System.out.println(e);
		    return "failed";
		}
	}
	
}
