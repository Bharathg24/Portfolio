import React from 'react';
import { motion } from 'framer-motion';
import { ReactTyped } from 'react-typed';
import { Play, Download } from 'lucide-react';
import heroImage from '../assets/1000042717~2.jpg';
import resumePDF from '../assets/Resume_DEC.pdf';

const Hero = ({ id }) => {
  return (
    <section id={id} className="section relative overflow-hidden flex items-center justify-center min-h-screen">
      {/* Enhanced Background */}
      <div className="circuit-bg absolute inset-0 -z-10" />
      
      {/* Animated gradient orbs */}
      <motion.div 
        className="absolute top-20 right-20 w-72 h-72 bg-cyan-500/20 rounded-full blur-3xl -z-10"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3]
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      ></motion.div>
      <motion.div 
        className="absolute bottom-20 left-20 w-96 h-96 bg-emerald-500/20 rounded-full blur-3xl -z-10"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.4, 0.2]
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
      ></motion.div>

      <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-[auto_1fr] gap-12 items-center relative z-10">
        {/* Photo Section - Left Side */}
        <motion.div
          className="flex justify-start"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <div className="relative">
            <div className="w-64 h-80 md:w-72 md:h-96 rounded-2xl overflow-hidden border-2 border-cyan-400/60 shadow-2xl shadow-cyan-500/30 relative group">
              <img 
                src={heroImage} 
                alt="Bharath G" 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              {/* Animated border glow */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-cyan-400/30 to-emerald-400/30 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>
            </div>
            {/* Enhanced Glow effect */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-cyan-400/20 to-emerald-400/20 blur-2xl -z-10 animate-pulse"></div>
          </div>
        </motion.div>

        {/* Content Section - Centered */}
        <motion.div
          className="text-center max-w-2xl mx-auto w-full flex flex-col items-center"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
        {/* Subtitle */}
        <motion.div
          className="mb-6 w-full"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.5, type: 'spring' }}
        >
          <div className="text-xl md:text-2xl text-cyan-400 mb-6 font-sans tracking-wider text-center">
            Electronics & Communication Engineer
          </div>
        </motion.div>

        {/* Name */}
        <motion.h1
          className="h1 mb-8 text-center"
          style={{ color: '#ffffff' }}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
        >
          Hi, I'm <span className="text-emerald-400 bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent" style={{ color: '#34f5c5' }}>Bharath G</span>
        </motion.h1>

        {/* Typed text */}
        <motion.div
          className="text-xl md:text-2xl mb-12 font-medium text-gray-300 max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
        >
          <ReactTyped
            strings={[
              'Embedded Systems | IoT Engineer',
              'VLSI Design Engineer',
              'Circuit Designer',
            ]}
            typeSpeed={60}
            backSpeed={40}
            loop
          />
        </motion.div>

        {/* Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5 }}
        >
          <motion.button
            className="btn btn-primary text-lg px-8 py-4"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() =>
              document
                .getElementById('projects')
                ?.scrollIntoView({ behavior: 'smooth' })
            }
          >
            <Play className="w-5 h-5 inline mr-2" />
            View Projects
          </motion.button>

          <motion.a
            href={resumePDF}
            download="Resume_DEC.pdf"
            className="btn btn-secondary text-lg px-8 py-4"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Download className="w-5 h-5 inline mr-2" />
            Download Resume
          </motion.a>
        </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-cyan-400 rounded-full flex justify-center">
          <motion.div
            className="w-1 h-3 bg-cyan-400 rounded-full mt-2"
            animate={{ y: [0, 15, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
