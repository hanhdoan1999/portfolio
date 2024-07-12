import React from 'react';
import './ProjectsSection.scss';
import projectImage1 from '../../assets/images/Rectangle 34.png'
import projectImage2 from '../../assets/images/Rectangle 35.png'
import { Link } from 'react-router-dom';

const ProjectsSection = () => {
  return (
    <div className="projects-container">
      <div className="header">
        <Link to="/projects" className="see-more">See more projects <span className="arrow">→</span></Link>
        <p className="projects-title">Projects</p>
      </div>
      <h2 className="heading ">Some of my projects</h2>
      <div className="projects-content">
        <Link to='/projects'>
        <div className="project-card">
          <img src={projectImage1} alt="Project 1" className="project-image" />
          <div className="project-details">
            <p className="project-category">Web Development</p>
            <h3 className="project-title">Mulazamath TV</h3>
            <p className="project-description">A company profile website for Mulazamath TV, an Islamic international organization based on Sudan, Africa.</p>
          </div>
        </div>
        </Link>
        <Link to='/projects'>
        <div className="project-card">
          <img src={projectImage2} alt="Project 2" className="project-image" />
          <div className="project-details">
            <p className="project-category">Mobile App</p>
            <h3 className="project-title">What are you waiting for?</h3>
            <p className="project-description">Elevate your product team. Lorem ipsum dolor amet consectetur adipiscing elit.</p>
          </div>
        </div>
        </Link>
      </div>
    </div>
  );
}

export default ProjectsSection;
