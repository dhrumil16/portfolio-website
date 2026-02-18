import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Education from './components/Education';
import Contact from './components/Contact';

function App() {
  return (
    <div className="bg-dark min-h-screen text-white selection:bg-primary selection:text-white">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Education />
      <Contact />
    </div>
  );
}

export default App;
