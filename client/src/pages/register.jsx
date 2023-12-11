import React from 'react'
import '../styles/register.css'
import { useState,useEffect } from 'react'
import LoginNavbar from './loginNavbar'
import Choveka from '../assets/images/hyper.png'
import { useNavigate} from 'react-router-dom';
import authService from '../services/auth-service'
import Footer from "./dashboard/footer";


const Register = () => {

    const [user, setUser] = useState({
        username:"",
        password:"",
        email:"",
        role:"USER"
    })
    const [confirmPassword, setConfirmPassword,] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [duplicateUsernameOrEmailMessage, setDuplicateUsernameOrEmailMessage] = useState(null);
   

  

    useEffect(() => {

  
  
      // Function to hide messages after 4 seconds
      const hideMessages = () => {
        setPasswordError(null);
        setDuplicateUsernameOrEmailMessage(null);
      };
    
      if (duplicateUsernameOrEmailMessage || passwordError) {
        const timeoutId = setTimeout(hideMessages, 4000);
    
        // Cleanup timeout on component unmount
        return () => clearTimeout(timeoutId);
      }
    }, [duplicateUsernameOrEmailMessage, passwordError]);
    

    const handleChange = (e) => {
        const value = e.target.value;
        setUser({...user,[e.target.name]: value})
    }

    const navigate = useNavigate();
    //clear password for password doesnt match
    const clearPassword = () => {
      setConfirmPassword("");
      setUser((prevUser) => ({
        ...prevUser,
        password: "",
      }));
    };

    const saveUser = async (e) => {
        e.preventDefault();
        if(confirmPassword != user.password){
            // Passwords don't match
            setPasswordError('Passwords do not match');
            clearPassword();
            return;
        }else
        setPasswordError(null);
        
           await authService.makeRegisterRequest(user)
            .then((response) => {
                console.log(response);
                   // Display success alert
                  alert("Subject: Tick, Tock! 🕒 Verify Your Account Now!\nHi "+user.username+",\n\nHope you're doing awesome! 🌈 Quick thing: we need you to give your account a thumbs up by clicking the link we sent to your email. Easy peasy! Need a hand? Holler at us.\n\nCheers,\nYour TODO List 🚀")
                 navigate('/login');
            }).catch((error) => {
                setDuplicateUsernameOrEmailMessage(error.response.data.message);
                if(error.response.data.message === 'The email has already been taken.'){
                  setUser((prevUser) => ({
                    ...prevUser,
                    email: "",
                  }));
                }else{

                  setUser((prevUser) => ({
                    ...prevUser,
                    username: "",
                  }));
                  
                }
            })
        
            
    }



  return (
    <>
    
    <LoginNavbar/>
    <section className="vh-100" style={{ marginTop: '5rem' }}>
      <div className="container h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-lg-12 col-xl-11">
            <div className="card text-black" style={{ borderRadius: '25px' }}>
              <div className="card-body p-md-5">
                <div className="row justify-content-center">
                  <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">

                    <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Sign up</p>

                   
                    <form onSubmit={saveUser}>

                      
                        <div className="form-floating mb-3">
                             <input required
                             name="username" value={user.username} onChange={(e)=> handleChange(e)}
                             type="text" className="form-control bg-white text-dark" id="floatingUsername" placeholder="Username"/>
                             <label htmlFor="floatingUsername">Username</label>
                        </div>
                      

                        <div className="form-floating mb-3">
                        <input type="email"  required
                         name="email" value={user.email} onChange={(e) => handleChange(e)}
                        className="form-control bg-white fg-black text-dark" id="floatingInput" placeholder="name@example.com"/>
                        <label  htmlFor="floatingInput">Email</label>
                            <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                         </div>  

                      <div className="form-floating mb-3">
                      <input type="password" required
                      name="password" value={user.password} onChange={(e) => handleChange(e)}
                      className="form-control bg-white text-dark" id="floatingPassord" placeholder="Password"/>
                             <label htmlFor="floatingPassord">Password</label>
                             <div id="passwordHelpBlock" className="form-text">
                             Your password must be 8-20 characters long, contain letters and numbers.
                            </div>  
                        </div>

                            
                  
                        <div className="form-floating mb-3 ">
                        <input type="password" required
                        name="confirmPassword"
                        value={confirmPassword}
                        onChange={(e)=> setConfirmPassword(e.currentTarget.value)}
                        className="form-control bg-white text-dark" id="floatingConfirmPassword" placeholder="ConfirmPassword"/>
                             <label htmlFor="floatingConfirmPassword">Confirm Password</label> 
                        </div>
                    

                      <div className="form-check d-flex justify-content-center mb-5">Already have an account?&nbsp;
                      <a className="pe-auto" style={{ cursor: 'pointer' }} onClick={() => navigate("/login")}>Sign In Here</a>
                      </div>

                      <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                        <button type="sumbit"
                        
                        className="btn btn-primary btn-lg" >Register</button>
                      </div>

                    </form>
                    {passwordError && <p style={{ color: 'red' }}>{passwordError}</p>}
                    {duplicateUsernameOrEmailMessage && <p style={{ color: 'red' }}>{duplicateUsernameOrEmailMessage}</p>}

                  </div>
                  <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">

                    <img src={Choveka}
                      className="img-fluid rounded-circle p-3" alt="Sample image" />

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

export default Register