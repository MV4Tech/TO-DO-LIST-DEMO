import React from 'react'
import DeleteTask from './deleteTaskModal';
import ViewTaskModal from './viewTaskModal';
import EditTaskModal from './editTaskModal';
import ResolveTask from './resolveTaskModal'
import '../../styles/task.css'

const ResolveTaskTask = ({task, deleteTask, resolveTask}) => {

  if (!task) {
    return <tr>Loading......</tr>; // You can replace this with a loading spinner or any other loading indicator.
  }


  const calculateProgress = (priority) => {
    const percentage = priority * 20; // Each priority level corresponds to a 20% increment
    return `${percentage}%`;
  };


  return !task.isActive ? (
    <tr key={task.id}>
              <td className="row-topic">{task.topic}</td>
              <td  className="row-date">{task.startDate}</td>
              <td  className="row-date">{task.endDate}</td>
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
              <DeleteTask task = {task} deleteTask = {deleteTask}/>
           
                </div>
                </span>
                </td>
            </tr>
  ) : null
}

export default ResolveTaskTask