// src/components/experience.jsx
import React from 'react';
import { motion } from 'framer-motion';
import '../assets/style/experience.css';

const roadmapData = [
  {
    year: '2024',
    title: 'MedEquip Tracker',
    position: 'Archiver',
    description: 'As an Archiver, I was responsible for organizing and maintaining critical project data. This included managing data backups, ensuring secure storage, and archiving historical records for future reference, which helped keep the project scalable and well-documented.',
  },
  {
    year: '2025',
    title: 'Smart Aquaria: Innovative IoT Solutions for Aquarium Monitoring',
    position: 'IoT Developer',
    description: 'As the IoT Developer for the Smart Aquaria project, I was responsible for designing and developing the device\'s hardware and software components. This included the integration of sensors for real-time monitoring of water quality, temperature, pH, and turbidity. I developed custom firmware for ESP32 microcontrollers, enabling seamless communication between the sensors and the central control system. My work focused on creating an automated, efficient, and scalable solution for aquarium management, ensuring that both the fish and the environment were closely monitored and optimized for health and sustainability.',
  }
];

const Experience = () => {
  return (
    <div className="roadmap-container">
      <h2 className="roadmap-title">My Experience Roadmap</h2>
      <div className="timeline">
        {roadmapData.map((item, index) => (
          <div key={index} className="timeline-item">
            <div className="timeline-dot"></div>
            <motion.div
              className="timeline-card"
              whileHover={{ scale: 1.05 }}
              transition={{ type: 'spring', stiffness: 150 }}
            >
              <h3>{item.year}</h3>
              <h4>{item.title}</h4>
              <p className="position">{item.position}</p>
              <p>{item.description}</p>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
