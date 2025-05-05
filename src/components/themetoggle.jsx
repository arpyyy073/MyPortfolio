// src/components/ThemeToggle.jsx
import React, { useEffect, useState } from 'react';
import "../assets/style/themetoggle.css";

const ThemeToggle = () => {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    document.body.setAttribute('data-theme', theme);
  }, [theme]);

  return (
    <div className="theme-toggle">
      <button onClick={() => setTheme('light')} className={theme === 'light' ? 'active' : ''}>■ LIGHT</button>
      <button onClick={() => setTheme('dark')} className={theme === 'dark' ? 'active' : ''}>■ DARK</button>
    </div>
  );
};

export default ThemeToggle;
