import React from 'react'
import '../../styles/footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee,faAnglesDown } from '@fortawesome/free-solid-svg-icons'


const footer = () => {
    const bodyStyle = {
        marginTop:"200px"
        
      };
  return (
    <div style={bodyStyle}>
    <div className="footer">
      <div className="container mt-1">
        <div className="row text-center">
          <div className="col-lg-12 col-sm-12 col-xs-12">
            <div className="footer_menu">
              <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Service</a></li>
                <li><a href="#">Works</a></li>
                <li><a href="#">Contact</a></li>
              </ul>
            </div>
            <div className="footer_copyright">
              <p>© 2023 TDL. All Rights Reserved.</p>
            </div>
            <div className="footer_profile">
              <ul>
                <li><a href="#"><i className="fa fa-facebook"></i></a></li>
                <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                <li><a href="#"><i className="fa fa-instagram"></i></a></li>
                <li><a href="#"><i className="fa fa-pinterest"></i></a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default footer