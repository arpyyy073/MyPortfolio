import Hero from "./components/hero"
import About from "./components/about"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './assets/styles/hero.css';
import './assets/styles/navbar.css';
import './assets/styles/about.css';



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