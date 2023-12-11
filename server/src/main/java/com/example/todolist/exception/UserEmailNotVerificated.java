package com.example.todolist.exception;

public class UserEmailNotVerificated extends RuntimeException{
    public UserEmailNotVerificated(String message){
        super(message);
    }
}
