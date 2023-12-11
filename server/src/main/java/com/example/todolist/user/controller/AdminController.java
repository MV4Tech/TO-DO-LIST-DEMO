package com.example.todolist.user.controller;

import com.example.todolist.user.model.ChangePasswordRequest;
import com.example.todolist.user.model.ChangeUsernameRequest;
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

import java.security.Principal;
import java.util.List;

@RestController
@RequestMapping("/api/v1/admin")
@CrossOrigin(origins = "http://localhost:5173")
public class AdminController {

    @Autowired
    private UserService userService;

    // save user
    @PostMapping("/save-user")
    public ResponseEntity<Void> saveUser(@RequestBody @Valid User user){
        userService.saveUser(user);
        return new ResponseEntity<>(HttpStatus.CREATED);
    }

    // get all users
    @GetMapping("/get-all-users")
    @PreAuthorize("hasRole('ROLE_ADMIN')")
    public ResponseEntity<List<User>> getAllUsers(){
        List<User> users = userService.getAllUsers();
        return new ResponseEntity<>(users,HttpStatus.OK);
    }
    
    // get user by ID
    @GetMapping("/get-user/{id}")
    @PreAuthorize("hasAnyRole('ROLE_ADMIN','ROLE_USER')")
    public ResponseEntity<User> getUserById(@PathVariable int id){
        User user = userService.getUserById(id);
        return new ResponseEntity<>(user,HttpStatus.OK);
    }

    // update user by ID
    @PutMapping("/update-user/{id}")
    @PreAuthorize("hasAuthority('user:update')")
    public ResponseEntity<User> updateUserById(@PathVariable int id, @RequestBody User user){
         user = userService.updateUserById(id,user);
       return new ResponseEntity<>(user,HttpStatus.OK);
    }


    // delete by id
    @DeleteMapping("/delete-user/{id}")
    @PreAuthorize("hasRole('ROLE_ADMIN')")
    public ResponseEntity<Void> deleteUserById(@PathVariable int id){
        userService.deleteUserById(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
    @PreAuthorize("hasAnyRole('ROLE_ADMIN','ROLE_USER')")
    @PatchMapping("/change-password")
    public ResponseEntity<Void> changePassword(@RequestBody ChangePasswordRequest request
    ,Principal connectedUser){
                userService.changePassword(request,connectedUser);
                return new ResponseEntity(HttpStatus.OK);
    }
    @PreAuthorize("hasAnyRole('ROLE_ADMIN','ROLE_USER')")
    @PatchMapping("/change-username")
    public ResponseEntity<Void> changeUsername(@RequestBody ChangeUsernameRequest request, Principal connectedUser){
            userService.changeUsername(request,connectedUser);
            return new ResponseEntity<>(HttpStatus.OK);
    }




}
