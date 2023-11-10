package com.example.todolist.task.repository;

import com.example.todolist.task.model.Task;
import jakarta.transaction.Transactional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface TaskRepository extends JpaRepository<Task,Integer>{

//    // Custom query to delete tasks by the given ID
//    @Modifying
//    @Transactional
//    @Query("DELETE FROM TASK t WHERE t.USER_ID = :taskId")
//    void deleteTasksById(@Param("taskId") Integer taskId);



}
