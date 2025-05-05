import React from 'react';
import './index.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Hero from './components/hero';
import About from './components/about';
import Experience from './components/experience';
import Contact from './components/contact';
import MyProject from './components/myproject';
import MyBlog from './components/myblog';
import BlogDetail from './components/blogdetail';
import Nav from './components/nav'; // ThemeToggle will be included inside Nav

const App = () => {
  return (
    <Router>
      <div className="main-frame">
        {/* Navigation Bar (ThemeToggle is inside Nav) */}
        <Nav />

        {/* Page Content */}
        <main className="section-container">
          <Routes>
            <Route path="/" element={<Hero />} />
            <Route path="/about" element={<About />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/projects" element={<MyProject />} />
            <Route path="/blog" element={<MyBlog />} />
            <Route path="/blogdetail/:id" element={<BlogDetail />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;
