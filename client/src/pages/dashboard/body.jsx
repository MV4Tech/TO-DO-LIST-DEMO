
import React from 'react'
import '../../styles/bodyTable.css'
import React, { useEffect, useState } from 'react'
import TaskService from '../../services/task-service' 
import { jwtDecode } from "jwt-decode";
import storageService from '../../services/storage-service';



const body = () => {

  const [loading,setLoading] = useState(true);
  const [task, setTask] = useState(null);

  useEffect( () => { 

    const fetchData = async () =>{ 
      setLoading(true); 
      try{

      const response = await TaskService.getTasksByUsername();
      setTask(response.data);
      setLoading(false);
   } catch(error){
    console.log(error);
   }
   
    }
   fetchData();
    
  },[])




    const bodyStyle = {
        fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif",
        fontSize: "13px",
        color: "#555",
        background: "none",
        marginTop:"100px"
        
      };
      
  return (
 
    
    
    <div style={bodyStyle}>
        <h1 className="  text-center text-dark mb-5 font-weight-bold">Tasks</h1>
     <div className="container bootstrap snippets bootdey">
      <div className="table-responsive">
        {/* PROJECT TABLE */}
        <table className="table colored-header datatable project-list">
          <thead>
            <tr>
              <th>Title</th>
              <th>Date Start</th>
              <th>Days to Deadline</th>
              <th>Progress</th>
              <th>Priority</th>
              <th>Leader</th>
              <th>Status</th>
            </tr>
          </thead>
          {!loading &&(
          <tbody>
            {task.map((task) => (
            <tr>
              <td><a href="#">{task.topic}</a></td>
              <td>{task.startDate}</td>
              <td>{task.endDate}</td>
              <td>
                <div className="progress">
                  <div className="progress-bar" data-transitiongoal="95" aria-valuenow="95" style={{ width: '95%' }}>95%</div>
                </div>
              </td>
              <td><span className="label label-warning">{task.priority}</span></td>
              <td><img src="https://bootdey.com/img/Content/avatar/avatar1.png" alt="Avatar" className="avatar img-circle" /> <a href="#">Michael</a></td>
              <td><span className="label label-success">{task.isActive}</span></td>
            </tr>
              ))}
            {/* Add more rows as needed */}
          </tbody>
          )}
        </table>
        {/* END PROJECT TABLE */}
      </div>
     </div>
    </div>
  )
}

export default body