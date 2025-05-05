// src/pages/About.jsx
import React from 'react';
import '../assets/style/about.css';

const About = () => {
  return (
    <div className="about-me-container">
      <div className="header">
        <h1 className="title">About Me</h1>
        <p className="subtitle">Get to know me, my skills, and what I love.</p>
      </div>

      <div className="about-scroll-container">
        <div className="card bio">
          <h2 className="section-title">Bio</h2>
          <p>
          Hi! I'm a passionate developer who enjoys building interactive web experiences and solving real-world problems with technology. I specialize in frontend frameworks and IoT projects.
          </p>
        </div>

        <div className="card skills">
          <h2 className="section-title">Skills</h2>
          <ul className="skills-list">
            <li>React</li>
            <li>JavaScript</li>
            <li>CSS</li>
            <li>Firebase</li>
            <li>C++</li>
          </ul>
        </div>

        <div className="card hobbies">
          <h2 className="section-title">Hobbies</h2>
          <p>
            Outside of coding, I love gaming, reading about tech, and occasionally brewing a great cup of coffee.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
