package com.example.todolist.user.service;

import com.example.todolist.user.model.User;
import com.example.todolist.user.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserServiceImpl implements UserService {

    @Autowired
    UserRepository userRepository;

    @Override
    public void saveUser(User user) {

       userRepository.save(user);
    }

    @Override
    public List<User> getAllUsers() {
        List<User> users = userRepository.findAll();
        return users;
    }

    @Override
    public User getUserById(int id) {
        User user = userRepository.findById(id).get();
        return user;
    }

    @Override
    public User updateUserById(int id, User user) {
        User currUser = userRepository.findById(id).get();
        currUser.setUsername(user.getUsername());
        currUser.setPassword(user.getPassword());
        currUser.setEmail(user.getEmail());
        currUser.setRole(user.getRole());
        currUser.setCreatedDate(user.getCreatedDate());
        userRepository.save(currUser);
        return currUser;
    }

    @Override
    public void deleteUserById(int id) {
        userRepository.deleteById(id);
    }


}
