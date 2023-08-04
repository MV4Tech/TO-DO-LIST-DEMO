package com.example.todolist.user.controller;

import com.example.todolist.user.model.User;
import com.example.todolist.user.service.UserService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/users")
public class UserController {

    @Autowired
    private UserService userService;

    // save user
    @PostMapping("/save-user")
    public ResponseEntity<Void> saveUser(@RequestBody @Valid User user){
        userService.saveUser(user);
        return new ResponseEntity<>(HttpStatus.CREATED);
    }

    // get all users
    @GetMapping
    public ResponseEntity<List<User>> getAllUsers(){
        List<User> users = userService.getAllUsers();

        if(users.isEmpty()){
            throw new IllegalArgumentException("oops no student found");
        }
        return new ResponseEntity<>(users,HttpStatus.OK);
    }

    // get user by ID
    @GetMapping("/get-user/{id}")
    public ResponseEntity<User> getUserById(@PathVariable int id){
        User user = userService.getUserById(id);
        return new ResponseEntity<>(user,HttpStatus.OK);
    }

    // update user by ID
    @PutMapping("/update-user/{id}")
    public ResponseEntity<User> updateUserById(@PathVariable int id, @RequestBody User user){
         user = userService.updateUserById(id,user);
       return new ResponseEntity<>(user,HttpStatus.OK);
    }



    // delete by id
    @DeleteMapping("/delete-user/{id}")
    public ResponseEntity<Void> deleteUserById(@PathVariable int id){
        userService.deleteUserById(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }

}
