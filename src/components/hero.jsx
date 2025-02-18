import React, { useEffect, useState } from "react";
import facebook from "../assets/images/facebook.svg";
import git from "../assets/images/git2.svg";
import email from "../assets/images/envelope.svg";
import arpFront from "../assets/images/hero-image.png";
import arpBack from "../assets/images/plus.jpg";
import Navbar from "./navbar"


const Hero = () => {
  const [typedText, setTypedText] = useState("");
  const [index, setIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [phraseIndex, setPhraseIndex] = useState(0);

  const phrases = [
    "Arp-J Villares",
    "an Arduino Dev."
  ];

  const typingSpeed = 150;
  const deleteSpeed = 100;
  const delayBeforeDelete = 1500;

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
      setPhraseIndex((prev) => (prev + 1) % phrases.length);
    }

    return () => clearTimeout(typingInterval);
  }, [index, isDeleting, phraseIndex]);

  return (
    <div className="hero-container">
      <Navbar />

      <div className="hero-content">
        <div className="text-content">
          <p className="fade-in">Hi There,</p>
          <h1 className="typing-effect">
            <span className="white-text">I am</span>
            <span className="highlight"> {typedText}</span>
            <span className="cursor">|</span>
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
