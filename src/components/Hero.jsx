import React, { useEffect, useState } from "react";
import facebook from "../assets/images/facebook.svg";
import git from "../assets/images/git2.svg";
import email from "../assets/images/envelope.svg";
import arpFront from "../assets/images/hero-image.png";
import arpBack from "../assets/images/plus.jpg";
import Navbar from "./Navbar"
import { TypeAnimation } from 'react-type-animation';


const Hero = () => {
  


  return (
    <div className="hero-container">
      <Navbar />

      <div className="hero-content">
        <div className="text-content">
          <p className="fade-in">Hi There,</p>
          <h1 className="typing-effect">
            <span className="white-text">I am</span>

            <span className="highlight"> 
            <TypeAnimation
      sequence={[
        
        'Arp-J Villares',
        1000, 
        'An Arduino Dev',
        1000
      ]}
      wrapper="span"
      speed={30}
      style={{ fontSize: '3.5rem', display: 'inline-block' }}
      repeat={Infinity}
    />
            </span>
          </h1>
          
          <div className="social-icons fade-in">
            <a href="http://facebook.com/arpj.villares/" target="_blank" rel="noopener noreferrer">
              <img src={facebook} alt="Facebook" className="social-icon" />
            </a>
            <a href="mailto:arparpvillares07@gmail.com">
              <img src={email} alt="Email" className="social-icon" />
            </a>
            <a href="https://github.com/arpyyy073" target="_blank" rel="noopener noreferrer">
              <img src={git} alt="GitHub" className="social-icon" />
            </a>
          </div>
        </div>

        
        <div className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <img src={arpFront} alt="Front" />
            </div>
            <div className="flip-card-back">
              <img src={arpBack} alt="Back" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
