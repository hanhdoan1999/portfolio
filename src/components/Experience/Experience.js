import React from 'react';
import './Experience.scss';
import experienceImage1 from '../../assets/images/ahtjsc_logo.jpg'
import experienceImage2 from '../../assets/images/nms.jpg'
import { Link, Element } from 'react-scroll';

const Experience = () => {
  return (
    <Element name="experience" className="section">
    <div className="experience-container" id="experience">
      <h2 className="heading">Experience</h2>
      <div className="experience-content">
        <div className="experience-card">
          <img src={experienceImage1} alt="experience 1" className="experience-image" />
          <div className="experience-details">
            <p className="experience-category">Front-End Developer  |  Jun 2021 - Present</p>
            <h3 className="experience-title">AHT Tech</h3>
            <p className="experience-description">Participating in developing multiple projects, analyzing components, and analyzing data flow between components. Providing feedback to adjust designs for suitability. Integrating new technologies into projects. Maintaining, fixing bugs, and coding new features.
            Actively participated in company activities (beyond work). Competed and won second place in the team relay race organized by the company. Attended a Korean language course organized by the company and ranked in the top 5 outstanding students</p>
          </div>
        </div>
        <div className="experience-card">
          <img src={experienceImage2} alt="experience 2" className="experience-image" />
          <div className="experience-details">
            <p className="experience-category">Tester  |  Feb 2020 - Oct 2020</p>
            <h3 className="experience-title">NMS</h3>
            <p className="experience-description">As a manual tester for a banking e-wallet application, I ensure the application's functionality, security, and usability. My role involves writing detailed test cases, testing user account management, transactions, and notifications. I focus on security measures such as authentication, data protection, and transaction security. Additionally, I perform API testing, conduct performance and compatibility testing across various browsers and devices, ensuring compliance with financial regulations and data privacy laws.</p>
          
          </div>
        </div>
      </div>
    </div>
    </Element>
  );
}

export default Experience;
