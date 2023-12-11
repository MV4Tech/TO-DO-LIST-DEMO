import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { REFRESH_TOKEN_CHEKING_INTERVAL } from "./shared/constants.js";
import storageService from "./services/storage-service.js";
import authService from "./services/auth-service.js";

const tokenCheck = async () => {
  console.log("Checking for new token");
  if (!storageService.retrieveAccessToken()) {
    return;
  }

  const expiration = storageService.retrieveTokenExpiresDate();
  const now = new Date(Date.now() + REFRESH_TOKEN_CHEKING_INTERVAL);

  if (expiration < now) {
    try {
      const refreshToken = storageService.retrieveRefreshToken();

      if (!refreshToken) {
        console.log("Refesh token missing. Redirect to login");
        storageService.deleteUserData();
        return;
      }

      await authService.renewToken();
    } catch (error) {
      // Handle errors during token refreshing
      console.error("Error refreshing access token:", error);
      storageService.deleteUserData();
      // You might also want to add code here to redirect to the login page
    }
  }
};

// Call the tokenCheck function once immediately
await tokenCheck();

// Set up an interval to call the tokenCheck function periodically
setInterval(tokenCheck, REFRESH_TOKEN_CHEKING_INTERVAL);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={App} />
  </React.StrictMode>
);
