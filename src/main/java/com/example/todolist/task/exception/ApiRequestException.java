package com.example.todolist.task.exception;

public class ApiRequestException extends Exception{


    public ApiRequestException(String message) {
        super(message);
    }

    public ApiRequestException(String message, Throwable cause) {
        super(message, cause);
    }

}
