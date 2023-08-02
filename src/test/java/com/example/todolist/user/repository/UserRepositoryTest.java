package com.example.todolist.user.repository;

import com.example.todolist.task.model.Task;
import com.example.todolist.user.model.User;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import java.time.LocalDateTime;
import java.util.List;


@SpringBootTest
class UserRepositoryTest {

    @Autowired
    private UserRepository userRepository;
    @Test
    public void saveUser() {

        // LocalDateTime date = LocalDateTime.now();
        java.util.Date dt = new java.util.Date();
        java.text.SimpleDateFormat sdf = new java.text.SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
        String currentTime = sdf.format(dt);

        Task taskChupq = Task.builder()
                .topic("Machkai")
                .description("Da shcupq glavata na tozi koito se prae na mno utoren")
                .priority(2)
                .startDate(currentTime)
                .endDate(currentTime)
                .isActive(true)
                .build();

        Task taskSmaja = Task.builder()
                .topic("Machkai")
                .description("Da smaja glavata na tozi koito se prae na mno utoren")
                .priority(3)
                .startDate(currentTime)
                .endDate(currentTime)
                .isActive(true)
                .build();


        User user = User.builder()
                .username("Mariqn")
                .password("123")
                .email("mryan@dst.bg")
                .role("ADMIN")
                .createdDate(currentTime)
                .task(List.of(taskChupq,taskSmaja))
                .build();

        userRepository.save(user);
    }
}