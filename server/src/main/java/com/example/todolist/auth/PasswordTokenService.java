package com.example.todolist.auth;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class PasswordTokenService {

    @Autowired
  private PasswordTokenRepository passwordTokenRepository;

    public void savePasswordToken(PasswordToken token){
        passwordTokenRepository.save(token);
    }

    public Optional<PasswordToken> getPasswordToken(String token){
        return passwordTokenRepository.findByToken(token);
    }




}
