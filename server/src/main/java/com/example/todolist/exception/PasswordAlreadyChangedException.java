package com.example.todolist.exception;

public class PasswordAlreadyChangedException extends RuntimeException{
    public PasswordAlreadyChangedException(String message) {
        super(message);
    }
}
