package com.example.todolist.exception;

public class TasksNotFoundException extends RuntimeException{
    public TasksNotFoundException(String message) {
        super(message);
    }
}
