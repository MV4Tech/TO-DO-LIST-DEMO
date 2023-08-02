package com.example.todolist.task.model;

import com.example.todolist.user.model.User;
import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDateTime;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
@Entity
@Table(name = "TASK")
@ToString(exclude = "user")
public class Task {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @Column(name = "TOPIC")
    private String topic;
    @Column(name = "DESCRIPTION")
    private String description;
    @Column(name = "PRIORITY")
    private int priority;
    @Column(name = "START_DATE")
    private LocalDateTime startDate;
    @Column(name = "END_DATE")
    private LocalDateTime endDate;
    @Column(name = "IS_ACTIVE")
    private Boolean isActive;
    @ManyToOne(cascade=CascadeType.ALL)
    @JoinColumn(name = "USER_ID", nullable = false)
    private User user;



}
