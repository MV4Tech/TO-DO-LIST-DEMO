import axios from "axios";
import { SERVER_TASK_URL } from "../shared/constants";
import storageService from "./storage-service";
import { jwtDecode } from "jwt-decode";




class TaskService{
    
  

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

}

export default new TaskService();
