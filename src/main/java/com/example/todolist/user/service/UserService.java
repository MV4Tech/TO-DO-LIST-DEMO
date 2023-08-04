package com.example.todolist.user.service;


import com.example.todolist.user.model.User;

import java.util.List;

public interface UserService{

   public void saveUser(User user);

   public List<User> getAllUsers();

   public User getUserById(int id);


   public User updateUserById(int id, User user);

   public void deleteUserById(int id);
}
