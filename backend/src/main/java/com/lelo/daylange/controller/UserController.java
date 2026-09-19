package com.lelo.daylange.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.lelo.daylange.dto.ProfileResponse;
import com.lelo.daylange.dto.StreakUpdateRequest;
import com.lelo.daylange.service.UserService;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/api/user")
@RequiredArgsConstructor
public class UserController {

    private final UserService userService;

    @PutMapping("/streak")
    public ResponseEntity<Integer> updateStreak(Authentication authentication,
            @RequestBody StreakUpdateRequest request) {
        System.out.println("UserController erreicht!");
        System.out.println("Authentication: " + authentication);
        String username = authentication.getName();
        int newStreak = userService.updateStreak(username, request.getAction());
        return ResponseEntity.ok(newStreak);
    }

    @GetMapping("/profile")
    public ResponseEntity<ProfileResponse> getProfile(Authentication authentication) {
        String username = authentication.getName();
        int streak = userService.getStreak(username);
        return ResponseEntity.ok(new ProfileResponse(username, streak));
    }
}
