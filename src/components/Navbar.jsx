import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Download } from 'lucide-react';

const Navbar = ({ activeSection }) => {
  const [scrolled, setScrolled] = useState(false);
  const [cursor, setCursor] = useState({ x: 0, y: 0, grow: false });

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
        <div className="nav-container">
          <motion.div 
            className="nav-logo cursor-grow"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="text-emerald-400">BHARATH G</span>
          </motion.div>
          
          <ul className="nav-links">
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
            className="resume-btn"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => window.open('/resume.pdf', '_blank')}
          >
            <Download className="w-4 h-4 inline mr-2" />
            Resume
          </motion.button>
        </div>
      </nav>

      {/* Custom Cursor */}
      <motion.div
        className="cursor"
        animate={{
          x: cursor.x,
          y: cursor.y,
        }}
        transition={{ 
          type: "tween",
          duration: 0.1,
          ease: "linear"
        }}
      />
    </>
  );
};

export default Navbar;
