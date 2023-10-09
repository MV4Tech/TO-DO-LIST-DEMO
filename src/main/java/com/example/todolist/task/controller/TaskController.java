package com.example.todolist.task.controller;

import com.example.todolist.task.model.Task;
import com.example.todolist.task.service.TaskService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/TO-DO-LIST-DEMO/task/v1.0.0")
public class TaskController {
    @Autowired
    private TaskService taskService;

    private static final Logger logger = LoggerFactory.getLogger(TaskController.class);

    @PostMapping("/save-task")
    public ResponseEntity<Void> saveTask(@RequestBody Task task){
        logger.info("Saving task : {}",task);
        taskService.saveTask(task);
        logger.debug("Task Created with id : {}", task.getId());
       return new ResponseEntity<>(HttpStatus.CREATED);
    }
    @GetMapping("/get-task/{id}")
    public ResponseEntity<Task> getTask(@PathVariable("id") int id){
        logger.info("Fetching task with ID : {}", id);
        Task task = taskService.getTask(id);
        logger.debug("Task found with id : {}", id);
        return new ResponseEntity<>(task,HttpStatus.OK);
    }
    @GetMapping("/get-all-tasks")
    public ResponseEntity<List<Task>> getAllTasks(){
        logger.info("Getting All Tasks : {}");
        List<Task> tasks = taskService.getAllTasks();
        logger.debug("All the tasks have been retrieved : {}");
        return new ResponseEntity<>(tasks,HttpStatus.OK);
    }

    @DeleteMapping("/delete-task/{id}")
    public ResponseEntity<Void> deleteTask(@PathVariable("id") int id){
        logger.info("Deleting task with id  : {}", id);
        taskService.deleteTask(id);
        logger.debug("Task deleted with ID : {}", id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);

    }

    @PutMapping("/update-task")
    public ResponseEntity<Task> updateTask(@RequestBody Task task){

        logger.info("Updating task with ID : {}", task.getId());
        return new ResponseEntity<>(taskService.updateTask(task),HttpStatus.OK);

    }


}
