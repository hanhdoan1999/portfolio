import React from 'react';
import './WhyHireMeSection.scss';
import illustration from '../../assets/images/illustration.svg'; // Make sure to replace this with the correct path to your image

const WhyHireMeSection = () => {
  return (
    <div className="why-hire-me-container">
      <div className="why-hire-me-content">
        <div className="illustration-container">
          <img src={illustration} alt="Illustration" className="illustration" />
        </div>
        <div className="text-container">
          <p className="section-title">About</p>
          <h2 className="heading">Why hire me for your next project?</h2>
          <p className="description">
            I worked with a various background of client and different type of product as a software engineer (frontend) or UI designer. I help them to solve their business problem on the technology end.
          </p>
          <p className="description">
            I have a principle that is "stay simple and stay humble". I believe, simplicity hides a great deal of complexity and thoroughness. I see every project as a process of solving a problem. Now it's time to solve your problems in detail, in depth, and of course with simplicity.
          </p>
        </div>
      </div>
    </div>
  );
}

export default WhyHireMeSection;
