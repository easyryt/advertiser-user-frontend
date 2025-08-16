import React, { useState, useEffect } from "react";
import "./Navbar.css";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Close mobile menu when resizing to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <nav className={`navbar ${isScrolled ? "scrolled" : ""}`}>
        <div className="navbar-container">
          {/* Left side - only logo */}
          <div className="logo-section">
            <img 
              src="/logo.png" 
              alt="Company Logo" 
              className="logo-image"
            />
          </div>
          
          {/* Right side - all other elements */}
          <div className="right-section">
            {/* Desktop links */}
            <div className="desktop-links">
              <a href="#home" className="active-link">
                Home
                <span className="active-underline"></span>
              </a>
              <a href="#products">Products</a>
              <a href="#rewards">Rewards</a>
              <a href="#youtubers">Youtubers</a>
              <a href="#about">About</a>
            </div>
            
            {/* Desktop button */}
            <button className="talk-btn desktop-only">Let’s Talk</button>
            
            {/* Mobile menu toggle */}
            <button 
              className="mobile-menu-toggle" 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            >
              {isMenuOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
          
          {/* Mobile menu */}
          <div className={`mobile-menu ${isMenuOpen ? "open" : ""}`}>
            <a href="#home" className="active-link" onClick={() => setIsMenuOpen(false)}>
              Home
              <span className="active-underline"></span>
            </a>
            <a href="#products" onClick={() => setIsMenuOpen(false)}>Products</a>
            <a href="#rewards" onClick={() => setIsMenuOpen(false)}>Rewards</a>
            <a href="#youtubers" onClick={() => setIsMenuOpen(false)}>Youtubers</a>
            <a href="#about" onClick={() => setIsMenuOpen(false)}>About</a>
            <button className="talk-btn">Let’s Talk</button>
          </div>
        </div>
      </nav>
      <div className="navbar-spacer"></div>
    </>
  );
};

export default Navbar;