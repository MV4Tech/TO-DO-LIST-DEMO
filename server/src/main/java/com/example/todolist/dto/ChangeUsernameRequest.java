package com.example.todolist.dto;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class ChangeUsernameRequest {
    private String password;
    private String newUsername;
}
