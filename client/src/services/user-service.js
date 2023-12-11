import axios from "axios";
import { SERVER_URL,SERVER_ADMIN_URL } from "../shared/constants";
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

          changePassword(changePasswordRequest){
            const accessToken = storageService.retrieveAccessToken();
           
            return axios.patch(SERVER_URL+`api/v1/admin/change-password`,
            changePasswordRequest,
            { headers: { Authorization: `Bearer ${accessToken}` } }
            )

          }

          changeUsername(changeUsernameRequest){
            const accessToken = storageService.retrieveAccessToken();
          
            return axios.patch(SERVER_URL+`api/v1/admin/change-username`,
            changeUsernameRequest,
            { headers: { Authorization: `Bearer ${accessToken}` } }
            )
          }
     


          getAllUsers(){
            const accessToken = storageService.retrieveAccessToken();

            return axios.get(SERVER_URL+`api/v1/admin/get-all-users`,
            { headers: { Authorization: `Bearer ${accessToken}` } }
            )
          }

          getCountTaskByUsername(username){
            const accessToken = storageService.retrieveAccessToken();

            return axios.get(SERVER_URL+`api/v1/task/get-number-of-tasks-by-username/` + username,
            { headers: { Authorization: `Bearer ${accessToken}` } }
            )
          }

          // DELETE TASK BY ID 
    deleteUserById(id){
 
      const accessToken = storageService.retrieveAccessToken();
        return axios.delete(`${SERVER_ADMIN_URL}/delete-user/${id}`, { headers: { Authorization: `Bearer ${accessToken}` } });
        }
        

      sendChangePasswordQuery(email){
        return axios.post(SERVER_URL+`api/v1/reset-password/send-reset-email/`+ email)
      }

      saveNewPassword(requestData) {

        return axios.post(
          SERVER_URL + `api/v1/reset-password/new-password`,
          requestData,
          {
            headers: {
              'Content-Type': 'application/json'
            }
          }
        );
      }

 }
 export default new UserService();