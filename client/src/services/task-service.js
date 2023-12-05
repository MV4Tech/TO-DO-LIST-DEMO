import axios from "axios";
import { SERVER_TASK_URL, SERVER_URL } from "../shared/constants";
import storageService from "./storage-service";
import { jwtDecode } from "jwt-decode";




class TaskService{
    // GET TASKS BY USERNAME
    getTasksByUsername(){
   
        const decodeToken = (token) => {
            try {
              const decoded = jwtDecode(token);
              return decoded ? decoded.sub : null; // 'sub' typically represents the subject in a JWT
            } catch (error) {
              console.error('Error decoding token:', error);
              return null;
            }
          };
          
        const accessToken = storageService.retrieveAccessToken();
        const username = decodeToken(accessToken);
        return axios.get(`${SERVER_TASK_URL}/get-tasks-by-username/${username}`, { headers: { Authorization: `Bearer ${accessToken}` } });
    }

    
    async saveTask(task){
      
      const accessToken = storageService.retrieveAccessToken();

      let response = await axios.post(SERVER_TASK_URL+"/save-task",
      task,
      { headers: { Authorization: `Bearer ${accessToken}` } })

        if(response.status != 200){
          throw "Error "+ response.data; 
        }

    }
    //

  
    // DELETE TASK BY ID 
    deleteTaskById(id){
 
    const accessToken = storageService.retrieveAccessToken();
      return axios.delete(`${SERVER_TASK_URL}/delete-task/${id}`, { headers: { Authorization: `Bearer ${accessToken}` } });
      }

      // UPDATE TASK BY ID
      updateTaskById(task){
   
        const accessToken = storageService.retrieveAccessToken();
        return axios.put(`${SERVER_TASK_URL}/update-task`,task, { headers: { Authorization: `Bearer ${accessToken}` } });
        }

      
        setTaskInactive(id) {
          const accessToken = storageService.retrieveAccessToken();
          
          return axios.patch(`${SERVER_TASK_URL}/set-inactive/${id}`, {}, {
            headers: {
              Authorization: `Bearer ${accessToken}`
            }
          });
        }

       getRandomQuote(){
  
      return axios.get('https://api.quotable.io/random');
        
    }
        
     

}

export default new TaskService();
