import React from 'react'
import '../styles/home.css'
import { Link } from 'react-router-dom'
import Footer from '../pages/dashboard/footer';
import Navbar from './navbar'
import { Container, Row, Col } from 'react-bootstrap';
import '../styles/startButton.scss'
import newTask4 from '../assets/images/newTask4.png'
import dashboardMainPic from '../assets/images/dashboardMainPic.png'
import Review from './review';
import easyToUse from '../assets/images/easyToUse.png'
import reliable from '../assets/images/reliable.png'
import saveTime from '../assets/images/saveTime.png'
import reminder from '../assets/images/reminder.png'
const Home = () => {
  return (
    <>
    <Navbar/>
    <div>
          <h2 className="display-3 text-center fw-bold" style={{ paddingTop: '57vh', paddingBottom: '45vh', color: 'black', fontSize: '88px'}}>
            In Searching of Оrderliness
          </h2>
        </div>
    <Container className="text-center mt-5 ">
      <Row className="justify-content-center ">
        <Col xs={1} md={8} >
          {/* Content for the first column goes here */}
          <div style={{ border: '1px solid #ddd', padding: '20px', marginBottom: '20px', background: '#f5f5f5', borderRadius: '10px'}}>
            {/* Your content for the first column */}
            <div>
              {/** #BA68C8 0% */}
            <h2 className="text-center mt-5 fw-bold align-center _mg-b-lg" >Elevate Your Productivity</h2>
                <h6 className="mt-3" style={{ fontSize: '18px',color: '#BA68C8'  }}>
                    Unlock the potential of our intuitive to-do list – your essential companion for seamlessly organizing tasks and effortlessly achieving your goals.
                </h6>
            <h2 className="text-center mt-5  fw-bold">Efficiency Redefined</h2>
                <h6 className="mt-3" style={{ fontSize: '18px', color: '#BA68C8'}}>
                    Embrace a world of efficiency and maintain perfect organization. Embark on your journey to a more productive day.
                </h6>
                <h2 className="mb-5">
            Ready to conquer your day?
                </h2>
            </div>
            
            <Link  style={{ textDecoration: 'none',
                            color: 'black'}}
   
   
     to="/register">
        <span href="#0" className="button">
               Lets Start
            </span>
            </Link>

            
          </div>
        </Col>
        <Col xs={12} md={4} >
        <div style={{ border: '1px solid #ddd', marginTop: '10px !important', padding: '20px', borderRadius: '10px', overflow: 'hidden', background: '#f5f5f5' }}>
    {/* Your content for the second column */}
    <img
      src={newTask4}
      style={{ maxWidth: '99%', borderRadius: '10px' }}
      alt="Your Alt Text"
    />
  </div>
</Col>
      </Row>
    </Container>

      
        <Container style={{marginTop: '14rem',marginBottom:'12rem'}}>
      <Row  className="justify-content-center">
        <Col xs={6} md={3}>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
  <img
    src={easyToUse}
    style={{ maxWidth: '50%', borderRadius: '10px' }}
    alt="Your Alt Text"
  />
</div> 
        </Col>
        <Col xs={6} md={3}>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
  <img
    src={saveTime}
    style={{ maxWidth: '50%', borderRadius: '10px' }}
    alt="Your Alt Text"
  />
</div> 
        </Col>
        <Col xs={6} md={3}>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
  <img
    src={reliable}
    style={{ maxWidth: '50%', borderRadius: '10px' }}
    alt="Your Alt Text"
  />
</div> 
        </Col>
        <Col xs={6} md={3}>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
  <img
    src={reminder}
    style={{ maxWidth: '50%', borderRadius: '10px' }}
    alt="Your Alt Text"
  />
</div> 
        </Col>
      </Row>
    </Container>

        

        <Container className="mb-5" style={{border: '1px solid #ddd',marginTop: '5rem',borderRadius: '10px'}}>
  {/* First row */}
  <Row style={{ background: '#f5f5f5',borderRadius: '10px'}}>
    <Col className="text-center">
    <div className="mt-5" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '30vh',  }}>
        <h2  style={{ fontSize: '78px' }}>Simple and Easy to Navigate</h2>
        </div>
    </Col>
  </Row>

  {/* Second row */}
  <Row style={{background: '#f5f5f5',borderRadius: '10px'}}>
    <Col className="text-center" style={{height: '500px'}}>
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
  <img
    src={dashboardMainPic}
    style={{ maxWidth: '90%', borderRadius: '10px' }}
    alt="Your Alt Text"
  />
</div>  
      {/* Add your content for the second row here */}
    </Col>
  </Row>
</Container>



{/*         <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
  <img
    src={dashboardMainPic}
    style={{ maxWidth: '70%', borderRadius: '10px' }}
    alt="Your Alt Text"
  />
</div>   */}
  <div  style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '30vh', marginTop: '10rem' }}>
            <h2 style={{fontSize:'60px'}}>
                 Join +30,000,000 highly effective people and teams
            </h2>
        </div>

    <Review/>
    <Footer/>
</>
  )
}

export default Home