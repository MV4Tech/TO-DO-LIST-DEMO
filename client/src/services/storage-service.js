import {
  LOCAL_STORAGE_ACCESS_TOKEN_KEY,
  LOCAL_STORAGE_REFRESH_TOKEN_KEY,
  LOCAL_STORAGE_EXPIRATION_DATE_KEY,
} from "../shared/constants";

class StorageService {
  retrieveAccessToken() {
    try {
      const accessToken = localStorage.getItem(LOCAL_STORAGE_ACCESS_TOKEN_KEY);
      if (!accessToken) {
        return null;
      }
      return accessToken;
    } catch (e) {
      localStorage.removeItem(LOCAL_STORAGE_ACCESS_TOKEN_KEY);
      return null;
    }
  }

  saveAccessToken(accessToken) {
    if (accessToken) {
      localStorage.setItem(LOCAL_STORAGE_ACCESS_TOKEN_KEY, accessToken);
    } else {
      localStorage.removeItem(LOCAL_STORAGE_ACCESS_TOKEN_KEY);
    }
  }

  retrieveRefreshToken() {
    try {
      const refreshToken = localStorage.getItem(
        LOCAL_STORAGE_REFRESH_TOKEN_KEY
      );
      if (!refreshToken) {
        return null;
      }
      return refreshToken;
    } catch (e) {
      localStorage.removeItem(LOCAL_STORAGE_REFRESH_TOKEN_KEY);
      return null;
    }
  }

  saveRefreshToken(refreshToken) {
    if (refreshToken) {
      localStorage.setItem(LOCAL_STORAGE_REFRESH_TOKEN_KEY, refreshToken);
    } else {
      localStorage.removeItem(LOCAL_STORAGE_REFRESH_TOKEN_KEY);
    }
  }

  saveTokenExpiresDate(date) {
    if (date) {
      localStorage.setItem(LOCAL_STORAGE_EXPIRATION_DATE_KEY, date);
    } else {
      localStorage.removeItem(LOCAL_STORAGE_EXPIRATION_DATE_KEY);
    }
  }

  retrieveTokenExpiresDate() {
    try {
      const date = localStorage.getItem(LOCAL_STORAGE_EXPIRATION_DATE_KEY);
      if (!date) {
        return null;
      }
      return new Date(date);
    } catch (e) {
      localStorage.removeItem(LOCAL_STORAGE_EXPIRATION_DATE_KEY);
      return null;
    }
  }

  checkForUserLogin() {
    const token = this.retrieveAccessToken();
    const refreshToken = this.retrieveRefreshToken();
    const expirationDate = this.retrieveTokenExpiresDate();
    if (token && refreshToken && expirationDate) {
      return true;
    }
    return false;
  }

  deleteUserData() {
    localStorage.removeItem(LOCAL_STORAGE_ACCESS_TOKEN_KEY);
    localStorage.removeItem(LOCAL_STORAGE_REFRESH_TOKEN_KEY);
    localStorage.removeItem(LOCAL_STORAGE_EXPIRATION_DATE_KEY);
  }


}

const storageService = new StorageService();
export default storageService;
