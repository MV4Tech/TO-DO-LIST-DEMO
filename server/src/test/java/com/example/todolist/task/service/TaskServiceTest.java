package com.example.todolist.task.service;

import com.example.todolist.model.Task;
import com.example.todolist.repository.TaskRepository;
import com.example.todolist.model.Token;
import com.example.todolist.service.TaskService;
import com.example.todolist.enums.TokenType;
import com.example.todolist.enums.Role;
import com.example.todolist.model.User;
import org.assertj.core.api.Assertions;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.mockito.Mockito;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;

import java.time.LocalDateTime;
import java.util.Arrays;
import java.util.List;
import java.util.Optional;


import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.when;

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
                .user(new User(2,"Vankoa","wasd","asdda@abv.bg", Role.USER, LocalDateTime.now(),
                        List.of(new Token(2,"token1", TokenType.BEARER,false,false,null),new Token(3,"token2", TokenType.BEARER,false,false,null)),
                        true,
                        true))
                .isActive(true)
                .endDate(LocalDateTime.now())
                .startDate(LocalDateTime.now())
                .build();

        Task task1 = Task.builder()
                .id(5)
                .topic("Try")
                .description("I try so hard")
                .priority(1)
                .user(new User(1,"Vanko","wasd","asdd@abv.bg", Role.USER, LocalDateTime.now(),
                        List.of(new Token(6,"token1", TokenType.BEARER,false,false,null),new Token(8,"token2", TokenType.BEARER,false,false,null)),
                        true,
                        true))
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
            .user(new User(5,"Vafnkoa","wasd","asdfda@abv.bg", Role.USER, LocalDateTime.now(),
                    List.of(new Token(6,"token1", TokenType.BEARER,false,false,null),new Token(7,"token2", TokenType.BEARER,false,false,null)),
                    true,
                    true))
            .isActive(true)
            .endDate(LocalDateTime.now())
            .startDate(LocalDateTime.now())
            .build();

    Task savedTask = Task.builder()
            .topic("Try")
            .description("I try so hard")
            .priority(1)
            .user(new User(7,"Vankodfa","wasd","asddfda@abv.bg", Role.USER, LocalDateTime.now(),
                    List.of(new Token(8,"token1", TokenType.BEARER,false,false,null),new Token(9,"token2", TokenType.BEARER,false,false,null)),
                    true,
                    true))
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
                .user(new User(12,"Vafdnkoa","wasd","asdddfa@abv.bg", Role.USER, LocalDateTime.now(),
                        List.of(new Token(13,"token1", TokenType.BEARER,false,false,null),new Token(14,"token2", TokenType.BEARER,false,false,null)),
                        true,
                        true))
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
                    .user(new User(9,"Vghankoa","wasd","asghda@abv.bg", Role.USER, LocalDateTime.now(),
                            List.of(new Token(11,"token1", TokenType.BEARER,false,false,null),new Token(12,"token2", TokenType.BEARER,false,false,null)),
                            true,
                            true))
                    .isActive(true)
                    .endDate(LocalDateTime.now())
                    .startDate(LocalDateTime.now())
                    .build();




            Task actualTask = taskService.updateTask(task1);

            Assertions.assertThat(actualTask).isNotNull();
            assertEquals(task,actualTask);

    }





}