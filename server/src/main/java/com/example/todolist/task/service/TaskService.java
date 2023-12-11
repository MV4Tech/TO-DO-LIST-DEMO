package com.example.todolist.task.service;
import com.example.todolist.task.model.Task;

import java.util.List;

public interface TaskService {
    public Task saveTask(Task task);

    public Task getTask(int id);

    public List<Task> getAllTasks();

    public void deleteTask(int id);

    public Task updateTask(Task task);

    List<Task> getTaskByUsername(String username);

    void setTaskAsInactive(int id);

    int getNumberOfTasksByUsername(String username);
}
