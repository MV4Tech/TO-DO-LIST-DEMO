package com.example.todolist.auth;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class PasswordResetService {

    @Autowired
    private PasswordTokenRepository passwordTokenRepository;

    public String resetPassword(String token) {


        return null;
    }

    public String sendMail(){

        return null;

    }
}
