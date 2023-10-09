package com.example.todolist.task.service;

import com.example.todolist.task.model.Task;
import com.example.todolist.task.repository.TaskRepository;
import com.example.todolist.user.model.User;
import org.assertj.core.api.Assertions;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Disabled;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.util.Assert;

import java.time.LocalDateTime;
import java.util.Arrays;
import java.util.List;
import java.util.Optional;


import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.times;
import static org.mockito.Mockito.when;
import static org.mockito.Mockito.*;

@SpringBootTest
class TaskServiceTest {
    @Autowired
    private TaskService taskService;
    @MockBean
    private TaskRepository taskRepository;

   private Task task;
    @BeforeEach
    void setUp(){

        task = Task.builder()
                .id(4)
                .topic("Try")
                .description("I try so hard")
                .priority(1)
                .user(new User(1,"Ivancho","wasd","asd@abv.bg","shef",LocalDateTime.now()))
                .isActive(true)
                .endDate(LocalDateTime.now())
                .startDate(LocalDateTime.now())
                .build();

        Task task1 = Task.builder()
                .id(5)
                .topic("Try")
                .description("I try so hard")
                .priority(1)
                .user(new User(1,"Ivancho","wasd","asd@abv.bg","shef",LocalDateTime.now()))
                .isActive(true)
                .endDate(LocalDateTime.now())
                .startDate(LocalDateTime.now())
                .build();

        List<Task> tasks = Arrays.asList(task,task1);

        when(taskRepository.findById(4)).thenReturn(Optional.ofNullable(task));
        when(taskRepository.findById(5)).thenReturn(Optional.ofNullable(task1));

        when(taskRepository.findAll()).thenReturn(tasks);

        when(taskRepository.save(Mockito.any(Task.class))).thenReturn(task);


    }
    @Test

    @DisplayName("Get a Data Based on Valida Task Name ")
    public void whenValidTaskByID_thenTaskShouldFound(){
        int id = 4;
        Task task = taskService.getTask(id);

        assertEquals(id, task.getId());
    }
    @Test
    public void whenValidTask_thenTaskShouldCreated(){
    Task task = Task.builder()
            .topic("Try")
            .description("I try so hard")
            .priority(1)
            .user(new User(1,"Ivancho","wasd","asd@abv.bg","shef",LocalDateTime.now()))
            .isActive(true)
            .endDate(LocalDateTime.now())
            .startDate(LocalDateTime.now())
            .build();

    Task savedTask = Task.builder()
            .topic("Try")
            .description("I try so hard")
            .priority(1)
            .user(new User(1,"Ivancho","wasd","asd@abv.bg","shef",LocalDateTime.now()))
            .isActive(true)
            .endDate(LocalDateTime.now())
            .startDate(LocalDateTime.now())
            .build();

        when(taskRepository.save(Mockito.any(Task.class))).thenReturn(task);

        Task savedTask1 = taskService.saveTask(savedTask);

        Assertions.assertThat(savedTask1).isNotNull();



    }
    @Test

    public void whenValidTask_thenGetAllTasks(){
        int id = 4;
        int id2 = 5;

        Task task1 = taskService.getTask(id);
        Task task2 = taskService.getTask(id2);

        List<Task> expected = Arrays.asList(task1,task2);

        List<Task> actual = taskService.getAllTasks();

        assertEquals(expected,actual);

    }
    @Test
    public void testDeleteTaskById(){
        Task task3 = Task.builder()
                .topic("Try")
                .description("I try so hard")
                .priority(1)
                .user(new User(1,"Ivancho","wasd","asd@abv.bg","shef",LocalDateTime.now()))
                .isActive(true)
                .endDate(LocalDateTime.now())
                .startDate(LocalDateTime.now())
                .build();

        when(taskRepository.findById(task3.getId())).thenReturn(Optional.ofNullable(task3));

        // Извикайте метода за изтриване
        taskService.deleteTask(task3.getId());


        assertAll(()-> taskService.deleteTask(task3.getId()));

        }
        @Test
        public void testUpdateTaskByTask(){
        Task task1 = Task.builder()
                    .id(4)
                    .topic("Try")
                    .description("I try so hard Many Times")
                    .priority(1)
                    .user(new User(1,"Ivancho","wasd","asd@abv.bg","shef",LocalDateTime.now()))
                    .isActive(true)
                    .endDate(LocalDateTime.now())
                    .startDate(LocalDateTime.now())
                    .build();




            Task actualTask = taskService.updateTask(task1);

            Assertions.assertThat(actualTask).isNotNull();
            assertEquals(task,actualTask);

    }





}