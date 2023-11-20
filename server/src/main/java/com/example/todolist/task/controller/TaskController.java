package com.example.todolist.task.controller;

import com.example.todolist.task.model.Task;
import com.example.todolist.task.service.TaskService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1/task")
@CrossOrigin(origins = "http://localhost:5173")
public class TaskController {
    @Autowired
    private TaskService taskService;

    private static final Logger logger = LoggerFactory.getLogger(TaskController.class);

    @PostMapping("/save-task")
    @PreAuthorize("hasAuthority('task:create')")
    public ResponseEntity<Void> saveTask(@RequestBody Task task){
        logger.info("Saving task : {}",task);
        taskService.saveTask(task);
        logger.debug("Task Created with id : {}", task.getId());
       return new ResponseEntity<>(HttpStatus.CREATED);
    }
    @GetMapping("/get-task/{id}")
    @PreAuthorize("hasAuthority('task:read')")
    public ResponseEntity<Task> getTask(@PathVariable("id") int id){
        logger.info("Fetching task with ID : {}", id);
        Task task = taskService.getTask(id);
        logger.debug("Task found with id : {}", id);
        return new ResponseEntity<>(task,HttpStatus.OK);
    }
    @GetMapping("/get-all-tasks")
    @PreAuthorize("hasAuthority('task:read')")
    public ResponseEntity<List<Task>> getAllTasks(){
        logger.info("Getting All Tasks : {}");
        List<Task> tasks = taskService.getAllTasks();
        logger.debug("All the tasks have been retrieved : {}");
        return new ResponseEntity<>(tasks,HttpStatus.OK);
    }

    @DeleteMapping("/delete-task/{id}")
    @PreAuthorize("hasAuthority('task:delete')")
    public ResponseEntity<Void> deleteTask(@PathVariable("id") int id){
        logger.info("Deleting task with id  : {}", id);
        taskService.deleteTask(id);
        logger.debug("Task deleted with ID : {}", id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);

    }

    @PutMapping("/update-task")
    @PreAuthorize("hasAuthority('task:update')")
    public ResponseEntity<Task> updateTask(@RequestBody Task task){

        logger.info("Updating task with ID : {}", task.getId());
        return new ResponseEntity<>(taskService.updateTask(task),HttpStatus.OK);

    }


    // get all task by username
    @GetMapping("/get-tasks-by-username/{username}")
    @PreAuthorize("hasAuthority('task:read')")
    public ResponseEntity<List<Task>> getTaskByUsername(@PathVariable("username") String username){
        List<Task> tasksByUsername = taskService.getTaskByUsername(username);
        return new ResponseEntity<>(tasksByUsername,HttpStatus.OK);
    }


}
