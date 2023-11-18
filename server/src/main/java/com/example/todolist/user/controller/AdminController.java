package com.example.todolist.user.controller;

import com.example.todolist.user.model.User;
import com.example.todolist.user.service.UserService;
import jakarta.validation.Valid;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1/admin")
@CrossOrigin(origins = "http://localhost:5173")
public class AdminController {

    private static final Logger logger = LoggerFactory.getLogger(AdminController.class);

    @Autowired
    private UserService userService;

    // save user
    @PostMapping("/save-user")
    public ResponseEntity<Void> saveUser(@RequestBody @Valid User user){
        logger.info("Received a request to save a user.");
        userService.saveUser(user);
        logger.debug("Returning https status created user with id {} in database.", user.getId());
        return new ResponseEntity<>(HttpStatus.CREATED);
    }

    // get all users
    @GetMapping("/get-all-users")
    @PreAuthorize("hasRole('ROLE_ADMIN')")
    public ResponseEntity<List<User>> getAllUsers(){
        logger.info("Received a request to get all users.");
        List<User> users = userService.getAllUsers();

        if(users.isEmpty()){
            logger.warn("No users found in the database.");
            throw new IllegalArgumentException("oops no student found.");
        }
        logger.debug("Returning {} users from the database.",users.size());
        return new ResponseEntity<>(users,HttpStatus.OK);
    }

    // get user by ID
    @GetMapping("/get-user/{id}")
    @PreAuthorize("hasAnyRole('ROLE_ADMIN','ROLE_USER')")
    public ResponseEntity<User> getUserById(@PathVariable int id){
        logger.info("Received a request to get a user by id.");
        User user = userService.getUserById(id);
        logger.debug("Returning a user with id {} from the database.",id);
        return new ResponseEntity<>(user,HttpStatus.OK);
    }

    // update user by ID
    @PutMapping("/update-user/{id}")
    @PreAuthorize("hasAuthority('user:update')")
    public ResponseEntity<User> updateUserById(@PathVariable int id, @RequestBody User user){
        logger.info("Received request to update user.");
         user = userService.updateUserById(id,user);
         logger.debug("Returning a updated user with id {} from the database.",id);
       return new ResponseEntity<>(user,HttpStatus.OK);
    }



    // delete by id
    @DeleteMapping("/delete-user/{id}")
    @PreAuthorize("hasRole('ROLE_ADMIN')")
    public ResponseEntity<Void> deleteUserById(@PathVariable int id){
        logger.info("Received request to delete user.");
        userService.deleteUserById(id);
        logger.debug("Returning http status with no content (delete user with id{}).",id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }

}
