package com.example.todolist.auth;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface PasswordTokenRepository extends JpaRepository<PasswordToken,Integer> {

    Optional<PasswordToken> findByToken(String token);



}

