package com.example.todolist.service;


public interface EmailSender {

    public void send(String to, String email,String subject);

}
