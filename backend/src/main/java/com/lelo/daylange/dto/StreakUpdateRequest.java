package com.lelo.daylange.dto;

import lombok.Data;

@Data 
public class StreakUpdateRequest {
    private String action; // "increment" or "reset"
}
