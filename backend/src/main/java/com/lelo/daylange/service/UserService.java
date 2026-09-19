package com.lelo.daylange.service;

import com.lelo.daylange.dto.AuthResponse;
import com.lelo.daylange.dto.LoginRequest;
import com.lelo.daylange.dto.RegisterRequest;
import com.lelo.daylange.model.User;
import com.lelo.daylange.repository.UserRepository;
import com.lelo.daylange.security.JwtUtil;
import lombok.RequiredArgsConstructor;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service 
@RequiredArgsConstructor 
public class UserService {
    
    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;
    private final JwtUtil jwtUtil;

    public AuthResponse register(RegisterRequest request) {
        if (userRepository.existsByUsername(request.getUsername())) {
            throw new RuntimeException("Username already exists");
        }
        User user = new User();
        user.setUsername(request.getUsername());
        user.setPassword(passwordEncoder.encode(request.getPassword()));

        userRepository.save(user);

        String token = jwtUtil.generateToken(user.getUsername());
        return new AuthResponse(token, user.getUsername());
    }

    public AuthResponse login(LoginRequest request) {
        User user = userRepository.findByUsername(request.getUsername())
                .orElseThrow(() -> new RuntimeException("User not found"));

        if (!passwordEncoder.matches(request.getPassword(), user.getPassword())) {
            throw new RuntimeException("Invalid password");
        }

        String token = jwtUtil.generateToken(user.getUsername());
        return new AuthResponse(token, user.getUsername());
    }

    public int updateStreak(String username, String action) {
        User user = userRepository.findByUsername(username)
                .orElseThrow(() -> new RuntimeException("User not found"));

        if ("increment".equals(action)) {
            user.setStreak(user.getStreak() + 1);
        } else if ("reset".equals(action)) {
            user.setStreak(0);
        } else {
            throw new RuntimeException("Invalid action");
        }

        userRepository.save(user);
        return user.getStreak();
    }
}
