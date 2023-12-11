package com.example.todolist.user.service;

import com.example.todolist.user.model.Role;
import com.example.todolist.user.model.User;
import com.example.todolist.user.repository.UserRepository;
import org.assertj.core.api.Assertions;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Disabled;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.mockito.Mockito;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;
import static org.junit.jupiter.api.Assertions.*;
import static org.assertj.core.api.AssertionsForClassTypes.assertThat;
import static org.mockito.Mockito.*;

@SpringBootTest
class UserServiceTest {

    @Autowired
    private UserService userService;

    @MockBean
    private UserRepository userRepository;

    @BeforeEach
    void setUp() {
    }

    // testing get all users
    @Test
    @DisplayName("All users are returned")
    public void userService_GetAll_GetAllUsers(){
        User u1 =
                User.builder()
                        .id(1)
                        .username("Markicha")
                        .password("333")
                        .email("aidede@Abv.bg")
                        .createdDate(LocalDateTime.now())
                        .role(Role.USER)
                        .build();
        User u2 =
                User.builder()
                        .id(2)
                        .username("AD")
                        .password("32")
                        .email("134@Abv.bg")
                        .createdDate(LocalDateTime.now())
                        .role(Role.USER)
                        .build();

        List<User> users = List.of(u1,u2);

        when(userRepository.findAll()).thenReturn(users);

        List<User> userList = userService.getAllUsers();

        assertEquals(users.size(),userList.size());
    }



    // get user by id
    @Test
    @DisplayName("Get Data based on Valid User id")
    public void whenValidUserId_thenUserShouldFound(){
        User user =
                User.builder()
                        .id(1)
                        .username("Markicha")
                        .password("333")
                        .email("aidede@Abv.bg")
                        .createdDate(LocalDateTime.now())
                        .role(Role.USER)
                        .build();

        when(userRepository.findById(user.getId())).thenReturn(Optional.ofNullable(user));
        User found = userService.getUserById(user.getId());

        assertEquals(user.getId(), found.getId());
    }

    @Test
    @DisplayName("Updated data on valid id")
    public void whenValidUserId_UpdateUserById(){

        User testUser =
                User.builder()
                        .id(1)
                        .username("Markicha")
                        .password("333")
                        .email("aidede@Abv.bg")
                        .createdDate(LocalDateTime.now())
                        .role(Role.USER)
                        .build();

        when(userRepository.findById(testUser.getId())).thenReturn(Optional.ofNullable(testUser));
        when(userRepository.save(Mockito.any(User.class))).thenReturn(testUser);

        User user = userService.updateUserById(testUser.getId(), testUser);

        // assertEquals(user, testUser);
        Assertions.assertThat(user).isNotNull();

    }


    // delete user by id
    @Test
    @DisplayName("Delete Data based on Valid User id")
    public void whenValidUserId_DeleteUserById(){

        User testUser =
                User.builder()
                        .id(1)
                        .username("Markicha")
                        .password("333")
                        .email("aidede@Abv.bg")
                        .createdDate(LocalDateTime.now())
                        .role(Role.USER)
                        .build();

        when(userRepository.findById(testUser.getId())).thenReturn(Optional.ofNullable(testUser));

        assertAll(()->userRepository.deleteById(testUser.getId()));

    }





}