import React, { useState, useEffect } from "react";
import "../styles/adminLogin.css";
import Klucha from "../assets/images/wrench.png";
import authService from "../services/auth-service";
import {  useNavigate } from "react-router-dom";
import Footer from "./dashboard/footer.jsx";
import AdminDashboardNavbar2 from "./adminDashboard/adminDashboardNavbar";


const AdminLogin = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [invalidCredentialsMessage, setInvalidCredentialsMessage] = useState(null);
    const [notEnabledAcc, setNotEnabledAcc] = useState(null);
    let navigate = useNavigate();
  useEffect(() => {
    const hideMessages = () => {
      setInvalidCredentialsMessage(null);
      setNotEnabledAcc(null);
    };
  
    if(invalidCredentialsMessage || notEnabledAcc){
      const timeoutId = setTimeout(hideMessages, 4000);
  
      return ()=> clearTimeout(timeoutId);
    }
  
  
    
  }, [invalidCredentialsMessage,notEnabledAcc])
  
  
  const submit = async (e) => {
      e.preventDefault();
      try {
          await authService.makeAdminLoginRequest(username, password);
         
          navigate("/adminDashboard");
      } catch (err) {
          // show error to user in user-friendly way
          console.log(err)
          if (err.response && err.response.status === 403) {
            setNotEnabledAcc("Not verified account!");
            setUsername("");
            setPassword("");        
        } else {
            setInvalidCredentialsMessage(err.response.data.message);
            setUsername("");
            setPassword("");
        }
      }
    };


  return (
    <>
    <section className="vh-100" style={{marginTop: '5rem'}} >
    <div className="container h-100">
      <div className="row d-flex justify-content-center align-items-center h-100">
        <div className="col-lg-12 col-xl-11">
          <div className="card text-black" style={{ borderRadius: '25px' }}>
            <div className="card-body p-md-5">
              <div className="row justify-content-center">
                <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">

                  <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Admin</p>

                  <form onSubmit={submit}>

                    
                      <div className="form-floating mb-3">
                           <input type="text" 
                            id="username"
                            name="username"
                            value={username}
                            onChange={(e) => {
                            setUsername(e.currentTarget.value);
                              }}
                           className="form-control bg-white text-dark" required placeholder="Username"/>
                           <label htmlFor="floatingUsername">Username</label>
                      </div>
                   

                    <div className="form-floating mb-1 mt-5">
                           <input type="password" 
                            id="password"
                            name="password"
                            value={password}
                            onChange={(e) => {
                            setPassword(e.currentTarget.value);
                              }}
                           className="form-control bg-white text-dark" required placeholder="Password"/>
                           <label htmlFor="floatingPassord">Password</label>
                      </div>

                      
                      
                      <div className="form-check d-flex justify-content-center mb-4 mt-4">Forget Password?&nbsp;
                      <a className="pe-auto" style={{ cursor: 'pointer' }} onClick={() => navigate("/adminForgotPassword")}>Reset password</a>
                      </div>
                    <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                      
                      <button type="sumbit" className="btn btn-primary btn-lg mt-1">Login</button>
                    </div>
                    

                  </form>
                  {invalidCredentialsMessage && <p style={{ color: 'red' }}>{invalidCredentialsMessage}</p>}
                  {notEnabledAcc && <p style={{ color: 'red' }}>{notEnabledAcc}</p>}
                </div>
                <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">

                  <img src={Klucha}
                    className="img-fluid rounded" alt="Sample image border" />

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer/>
  </section>
  </>
  )
}

export default AdminLogin