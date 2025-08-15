// src/components/Navbar.js
import React, { useState, useEffect } from "react";
import "./Navbar.css";
import { FaGlobe } from "react-icons/fa";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <nav className={`navbar ${isScrolled ? "scrolled" : ""}`}>
        <div className="navbar-container">
          <div className="left">
            <div className="logo-section">
              <FaGlobe className="logo-icon" />
              <span className="active-link">Home</span>
              <span className="active-underline"></span>
            </div>
            <div className="links">
              <a href="#products">Products</a>
              <a href="#rewards">Rewards</a>
              <a href="#youtubers">Youtubers</a>
              <a href="#about">About</a>
            </div>
          </div>
          <div className="right">
            <button className="talk-btn">Let’s Talk</button>
          </div>
        </div>
      </nav>
      <div className="navbar-spacer"></div>
    </>
  );
};

export default Navbar;