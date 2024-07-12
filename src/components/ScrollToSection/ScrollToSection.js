import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { scroller } from 'react-scroll';

const ScrollToSection = ({ section }) => {
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === '/' && section) {
      scroller.scrollTo(section, {
        duration: 500,
        smooth: true,
      });
    }
  }, [location, section]);

  return null;
};

export default ScrollToSection;
