import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Download } from 'lucide-react';

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
      <nav className={`navbar ${scrolled ? 'py-3' : 'py-4'} transition-all duration-300`}> 
        <div className="nav-container flex justify-between items-center">
          <motion.div 
            className="nav-logo cursor-grow"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="text-emerald-400">BHARATH G</span>
          </motion.div>

          {/* Hamburger for mobile */}
          <button className="md:hidden block text-cyan-400 focus:outline-none" onClick={() => setMobileOpen(!mobileOpen)}>
            <svg width="32" height="32" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
              <line x1="3" y1="7" x2="21" y2="7" />
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="17" x2="21" y2="17" />
            </svg>
          </button>

          {/* Desktop nav links */}
          <ul className="nav-links hidden md:flex">
            {navLinks.map((link) => (
              <motion.li key={link.id}>
                <motion.span
                  className={`nav-link ${activeSection === link.id ? 'active' : ''}`}
                  onClick={() => scrollToSection(link.id)}
                  whileHover={{ y: -2, scale: 1.05 }}
                >
                  {link.label}
                </motion.span>
              </motion.li>
            ))}
          </ul>

          <motion.button
            className="resume-btn hidden md:inline-flex"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => window.open('/resume.pdf', '_blank')}
          >
            <Download className="w-4 h-4 inline mr-2" />
            Resume
          </motion.button>
        </div>

        {/* Mobile nav drawer */}
        <div className={`fixed inset-0 z-50 bg-black bg-opacity-60 transition-opacity duration-300 ${mobileOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
          onClick={() => setMobileOpen(false)}
        />
        <div className={`fixed top-0 right-0 w-64 h-full bg-[#020617] shadow-lg z-50 transform transition-transform duration-300 ${mobileOpen ? 'translate-x-0' : 'translate-x-full'}`}> 
          <button className="absolute top-4 right-4 text-cyan-400" onClick={() => setMobileOpen(false)}>
            <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
          <ul className="flex flex-col mt-20 gap-6 px-8">
            {navLinks.map((link) => (
              <li key={link.id}>
                <span
                  className={`nav-link text-xl ${activeSection === link.id ? 'active' : ''}`}
                  onClick={() => { scrollToSection(link.id); setMobileOpen(false); }}
                >
                  {link.label}
                </span>
              </li>
            ))}
            <button
              className="resume-btn mt-8 w-full"
              onClick={() => window.open('/resume.pdf', '_blank')}
            >
              <Download className="w-5 h-5 inline mr-2" /> Resume
            </button>
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
