// src/components/Layout.jsx
import React from 'react';
import Navigation from './nav';
import { useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import pic from '../assets/images/pic1.png';
import '../assets/style/hero.css';

const Layout = ({ children }) => {
  const location = useLocation(); // Get current route

  return (
    <section className="hero">
      <div className="hero-left">
        <h1 className="hero-name">Arp-J Villares</h1>
        <Navigation />
        {children}
      </div>

      {location.pathname === '/' && (
        <motion.div
          className="hero-right"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <div className="photo-wrapper">
            <img src={pic} alt="Arp-J Villares" className="hero-photo" />
          </div>
        </motion.div>
      )}
    </section>
  );
};

export default Layout;
