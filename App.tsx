
import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { AIChatWidget } from './components/AIChatWidget';
import Home from './pages/Home';
import Services from './pages/Services';
import About from './pages/About';
import Contact from './pages/Contact';
import Estimate from './pages/Estimate';
import Portal from './pages/Portal';
import Gallery from './pages/Gallery';

const App: React.FC = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/estimate" element={<Estimate />} />
          <Route path="/portal" element={<Portal />} />
        </Routes>
      </Layout>
      <AIChatWidget />
    </Router>
  );
};

export default App;
