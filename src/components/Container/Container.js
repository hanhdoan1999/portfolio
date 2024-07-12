import React, { useEffect, useState } from "react";
import "./Container.scss";
import Header from '../Header/Header';
import Footer from "../Footer/Footer";
import { useDarkMode } from "../../Context/useDarkMode";
import ScrollToSection from "../ScrollToSection/ScrollToSection";

const Container = ({ children}) => {
    const { darkMode, toggleDarkMode } = useDarkMode();
    const [section, setSection] = useState(null);
    return (
        <div className={darkMode ? 'app dark-mode' : 'app'}>
            <Header isOn={darkMode} toggleSwitch={toggleDarkMode} setSection={setSection}/>
            <div className="container">
                <ScrollToSection section={section} />
                {children}
                <Footer/>
            </div>
        </div>
    );
}

export default Container;
