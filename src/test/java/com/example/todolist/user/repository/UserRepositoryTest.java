package com.example.todolist.user.repository;

import com.example.todolist.task.model.Task;
import com.example.todolist.user.model.User;
import jakarta.transaction.Transactional;
import org.junit.jupiter.api.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import com.example.todolist.user.model.Role;

import static org.assertj.core.api.AssertionsForClassTypes.assertThat;


@SpringBootTest
class UserRepositoryTest {

    @Autowired
    private UserRepository userRepository;

    // after each test delete data inside db tables
    @AfterEach
    public void tearDown() {
        userRepository.deleteAll();
    }


    // save user
    @Test
    @DisplayName("User is saved")
    public void userRepository_SaveUser_ReturnSavedUser(){
        userRepository.deleteAll();
        //Arrange
        User user = User.builder()
                .id(1)
                .username("Mark")
                .password("587")
                .email("bbb@abv.bg")
                .createdDate(LocalDateTime.now())
                .role(Role.USER)
                .build();

        //Act
        User savedUser = userRepository.save(user);

        //Assert
        // Assertions.assertEquals(user,savedUser);
        assertThat(savedUser).isNotNull();
        assertThat(savedUser.getId()).isGreaterThan(0);
    }

    // get all usres test
    @Test
    @DisplayName("All users are returned")
    public void userRepository_GetAll_ReturnsMoreThanOneUser(){

        // Arrange
        User u1 = User.builder()
                .id(1)
                .username("Mark")
                .password("587")
                .email("bbb@abv.bg")
                .createdDate(LocalDateTime.now())
                .role(Role.USER)
                .build();
        User u2 = User.builder()
                .id(2)
                .username("Nick")
                .password("111")
                .email("BoikoBorisov@abv.bg")
                .createdDate(LocalDateTime.now())
                .role(Role.USER)
                .build();

        userRepository.save(u1);
        userRepository.save(u2);

        // Act
        List<User> users = userRepository.findAll();

        // Assert
        assertThat(users).isNotNull();
        assertThat(users.size()).isEqualTo(2);
    }

    // find user by id test
    @Test
    @DisplayName("User is found by id")
    public void userRepository_FindById_FindUserById(){

        // Arrange
        User u1 = User.builder()
                .username("Mark")
                .password("587")
                .email("dfgdfh@abv.bg")
                .createdDate(LocalDateTime.now())
                .role(Role.USER)
                .build();
        userRepository.save(u1);

        // Act
        Optional<User> userOptional = userRepository.findById(u1.getId());

        // Assert
        assertThat(userOptional.isPresent()).isTrue();
        User user = userOptional.get();
        assertThat(user.getId()).isEqualTo(u1.getId());
    }

    // delete by id test
    @Test
    @DisplayName("User is deleted by id")
    public void userRepository_DeleteById_DeleteUserById(){

        // Arrange
        User u1 = User.builder()
                .username("Mark")
                .password("587")
                .email("dfgdfh@abv.bg")
                .createdDate(LocalDateTime.now())
                .role(Role.USER)
                .build();
        userRepository.save(u1);

        // Act
        Optional<User> userOptional = userRepository.findById(u1.getId());
        userRepository.deleteById(userOptional.get().getId());

        // Assert
        userOptional = userRepository.findById(u1.getId());
        assertThat(userOptional).isEmpty();
    }

}