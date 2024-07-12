import React from 'react';
import './ServicesSection.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faPencilRuler } from '@fortawesome/free-solid-svg-icons';

const ServicesSection = () => {
  return (
    <div className="services-container">
      <div className="services-content">
        <div className="left-section1">
          <div className="content-section">
          <p className="section-title">Services</p>
          <h2 className="heading ">Best solution to boost your project and business</h2>
          <p className="description">
            Are you a professional who needs an attractive website for your business or service? Does your current website look like it "old-fashioned"? Is it not mobile responsive? It doesn't have a modern look and optimal user experience across various devices, and browsers?
          </p>
          <p className="description" style={{color: "#434343"}}>
            Well, you’re in the right place.
          </p>
          </div>
        </div>
        <div className="right-section1">
          <div className="service-card">
            <FontAwesomeIcon icon={faCode} className="service-icon" />
            <h3 className="service-title">Frontend Web Developer</h3>
            <p className="service-description">
              Good communication, details in the code and verbose documentation. I guaranteed free session until you can run my code on your system.
            </p>
          </div>
          <div className="service-card">
            <FontAwesomeIcon icon={faPencilRuler} className="service-icon" />
            <h3 className="service-title">UI/UX Designer</h3>
            <p className="service-description">
              I look at every UI design project as a process in solving a problem. I am considering all the aspects until the UI design is “work”.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ServicesSection;
