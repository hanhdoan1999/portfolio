// import Logo from "../../assets/images/logo-new.png";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../../assets/images/koala.png";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";
import "./Header.scss";
import { useEffect, useState } from "react";

const Header = ({ isOn, toggleSwitch, setSection }) => {
  const menus = [
    { name: "Home", link: "/", section: true },
    { name: "Experience", link: "experience", section: true },
    { name: "Skill", link: "skill", section: true },
    { name: "Project", link: "/projects" },
    { name: "Contact", link: "/contact" },
    // { name: "Blog", link: "/blog" },
    // { name: "Add Blog", link: "/add-blog" },
    // { name: "Add Project", link: "/add-project" },
  ];

  const navigate = useNavigate();
  const [isFixed, setIsFixed] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);

  const handleScrollLinkClick = (link) => {
    navigate("/");
    setSection(link);
    setMenuOpen(false)
  };

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setIsFixed(true);
      setShowBackToTop(true);
    } else {
      setIsFixed(false);
      setShowBackToTop(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <>
    <header className={`header-content-wrap ${isFixed ? "fixed" : ""} ${isOn ? "isOnDarkMode" : ""}`}>
        <div className="header-container header-content">
          <div className="Logo">
            <Link to="/">
              <img src={Logo} alt="Logo" className="LogoImage" />
            </Link>
          </div>
          <nav className={`navbar ${menuOpen ? "open" : ""}`}>
            {menus.map((item, index) => {
              return item.section ? (
                <div
                  className="nav-link"
                  key={index}
                  onClick={() => handleScrollLinkClick(item.link)}
                >
                  {item.name}
                </div>
              ) : (
                <Link className="nav-link" key={index} to={item.link}>
                  {item.name}
                </Link>
              );
            })}
          </nav>
          <ToggleSwitch isOn={isOn} toggleSwitch={toggleSwitch} />
          <button className="menu-toggle" onClick={handleMenuToggle}>
            ☰
          </button>
        </div>
    </header>
     {showBackToTop && (
      <button className="back-to-top" onClick={scrollToTop}>
        ↑
      </button>
    )}
    </>
  );
};

export default Header;
