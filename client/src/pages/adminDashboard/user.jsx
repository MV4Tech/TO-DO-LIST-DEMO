import React,{useState,useEffect} from 'react'
import UserService from "../../services/user-service";
import DeleteUser from "./adminDeleteUserModal";

const User = ({user,deleteUser}) => {
    const [loading, setLoading] = useState(true);
    const [taskCount, setTaskCount] = useState(null);
    const username =  user.username// Replace with the actual username
  
    useEffect(() => {
        const fetchData = async () => {
          setLoading(true);
          try {
            const response = await UserService.getCountTaskByUsername(username);
            setTaskCount(response.data);
            setLoading(false);
          } catch (error) {
            console.log(error);
          }
        };
    
        fetchData();
      }, []);

    


  return (
    <tr key={user.id}>
    <td className="row-topic">{user.username}</td>
    <td  className="row-date">{user.email}</td>
    <td className={user.role === 'USER' ? 'row-date text-primary' : 'row-date  text-warning'}>
  {user.role}
</td>

    <td className="row-topic">{user.createdDate}</td>
    <td className="row-topic">{user.enabled ? <span  style={{color:'green'}}>Yes</span> : <span style={{color:'red'}}>No</span>}</td>
    <td className="row-topic">{taskCount}</td>
    <td  className="my-custom-td">
      <span className="label label-success">
        <DeleteUser user={user} deleteUser = {deleteUser}/>
        {/**    <div>
    <EditTaskModal task = {task}/>

      </div> */}
  
      </span>
      </td>
  </tr>
  )
}

export default User