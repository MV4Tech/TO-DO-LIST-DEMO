package com.example.todolist.auth.registrationToken;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.Optional;

@Service
public class ConfirmationTokenService {

    @Autowired
    ConfirmationTokenRepository confirmationTokenRepository;
    @Autowired
    private static final Logger logger = LoggerFactory.getLogger(ConfirmationTokenService.class);

    public void saveConfirmationToken(ConfirmationToken token){
        confirmationTokenRepository.save(token);
    }

    public Optional<ConfirmationToken> getToken(String token) {
        logger.info("Getting token for confirmation: {}", token);
        return confirmationTokenRepository.findByToken(token);
    }

    public void setConfirmedAt(String token) {
        ConfirmationToken t = confirmationTokenRepository.findByToken(token).get();
        t.setConfirmedAt(LocalDateTime.now());
        confirmationTokenRepository.save(t);
    }
}
