package com.lelo.daylange.service;

import java.util.List;
import java.util.concurrent.atomic.AtomicInteger;
import java.util.stream.Collectors;

import org.springframework.stereotype.Service;

import com.lelo.daylange.dto.LeaderboardEntry;
import com.lelo.daylange.repository.UserRepository;

import lombok.RequiredArgsConstructor;

@Service 
@RequiredArgsConstructor 
public class LeaderboardService {
    private final UserRepository userRepository;

    public List<LeaderboardEntry> getLeaderboard(){
        AtomicInteger rank = new AtomicInteger(1);
        return userRepository.findAllByOrderByStreakDesc().stream()
                .map(user -> new LeaderboardEntry(user.getUsername(), user.getStreak(), rank.getAndIncrement()))
                .collect(Collectors.toList());
    }
}
