package com.example.todolist.dto;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.*;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
@Getter
public class PasswordResetRequest {
    private String token;
    private String password;
}
