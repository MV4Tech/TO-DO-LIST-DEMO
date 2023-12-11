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

    @PostMapping("/save-task")
    @PreAuthorize("hasAuthority('task:create')")
    public ResponseEntity<Void> saveTask(@RequestBody Task task){
        taskService.saveTask(task);
       return new ResponseEntity<>(HttpStatus.CREATED);
    }
    @GetMapping("/get-task/{id}")
    @PreAuthorize("hasAuthority('task:read')")
    public ResponseEntity<Task> getTask(@PathVariable("id") int id){
        Task task = taskService.getTask(id);
        return new ResponseEntity<>(task,HttpStatus.OK);
    }
    @GetMapping("/get-all-tasks")
    @PreAuthorize("hasAuthority('task:read')")
    public ResponseEntity<List<Task>> getAllTasks(){
        List<Task> tasks = taskService.getAllTasks();
        return new ResponseEntity<>(tasks,HttpStatus.OK);
    }

    @DeleteMapping("/delete-task/{id}")
    @PreAuthorize("hasAuthority('task:delete')")
    public ResponseEntity<Void> deleteTask(@PathVariable("id") int id){
        taskService.deleteTask(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);

    }

    @PutMapping("/update-task")
    @PreAuthorize("hasAuthority('task:update')")
    public ResponseEntity<Task> updateTask(@RequestBody Task task){
        return new ResponseEntity<>(taskService.updateTask(task),HttpStatus.OK);
    }


    // get all task by username
    @GetMapping("/get-tasks-by-username/{username}")
    @PreAuthorize("hasAuthority('task:read')")
    public ResponseEntity<List<Task>> getTaskByUsername(@PathVariable("username") String username){
        List<Task> tasksByUsername = taskService.getTaskByUsername(username);
        return new ResponseEntity<>(tasksByUsername,HttpStatus.OK);
    }

    // set task as inactive
    @PatchMapping("/set-inactive/{id}")
    @PreAuthorize("hasAuthority('task:update')")
    public ResponseEntity<Void> setTaskAsInactive(@PathVariable("id") int id){

        taskService.setTaskAsInactive(id);

        return new ResponseEntity(HttpStatus.OK);
    }

    // get number of tasks by username
    @GetMapping("/get-number-of-tasks-by-username/{username}")
    @PreAuthorize("hasAuthority('task:read')")
    public ResponseEntity<Integer> getNumbOfTasksByUsername(@PathVariable("username") String username){

        return ResponseEntity.ok(taskService.getNumberOfTasksByUsername(username));
    }


}
