package com.example.todolist.user.controller;

import com.example.todolist.user.model.User;
import com.example.todolist.user.service.UserService;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.Mockito;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.ResultMatcher;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;
import org.springframework.test.web.servlet.result.MockMvcResultMatchers;

import java.time.LocalDateTime;
import java.util.List;

import static org.junit.jupiter.api.Assertions.*;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;

@WebMvcTest(UserController.class)
class UserControllerTest {

    @Autowired
    private MockMvc mockMvc;

    @MockBean
    private UserService userService;

    private User user;

    @BeforeEach
    void setUp(){
        user = User.builder()
                        .id(1)
                        .username("Markicha")
                        .password("333")
                        .email("aidede@Abv.bg")
                        .createdDate(LocalDateTime.now())
                        .role("ADMIN")
                        .build();
    }

    @Test
    void saveUser() throws Exception {
       User inputUser = User.builder()
                .id(1)
                .username("Markicha")
                .password("333")
                .email("aidede@Abv.bg")
                .createdDate(LocalDateTime.now())
                .role("ADMIN")
                .build();

        Mockito.when(userService.saveUser(inputUser)).thenReturn(user);

        mockMvc.perform(post("/users/save-user")
                        .contentType(MediaType.APPLICATION_JSON)
                .content("{\n" +
                        "    \"username\":\"Markicha\",\n" +
                        "    \"password\":\"333\",\n" +
                        "    \"email\": \"aidede@Abv.bg\",\n" +
                        "    \"role\": \"ADMIN\",\n" +
                        "    \"createdDate\":\"2002-03-05 14:23:11\"\n" +
                        "}"))
                .andExpect(status().isCreated());

    }

    @Test
    void getUserById() throws Exception {
        Mockito.when(userService.getUserById(user.getId())).thenReturn(user);

        mockMvc.perform(get("/users/get-user/1")
                .contentType(MediaType.APPLICATION_JSON))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.username")
                        .value(user.getUsername()));

    }
    @Test
    void updateUserById() throws Exception {
       User inputUser = User.builder()
               .id(1)
               .username("Markicha")
               .password("333")
               .email("aidede@Abv.bg")
               .createdDate(LocalDateTime.now())
               .role("ADMIN")
               .build();

       Mockito.when(userService.getUserById(user.getId())).thenReturn(user);
       Mockito.when(userService.saveUser(inputUser)).thenReturn(user);

       mockMvc.perform(put("/users/update-user/1")
               .contentType(MediaType.APPLICATION_JSON)
               .content("{\n" +
                       "    \"username\":\"Markicha\",\n" +
                       "    \"password\":\"333\",\n" +
                       "    \"email\": \"aidede@Abv.bg\",\n" +
                       "    \"role\": \"ADMIN\",\n" +
                       "    \"createdDate\":\"2002-03-05 14:23:11\"\n" +
                       "}")).andExpect(status().isOk());
    }

    @Test
    void deleteUserById() throws Exception {

        Mockito.when(userService.getUserById(user.getId())).thenReturn(user);
        mockMvc.perform(delete("/users/delete-user/1")
                .contentType(MediaType.APPLICATION_JSON))
                .andExpect(status().isNoContent());


    }

    @Test
    void getAllUsers() throws Exception {
      User user2 = User.builder()
                .id(1)
                .username("!QWE")
                .password("332")
                .email("ADE@Abv.bg")
                .createdDate(LocalDateTime.now())
                .role("ADMIN")
                .build();

      List<User> userList = List.of(user,user2);
      Mockito.when(userService.getAllUsers()).thenReturn(userList);

      mockMvc.perform(get("/users")
              .contentType(MediaType.APPLICATION_JSON))
              .andExpect(status().isOk());


    }
}