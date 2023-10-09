package com.example.todolist.task.repository;

import com.example.todolist.task.model.Task;
import com.example.todolist.user.model.User;
import com.example.todolist.user.repository.UserRepository;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.boot.test.context.SpringBootTest;
import static org.assertj.core.api.AssertionsForClassTypes.assertThat;


import java.time.LocalDateTime;
import java.util.Arrays;
import java.util.List;
import java.util.Optional;

import static org.junit.jupiter.api.Assertions.*;
@SpringBootTest
class TaskRepositoryTest {
    @Autowired
    private TaskRepository taskRepository;

    @Autowired
    private UserRepository userRepository;

    private User user;
    @BeforeEach
    public void setUp(){
        user = User.builder()
                .username("Ivancho")
                .password("wasd")
                .email("asd@abv.bg")
                .role("shef")
                .createdDate(LocalDateTime.now())
                .build();

        userRepository.save(user);

    }
    @AfterEach
    public void tearDown(){
        taskRepository.deleteAll();
        userRepository.deleteAll();
    }

    @Test
    public void testSaveTask(){

        //arrange
        Task task = Task.builder()
                .topic("Try")
                .description("I try so hard")
                .priority(1)
                .user(new User(user.getId(), "Ivancho","wasd","asd@abv.bg","shef",user.getCreatedDate()))
                .isActive(true)
                .endDate(LocalDateTime.now())
                .startDate(LocalDateTime.now())
                .build();
        //act
        Task actualTask = taskRepository.save(task);
        //assert
        Assertions.assertEquals(task,actualTask);
        assertThat(actualTask).isNotNull();
        assertThat(actualTask.getId()).isGreaterThan(0);


    }
    @Test
    public void testGetAllTasks(){

        Task task1 = Task.builder()
                .topic("Try")
                .description("I try so hard")
                .priority(1)
                .user(new User(user.getId(), "Ivancho","wasd","asd@abv.bg","shef",user.getCreatedDate()))
                .isActive(true)
                .endDate(LocalDateTime.now())
                .startDate(LocalDateTime.now())
                .build();
        Task task2 = Task.builder()
                .topic("Try")
                .description("I try so hard")
                .priority(1)
                .user(new User(user.getId(), "Ivancho","wasd","asd@abv.bg","shef",user.getCreatedDate()))
                .isActive(true)
                .endDate(LocalDateTime.now())
                .startDate(LocalDateTime.now())
                .build();

        taskRepository.save(task1);
        taskRepository.save(task2);

        List<Task> expectedTasks = Arrays.asList(task1,task2);
        List<Task> actualTasks = taskRepository.findAll();

        assertThat(actualTasks.size() == 2);
        assertEquals(expectedTasks.size(),actualTasks.size());


    }
    @Test
    public void testGetTaskById(){
        User user1 = User.builder()
                .username("Manqika")
                .password("wasd")
                .email("wasd@abv.bg")
                .role("shef")
                .createdDate(LocalDateTime.now())
                .build();

        userRepository.save(user1);

        Task task1 = Task.builder()
                .topic("Try")
                .description("I try so hard")
                .priority(1)
                .user(new User(user1.getId(), "Manqika","wasd","wasd@abv.bg","shef",user1.getCreatedDate()))
                .isActive(true)
                .endDate(LocalDateTime.now())
                .startDate(LocalDateTime.now())
                .build();


        taskRepository.save(task1);

         Task actualTask = taskRepository.findById(task1.getId()).get();

       assertEquals(task1.getId(),actualTask.getId());
    }
    @Test
    public void testDeleteTaskById(){
        User user1 = User.builder()
                .username("Manqika")
                .password("wasd")
                .email("wasd@abv.bg")
                .role("shef")
                .createdDate(LocalDateTime.now())
                .build();

        userRepository.save(user1);

        Task task1 = Task.builder()
                .topic("Try")
                .description("I try so hard")
                .priority(1)
                .user(new User(user1.getId(), "Manqika","wasd","wasd@abv.bg","shef",user1.getCreatedDate()))
                .isActive(true)
                .endDate(LocalDateTime.now())
                .startDate(LocalDateTime.now())
                .build();
        taskRepository.save(task1);

        // Act
        Optional<Task> taskOptional = taskRepository.findById(task1.getId());
        taskRepository.deleteById(taskOptional.get().getId());

        // Assert
        taskOptional = taskRepository.findById(task1.getId());
        assertThat(taskOptional).isEmpty();

    }
    @Test
    public void testUpdateTask(){
        User user1 = User.builder()
                .username("Manqika")
                .password("wasd")
                .email("wasd@abv.bg")
                .role("shef")
                .createdDate(LocalDateTime.now())
                .build();

        userRepository.save(user1);

        Task task1 = Task.builder()
                .topic("Try")
                .description("I try so hard")
                .priority(1)
                .user(new User(user1.getId(), "Manqika","wasd","wasd@abv.bg","shef",user1.getCreatedDate()))
                .isActive(true)
                .endDate(LocalDateTime.now())
                .startDate(LocalDateTime.now())
                .build();
        taskRepository.save(task1);


        Task actualTask = taskRepository.save(Task.builder()
                .id(task1.getId())
                .topic("Pich sum")
                .description("I ain't try so hard")
                .priority(1)
                .user(new User(user1.getId(), "Manqika","wasd","wasd@abv.bg","shef",user1.getCreatedDate()))
                .isActive(true)
                .endDate(LocalDateTime.now())
                .startDate(LocalDateTime.now())
                .build());

         assertThat(actualTask).isNotNull();
         assertThat(actualTask.getId() == task1.getId());
    }
}