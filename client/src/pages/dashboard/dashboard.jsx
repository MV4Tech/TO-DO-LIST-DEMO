
import React, { useEffect, useState } from "react";
import storageService from "../../services/storage-service";
import { useNavigate } from "react-router-dom";
import '../../styles/dashboard.css';
import Header from "./header";
import Body from "./body";
import Footer from "./footer";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee,faAnglesDown } from '@fortawesome/free-solid-svg-icons'
import {useRef} from "react";
import DashboardNavbar from './dashboardNavbar.jsx'
import userService from "../../services/user-service.js";

const Dashboard = () => {

  const navigate = useNavigate();

  const tasks = useRef(null);

    const scrollToSection = (elementRef) => {
        window.scrollTo({
          top: elementRef.current.offsetTop,
          behavior: "smooth"
        })
    }
 

  return (
    <>     
      <DashboardNavbar/>
      <Header />
      <div className="text-center mt-4">
        <button style={{ border: 'none', outline: 'none', background: 'none'}} onClick={() => scrollToSection(tasks)}>
        <FontAwesomeIcon icon={faAnglesDown} size="xl" beatFade style={{color: "#000000",}} />
        </button>
      </div>
      < div ref={tasks}>
       <Body />
      </div> 
      <Footer />
    </>
  );
};

export default Dashboard;
