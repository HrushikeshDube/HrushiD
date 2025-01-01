import React, { useState } from "react";
import "../Components/Navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const [menuActive, setMenuActive] = useState(false);

  const toggleMenu = () => {
    setMenuActive(!menuActive);
    console.log("Menu toggled:", menuActive);
  };

  return (
    <nav className="navbar">
      <div className="logo">
        <h2>Hrushi</h2>
      </div>
      
      {/* Hamburger icon */}
      <div className="hamburger" onClick={toggleMenu}>
        <FontAwesomeIcon icon={faBars} size="lg" />
      </div>

      {/* Navbar menu */}
      <div className={`menu ${menuActive ? "active" : ""}`}>
        <ul>
          <li><a href="#about">About</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#achievements">Achievements</a></li>
          <li><a href="#experience">Experience</a></li>
        </ul>
      </div>

      {/* Contact button */}
      <div className="contactbtn">
        <button>
          <a href="#contact" style={{ color: "white", textDecoration: "none" }}>Contact</a>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
