import React from 'react';
import './CTASection.scss';
import Contact from '../../pages/Contact';
import Icon from "../../assets/images/kitty.png"

const CTASection = () => {
  return (
    <div className="cta-container">
      <div className="cta-content">
        <h2 className="cta-text">Interested working with me?<span><img src={Icon} alt="Icon" width={80}/></span></h2>
        <div className="cta-buttons">
          <Contact/>
          {/* <a href="/projects" className="cta-button see-projects">See Projects</a>
          <a href="mailto:doanhonghanh.1999@gmail.com" className="cta-button email-me">Email Me</a> */}
        </div>
      </div>
    </div>
  );
}

export default CTASection;
