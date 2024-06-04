package com.example.todolist.controller;

import com.example.todolist.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/v1/user")
@CrossOrigin(origins = "http://localhost:5173")
public class UserController {

    @Autowired
    private UserService userService;

    @GetMapping("/get-id/{username}")
    @PreAuthorize("hasAuthority('user:read')")
    public ResponseEntity<Integer> getIdByUsername(@PathVariable String username){
        return new ResponseEntity<>(userService.getIdByUsername(username),HttpStatus.OK);
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
