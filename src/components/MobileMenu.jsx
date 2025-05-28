import React from 'react';
import  useMobileMenu  from '../hooks/useMobileMenu.js';

const MobileMenu = () => {
  const { isMenuOpen } = useMobileMenu();

  return (
    <div id="mobile-menu" className={`navbar-theme md:hidden ${isMenuOpen ? '' : 'hidden'}`}>
      <div className="px-6 py-4 flex flex-col space-y-4">
        <a href="#about" className="hover:text-accent">About</a>
        <a href="#experience" className="hover:text-accent">Experience</a>
        <a href="#projects" className="hover:text-accent">Projects</a>
        <a href="#certifications" className="hover:text-accent">Certifications</a>
        <a href="#contact" className="hover:text-accent">Contact</a>
      </div>
    </div>
  );
};

export default MobileMenu;