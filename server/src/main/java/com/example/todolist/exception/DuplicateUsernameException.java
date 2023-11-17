package com.example.todolist.exception;

public class DuplicateUsernameException extends RuntimeException{

   public DuplicateUsernameException(String message) {
        super(message);
    }
}
