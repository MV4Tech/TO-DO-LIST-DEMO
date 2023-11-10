package com.example.todolist.user.controller;

import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/v1/user")
public class UserController {

    @GetMapping
    public String get(){
        return "get Map";
    }

    @PostMapping
    public String post(){
        return "post Map";
    }

    @PutMapping
    public String put(){
        return "put Map";
    }

    @DeleteMapping
    public String delete(){
        return "delete Map";
    }
}
