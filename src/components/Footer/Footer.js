import React from 'react';
import './Footer.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub, faFacebook } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-content">
        <p className="footer-text">Professional Portfolio Web Template by 
          <a target="_blank" href='https://www.figma.com/@hanihusam' style={{textDecoration: 'none', color: '#E6813E'}}> Hani Husamuddin </a>
          on Figma, licensed under CC BY 4.0.</p>
        <div className="social-icons">
        <a target="_blank" href="https://www.linkedin.com/in/h%E1%BA%A1nh-do%C3%A3n-6a2b24186/" className="social-icon"><FontAwesomeIcon icon={faLinkedin} /></a>
        <a target="_blank" href="https://github.com/hanhdoan1999" className="social-icon"><FontAwesomeIcon icon={faGithub} /></a>
          <a target="_blank" href="https://www.facebook.com/doan.thihonghanh.3?mibextid=LQQJ4d" className="social-icon"><FontAwesomeIcon icon={faFacebook} /></a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
