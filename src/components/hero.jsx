// src/components/Hero.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import '../assets/style/hero.css';
import pic from '../assets/images/pic2.jpg';

const Hero = () => {
  return (
    <section className="hero-section">
      {/* Main Content */}
      <div className="hero-content">
        {/* Image */}
        <motion.div
          className="hero-image-wrapper"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <img src={pic} alt="Arp-J Villares" className="hero-image" />
        </motion.div>

        {/* Text */}
        <div className="hero-text">
          <h3 className="hero-name">ARP-J VILLARES</h3>
          <h1 className="hero-title">IOT DEVELOPER</h1>
          <div className="hero-animation">
            <TypeAnimation
              sequence={[
                'Web Developer',
                1500,
                'Tech Problem Solver',
                1500,
              ]}
              speed={70}
              repeat={Infinity}
              wrapper="span"
            />
          </div>
          <div className="hero-buttons">
            <button className="btn-primary">GET IN TOUCH ↗</button>
            <button className="btn-outline">DOWNLOAD CV ⬇</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
