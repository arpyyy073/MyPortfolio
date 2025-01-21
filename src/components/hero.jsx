import React from 'react';
import arp from '../assets/images/hero-image.png';


const Hero = () => {
  return (
    <div className="hero-container">
      <nav className="navbar">
        <div className="logo">AV</div>
        <ul className="nav-links">
          <li><a href="#portfolio">portfolio</a></li>
          <li><a href="#about">about me</a></li>
          <li><a href="#blog">my blog</a></li>
          <li><a href="#reviews">reviews</a></li>
          <li><a href="#contact">contact me</a></li>
        </ul>
        <button className="contact-btn">Contact Me</button>
      </nav>

      <div className="hero-content">
        <div className="text-content">
          <p>Hi There,</p>
          <h1>
            I am <span className="highlight">Arp-J</span> Villares
          </h1>
          <h2>I am a Arduino Developer</h2>
          <p className="description">
          Passionate Arduino Developer with a knack for creating innovative embedded systems and IoT solutions. Skilled in programming microcontrollers, sensor integration, and hardware prototyping to bring ideas to life. Always eager to explore new technologies and push the boundaries of automation and electronics.
          </p>
          <button className="hire-btn">Hire Me</button>

          <div className="contact-info">
            <p><strong>Email:</strong> arparpvillares07@gmail.com</p>
            <p><strong>Phone:</strong> 09938343981</p>
            <p><strong>Location:</strong> Zamboanga City</p>
          </div>
        </div>

        <div className="image-content">
          <img src={arp} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
