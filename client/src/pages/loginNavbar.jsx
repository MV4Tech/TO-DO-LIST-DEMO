import React from 'react'
import { Link } from 'react-router-dom'
import "../styles/navbar.css"
import { useState, useEffect } from 'react';

const LoginNavbar = () => {
              

    useEffect(() => {
        // Scroll to the top when the component mounts
        window.scrollTo(0, 0);
      }, []);
  return (
    
    <> 

    <nav className={`navbar navbar-expand-lg p-3 fixed-top`} id="mainNav">
      <div className="container-fluid">
        
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
            <Link  style={{ textDecoration: 'none',
                        color: 'black'}}
                    to="/">
                    <span style={{ fontSize: '19px'}} className="nav-link mx-2 active fw-bold" aria-current="page" href="#">
                Home
              </span>
                </Link>
              
            </li>
            <li className="nav-item">
                    <Link  style={{ textDecoration: 'none',
                        color: 'black'}}
                    to="/register">
                    <span style={{color: '#BA68C8',  fontSize: '19px'}} className="nav-link mx-2 fw-bold" href="#">
                    Register
                    </span>
                </Link>
              
            </li>
            <li className="nav-item dropdown">
            <Link  style={{ textDecoration: 'none',
                        color: 'black'}}


                to="/login">
                <span style={{color: '#BA68C8', fontSize: '19px'}} className="nav-link mx-2  fw-bold"  id="navbarDropdownMenuLink" role="button"  aria-expanded="false">
                    Login
                </span>
            </Link>
  
              
            </li>
          </ul>
        </div>
      </div>
    </nav>

  </>
  )
}

export default LoginNavbar