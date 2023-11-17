import React from 'react'
import 'D:/git-to-do/to-do-list/client/src/styles/bodyTable.css'



const body = () => {
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
          <tbody>
            <tr>
              <td><a href="#">Spot Media</a></td>
              <td>18-05-2014</td>
              <td>12 days</td>
              <td>
                <div className="progress">
                  <div className="progress-bar" data-transitiongoal="95" aria-valuenow="95" style={{ width: '95%' }}>95%</div>
                </div>
              </td>
              <td><span className="label label-warning">MEDIUM</span></td>
              <td><img src="https://bootdey.com/img/Content/avatar/avatar1.png" alt="Avatar" className="avatar img-circle" /> <a href="#">Michael</a></td>
              <td><span className="label label-success">ACTIVE</span></td>
            </tr>
           
            {/* Add more rows as needed */}
          </tbody>
        </table>
        {/* END PROJECT TABLE */}
      </div>
     </div>
    </div>
  )
}

export default body