import React from 'react';
import Navbar from './components/Navbar';
import MobileMenu from './components/MobileMenu';
import Sidebar from './components/Sidebar';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <MobileMenu />
      
      <main className="min-h-screen">
        <div className="container mx-auto px-4 lg:px-1 xl:px-1 2xl:px-36 py-8 lg:py-12">
          <div className="flex flex-col lg:flex-row lg:space-x-16 xl:space-x-24 2xl:space-x-32">
            <Sidebar />
            
            <div className="lg:w-1/2 xl:w-3/5">
              <div style={{ height: '45px' }}></div>
              <About />
              <Experience />
              <Projects />
              <Certifications />
              <Skills />
              <Contact />
            </div>
          </div>
        </div>
        <Footer />
      </main>
    </div>
  );
}

export default App;