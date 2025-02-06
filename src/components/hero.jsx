import React, { useEffect, useState } from "react";
import facebook from "../assets/images/facebook.svg";
import git from "../assets/images/git2.svg";
import email from "../assets/images/envelope.svg";
import arpFront from "../assets/images/hero-image.png";
import arpBack from "../assets/images/plus.jpg";
import ParticlesBackground from "./ParticlesBackground"; 
import logo from "../assets/images/black-logo.png";

const Hero = () => {
  const [typedText, setTypedText] = useState("");
  const [index, setIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [phraseIndex, setPhraseIndex] = useState(0);

  // Array of phrases to cycle through
  const phrases = [
    "Arp-J Villares",
    "an Arduino Developer.",
    "a Pro Player in Pixels.xyz",
    "Level 500 in Pixels.xyz",
    "Ranked Mythic in Mobile Legends:Bang Bang."
  ];

  const typingSpeed = 150; // Speed of typing
  const deleteSpeed = 100; // Speed of deleting
  const delayBeforeDelete = 1500; // Delay before deleting text

  useEffect(() => {
    let typingInterval;

    if (!isDeleting && index < phrases[phraseIndex].length) {
      typingInterval = setTimeout(() => {
        setTypedText((prev) => phrases[phraseIndex].substring(0, prev.length + 1));
        setIndex((prev) => prev + 1);
      }, typingSpeed);
    } else if (isDeleting && index > 0) {
      typingInterval = setTimeout(() => {
        setTypedText((prev) => phrases[phraseIndex].substring(0, prev.length - 1));
        setIndex((prev) => prev - 1);
      }, deleteSpeed);
    } else if (!isDeleting && index === phrases[phraseIndex].length) {
      typingInterval = setTimeout(() => setIsDeleting(true), delayBeforeDelete);
    } else if (isDeleting && index === 0) {
      setIsDeleting(false);
      setPhraseIndex((prev) => (prev + 1) % phrases.length); // Move to the next phrase
    }

    return () => clearTimeout(typingInterval);
  }, [index, isDeleting, phraseIndex]);

  return (
    <div className="hero-container">
      <ParticlesBackground />
      
      <nav className="navbar">
        <div className="logo">
          <img src={logo} alt="logo" className="logo-icon" />
        </div>
        <ul className="nav-links">
          <li><a href="#portfolio">Portfolio</a></li>
          <li><a href="#about">About Me</a></li>
          <li><a href="#blog">My Blog</a></li>
          <li><a href="#reviews">Reviews</a></li>
          <li><a href="#contact">Contact Me</a></li>
        </ul>
      </nav>

      <div className="hero-content">
        <div className="text-content">
          <p className="fade-in">Hi There,</p>
          <h1 className="typing-effect">
            <span className="white-text">I am</span>
            <span className="highlight"> {typedText}</span>
            <span className="cursor">|</span>
          </h1>
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
