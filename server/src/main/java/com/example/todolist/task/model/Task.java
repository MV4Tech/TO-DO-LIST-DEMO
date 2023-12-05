package com.example.todolist.task.model;

import com.example.todolist.user.model.User;
import com.fasterxml.jackson.annotation.JsonFormat;
import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDateTime;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
@Entity
@Table(name = "TASK")
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
    @JsonFormat(pattern = "yyyy-MM-dd HH:mm:ss")
    @Column(name = "START_DATE")
    private LocalDateTime startDate;
    @JsonFormat(pattern = "yyyy-MM-dd HH:mm:ss")
    @Column(name = "END_DATE")
    private LocalDateTime endDate;
    @Column(name = "IS_ACTIVE")
    private Boolean isActive;
    @Column(name = "IS_EMAIL_REMAINDER_SENT")
    private Boolean isEmailRemainderSent = false;
    @ManyToOne
    @JoinColumn(name = "USER_ID", nullable = false)
    private User user;
}