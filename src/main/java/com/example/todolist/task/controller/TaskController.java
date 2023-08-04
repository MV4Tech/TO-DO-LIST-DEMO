package com.example.todolist.task.controller;

import com.example.todolist.task.exception.ApiRequestException;
import com.example.todolist.task.model.Task;
import com.example.todolist.task.service.TaskService;
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
    @PostMapping("/save-task")
    public ResponseEntity<Void> saveTask(@RequestBody Task task){
        taskService.saveTask(task);
       return new ResponseEntity<>(HttpStatus.CREATED);
    }
    @GetMapping("/get-task/{id}")
    public ResponseEntity<Task> getTask(@PathVariable("id") int id) throws ApiRequestException {
        return new ResponseEntity<>(taskService.getTask(id),HttpStatus.OK);
    }
    @GetMapping("/get-all-tasks")
    public ResponseEntity<List<Task>> getAllTasks(){
        return new ResponseEntity<>(taskService.getAllTasks(),HttpStatus.OK);
    }

    @DeleteMapping("/delete-task/{id}")
    public ResponseEntity<Void> deleteTask(@PathVariable("id") int id){
        taskService.deleteTask(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);

    }

    @PutMapping("/update-task")
    public ResponseEntity<Task> updateTask(@RequestBody Task task){
        return new ResponseEntity<>(taskService.updateTask(task),HttpStatus.OK);

    }


}
