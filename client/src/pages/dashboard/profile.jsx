import React, { useEffect, useState } from 'react'
import '../../styles/profile.css';
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import storageService from '../../services/storage-service.js';
import Footer from "../dashboard/footer";
import UserService from '../../services/user-service';


const Profile = () => {

  const navigate = useNavigate();

  const [userId, setUserId] = useState(null);

  const [user, setUser] = useState({

    id:"",
    username:"",
    password:"",
    email:"",
  });

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



  return (

   
    <>    
    <link
    href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
    rel="stylesheet"/>
  
    <div className="container rounded bg-white mt-5 mb-3 extra-margin-top">
        <div className="row">
            <div className="col-md-4 border-right">
                <div className="d-flex flex-column align-items-center text-center p-3 py-5 mt-5"><i className="fa fa-4x fa-user my-2"></i>
                <span className="font-weight-bold">{user.username}</span>
                <span className="text-black-50">{user.email}</span>
            
                <span className='moove-button-down'><Button onClick={() => {
                  storageService.deleteUserData();
                  navigate("/");
                  }} variant="dark" style={{ width: '110px'}}>
                <i className="fa fa-power-off"></i>
                  </Button></span>
                
                </div>
            </div>
            <div className="col-md-8">
                <div className="p-3 py-5">
                    <div className="d-flex justify-content-between align-items-center mb-3">
                        <div className="d-flex flex-row align-items-center back">
                        <a className='mb-1' onClick={() => navigate("/dashboard")} style={{ cursor: 'pointer', color: "black",textDecoration: 'none'}}><i className="fa fa-long-arrow-left mx-2 mr-1 mb-1"></i>Back to home</a>
                        </div>
                        <h6 className="text-right">Edit Profile</h6>
                    </div>

                       <br></br>
                       <br></br>
                       <br></br>
                       <br></br>
                       <br></br>
                       <br></br>
                       <br></br>
                       <br></br>

                       <br></br>
                       <br></br>
                       <br></br>
                       <br></br>
                       <br></br>

                       <br></br>
                       <br></br>

                       <br></br>
                       <br></br>
                       
                       
                   
                   </div>
            </div>
        </div>
        
    </div>
    <Footer/>
    </>
  )
}

export default Profile