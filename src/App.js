import React from 'react';
import {Routes, Route, useLocation} from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import {AnimatePresence}from 'framer-motion';

function App() {
  const location = useLocation();

  return (
    <div className="bg-cool-black h-full md:h-full w-screen overflow-x-hidden">
      <Navbar/>
        <AnimatePresence>
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home/>} />
            <Route path="/about" element={<About/>} />
            <Route path="/projects" element={<Projects/>} />
            <Route path="/contact" element={<Contact/>} />
          </Routes>
        </AnimatePresence>
        <Footer/>
    </div>
  );
}

export default App;
