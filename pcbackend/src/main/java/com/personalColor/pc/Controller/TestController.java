package com.personalColor.pc.Controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class TestController {

	@RequestMapping("/api/hello")
	public String test() {
		return "test";
	}
	@RequestMapping("/react")
	public String test2() {
		return "react";
	}
}
