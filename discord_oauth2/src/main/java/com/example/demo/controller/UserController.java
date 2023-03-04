package com.example.demo.controller;

import com.example.demo.configuration.security.oauth2.DiscordOAuth2User;
import com.example.demo.service.UserService;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/users")
public class UserController {
    private final UserService userService;

    public UserController(UserService userService) {
        this.userService = userService;
    }

    @GetMapping("/@me")
    public ResponseEntity<DiscordOAuth2User> me(@AuthenticationPrincipal DiscordOAuth2User user) {
        return ResponseEntity.ok(user);
    }

    @GetMapping("/hello")
    public String hello() {
        return userService.hello();
    }

}