package com.example.todolist.service;


import com.example.todolist.dto.ChangePasswordRequest;
import com.example.todolist.dto.ChangeUsernameRequest;
import com.example.todolist.model.User;

import java.security.Principal;
import java.util.List;

public interface UserService{

   public User saveUser(User user);

   public List<User> getAllUsers();

   public User getUserById(int id);


   public User updateUserById(int id, User user);

   public void deleteUserById(int id);

    Integer getIdByUsername(String username);

    public User findUserByEmail(String email);

    void enableUser(String email);

    void changePassword(ChangePasswordRequest request, Principal connectedUser);

    void changeUsername(ChangeUsernameRequest request, Principal connectedUser);

}
