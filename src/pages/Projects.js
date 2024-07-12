import React, { useEffect, useState } from "react";
import Container from "../components/Container/Container";
import { getAllProjects } from "../API/projectAPI";
import "../styles/pages/Projects.scss";
import Loading from "../components/Loading/Loading";
import ProjectItem from "../components/ProjectItem/ProjectItem";
import ProjectItemAHT from "../components/ProjectItemAHT/ProjectItem";
import { getAllProjectsAHT } from "../API/projectAHTAPI";

function Projects() {
  const [projects, setProjects] = useState([]);
  const [projectsAHT, setProjectsAHT] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('Tab1');

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const projectsData = await getAllProjects();
        setProjects(projectsData);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching projects:", error);
        setLoading(false);
      }
    };
    const fetchProjectsAHT = async () => {
      try {
        const projectsData = await getAllProjectsAHT();
        setProjectsAHT(projectsData);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching projects:", error);
        setLoading(false);
      }
    };
    fetchProjects();
    fetchProjectsAHT();
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <Container>
      <h2>Projects</h2>
      <div className="tab-buttons">
        <button 
          className={`tab-button ${activeTab === 'Tab1' ? 'active' : ''}`} 
          onClick={() => handleTabClick('Tab1')}
        >
         My personal projects
        </button>
        <button 
          className={`tab-button ${activeTab === 'Tab2' ? 'active' : ''}`} 
          onClick={() => handleTabClick('Tab2')}
        >
         The projects I have worked on at AHT
        </button>
      </div>
      <div className="projects">
      {activeTab === 'Tab1' && (
          <>
            {Object.keys(projects).map((key, index) => {
              const project = projects[key];
              return <ProjectItem item={project} key={index} id={key} />;
            })}
          </>
        )}
        {activeTab === 'Tab2' && <>
          {Object.keys(projectsAHT).map((key, index) => {
              const project = projectsAHT[key];
              return <ProjectItemAHT item={project} key={index} id={key} />;
            })}
        </>}
      </div>
    </Container>
  );
}

export default Projects;
