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
      throw "Error: " + response.data;
    }

    storageService.saveAccessToken(response.data.access_token);
    storageService.saveRefreshToken(response.data.refresh_token);
    let currentDate = new Date();
    currentDate.setMinutes(currentDate.getMinutes() + 5);
    storageService.saveTokenExpiresDate(currentDate);
  }

  async makeRegisterRequest(firstName, lastName, email, password) {}

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
}

const authService = new AuthService();
export default authService;