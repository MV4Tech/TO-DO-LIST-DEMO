package com.example.todolist.auth.email;

import com.example.todolist.user.model.User;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.stereotype.Service;

import java.security.Principal;


public interface EmailSender {

    public void send(String to, String email,String subject);

  //  void sendRemainder(Principal connectedUser);
}
