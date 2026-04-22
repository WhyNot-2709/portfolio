import { HashRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Projects from './pages/Projects';

function Footer() {
  return (
    <footer className="footer">
      <p>© 2024 <span>Himan Aakanksh Reddy</span>. Built with React.</p>
    </footer>
  );
}

export default function App() {
  return (
    <HashRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
      <Footer />
    </HashRouter>
  );
}
