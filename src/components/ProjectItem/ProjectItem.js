import React from "react";
import { Link } from "react-router-dom";
import "./ProjectItem.scss"
import Koala from "../../assets/images/koala.png"

function ProjectItem({ item }) {
  return (
    <div className="project-item">
      <div className="project-card">
        {item?.image ? <img src={item?.image} alt="Project 1" className="project-image" /> :
        <div className="no-image">
           <img src={Koala} alt="no-image" width={100}/>
           <span>No image</span>
        </div>
        }
        <div className="project-details">
          <p className="project-category">Technologies: {item?.tech}</p>
          <h3 className="project-title">{item?.title}</h3>
          <p className="project-description">{item?.description}</p>
          {(item?.link || item?.gitLink )
          && (
            <div className="download-buttons">
              {item?.link &&
              <Link target="blank" to={item?.link} className="download-button">
                View Site
              </Link> }
              <Link target="blank" to={item?.gitLink} className="download-button">
                View GitHub
              </Link>
            </div>
          )}
        </div>
       
      </div>
    </div>
  );
}

export default ProjectItem;
