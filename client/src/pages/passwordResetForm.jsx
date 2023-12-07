import React, { useState } from "react";
import{ useParams } from 'react-router-dom';
import '../styles/passwordResetForm.css'
import userService from "../services/user-service";



const PasswordResetForm = () => {

  const { token } = useParams();
  console.log(token);
  const [message, setMessage] = useState(null);

  const [credentialsRequest, setCredentialsRequest] = useState({
    newPassword: "",
    confirmNewPassword: ""
  })
  console.log("Password" + credentialsRequest.newPassword)
  
  const [request, setRequest] = useState({
    token : token,
    password : ""
  })
  
  
  const handleChange = (e) => {
    const value = e.target.value;
    setCredentialsRequest({...credentialsRequest,[e.target.name]: value})
}


  const handleFormSubmit = async(e) => {
    if (credentialsRequest.newPassword !== credentialsRequest.confirmNewPassword) {
      // Handle password mismatch, display an error message or prevent submission
      setMessage("Passwords do not Match")
      return;
    }
    e.preventDefault();
    // Add logic to submit the form data (e.g., API call to update the password)
    try {
      const response = await userService.saveNewPassword({
        token: token,
        password: credentialsRequest.newPassword
      });
      setMessage(response.data);
	  setLoading(false);
    } catch (e) {
      setMessage(e.response.data.message);
    }
  };
  


  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh', // Optional: Set a minimum height to center vertically
    }}>
    <div style={{ width: '300px' }}>
      
      <form onSubmit={handleFormSubmit}>
      <h1 style={{marginLeft: "2rem"}} className="h2">New Password</h1>
        <div className="form-floating mb-3" style={{ marginTop: "3rem" }}>
          <input
            type="password"
            required
            name="newPassword"
            value={credentialsRequest.newPassword}
            onChange={(e) => handleChange(e)}
            className="form-control bg-white text-dark"
            id="floatingPassord"
            placeholder="Password"
          />
          <label htmlFor="floatingPassord">New Password</label>
          <div id="passwordHelpBlock" className="form-text">
            Your password must be 8-20 characters long, contain letters and numbers.
          </div>
        </div>
  
        <div className="form-floating mb-3">
          <input
            type="password"
            required
            name="confirmNewPassword"
            value={credentialsRequest.confirmNewPassword}
            onChange={(e) => handleChange(e)}
            className="form-control bg-white text-dark"
            id="floatingConfirmPassword"
            placeholder="ConfirmPassword"
          />
          <label htmlFor="floatingConfirmPassword">Confirm New Password</label>
        </div>
  
        <div className="d-flex justify-content-center mt-4 mx-4 mb-3 mb-lg-4">
          <button type="submit" className="btn btn-primary btn-lg">
            Reset
          </button>
        </div>
      </form>
      {message && <p style={{ color: 'green' }}>{message}</p>}
    </div>
  </div>
  
  )
}

export default PasswordResetForm