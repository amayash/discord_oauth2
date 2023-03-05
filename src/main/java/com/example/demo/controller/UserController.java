package com.example.demo.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.example.demo.config.security.oauth2.DiscordOAuth2User;

@RestController
@RequestMapping("/users")
public class UserController {
    ResponseEntity<DiscordOAuth2User> user = null;

    @GetMapping("/@me")
    public ResponseEntity<DiscordOAuth2User> me(@AuthenticationPrincipal DiscordOAuth2User user) {
        this.user = ResponseEntity.ok(user);
        return ResponseEntity.ok(user);
    }

    @GetMapping("/getuser")
    public ResponseEntity<DiscordOAuth2User> getuser() {
        return user;
    }

}
