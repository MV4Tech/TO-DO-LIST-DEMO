package com.example.todolist.user.exception;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.http.HttpStatus;

import java.time.ZonedDateTime;

@Data
@AllArgsConstructor
public class ApiException {
    private final String message;
    private final Throwable throwable;
    private final HttpStatus httpsStatus;
    private final ZonedDateTime timestamp;

}
