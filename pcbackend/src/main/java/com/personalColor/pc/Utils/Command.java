package com.personalColor.pc.Utils;

import java.io.BufferedReader;
import java.io.InputStreamReader;

public class Command {

	public String startPython(String[] path) {
		
		/*try {

			ProcessBuilder pb = new ProcessBuilder();
	        pb.command("bash", "-c", "pwd");
	        pb.command("source /Users/chan/opt/anaconda3/etc/profile.d/conda.sh");
	        pb.command("conda activate pcolor");
	        pb.command("cd /Users/chan/PersonalColor/pcbackend/src/main/resources/static/src");
	        pb.command("python main.py", " --image"," /Users/chan/PersonalColor/pcbackend/src/main/resources/static/images/c6bb5cbe-e6cb-403d-8a29-0fa04005d407/1649491285245_이력서사진.jpeg --imgDirPath c6bb5cbe-e6cb-403d-8a29-0fa04005d407");
			Process p = pb.start();
	        p.waitFor();

	        BufferedReader stdInput = new BufferedReader(new InputStreamReader(p.getInputStream()));
	        while (stdInput.ready()) { //While there's something in the buffer
	        //read&print - replace with a buffered read (into an array) if the output doesn't contain CR/LF
	        	System.out.println("processBuilder ======= >"+stdInput.readLine());
	        }
	        p.destroy();

	    } catch (Exception e) {
	        System.err.print("Exception running client iteration: " + e.toString());
	        e.printStackTrace();
	    }*/
		
		try{
			System.out.println(path[0]);
			System.out.println(path[1]);
			String[] test = {
					"/bin/sh",
					"-c",
					"conda",
					"activate",
					"pcolor",
					"python", 
					"/Users/chan/PersonalColor/pcbackend/src/main/resources/static/src/main.py",
					"--image /Users/chan/PersonalColor/pcbackend/src/main/resources/static/images/"+path[0]+"/"+path[1]
			};///bin/sh && source /Users/chan/opt/anaconda3/etc/profile.d/conda.sh && 
			String cmd = "/bin/zsh && conda activate pcolor && python /Users/chan/PersonalColor/pcbackend/src/main/resources/static/src/main.py --image /Users/chan/PersonalColor/pcbackend/src/main/resources/static/images/"+path[0]+"/"+path[1]+ "--imgDirPath "+ path[0];
			String test2 = "/bin/sh -c && source /Users/chan/opt/anaconda3/etc/profile.d/conda.sh && conda activate pcolor && python /Users/chan/PersonalColor/pcbackend/src/main/resources/static/src/main.py --image /Users/chan/PersonalColor/pcbackend/src/main/resources/static/images/"+path[0]+"/"+path[1]+ "--imgDirPath "+ path[0];
		    Process p = Runtime.getRuntime().exec("/bin/sh -c pwd && source /Users/chan/opt/anaconda3/etc/profile.d/conda.sh && conda activate pcolor && python /Users/chan/PersonalColor/pcbackend/src/main/resources/static/src/main.py --image /Users/chan/PersonalColor/pcbackend/src/main/resources/static/images/c6bb5cbe-e6cb-403d-8a29-0fa04005d407/1649491285245_이력서사진.jpeg --imgDirPath c6bb5cbe-e6cb-403d-8a29-0fa04005d407");
		    BufferedReader br = new BufferedReader(new InputStreamReader(p.getInputStream()));
		    String line = null;

		    while((line = br.readLine()) != null){
		        System.out.println(line);
		    }
		    p.waitFor();
		    p.destroy();
		    return "seccess";

		}catch(Exception e){
		    //System.out.println(e);
		    return "failed";
		}
	}
	//15ef97ea-9d76-496a-89fa-d379b6761511/1649484307840_이력서사진.jpeg
}
