package com.example.todolist.user.service;


import com.example.todolist.user.model.ChangePasswordRequest;
import com.example.todolist.user.model.ChangeUsernameRequest;
import com.example.todolist.user.model.User;

import java.security.Principal;
import java.util.List;

public interface UserService{

   public User saveUser(User user);

   public List<User> getAllUsers();

   public User getUserById(int id);


   public User updateUserById(int id, User user);

   public void deleteUserById(int id);

    Integer getIdByUsername(String username);

    void changePassword(ChangePasswordRequest request, Principal connectedUser);

    void changeUsername(ChangeUsernameRequest request, Principal connectedUser);
}
