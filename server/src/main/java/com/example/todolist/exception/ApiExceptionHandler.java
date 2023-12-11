package com.example.todolist.exception;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import java.time.ZonedDateTime;

@RestControllerAdvice
public class ApiExceptionHandler {

    private static final Logger logger = LoggerFactory.getLogger(ApiExceptionHandler.class);
    @ExceptionHandler(value = {ApiRequestException.class})
    ResponseEntity<Object> handleApiRequestException(ApiRequestException e){
        logger.error("API request exception occurred: {}", e.getMessage(),e);

        HttpStatus badRequest = HttpStatus.BAD_REQUEST;
        ApiException apiException = new ApiException(
                e.getMessage(),
                badRequest,
                ZonedDateTime.now()
        );
        return new ResponseEntity<>(apiException, badRequest);
    }

    @ExceptionHandler(value = {UsersNotFoundException.class})
    ResponseEntity<Object> handleApiUsersNotFoundException(UsersNotFoundException e){
        logger.error("API request exception occurred: {}", e.getMessage(),e);

        HttpStatus notFound = HttpStatus.NOT_FOUND;
        ApiException apiException = new ApiException(
                e.getMessage(),
                notFound,
                ZonedDateTime.now()
        );
            return new ResponseEntity<>(apiException,notFound);
    }


    @ExceptionHandler(value = {TasksNotFoundException.class})
    ResponseEntity<Object> handleTasksNotFoundException(TasksNotFoundException e){
        logger.error("API request exception occurred: {}", e.getMessage(),e);

        HttpStatus notFound = HttpStatus.NOT_FOUND;
        ApiException apiException = new ApiException(
                e.getMessage(),
                notFound,
                ZonedDateTime.now()
        );
        return new ResponseEntity<>(apiException, notFound);
    }
    @ExceptionHandler(value = {DuplicateUsernameException.class})
    ResponseEntity<Object> handleDuplicateUsernameException(DuplicateUsernameException e){
        logger.error("DUPLICATE USERNAME request exception occurred: {}", e.getMessage(),e);
        HttpStatus badRequest = HttpStatus.BAD_REQUEST;
        ApiException apiException = new ApiException(
                e.getMessage(),
                badRequest,
                ZonedDateTime.now()
        );
        return new ResponseEntity<>(apiException, badRequest);
    }
    @ExceptionHandler(value = {DuplicateEmailException.class})
    ResponseEntity<Object> handleDuplicateEmailException(DuplicateEmailException e){
        logger.error("DUPLICATE EMAIL request exception occurred: {}", e.getMessage(),e);
        HttpStatus badRequest = HttpStatus.BAD_REQUEST;
        ApiException apiException = new ApiException(
                e.getMessage(),
                badRequest,
                ZonedDateTime.now()
        );
        return new ResponseEntity<>(apiException, badRequest);
    }
    @ExceptionHandler(value = {InvalidCredentialsException.class})
    ResponseEntity<Object> handleInvalidCredentialsException(InvalidCredentialsException e){
        logger.error("INVALID CREDENTIALS request exception occurred: {}", e.getMessage(),e);
        HttpStatus badRequest = HttpStatus.BAD_REQUEST;
        ApiException apiException = new ApiException(
                e.getMessage(),
                badRequest,
                ZonedDateTime.now()
        );
        return new ResponseEntity<>(apiException, badRequest);

    }

    @ExceptionHandler(value = {UserEmailNotVerificated.class})
    ResponseEntity<Object> handleNotVerificatedEmail(UserEmailNotVerificated e){
        logger.error("NOT VERIFICATED EMAIL exception occurred: {}", e.getMessage(),e);
        HttpStatus badRequest = HttpStatus.BAD_REQUEST;
        ApiException apiException = new ApiException(
                e.getMessage(),
                badRequest,
                ZonedDateTime.now()
        );
        return new ResponseEntity<>(apiException, badRequest);

    }

    @ExceptionHandler(value = {PasswordAlreadyChangedException.class})
    ResponseEntity<Object> handlePasswordAlreadyChanged(PasswordAlreadyChangedException e){
        logger.error("PASSWORD ALREADY CHANGED exception occurred: {}", e.getMessage(),e);
        HttpStatus badRequest = HttpStatus.BAD_REQUEST;
        ApiException apiException = new ApiException(
                e.getMessage(),
                badRequest,
                ZonedDateTime.now()
        );
        return new ResponseEntity<>(apiException, badRequest);

    }



}
