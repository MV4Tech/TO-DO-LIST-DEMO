package com.example.todolist.service.impl;

import com.example.todolist.exception.ApiRequestException;
import com.example.todolist.exception.DuplicateUsernameException;
import com.example.todolist.exception.InvalidCredentialsException;
import com.example.todolist.exception.UsersNotFoundException;
import com.example.todolist.service.UserService;
import com.example.todolist.dto.ChangePasswordRequest;
import com.example.todolist.dto.ChangeUsernameRequest;
import com.example.todolist.model.User;
import com.example.todolist.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.security.Principal;
import java.util.List;
import java.util.Optional;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

@Service
public class UserServiceImpl implements UserService {

    private static final Logger logger = LoggerFactory.getLogger(UserServiceImpl.class);
    @Autowired
    private PasswordEncoder passwordEncoder;

    @Autowired
    UserRepository userRepository;

    @Override
    public User saveUser(User user) {
            logger.info("Saved user with ID: {}.",user.getId());
            userRepository.save(user);
            return user;
    }

    @Override
    public List<User> getAllUsers() {
        List<User> users = userRepository.findAll();
        if(users.isEmpty()){
            logger.info("No users found in the table.");
            throw new UsersNotFoundException("No users in the table");
        }
        return users;
    }

    @Override
    public User getUserById(int id) {
        Optional<User> user = userRepository.findById(id);
        if(user.isPresent()){
            logger.info("Retrieved user by ID: {}",id);
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
            logger.info("Updated user with ID: {}", id);
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
            logger.info("Deleted user with ID: ",id);
        }else{
            throw new ApiRequestException("No present user with id-" + id);
        }
    }

    @Override
    public Integer getIdByUsername(String username) {
            int id = userRepository.findUserIdByUsername(username);
            return id;
    }

    @Override
    public User findUserByEmail(String email) {
        Optional<User> u = userRepository.findByEmail(email);
        if(u.isPresent()){
            return userRepository.findByEmail(email).get();
        }

        throw new UsersNotFoundException("User cant be found: [email]");

    }

    @Override
    public void enableUser(String email) {
        User u = userRepository.findByEmail(email).get();
        u.setEnabled(true);
        userRepository.save(u);
        }

    public void changePassword(ChangePasswordRequest request, Principal connectedUser) {

        //getting the current connected user
        var user = (User)((UsernamePasswordAuthenticationToken) connectedUser).getPrincipal();

        //check if the current password is correct
        if(!passwordEncoder.matches(request.getOldPassword(), user.getPassword())){
            throw new InvalidCredentialsException("Wrong password!");
        }
        //check if the new passwords are equal
        if(!request.getNewPassword().equals(request.getConfirmNewPassword())){
            throw new InvalidCredentialsException("Passwords are not the same!");
        }
        //update the password
        user.setPassword(passwordEncoder.encode(request.getNewPassword()));
        //save the new password
        userRepository.save(user);
    }

    @Override
    public void changeUsername(ChangeUsernameRequest request, Principal connectedUser) {
        //getting the current connected user
        var user = (User) ((UsernamePasswordAuthenticationToken) connectedUser).getPrincipal();

        //check if the current password is correct
        if (!passwordEncoder.matches(request.getPassword(), user.getPassword())) {
            throw new InvalidCredentialsException("Wrong password!");
        }

        //check if the current username is not taken
        if (userRepository.existsByUsername(request.getNewUsername())) {
            throw new DuplicateUsernameException("The username has already been taken.");
        }

        user.setUsername(request.getNewUsername());
        userRepository.save(user);

    }

}
