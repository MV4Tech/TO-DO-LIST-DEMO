package com.example.todolist.user.service;

import com.example.todolist.exception.ApiRequestException;
import com.example.todolist.exception.UsersNotFoundException;
import com.example.todolist.user.model.User;
import com.example.todolist.user.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

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
        if(users.isEmpty()){
            throw new UsersNotFoundException("No users in the table");
        }
        return users;
    }

    @Override
    public User getUserById(int id) {
        Optional<User> user = userRepository.findById(id);
        if(user.isPresent()){
            return user.get();
        }else{
            throw new ApiRequestException("No present user with id-" + id);
        }
    }

    @Override
    public User updateUserById(int id, User user) {
        Optional<User> currUser = userRepository.findById(id);
        if(currUser.isPresent()){
            currUser.get().setUsername(user.getUsername());
            currUser.get().setPassword(user.getPassword());
            currUser.get().setEmail(user.getEmail());
            currUser.get().setRole(user.getRole());
            currUser.get().setCreatedDate(user.getCreatedDate());
            userRepository.save(currUser.get());
            return currUser.get();
        }else{
            throw new ApiRequestException("No present user with id-" + id);
        }

    }

    @Override
    public void deleteUserById(int id) {
        Optional<User> user = userRepository.findById(id);
        if(user.isPresent()){
            userRepository.deleteById(user.get().getId());
        }else{
            throw new ApiRequestException("No present user with id-" + id);
        }
    }


}
