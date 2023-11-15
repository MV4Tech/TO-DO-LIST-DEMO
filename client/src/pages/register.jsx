import React from 'react'
import '../styles/register.css'
import { useState } from 'react'

import Choveka from '../assets/images/login_image.jpg'
import { useNavigate } from 'react-router-dom'
import authService from '../services/auth-service'

const Register = () => {

    const [user, setUser] = useState({
        username:"",
        password:"",
        email:"",
        role:"USER"
    })
    const [confirmPassword, setConfirmPassword,] = useState("")
    const [passwordError, setPasswordError] = useState("");

    const handleChange = (e) => {
        const value = e.target.value;
        setUser({...user,[e.target.name]: value})
    }

    const navigate = useNavigate();

    const saveUser = async (e) => {
        e.preventDefault();
        if(confirmPassword == user.password){
           await authService.makeRegisterRequest(user)
            .then((response) => {
                console.log(response);
                navigate("/login")
            }).catch((error) => {
                console.log(error);
            })
        }
            // Passwords don't match
            setPasswordError('Passwords do not match');
    }



  return (
    <div className="css-grid">
        <div className="header-text">
            <h1 className="sign">    </h1>
        </div>
        <div className="login-menu">
            <div className="image-register-grid">
                <div className="image-container">
                    <img className="login_image" src={Choveka} alt="Choveka" />
                </div>
                <div className="actual-login">
                    <form onSubmit={saveUser}>
                        <div className="inputs">
                            <div className="input-container">
                                <label className="username-label" htmlFor="username">Username</label>
                                <input type="text"
                                 id="username" name="username" value={user.username} onChange={(e)=> handleChange(e)} placeholder="Enter your username" required />
                            </div>
                            <div className="input-container">
                                <label htmlFor="email">Email</label>
                                <input type="email" id="email"
                                 name="email" value={user.email} onChange={(e) => handleChange(e)} placeholder="Enter your email" required />
                            </div>
                            <div className="input-container">
                                <label htmlFor="password">Password</label>
                                <input type="password" id="password"
                                 name="password" value={user.password} onChange={(e) => handleChange(e)} placeholder="Enter your password" required />
                            </div>
                            <div className="input-container">
                                <label htmlFor="confirm_password">Confirm Password</label>
                                <input type="password"
                                 id="confirm_password" 
                                 name="confirmPassword"
                                 value={confirmPassword}
                                 onChange={(e)=> setConfirmPassword(e.currentTarget.value)}
                                 placeholder="Confirm your password" required />
                            </div>
                            <div className="input-container">
                                <a className="sign-in-link" onClick={() => navigate("/login")} >You already have an account? Sign in here</a>
                            </div>
                            <div className="input-container">
                                <input type="submit" value="Sign Up" />
                            </div>
                        </div>
                    </form>
                    {passwordError && <p style={{ color: 'red' }}>{passwordError}</p>}
                </div>
            </div>
        </div>
        <div className="end">
            
        </div>
    </div>
  )
}

export default Register