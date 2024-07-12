import React from "react";
import { Link } from "react-router-dom";
import "./ProjectItemAHT.scss"
import Koala from "../../assets/images/koala.png"

function ProjectItemAHT({ item }) {
  return (
    <div className="projectAHT-item">
      <div className="projectAHT-card">
        {/* {item?.image ? <img src={item?.image} alt="Project 1" className="projectAHT-image" /> :
        <div className="no-image">
           <img src={Koala} alt="no-image" width={100}/>
           <span>No image</span>
        </div>
        } */}
        <div className="projectAHT-details">
          <h3 className="projectAHT-title">{item?.name}</h3>
          <p className="projectAHT-category">Position : {item?.position}</p>
          <p className="projectAHT-description">Technologies: {item?.technologies}</p>
          <p className="projectAHT-description">Description: {item?.description}</p>
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

export default ProjectItemAHT;
