package com.example.todolist.repository;

import com.example.todolist.model.ConfirmationToken;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface ConfirmationTokenRepository extends JpaRepository<ConfirmationToken,Integer> {

    Optional<ConfirmationToken> findByToken(String token);

}
