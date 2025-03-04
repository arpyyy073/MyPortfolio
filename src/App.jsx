import Hero from "./components/Hero.jsx"
import About from "./components/About.jsx"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './assets/styles/Hero.css';
import './assets/styles/Navbar.css';
import './assets/styles/About.css';



function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App