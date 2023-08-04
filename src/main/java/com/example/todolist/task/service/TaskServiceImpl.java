package com.example.todolist.task.service;

import com.example.todolist.exception.ApiRequestException;
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

        if(!task.isPresent()){
            throw new ApiRequestException("Ops can't get a task!");
        }else
            return task.get();
    }

    @Override
    public List<Task> getAllTasks() {
        return taskRepository.findAll();
    }

    @Override
    public void deleteTask(int id) {
        taskRepository.deleteById(id);
    }

    @Override
    public Task updateTask(Task task) {
        return taskRepository.save(task);
    }


}
