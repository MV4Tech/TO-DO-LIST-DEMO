package com.example.todolist.service.impl;

import com.example.todolist.model.PasswordToken;
import com.example.todolist.repository.PasswordTokenRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
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


    public Optional<PasswordToken> getToken(String token) {
       return passwordTokenRepository.findByToken(token);
    }

    public void setConfirmedAt(String token) {
        PasswordToken t = passwordTokenRepository.findByToken(token).get();
        t.setConfirmedAt(LocalDateTime.now());
        passwordTokenRepository.save(t);
    }
}
