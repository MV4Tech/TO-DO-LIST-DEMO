package com.example.todolist.user.model;

import jakarta.persistence.*;
import lombok.*;
import java.util.Date;


@NoArgsConstructor
@AllArgsConstructor
@Data
@Entity
@Table(name="USER")
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @Column(name= "PASSWORD")
    private String password;

    @Column(name= "EMAIL")
    private String email;

    @Column(name="ROLE")
    private String role;

    @Column(name="CREATED_DATE")
    private Date createdDate;
}
