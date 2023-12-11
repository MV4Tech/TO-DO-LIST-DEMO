import React from 'react'
import "../styles/navbar.css"
import { useState, useEffect } from 'react';
import Logoto from '../assets/images/logoto.png'
import { Link } from 'react-router-dom'

const Navbar = () => {
    const [heroActive, setHeroActive] = useState(false);
  
    useEffect(() => {
      const handleScroll = () => {
        if (window.scrollY > 200) {
          if (!heroActive) {
            setHeroActive(true);
          }
        } else {
          if (heroActive) {
            setHeroActive(false);
          }
        }
      };
  
      window.addEventListener('scroll', handleScroll);
  
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, [heroActive]);

    return (
      <> 

        <nav className={`navbar navbar-expand-lg p-3 fixed-top ${heroActive}`} id="mainNav">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">
              <img src={Logoto} alt="Divi Logo" id="logoImg" className={heroActive ? 'consize' : ''} />
            </a>
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
    );
  };
  
  export default Navbar;