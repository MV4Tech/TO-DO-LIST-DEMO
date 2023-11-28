package com.example.todolist.auth.email;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.stereotype.Service;


public interface EmailSender {

    public void send(String to, String email);
}
