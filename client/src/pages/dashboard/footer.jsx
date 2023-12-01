import React from 'react';
import '../../styles/footer.css';
import { faFacebook, faTwitter, faInstagram, faPinterest } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Footer = () => {
  const bodyStyle = {
    marginTop: "200px"
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
                  <li><a href="#"><FontAwesomeIcon icon={faFacebook} /></a></li>
                  <li><a href="#"><FontAwesomeIcon icon={faTwitter} /></a></li>
                  <li><a href="#"><FontAwesomeIcon icon={faInstagram} /></a></li>
                  <li><a href="#"><FontAwesomeIcon icon={faPinterest} /></a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
