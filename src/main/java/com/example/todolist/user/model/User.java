package com.example.todolist.user.model;

import com.example.todolist.task.model.Task;
import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDateTime;
import java.util.Date;
import java.util.List;


@NoArgsConstructor
@AllArgsConstructor
@Data
@Entity
@Builder
@Table(name="USER")
@ToString(exclude = "task")
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @Column(name="USERNAME")
    private String username;

    @Column(name= "PASSWORD")
    private String password;

    @Column(name= "EMAIL")
    private String email;

    @Column(name="ROLE")
    private String role;

    @Column(name="CREATED_DATE")
    private LocalDateTime createdDate;

    @OneToMany(mappedBy = "user",fetch = FetchType.LAZY)
    private List<Task> task;

}
