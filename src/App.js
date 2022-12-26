import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Photography from './pages/Photography';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Router basename = {process.env.adityanaithani.github.io}>
        <Switch>
          <Route path = "/" exact component = {Home} />
          <Route path = "/projects" exact component = {Projects} />
          <Route path = "/photography" exact component = {Photography} />
        </Switch>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/photography" element={<Photography />} />

        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
