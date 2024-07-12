import React from 'react';
import { Element } from "react-scroll";
import SkillsChart from '../SkillsChart/SkillsChart ';
import './SkillSection.scss';

const SkillSection = () => {
  return (
    <Element name='skill'>
    <div className="skill-container" id="skill">
      <h2 className="heading">Skill</h2>
      <div className="skill-content">
      <SkillsChart />
      </div>
    </div>
    </Element>
  );
}

export default SkillSection;
