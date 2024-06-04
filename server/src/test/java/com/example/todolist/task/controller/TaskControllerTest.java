package com.example.todolist.task.controller;

import com.example.todolist.config.JwtService;
import com.example.todolist.controller.TaskController;
import com.example.todolist.model.Task;
import com.example.todolist.service.TaskService;
import com.example.todolist.model.Token;
import com.example.todolist.enums.TokenType;
import com.example.todolist.enums.Role;
import com.example.todolist.model.User;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.Mockito;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.MediaType;
import org.springframework.security.test.web.servlet.request.SecurityMockMvcRequestPostProcessors;
import org.springframework.test.web.servlet.MockMvc;

import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;
import org.springframework.test.web.servlet.result.MockMvcResultMatchers;



import java.time.LocalDateTime;
import java.util.Arrays;
import java.util.List;

import static org.hamcrest.Matchers.hasSize;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@WebMvcTest(TaskController.class)
class TaskControllerTest {
    @Autowired
    private MockMvc mockMvc;

    @MockBean
    private TaskService taskService;
    @MockBean
    private JwtService jwtService;

    private Task task;
    private Task task1;


    @BeforeEach
    void setUp(){
        task = Task.builder()
                .id(4)
                .topic("Try")
                .description("I try so hard Many Times")
                .priority(1)
                .user(new User(1,"Ivancho","wasd","asd@abv.bg", Role.USER, LocalDateTime.now(),
                        List.of(new Token(4,"token1", TokenType.BEARER,false,false,null),new Token(5,"token2", TokenType.BEARER,false,false,null)),
                        true,
                        true))
                .isActive(true)
                .endDate(LocalDateTime.now())
                .startDate(LocalDateTime.now())
                .build();

         task1 = Task.builder()
                .id(3)
                .topic("Try")
                .description("I try so hard Many Times Me")
                .priority(1)
                .user(new User(2,"Vanko","wasd","asdd@abv.bg", Role.USER, LocalDateTime.now(),
                        List.of(new Token(6,"token1", TokenType.BEARER,false,false,null),new Token(8,"token2", TokenType.BEARER,false,false,null)),
                        true,
                        true))
                .isActive(true)
                .endDate(LocalDateTime.now())
                .startDate(LocalDateTime.now())
                .build();


    }

    @Test
    void saveTask() throws Exception {
      Task  inputTask = Task.builder()
                .topic("Try")
                .description("I try so hard Many Times")
                .priority(1)
                .user(new User(3,"Vanko6","wasd","asddd@abv.bg", Role.USER, LocalDateTime.now(),
                        List.of(new Token(9,"token1", TokenType.BEARER,false,false,null),new Token(10,"token2", TokenType.BEARER,false,false,null)),
                        true,
                        true))
                .isActive(true)
                .endDate(LocalDateTime.now())
                .startDate(LocalDateTime.now())
                .build();
        Mockito.when(taskService.saveTask(inputTask)).thenReturn(task);

        mockMvc.perform(MockMvcRequestBuilders
                .post("/TO-DO-LIST-DEMO/task/v1.0.0/save-task")
                        .with(SecurityMockMvcRequestPostProcessors.user(task.getUser().getUsername()).roles(Role.USER.toString(),Role.ADMIN.toString()))
                        .with(SecurityMockMvcRequestPostProcessors.csrf())
                .contentType(MediaType.APPLICATION_JSON)
                .content(" {\n" +
                        "        \"topic\": \"Try\",\n" +
                        "        \"description\": \"I try so hard Many Times\",\n" +
                        "        \"priority\": 1,\n" +
                        "        \"startDate\": \"2023-08-02 16:22:47\",\n" +
                        "        \"endDate\": \"2023-08-02 16:22:47\",\n" +
                        "        \"isActive\": true,\n" +
                        "        \"user\": {\n" +
                        "            \"id\": 1\n" +
                        "        }\n" +
                        "    }")).andExpect(status().isCreated());


    }

    @Test
    void getTask() throws Exception {
        Mockito.when(taskService.getTask(4)).thenReturn(task);

        mockMvc.perform(get("/TO-DO-LIST-DEMO/task/v1.0.0/get-task/4")
                        .with(SecurityMockMvcRequestPostProcessors.user(task.getUser().getUsername()).roles(Role.USER.toString(),Role.ADMIN.toString()))
                        .with(SecurityMockMvcRequestPostProcessors.csrf())
                        .contentType(MediaType.APPLICATION_JSON))
                .andExpect(status().isOk())
                .andExpect(MockMvcResultMatchers.jsonPath("$.topic")
                .value(task.getTopic()));

    }

    @Test
    void getAllTasks() throws Exception {
        Mockito.when(taskService.getAllTasks()).thenReturn(Arrays.asList(task,task1));
        mockMvc.perform(get("/TO-DO-LIST-DEMO/task/v1.0.0/get-all-tasks")
                        .with(SecurityMockMvcRequestPostProcessors.user(task.getUser().getUsername()).roles(Role.USER.toString(),Role.ADMIN.toString()))
                        .with(SecurityMockMvcRequestPostProcessors.csrf())
                .contentType(MediaType.APPLICATION_JSON))
                .andExpect(status().isOk())
                .andExpect(MockMvcResultMatchers.jsonPath("$", hasSize(2)));



    }

    @Test
    void deleteTask() throws Exception {
        mockMvc.perform(delete("/TO-DO-LIST-DEMO/task/v1.0.0/delete-task/4")
                        .with(SecurityMockMvcRequestPostProcessors.user(task.getUser().getUsername()).roles(Role.USER.toString(),Role.ADMIN.toString()))
                        .with(SecurityMockMvcRequestPostProcessors.csrf())
                .contentType(MediaType.APPLICATION_JSON))
                .andExpect(status().isNoContent());

    }

    @Test
    void updateTask() throws Exception {
        Task  inputTask = Task.builder()
                .id(4)
                .topic("Try")
                .description("Yea Mu name is Gurko")
                .priority(6)
                .user(new User(5,"Vanko6","wasdaa","asdaad@abv.bg", Role.USER, LocalDateTime.now(),
                        List.of(new Token(11,"token1", TokenType.BEARER,false,false,null),new Token(12,"token2", TokenType.BEARER,false,false,null)),
                        true,
                        true))
                .isActive(true)
                .endDate(LocalDateTime.now())
                .startDate(LocalDateTime.now())
                .build();

        Mockito.when(taskService.updateTask(inputTask)).thenReturn(task);

        mockMvc.perform(put("/TO-DO-LIST-DEMO/task/v1.0.0/update-task")
                        .with(SecurityMockMvcRequestPostProcessors.user(task.getUser().getUsername()).roles(Role.USER.toString(),Role.ADMIN.toString()))
                        .with(SecurityMockMvcRequestPostProcessors.csrf())
                .contentType(MediaType.APPLICATION_JSON)
                .content(" {\n" +
                        "        \"topic\": \"Try\",\n" +
                        "        \"description\": \"Yea Mu name is Gurko\",\n" +
                        "        \"priority\": 6,\n" +
                        "        \"startDate\": \"2023-08-02 16:22:47\",\n" +
                        "        \"endDate\": \"2023-08-02 16:22:47\",\n" +
                        "        \"isActive\": true,\n" +
                        "        \"user\": {\n" +
                        "            \"id\": 1\n" +
                        "        }\n" +
                        "    }"))
                .andExpect(status().isOk());




    }
}