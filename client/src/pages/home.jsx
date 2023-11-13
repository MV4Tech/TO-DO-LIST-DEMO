import React from 'react'
import Pchelichka from '../assets/images/pchelichka.png'
import Login3 from '../assets/images/login3.png'
import Start1 from '../assets/images/start1.png'
import '../styles/home.css'

const Home = () => {
  return (
    <>
    <div className="header">
        <div className="header-logo">
            <img className="logo" src={Pchelichka} alt="logo" />
        </div>
        <div className="header-main-text">
            <p className="main-text">TO DO LIST.</p>
        </div>
        <div className="header-login">
            <img className="login-logo" src={Login3} alt="logo" />
            <span className="login-text">Sign in</span> 
        </div>
    </div>

    <div className="start-circle-container">
        <img className="circle" src={Start1} alt="Landscape" />
    </div>
</>
  )
}

export default Home