import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../assets/style/nav.css';
import ThemeToggle from './themetoggle'; // ⬅️ import your toggle

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleCurtain = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="hero-header">
      <h2 className="hero-logo">MYPORTFOLIO</h2>

      {/* Hamburger Icon */}
      <div className="burger" onClick={toggleCurtain}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>

      {/* Curtain Nav */}
      <nav className={`curtain-nav ${isOpen ? 'open' : ''}`}>
        <ul>
          <li><Link to="/" onClick={toggleCurtain}>Home</Link></li>
          <li><Link to="/about" onClick={toggleCurtain}>About</Link></li>
          <li><Link to="/experience" onClick={toggleCurtain}>Experience</Link></li>
          <li><Link to="/projects" onClick={toggleCurtain}>Projects</Link></li>
          <li><Link to="/blog" onClick={toggleCurtain}>Blogs</Link></li>
          <li><Link to="/contact" onClick={toggleCurtain}>Contact</Link></li>
        </ul>

        {/* 🌙 Theme Toggle Icon at the end */}
        <div className="nav-theme-toggle">
          <ThemeToggle />
        </div>
      </nav>
    </header>
  );
};

export default Nav;
