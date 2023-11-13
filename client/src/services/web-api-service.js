import storageService from "./storage-service";

export class WebApiService {
  generateHeader() {
    return {
      headers: {
        Authorization: `Bearer ${storageService.retrieveAccessToken()}`,
      },
    };
  }

  generateRefreshTokenHeader() {
    return {
      headers: {
        Authorization: `Bearer ${storageService.retrieveRefreshToken()}`,
      },
    };
  }
}
