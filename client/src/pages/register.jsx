import React from 'react'
import '../styles/register.css'

import Choveka from '../assets/images/login_image.jpg'

const Register = () => {
  return (
    <div class="css-grid">
        <div class="header-text">
            <h1 class="sign">    </h1>
        </div>
        <div class="login-menu">
            <div class="image-register-grid">
                <div class="image-container">
                    <img class="login_image" src={Choveka} alt="Choveka" />
                </div>
                <div class="actual-login">
                    <form>
                        <div class="inputs">
                            <div class="input-container">
                                <label class="username-label" for="username">Username</label>
                                <input type="text" id="username" name="username" placeholder="Enter your username" required />
                            </div>
                            <div class="input-container">
                                <label for="email">Email</label>
                                <input type="email" id="email" name="email" placeholder="Enter your email" required />
                            </div>
                            <div class="input-container">
                                <label for="password">Password</label>
                                <input type="password" id="password" name="password" placeholder="Enter your password" required />
                            </div>
                            <div class="input-container">
                                <label for="confirm_password">Confirm Password</label>
                                <input type="password" id="confirm_password" name="confirm_password" placeholder="Confirm your password" required />
                            </div>
                            <div class="input-container">
                                <a class="sign-in-link" href="signin.html">You already have an account? Sign in here</a>
                            </div>
                            <div class="input-container">
                                <input type="submit" value="Sign Up" />
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        <div class="end">
            
        </div>
    </div>
  )
}

export default Register