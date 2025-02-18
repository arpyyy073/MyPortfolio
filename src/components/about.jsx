import React from "react";
import Navbar from "./navbar"


const About = () => {
  return (
    <div className="about-me-container">
      <Navbar />
      <header className="header">
        <h1 className="title">About Me</h1>
        <p className="subtitle">Get to know more about me and my journey</p>
      </header>
      
      <section className="about-content">
        <div className="bio">
          <h2 className="section-title">Who Am I?</h2>
          <p>
            Hi! I'm a passionate developer who enjoys building interactive web experiences
            and solving real-world problems with technology. I specialize in frontend frameworks
            and IoT projects.
          </p>
        </div>

        <div className="skills">
          <h2 className="section-title">Skills & Expertise</h2>
          <ul className="skills-list">
            <li>Frontend Development (React, HTML, CSS, JavaScript)</li>
            <li>Backend (Firebase)</li>
            <li>Embedded Systems (Arduino, ESP32)</li>
          </ul>
        </div>

        <div className="hobbies">
          <h2 className="section-title">Hobbies & Interests</h2>
          <p>
            When I'm not coding, I enjoy exploring new technologies, building IoT projects,
            and contributing to open-source communities.
          </p>
        </div>
      </section>
    </div>
  );
};

export default About;
