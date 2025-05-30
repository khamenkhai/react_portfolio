import React from 'react';
import { FaBars } from 'react-icons/fa';
import useMobileMenu from '../hooks/useMobileMenu.js';

const Navbar = () => {
  const { isMenuOpen, toggleMenu } = useMobileMenu();

  return (
    <nav className="navbar-theme py-3 px-4 lg:px-16 xl:px-24 2xl:px-32 flex justify-between items-center fixed w-full top-0 z-50">
      <div className="flex items-center">
        <span className="text-xl font-bold">
          &gt;_ Portfolio
        </span>
      </div>

      {/* Desktop menu */}
      <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
        <a href="#about" className="hover:text-accent">About</a>
        <a href="#experience" className="hover:text-accent">Experience</a>
        <a href="#projects" className="hover:text-accent">Projects</a>
        <a href="#certifications" className="hover:text-accent">Certifications</a>
        <a href="#contact" className="hover:text-accent">Contact</a>
      </div>

      {/* Mobile menu button */}
      <button
        id="mobile-menu-button"
        className="md:hidden text-xl"
        onClick={toggleMenu}
      >
        <FaBars />
      </button>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div
          className="absolute top-full left-0 w-full text-white flex flex-col items-start px-4 py-3 space-y-5 md:hidden shadow-md z-50"
          style={{ backgroundColor: '#1e1e1e' }}
        >

          <a href="#about" className="hover:text-accent" onClick={toggleMenu}>About</a>
          <a href="#experience" className="hover:text-accent" onClick={toggleMenu}>Experience</a>
          <a href="#projects" className="hover:text-accent" onClick={toggleMenu}>Projects</a>
          <a href="#certifications" className="hover:text-accent" onClick={toggleMenu}>Certifications</a>
          <a href="#contact" className="hover:text-accent" onClick={toggleMenu}>Contact</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
