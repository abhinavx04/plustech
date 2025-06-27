import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import VideoSection from './components/VideoSection';
import About from './components/About';
import HistoryMilestones from './components/HistoryMilestones';
import Services from './components/Services';
import Products from './components/Products';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Resources from './components/Resources';
import Footer from './components/Footer';

// Home page component that includes only the Hero section
const HomePage = () => {
  return (
    <div className="min-h-screen">
      <Hero />
    </div>
  );
};

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/history-milestones" element={<HistoryMilestones />} />
        <Route path="/services" element={<Services />} />
        <Route path="/products" element={<Products />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;