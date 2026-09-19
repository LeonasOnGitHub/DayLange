package com.lelo.daylange.dto;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor 
public class LeaderboardEntry {
    private String username;
    private int streak;
    private int rank;
}
