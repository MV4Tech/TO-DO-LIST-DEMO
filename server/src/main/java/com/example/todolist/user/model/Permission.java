package com.example.todolist.user.model;

import lombok.Getter;
import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
public enum Permission {

    USER_READ("user:read"),
    USER_UPDATE("user:update"),
    USER_CREATE("user:create"),
    USER_DELETE("user:delete"),
    TASK_READ("task:read"),
    TASK_UPDATE("task:update"),
    TASK_CREATE("task:create"),
    TASK_DELETE("task:delete");


    @Getter
    private final String permission;
}
