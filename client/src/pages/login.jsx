import React, { useState } from "react";
import "../styles/login.css";
import LOGIN_PH from "../assets/images/login_ph.webp";
import authService from "../services/auth-service";
import {  useNavigate } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  let navigate = useNavigate();

const submit = async (e) => {
    e.preventDefault();
    try {
        await authService.makeLoginRequest(username, password);
        navigate("/dashboard");
    } catch (err) {
        // show error to user in user-friendly way
        console.log(err);
    }
  };

  return (
    <div className="css-grid">
      <div className="header-text">
        <h1 className="sign">SIGN IN IN YOUR TO DO LIST...</h1>
      </div>
      <div className="login-menu">
        <div className="image-register-grid">
          <div className="image-container">
            <img className="login_image" src={LOGIN_PH} alt="Chasovnika" />
          </div>
          <div className="actual-login">
            <form onSubmit={submit}>
              <div className="inputs">
                <div className="input-container">
                  <label className="username-label" htmlFor="username">
                    Username
                  </label>
                  <input
                    type="text"
                    id="username"
                    name="username"
                    value={username}
                    onChange={(e) => {
                      setUsername(e.currentTarget.value);
                    }}
                    placeholder="Enter your username"
                    required
                  />
                </div>

                <div className="input-container">
                  <label htmlFor="password">Password</label>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    placeholder="Enter your password"
                    required
                    value={password}
                    onChange={(e) => {
                      setPassword(e.currentTarget.value);
                    }}
                  />
                </div>

                <div className="input-container">
                  <a className="sign-in-link" href="signin.html">
                    Forgot Password?
                  </a>
                </div>
                <div className="input-container">
                  <input
                    type="submit"
                    value="Sign In"
                  />
                </div>
                <div className="input-container">
                  <a className="sign-in-link" href="signin.html">
                    Not a user? Sign Up
                  </a>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="end"></div>
    </div>
  );
};

export default Login;
