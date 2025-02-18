import React, { useEffect, useState } from "react";
import logo from "../assets/images/black-logo.png";
import { Link } from "react-router-dom"; 

const Navbar = () => {
return (

<nav className="navbar">
        <div className="logo">
          <img src={logo} alt="logo" className="logo-icon" />
        </div>
        <ul className="nav-links">
        
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><a href="#projects">My Projects</a></li>
          <li><a href="#blog">My Blog</a></li>
          <li><a href="#contact">Contact Me</a></li>
        </ul>
      </nav>
);
};

export default Navbar;
