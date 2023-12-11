package com.example.todolist.task.repository;

import com.example.todolist.task.model.Task;
import jakarta.transaction.Transactional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface TaskRepository extends JpaRepository<Task,Integer>{

//    // Custom query to delete tasks by the given ID
//    @Modifying
//    @Transactional
//    @Query("DELETE FROM TASK t WHERE t.USER_ID = :taskId")
//    void deleteTasksById(@Param("taskId") Integer taskId);

    @Query("SELECT t FROM Task t JOIN t.user u WHERE u.username = :username")
    List<Task> findAllTasksByUsername(@Param("username") String username);

    @Query("SELECT COUNT(t.id) AS task_count " +
            "FROM User u " +
            "LEFT JOIN Task t ON u.id = t.user.id " +
            "WHERE u.username = :username ")
    Integer findTaskCountByUsername(@Param("username") String username);

}
