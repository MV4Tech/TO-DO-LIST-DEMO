package com.example.todolist.user.model;

import com.example.todolist.task.model.Task;
import com.fasterxml.jackson.annotation.JsonFormat;
import jakarta.persistence.*;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotNull;
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
//@ToString(exclude = "task")
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @NotNull(message = "Please enter username")
    @Column(name="USERNAME")
    private String username;

    @NotNull(message = "Please enter password")
    @Column(name= "PASSWORD")
    private String password;


    @Email(message = "Enter valid email")
    @Column(name= "EMAIL")
    private String email;

    @NotNull(message = "Enter role ADMIN or USER")
    @Column(name="ROLE")
    private String role;


    @JsonFormat(pattern = "yyyy-MM-dd HH:mm:ss")
    @Column(name="CREATED_DATE")
    private LocalDateTime createdDate;
}
