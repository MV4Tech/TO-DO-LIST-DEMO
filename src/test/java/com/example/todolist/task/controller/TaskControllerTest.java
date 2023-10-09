package com.example.todolist.task.controller;

import com.example.todolist.task.model.Task;
import com.example.todolist.task.service.TaskService;
import com.example.todolist.user.model.User;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;

import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;
import org.springframework.test.web.servlet.result.MockMvcResultMatchers;



import java.time.LocalDateTime;
import java.util.Arrays;

import static org.hamcrest.Matchers.hasSize;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@WebMvcTest(TaskController.class)
class TaskControllerTest {
    @Autowired
    private MockMvc mockMvc;

    @MockBean
    private TaskService taskService;

    private Task task;
    private Task task1;


    @BeforeEach
    void setUp(){
        task = Task.builder()
                .id(4)
                .topic("Try")
                .description("I try so hard Many Times")
                .priority(1)
                .user(new User(1,"Ivancho","wasd","asd@abv.bg","shef", LocalDateTime.now()))
                .isActive(true)
                .endDate(LocalDateTime.now())
                .startDate(LocalDateTime.now())
                .build();

         task1 = Task.builder()
                .id(3)
                .topic("Try")
                .description("I try so hard Many Times Me")
                .priority(1)
                .user(new User(1,"Ivancho","wasd","asd@abv.bg","shef", LocalDateTime.now()))
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
                .user(new User(1,"Ivancho","wasd","asd@abv.bg","shef", LocalDateTime.now()))
                .isActive(true)
                .endDate(LocalDateTime.now())
                .startDate(LocalDateTime.now())
                .build();
        Mockito.when(taskService.saveTask(inputTask)).thenReturn(task);

        mockMvc.perform(MockMvcRequestBuilders.post("/TO-DO-LIST-DEMO/task/v1.0.0/save-task")
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
                        .contentType(MediaType.APPLICATION_JSON))
                .andExpect(status().isOk())
                .andExpect(MockMvcResultMatchers.jsonPath("$.topic")
                .value(task.getTopic()));

    }

    @Test
    void getAllTasks() throws Exception {
        Mockito.when(taskService.getAllTasks()).thenReturn(Arrays.asList(task,task1));
        mockMvc.perform(get("/TO-DO-LIST-DEMO/task/v1.0.0/get-all-tasks")
                .contentType(MediaType.APPLICATION_JSON))
                .andExpect(status().isOk())
                .andExpect(MockMvcResultMatchers.jsonPath("$", hasSize(2)));



    }

    @Test
    void deleteTask() throws Exception {
        mockMvc.perform(delete("/TO-DO-LIST-DEMO/task/v1.0.0/delete-task/4")
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
                .user(new User(1,"Ivancho","wasd","asd@abv.bg","shef", LocalDateTime.now()))
                .isActive(true)
                .endDate(LocalDateTime.now())
                .startDate(LocalDateTime.now())
                .build();

        Mockito.when(taskService.updateTask(inputTask)).thenReturn(task);

        mockMvc.perform(put("/TO-DO-LIST-DEMO/task/v1.0.0/update-task")
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