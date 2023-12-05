package com.example.todolist.auth;

import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/v1/reset-password")
public class PasswordResetController {

    private PasswordResetService passwordResetService;

    @GetMapping(path="/reset")
    public String resetPassword(@RequestParam("token") String token){
        return passwordResetService.resetPassword(token);
    }





}
