import React, { useEffect, useState } from 'react';
import '../../styles/bodyTable.css';
import TaskService from '../../services/task-service';
import Task from './task';
import storageService from '../../services/storage-service';


const Body = () => {
  const [loading, setLoading] = useState(true);
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await TaskService.getTasksByUsername();
        setTasks(response.data);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  const deleteTask = (e, id) => {
    e.preventDefault();
    TaskService.deleteTaskById(id).then((res) => {
      setTasks((prevTasks) => {
        return prevTasks.filter((task) => task.id !== id);
      });
    });
  };

  const bodyStyle = {
    fontFamily: 'Helvetica Neue, Helvetica, Arial, sans-serif',
    fontSize: '13px',
    color: '#555',
    background: 'none',
    marginTop: '100px',
  };

  const noTasksStyle = {
    textAlign: 'center',
    fontSize: '18px',
    color: '#888',
    marginTop: '20px',
  };

  return (
    <div style={bodyStyle}>
      <h1 className="text-center text-dark mb-5 font-weight-bold">My Tasks</h1>
      <div className="container bootstrap snippets bootdey">
        <div className="table-responsive">
          {loading ? (
            <p>Loading...</p>
          ) : tasks.length === 0 ? (
            <p style={noTasksStyle}>No Tasks Created... <a href="#">create</a></p>
          ) : (
            <table className="table colored-header datatable project-list">
              <thead>
                <tr>
                  <th>Title</th>
                  <th>Date Start</th>
                  <th>Days to Deadline</th>
                  <th>Priority</th>
                  <th className="my-custom-td">Options</th>
                </tr>
              </thead>
              <tbody>
                {tasks.map((task) => (
                  <Task task={task} deleteTask={deleteTask} key={task.id} />
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </div>
  );
};

export default Body;