import React, { useEffect, useState } from 'react'
import '../../styles/profile.css';
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import storageService from '../../services/storage-service.js';
import Footer from "../dashboard/footer";
import UserService from '../../services/user-service';
import authService from '../../services/auth-service.js';
import DashboardNavbar from '../../pages/dashboard/dashboardNavbar.jsx'

const Profile = () => {

  const navigate = useNavigate();

  const [userId, setUserId] = useState(null);

  const [user, setUser] = useState({

    id:"",
    username:"",
    email:"",
  });

  const [changePassword, setChangePassword] = useState({

    oldPassword:"",
    newPassword:"",
    confirmNewPassword:"",

  })

  const [changeUsername, setChangeUsername] = useState({

    password:"",
    newUsername:""

  })

  const [showChangePasswordForm, setShowChangePasswordForm] = useState(false);
  const [showChangeUsernameForm, setShowChangeUsernameForm] = useState(false);
  const [invalidCredentialsMessageForPassword, setInvalidCredentialsMessageForPassword] = useState(null);
  const [invalidCredentialsMessageForUsername, setInvalidCredentialsMessageForUsername] = useState(null);
  const [successfullyChangedPassword, setSuccessfullyChangedPassword] = useState(null);


useEffect(() => {
  // Function to hide messages after 4 seconds
  const hideMessages = () => {
    setInvalidCredentialsMessageForPassword(null);
    setSuccessfullyChangedPassword(null);
  };

  // Show messages and set timeout to hide them after 4 seconds
  if (invalidCredentialsMessageForPassword || successfullyChangedPassword) {
    const timeoutId = setTimeout(hideMessages, 2000);

    // Cleanup timeout on component unmount
    return () => clearTimeout(timeoutId);
  }
}, [invalidCredentialsMessageForPassword, successfullyChangedPassword]);




  useEffect(() => {
    async function fetchData() {
      try {
        const obtainedUserId = await UserService.getIdByUsername();

        setUserId(obtainedUserId);

        const response = await UserService.getUserById(obtainedUserId)
       
        setUser(response.data)

        
      } catch (error) {
        console.error('Error fetching data:', error);
        // Handle error as needed
      }
    }

    fetchData();
  }, []); 


  const handleChangePassword = (e) => {
    const value = e.target.value;
    setChangePassword({...changePassword,[e.target.name]: value})
}

  
  const handleChangeUsername = (e) => {
    const value = e.target.value;
    setChangeUsername({...changeUsername,[e.target.name]: value})
}


  const handleTogglePasswordForm = () => {
    setShowChangePasswordForm(!showChangePasswordForm);
  };
  const handleToggleUsernameForm = () => {
    setShowChangeUsernameForm(!showChangeUsernameForm);
  };

 const changePasswordFunction = async (e) =>{
      e.preventDefault();
      try{
              
        const response = await UserService.changePassword(changePassword);
        setChangePassword({
          oldPassword: "",
          newPassword: "",
          confirmNewPassword: "",
        })
        setSuccessfullyChangedPassword("The Password was saved successfully!")

      }catch(error){
        setInvalidCredentialsMessageForPassword(error.response.data.message)
      }


  }

  const changeUsernameFunction = async (e) => {
       e.preventDefault();
       try{

        const response = await UserService.changeUsername(changeUsername);
        alert("Profile Update\nYou have successfully changed your username. For the changes to take effect, please log out of your current session and log back in with your new username. This ensures that all features and settings are updated accordingly.\nThank you for your cooperation!")
        storageService.deleteUserData(); 
        navigate("/login");
        
        

       }catch(error){
        setInvalidCredentialsMessageForUsername(error.response.data.message)
       }
  }

  const logout = async ()=>{   
        try{

          const response = await authService.logoutRequest();
          storageService.deleteUserData();       
          navigate("/login");
          
        }catch(error){
          console.log("Error is: "+error)
        }

          
    }


  return (

   
    <>    
    <link
    href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
    rel="stylesheet"/>
  <DashboardNavbar/>
    <div className="container rounded bg-white mt-5 mb-3 extra-margin-top">
        <div className="row">
            <div className="col-md-4 border-right">
                <div className="d-flex flex-column align-items-center text-center p-3 py-5 mt-6"><i className="fa fa-4x fa-user my-2"></i>
                <span className="font-weight-bold">{user.username}</span>
                <span className="text-black-50">{user.email}</span>

                <span className="text-black mt-5 ">Logout</span>
                <span className='moove-button-down'><Button onClick={logout} variant="dark" style={{ width: '110px'}}>
                <i className="fa fa-power-off"></i>
                  </Button></span>
                
                </div>
            </div>
            <div className="col-md-8">
                <div className="p-3 py-5">
                    <div className="d-flex justify-content-between align-items-center mb-3">
                        <div className="d-flex flex-row align-items-center back">
                        <a className='mb-1' onClick={() => {navigate("/dashboard");}} style={{ cursor: 'pointer', color: "black",textDecoration: 'none'}}><i className="fa fa-long-arrow-left mx-2 mr-1 mb-1"></i>Back to home</a>
                        </div>
                        <h6 className="text-right">Edit Profile</h6>
                    </div>

                    <Button
                variant="dark"
                onClick={handleTogglePasswordForm}
                style={{ marginBottom: '20px', marginTop: '22px' }}
              >
                Change Password
              </Button>

              {showChangePasswordForm && (
                <div>
                  <form onSubmit={changePasswordFunction}>
                    <div className="form-floating mb-3 mt-3 smaller-input">
                      <input
                        type="password"
                        id="oldPassword"
                        name="oldPassword"
                        value={changePassword.oldPassword}
                        onChange={(e) => {
                          handleChangePassword(e);
                        }}
                        className="form-control bg-white text-dark"
                        required
                        placeholder="Password"
                      />
                      <label htmlFor="floatingPassord">Current Password</label>
                    </div>
                    <div className="form-floating mb-3 mt-4 smaller-input">
                      <input
                        type="password"
                        id="newPassword"
                        name="newPassword"
                        value={changePassword.newPassword}
                        onChange={(e) => {
                          handleChangePassword(e);
                        }}
                        className="form-control bg-white text-dark"
                        required
                        placeholder="Password"
                      />
                      <label htmlFor="floatingPassord">New Password</label>
                    </div>
                    <div className="form-floating mb-3 mt-4 smaller-input">
                      <input
                        type="password"
                        id="confirmNewPassword"
                        name="confirmNewPassword"
                        value={changePassword.confirmNewPassword}
                        onChange={(e) => {
                          handleChangePassword(e);
                        }}
                        className="form-control bg-white text-dark"
                        required
                        placeholder="Password"
                      />
                      <label htmlFor="floatingPassord">Confirm New Password</label>
                      <Button
                        variant="dark"
                        className='float-end'
                        style={{ marginBottom: '20px', marginTop: '22px' }}
                        type='sumbit'
                      >
                        Save
                      </Button>
                    </div>
                  </form>
                  {invalidCredentialsMessageForPassword && <p className='fade-out-message' style={{ color: 'red' }}>{invalidCredentialsMessageForPassword}</p>}
                  {successfullyChangedPassword && <p className='fade-out-message' style={{ color: 'green' }}>{successfullyChangedPassword}</p>}
                </div>
              )}

              <div className=' mb-5'>
                <Button
                  variant="dark"
                  onClick={handleToggleUsernameForm}
                  style={{ marginBottom: '20px', marginTop: '22px' }}
                >
                  Change Username
                </Button>

                {showChangeUsernameForm && (
                  <div>
                    <form onSubmit={changeUsernameFunction}>
                      <div className="form-floating mb-3 mt-3 smaller-input">
                        <input
                          type="password"
                          id="password"
                          name="password"
                          value={changeUsername.password}
                          onChange={(e) => {
                            handleChangeUsername(e);
                          }}
                          className="form-control bg-white text-dark"
                          required
                          placeholder="Password"
                        />
                        <label htmlFor="floatingPassord">Password</label>
                      </div>
                      <div className="form-floating mb-3 mt-4 smaller-input">
                        <input
                          type="textbox"
                          id="newUsername"
                          name="newUsername"
                          value={changeUsername.newUsername}
                          onChange={(e) => {
                            handleChangeUsername(e);
                          }}
                          className="form-control bg-white text-dark"
                          required
                          placeholder="newUsername"
                        />
                        <label htmlFor="floatingPassord">New Username</label>
                        <Button
                          variant="dark"
                          className='float-end'
                          style={{ marginBottom: '20px', marginTop: '22px' }}
                          type='sumbit'
                        >
                          Save
                        </Button>
                      </div>
                    </form>
                    {invalidCredentialsMessageForUsername && <p style={{ color: 'red' }}>{invalidCredentialsMessageForUsername}</p>}
                    
                  </div>
                )}
              </div>
                   
                   </div>
            </div>
        </div>
        
    </div>
    <Footer/>
    </>
  )
}

export default Profile