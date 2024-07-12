
import Container from '../components/Container/Container';
import IntroSection from '../components/IntroSection/IntroSection';
import WhyHireMeSection from '../components/WhyHireMeSection/WhyHireMeSection';
import ServicesSection from '../components/ServicesSection/ServicesSection';
import ProjectsSection from '../components/ProjectsSection/ProjectsSection';
import BlogSection from '../components/Container/BlogSection';
import CTASection from '../components/CTASection/CTASection';
import { useEffect, useState } from 'react';
import Experience from '../components/Experience/Experience';
import SkillSection from '../components/SkillSection/SkillSection';

function Home() {
  return (
    <>
      <Container>
        <IntroSection/>
        <WhyHireMeSection/>
        <Experience/>
        <SkillSection/>
        <ServicesSection/>
        <ProjectsSection/>
        <BlogSection/>
        <CTASection/>
      </Container>
    </>
  );
}

export default Home;
