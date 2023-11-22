import axios from "axios";
import { SERVER_URL } from "../shared/constants";
import storageService from "./storage-service";
import { jwtDecode } from "jwt-decode";


    class UserService{

        getUserById(id){
            const accessToken = storageService.retrieveAccessToken();
            
            return axios.get(SERVER_URL+`api/v1/admin/get-user/${id}`
            ,{headers: {Authorization: `Bearer ${accessToken}`} })
            

        }
        
        async getIdByUsername(){

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
      
            let response = await axios.get(SERVER_URL+`api/v1/user/get-id/${username}`,
            { headers: { Authorization: `Bearer ${accessToken}` } });
      
            if(response.status != 200){
              throw "Error "+response.data;
            }
            return response.data;
          }

 }
 export default new UserService();