package com.example.todolist.user.repository;

import com.example.todolist.task.model.Task;
import com.example.todolist.user.model.User;
import jakarta.transaction.Transactional;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;


@SpringBootTest
class UserRepositoryTest {

    @Autowired
    private UserRepository userRepository;

    // create new user test
    @Test
    public void saveUser() {

        User user = User.builder()
                .username("Debeliq")
                .password("1233")
                .email("Debel@dst.bg")
                .role("USER")
                .createdDate(LocalDateTime.now())
                .build();

        userRepository.save(user);
    }

    // print all users
    @Test
    public void printAllUsers(){
        List<User> users = userRepository.findAll();
        System.out.println("Users : " + users);
    }

    // print user by id
    @Test
    public void printUserById(){
        Optional<User> user = userRepository.findById(4);
        System.out.println("user = " + user);
    }

    //update user
    @Test
    public void updateUserById(){
        User user = userRepository.findById(4).get();
        user.setUsername("Myrkata");
        user.setPassword("444");
        user.setEmail("mmm@abv.bg");
        user.setCreatedDate(LocalDateTime.now());
        userRepository.save(user);
    }

    // delete user
@Test
    public void deleteUserById(){
        userRepository.deleteById(13);
    }

}