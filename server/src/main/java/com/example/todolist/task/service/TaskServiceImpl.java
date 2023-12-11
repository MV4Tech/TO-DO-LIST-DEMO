package com.example.todolist.task.service;

import com.example.todolist.exception.ApiRequestException;
import com.example.todolist.exception.TasksNotFoundException;
import com.example.todolist.task.controller.TaskController;
import com.example.todolist.task.model.Task;
import com.example.todolist.task.repository.TaskRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.List;
import java.util.Optional;

@Service
public class TaskServiceImpl implements TaskService {
    @Autowired
    private TaskRepository taskRepository;

    private static final Logger logger = LoggerFactory.getLogger(TaskController.class);

    @Override
    public Task saveTask(Task task) {
        logger.info("Saving task: {}", task);
        //getting  formatter
        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyy-MM-dd'T'HH:mm");
        if(task.getEndDate() != null && task.getStartDate() != null){

            //getting the old dates and time
            String getOldStartDateTime = task.getStartDate()+"";
            String getOldEndDateTime = task.getEndDate()+"";
            //parsing the data
            LocalDateTime newOldStartDateTime = LocalDateTime.parse(getOldStartDateTime, formatter);
            LocalDateTime newOldEndDateTime = LocalDateTime.parse(getOldEndDateTime, formatter);
            //setting the data
            task.setStartDate(newOldStartDateTime);
            task.setEndDate(newOldEndDateTime);
        }

        if(task.getStartDate() != null){
            //getting the old dates and time
            String getOldStartDateTime = task.getStartDate()+"";
            //parsing the data
            LocalDateTime newOldStartDateTime = LocalDateTime.parse(getOldStartDateTime, formatter);
            //setting the data
            task.setStartDate(newOldStartDateTime);
        }

        if(task.getEndDate() != null){
            //getting the old dates and time
            String getOldEndDateTime = task.getEndDate()+"";
            //parsing the data
            LocalDateTime newOldEndDateTime = LocalDateTime.parse(getOldEndDateTime, formatter);
            //setting the data
            task.setEndDate(newOldEndDateTime);
        }

        Task savedTask = taskRepository.save(task);
        logger.info("Task saved successfully: {}", savedTask);
        return savedTask;
    }

    @Override
    public Task getTask(int id) {
        Optional<Task> task = taskRepository.findById(id);

        task.ifPresent(t -> logger.info("Task found: {}", t));

        return task.orElseThrow(() -> new ApiRequestException("The Task With ID: " + id + " Doesn't Exist!"));
    }


    @Override
    public List<Task> getAllTasks() {
        logger.info("Retrieving the Tasks");
        List<Task> tasks = taskRepository.findAll();
        if(tasks.isEmpty()){
            logger.info("Tasks not Found");
           throw new TasksNotFoundException("There Is No Tasks Available");
        }else
            logger.info("Tasks have been Founded");
            return tasks;
    }

    @Override
    public void deleteTask(int id) {
        Optional<Task> task = taskRepository.findById(id);

        if(task.isPresent()){
            logger.info("Deleting Task with ID : {}", id);
            taskRepository.deleteById(id);
        }else
        {
            logger.info("There is no task with id : {}",id);
            throw new ApiRequestException("The Task With ID: " + id + " Doesn't Exists!");
        }

    }

    @Override
    public Task updateTask(Task task) {

        logger.info("The Task with ID : {}", task.getId());
        return taskRepository.save(task);
    }

    @Override
    public List<Task> getTaskByUsername(String username) {

        List<Task> tasksByUsername = taskRepository.findAllTasksByUsername(username);
        return tasksByUsername;
    }

    @Override
    public void setTaskAsInactive(int id) {
        Optional<Task> task = taskRepository.findById(id);
        if(!task.isPresent()){
            throw new TasksNotFoundException("Task not found for inactive");
        }
        Task currTask = task.get();
        currTask.setIsActive(false);
        taskRepository.save(currTask);
    }

    @Override
    public int getNumberOfTasksByUsername(String username) {
        logger.info("Received request to getNumberOfTasksByUsername.");
        return taskRepository.findTaskCountByUsername(username);
    }


}
