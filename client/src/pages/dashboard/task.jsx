import React from 'react'
import DeleteTask from './deleteTaskModal';
import ViewTaskModal from './viewTaskModal';
const Task = ({task, deleteTask}) => {

  if (!task) {
    return <tr>Loading......</tr>; // You can replace this with a loading spinner or any other loading indicator.
  }


  const calculateProgress = (priority) => {
    const percentage = priority * 20; // Each priority level corresponds to a 20% increment
    return `${percentage}%`;
  };

  const editTask = (e,id) => {
    e.preventDefault();
    
  }


  return task.isActive ? (
    <tr key={task.id}>
              <td>{task.topic}</td>
              <td>{task.startDate}</td>
              <td>{task.endDate}</td>
              <td>
                
                <div className="progress">
                
                  <div className="progress-bar" data-transitiongoal={task.priority} aria-valuenow={task.priority} style={{ width: calculateProgress(task.priority) }}>
                  {task.priority + '/5'}
                  </div>  
                </div>
              </td>
              <td  className="my-custom-td">
                <span className="label label-success">
                <div>
              <ViewTaskModal task = {task}/>
              <button onClick={(e,id) => editTask(e,id)} type="button" className="btn btn-outline-secondary btn-sm" style={{ marginRight: '8px' }} data-mdb-ripple-color="dark">Edit</button>
              <button type="button" className="btn btn-outline-success btn-sm" style={{ marginRight: '8px' }} data-mdb-ripple-color="dark">Mark As Resolved</button>
              
              <DeleteTask task = {task} deleteTask = {deleteTask}/>
           
                </div>
                </span>
                </td>
            </tr>
  ) : null
}

export default Task