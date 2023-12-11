import React from 'react'
import "../../styles/adminNavbar.css"
import { useState, useEffect } from 'react';
import settings from '../../assets/images/settings.png'
import { Link } from 'react-router-dom'

const AdminDashboardNavbar = () => {
    const [heroActive, setHeroActive] = useState(false);
  
  
  return (
    <> 

    <nav className={`navbar navbar-expand-lg p-3 fixed-top ${heroActive}`} id="mainNav">
      <div className="container-fluid">
        <a className="navbar-branda" href="#">
          <img src={settings} alt="Divi Logo" id="logoImg" className={heroActive ? 'consize' : ''} />
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
            <Link  style={{ textDecoration: 'none',
                        color: 'black'}}
                    to="/adminDashboard">
                    <span style={{ fontSize: '19px'}} className="nav-link mx-2 active fw-bold" aria-current="page" href="#">
                Home
              </span>
                </Link>
              
            </li>
            <li className="nav-item">
                    <Link  style={{ textDecoration: 'none',
                        color: 'black'}}
                    to="/adminPage">
                    <span style={{color: '#BA68C8',  fontSize: '19px'}} className="nav-link mx-2 fw-bold" href="#">
                    Admin
                    </span>
                </Link>
              
            </li>
            <li className="nav-item dropdown">
            <Link  style={{ textDecoration: 'none',
                        color: 'black'}}


                to="/adminProfile">
                <span style={{color: '#BA68C8', fontSize: '19px'}} className="nav-link mx-2  fw-bold"  id="navbarDropdownMenuLink" role="button"  aria-expanded="false">
                    Profile
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

export default AdminDashboardNavbar