package com.example.todolist.task.repository;

import com.example.todolist.task.model.Task;
import com.example.todolist.user.model.User;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

@SpringBootTest
class TaskRepositoryTest {
    @Autowired
    private TaskRepository taskRepository;
    @Test
    public void saveTask(){
        User user = User.builder()
                .username("Stefko")
                .password("12345")
                .email("abv@abv.bg")
                .role("Admin")
                .createdDate(LocalDateTime.now())
                .build();

        Task task = Task
                .builder()
                .topic("Aion")
                .description("To play 24/7")
                .priority(3)
                .startDate(LocalDateTime.now())
                .endDate(LocalDateTime.now())
                .user(user)
                .build();

        taskRepository.save(task);

    }
    @Test
    public void getTaskById(){
        Optional<Task> task = taskRepository.findById(9);

        System.out.println("task = " + task);
    }
    @Test
    public void getAllTasks(){
        List<Task> tasks = taskRepository.findAll();

        System.out.println("tasks = " + tasks);
    }
    @Test
    public void deleteTaskById(){
        taskRepository.deleteById(7);
    }
    @Test
    public void updateTask(){

        Task task = taskRepository.findById(9).get();

        task.setPriority(6);

        taskRepository.save(task);

    }



}