package com.example.demo;

import com.example.demo.service.UserService;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

@SpringBootTest(classes = DemoApplication.class)
class DemoApplicationTests {
	@Autowired
	UserService userService;

	@Test
	void contextLoads() {
		final String res = userService.hello();
		Assertions.assertEquals("hello", res);
	}

}
