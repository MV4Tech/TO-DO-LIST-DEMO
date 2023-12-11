import axios from "axios";
import { WebApiService } from "./web-api-service";
import { SERVER_URL } from "../shared/constants";
import storageService from "./storage-service";

class AuthService extends WebApiService {
  async makeLoginRequest(username, password) {
    let response = await axios.post(SERVER_URL + "api/v1/auth/authenticate", {
      username,
      password,
    });

    if (response.status != 200) {
      throw "Error: " + response.data.message;
    }

    storageService.saveAccessToken(response.data.access_token);
    storageService.saveRefreshToken(response.data.refresh_token);
    let currentDate = new Date();
    currentDate.setMinutes(currentDate.getMinutes() + 5);
    storageService.saveTokenExpiresDate(currentDate);
  }
  async makeAdminLoginRequest(username, password) {
    let response = await axios.post(SERVER_URL + "api/v1/auth/authenticate-admin", {
      username,
      password,
    });

    if (response.status != 200) {
      throw "Error: " + response.data.message;
    }

    storageService.saveAccessToken(response.data.access_token);
    storageService.saveRefreshToken(response.data.refresh_token);
    let currentDate = new Date();
    currentDate.setMinutes(currentDate.getMinutes() + 5);
    storageService.saveTokenExpiresDate(currentDate);
  }

  async makeRegisterRequest(user) {

      const response = await axios.post(SERVER_URL+"api/v1/auth/register",user);

      if(response.status != 200){
        throw "Error: "+ response.data;
      }

  }

  async renewToken() {
    let response = await axios.post(
      SERVER_URL + "api/v1/auth/refresh-token",
      {},
      this.generateRefreshTokenHeader()
    );

    if (response.status != 200) {
      throw "Error: " + response.data;
    }

    storageService.saveAccessToken(response.data.access_token);
    storageService.saveRefreshToken(response.data.refresh_token);
    let currentDate = new Date();
    currentDate.setMinutes(currentDate.getMinutes() + 5);
    storageService.saveTokenExpiresDate(currentDate);
  }

  logoutRequest(){

    
    const response = axios.post(SERVER_URL+"api/v1/auth/logout",{}, this.generateHeader());

    if(response.status == 200){
      console.log("Status: "+ response.status)
    }
    if(response.status != 200){
      console.log("Status: "+ response.status)
    }
    return response;

  }
}

const authService = new AuthService();
export default authService;
