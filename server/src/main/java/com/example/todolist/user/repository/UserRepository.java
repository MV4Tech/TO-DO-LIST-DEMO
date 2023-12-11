package com.example.todolist.user.repository;

import com.example.todolist.user.model.User;
import jakarta.transaction.Transactional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface UserRepository extends JpaRepository<User,Integer> {
    
    Optional<User> findByUsername(String username);// TODO: 10/16/2023 da napravq test
    boolean existsByUsername(String username);
    boolean existsByEmail(String email);

    @Query("SELECT u.id FROM User u WHERE u.username = :username")
    Integer findUserIdByUsername(String username);

    Optional<User> findByEmail(String email);
}
