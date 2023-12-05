import React from "react";
import storageService from "../../services/storage-service";
import { useNavigate } from "react-router-dom";
import '../../styles/dashboard.css';
import Header from "./adminHeader";
import Body from "./adminBody";
import Footer from "./adminFooter.jsx";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee,faAnglesDown } from '@fortawesome/free-solid-svg-icons'
import {useRef} from "react";
import AdminDashboardNavbar2 from "./adminDashboardNavbar";

const AdminDashboard = () => {
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
    
      <AdminDashboardNavbar2/>
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

export default AdminDashboard;
