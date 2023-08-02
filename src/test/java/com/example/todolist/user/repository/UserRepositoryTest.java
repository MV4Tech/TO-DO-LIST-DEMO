package com.example.todolist.user.repository;

import com.example.todolist.task.model.Task;
import com.example.todolist.user.model.User;
import jakarta.transaction.Transactional;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import java.time.LocalDateTime;
import java.util.List;


@SpringBootTest
class UserRepositoryTest {

    @Autowired
    private UserRepository userRepository;

    // create new user test
    @Test
    public void saveUser() {


        // LocalDateTime date = LocalDateTime.now();

        Task taskChupq = Task.builder()
                .topic("Machkai")
                .description("Da shcupq glavata na tozi koito se prae na mno utoren")
                .priority(2)
                .startDate(LocalDateTime.now())
                .endDate(LocalDateTime.now())
                .isActive(true)
                .build();

        Task taskSmaja = Task.builder()
                .topic("Machkai")
                .description("Da smaja glavata na tozi koito se prae na mno utoren")
                .priority(3)
                .startDate(LocalDateTime.now())
                .endDate(LocalDateTime.now())
                .isActive(true)
                .build();


        User user = User.builder()
                .username("VanqDjaferovich")
                .password("123")
                .email("vania@dst.bg")
                .role("ADMIN")
                .createdDate(LocalDateTime.now())
                .task(List.of(taskChupq,taskSmaja))
                .build();

        userRepository.save(user);
    }

    // print all users
    @Test
    public void printAllUsers(){
        List<User> users = userRepository.findAll();
        System.out.println("Users : " + users);
    }

}