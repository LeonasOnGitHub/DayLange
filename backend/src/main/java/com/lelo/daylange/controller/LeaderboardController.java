package com.lelo.daylange.controller;

import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.lelo.daylange.dto.LeaderboardEntry;
import com.lelo.daylange.service.LeaderboardService;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping ("/api/leaderboard")
@RequiredArgsConstructor 
public class LeaderboardController {
     private final LeaderboardService leaderboardService;

     @GetMapping 
     public ResponseEntity<List<LeaderboardEntry>> getLeaderboard() {
         return ResponseEntity.ok(leaderboardService.getLeaderboard());
     }
}
