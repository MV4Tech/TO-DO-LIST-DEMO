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
    private Date createdDate;

    @OneToMany(mappedBy = "user")
    private List<Task> task;

}
