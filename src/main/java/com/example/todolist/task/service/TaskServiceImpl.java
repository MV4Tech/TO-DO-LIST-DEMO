package com.example.todolist.task.service;

import com.example.todolist.exception.ApiRequestException;
import com.example.todolist.exception.TasksNotFoundException;
import com.example.todolist.task.model.Task;
import com.example.todolist.task.repository.TaskRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class TaskServiceImpl implements TaskService {
    @Autowired
    private TaskRepository taskRepository;

    @Override
    public void saveTask(Task task) {
        taskRepository.save(task);
    }

    @Override
    public Task getTask(int id) {
        Optional<Task> task = taskRepository.findById(id);
//
//        if(!task.isPresent()){
//            throw new ApiRequestException("Ops can't get a task!");
//            throw new ApiRequestException("The Task With ID: "+task.get().getId()+" Doesn't Exists!");
//        }else
//            return task.get();
        return task.orElseThrow(() -> new ApiRequestException("The Task With ID: " + id + " Doesn't Exists!"));
    }

    @Override
    public List<Task> getAllTasks() {
        List<Task> tasks = taskRepository.findAll();
        if(tasks.isEmpty()){
           throw new TasksNotFoundException("There Is No Tasks Available");
        }else
            return tasks;
    }

    @Override
    public void deleteTask(int id) {
        Optional<Task> task = taskRepository.findById(id);

        if(task.isPresent()){
            taskRepository.deleteById(id);
        }else throw new ApiRequestException("The Task With ID: " + id + " Doesn't Exists!");

    }

    @Override
    public Task updateTask(Task task) {
        return taskRepository.save(task);
    }


}
