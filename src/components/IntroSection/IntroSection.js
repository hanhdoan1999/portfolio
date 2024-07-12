import React from "react";
import "./IntroSection.scss";
import Profile from "../../assets/images/avatar.png"
import { faLinkedin, faGithub, faFacebook } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";


function IntroSection() {
  return (
    <div className="profile-container">
      <div className="profile-content">
        <div className="left-section">
          <p className="greeting">Hi, I am</p>
          <div>
          <h1 className="name ">Hạnh</h1>
          <div className="underline"></div>
          </div>
          <div className="social-icons">
            <a target="_blank" href="https://www.linkedin.com/in/h%E1%BA%A1nh-do%C3%A3n-6a2b24186/" className="social-icon"><FontAwesomeIcon icon={faLinkedin} /></a>
            <a target="_blank" href="https://github.com/hanhdoan1999" className="social-icon"><FontAwesomeIcon icon={faGithub} /></a>
            <a target="_blank" href="https://www.facebook.com/doan.thihonghanh.3?mibextid=LQQJ4d" className="social-icon"><FontAwesomeIcon icon={faFacebook} /></a>
          </div>
        </div>
        <div className="middle-section">
          <img src={Profile} alt="Profile" className="profile-image" />
        </div>
        <div className="right-section">
          <h2 className="title ">Front-End Developer, <br></br>Vietnam</h2>
          <p className="description">
            I am a multi-disciplinary Frontend Developer and UI Designer who has experience creating projects in various industries and have worked with diverse clients from all over the world. I merge technical and design skills to create innovative products with beautiful and functional user experiences.<br></br>
            Let's connect and create something amazing together!
          </p>
          <div className="buttons">
            <Link to="/contact" className="button reach-me">Reach Me</Link>
            <Link to="https://www.topcv.vn/xem-cv/UAkPUAFdDQEGAlFWUwcEDVQHUgdcDQMAXQcEAQbe51" target="_blank" className="button download-cv">Download CV</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default IntroSection;
