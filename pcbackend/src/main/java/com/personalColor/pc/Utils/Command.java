package com.personalColor.pc.Utils;

import java.io.BufferedReader;
import java.io.FileReader;
import java.io.InputStreamReader;

public class Command {

	public String startPython(String[] path) {
		
		try{

			String cmd  = "/Users/chan/PersonalColor/pcbackend/src/main/resources/static/src/start.sh "+ path[0]+ " " + path[1];
			
			System.out.println(cmd);
			
			Process p = Runtime.getRuntime().exec(cmd);
		    BufferedReader br = new BufferedReader(new InputStreamReader(p.getInputStream()));
		    String line = br.readLine();
		    p.waitFor();
		    p.destroy();
		    
		    if(line.equals("spring")) {
		    	System.out.println(line);
		    }
		    else if(line.equals("fall")) {
		    	System.out.println(line);
		    }
		    else if(line.equals("summer")) {
		    	System.out.println(line);
		    }
		    else if(line.equals("winter")) {
		    	System.out.println(line);
		    }
		    else {
		    	System.out.println(line);
		    	return "failed";
		    }
		    return line;

		}catch(Exception e){
		    System.out.println(e);
		    return "failed";
		}
	}
}
