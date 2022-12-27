import './App.css';
import { BrowserRouter as Router, Routes, Route, } from 'react-router-dom';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Photography from './pages/Photography';
import About from './pages/About';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ProjectDisplay from './pages/ProjectDisplay';

function App() {

  
  <svg viewBox='0 0 250 250' xmlns='http://www.w3.org/2000/svg'>
  <filter id='noiseFilter'>
    <feTurbulence 
      type='fractalNoise' 
      baseFrequency='0.65' 
      numOctaves='3' 
      stitchTiles='stitch'/>
  </filter>
  
  <rect width='100%' height='100%' filter='url(#noiseFilter)'/>
</svg>


  return (
    <div className="App">
      <Router basename = {process.env.PUBLIC_URL}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/:id" element={<ProjectDisplay />} />
          <Route path="/photography" element={<Photography />} />
          <Route path="/about" element={<About />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
