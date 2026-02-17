import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Download } from 'lucide-react';
import resumePDF from '../assets/Bharath G_Resume.pdf';

const Navbar = ({ activeSection }) => {
  const [scrolled, setScrolled] = useState(false);
  const [cursor, setCursor] = useState({ x: 0, y: 0, grow: false });
  const [mobileOpen, setMobileOpen] = useState(false);

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'certifications', label: 'Certifications' },
    { id: 'contact', label: 'Contact' }
  ];

  const handleScroll = () => {
    setScrolled(window.scrollY > 50);
  };

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleMouseMove = (e) => {
    setCursor({
      x: e.clientX,
      y: e.clientY,
      grow: false // Remove grow effect
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    document.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <>
      <nav className={`navbar ${scrolled ? 'py-3' : 'py-4'} transition-all duration-300`} role="navigation" aria-label="Main navigation"> 
        <div className="nav-container flex justify-between items-center">
          <motion.div 
            className="nav-logo cursor-grow"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="text-emerald-400 font-bold tracking-wider" style={{ fontFamily: 'Orbitron, sans-serif' }}>BHARATH G ⚡</span>
          </motion.div>

          {/* Hamburger for mobile */}
          <button 
            className="md:hidden block text-cyan-400 focus:outline-none" 
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle mobile menu"
            aria-expanded={mobileOpen}
          >
            <svg width="32" height="32" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
              <line x1="3" y1="7" x2="21" y2="7" />
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="17" x2="21" y2="17" />
            </svg>
          </button>

          {/* Desktop nav links */}
          <ul className="nav-links hidden md:flex gap-1 relative">
            {navLinks.map((link, index) => (
              <motion.li 
                key={link.id} 
                className="relative"
              >
                <motion.span
                  className={`nav-link relative px-4 py-2 cursor-pointer transition-all duration-300 block ${
                    activeSection === link.id 
                      ? 'text-cyan-400 font-semibold' 
                      : 'text-gray-300 hover:text-cyan-400'
                  }`}
                  onClick={() => scrollToSection(link.id)}
                  whileHover={{ y: -2 }}
                >
                  {link.label}
                </motion.span>
              </motion.li>
            ))}
          </ul>

          <motion.a
            href={resumePDF}
            download="Bharath G_Resume.pdf"
            className="resume-btn hidden md:inline-flex"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Download Resume PDF"
          >
            <Download className="w-4 h-4 inline mr-2" />
            Resume
          </motion.a>
        </div>

        {/* Mobile nav drawer */}
        <div className={`fixed inset-0 z-50 bg-black bg-opacity-60 transition-opacity duration-300 ${mobileOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
          onClick={() => setMobileOpen(false)}
        />
        <div className={`fixed top-0 right-0 w-64 h-full bg-[#020617] shadow-lg z-50 transform transition-transform duration-300 ${mobileOpen ? 'translate-x-0' : 'translate-x-full'}`} role="dialog" aria-label="Mobile navigation menu"> 
          <button 
            className="absolute top-4 right-4 text-cyan-400" 
            onClick={() => setMobileOpen(false)}
            aria-label="Close mobile menu"
          >
            <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
          <ul className="flex flex-col mt-20 gap-6 px-8">
            {navLinks.map((link) => (
              <li key={link.id} className="relative">
                <span
                  className={`nav-link text-xl cursor-pointer transition-all duration-300 block ${
                    activeSection === link.id 
                      ? 'text-cyan-400 font-semibold' 
                      : 'text-gray-300 hover:text-cyan-400'
                  }`}
                  onClick={() => { scrollToSection(link.id); setMobileOpen(false); }}
                >
                  {link.label}
                </span>
              </li>
            ))}
            <a
              href={resumePDF}
              download="Bharath G_Resume.pdf"
              className="resume-btn mt-8 w-full block text-center"
            >
              <Download className="w-5 h-5 inline mr-2" /> Resume
            </a>
          </ul>
        </div>
      </nav>

      {/* Custom Cursor */}
      <motion.div
        className="cursor"
        style={{
          left: cursor.x,
          top: cursor.y,
        }}
      />
    </>
  );
};

export default Navbar;
