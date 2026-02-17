import React from 'react';
import { motion } from 'framer-motion';
import { ReactTyped } from 'react-typed';
import { Play, Download, Github, Linkedin, Instagram, MessageCircle } from 'lucide-react';
import heroImage from '../assets/1000042717~2.jpg';
import resumePDF from '../assets/Resume_DEC.pdf';
import { socialLinks } from '../utils/data';

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

      <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-[auto_1fr] gap-12 items-center justify-items-center relative z-10">
        {/* Vertical Social Sidebar - Fixed on Left Side */}
        <motion.div
          className="fixed left-6 top-1/2 -translate-y-1/2 z-50 hidden lg:block"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <div className="flex flex-col gap-4 bg-gray-900/80 backdrop-blur-md p-4 rounded-3xl border border-gray-700/50 shadow-2xl">
            <SocialIconButton 
              Icon={MessageCircle} 
              href={socialLinks.whatsapp}
              color="emerald"
              label="WhatsApp"
            />
            <SocialIconButton 
              Icon={Linkedin} 
              href={socialLinks.linkedin}
              color="blue"
              label="LinkedIn"
            />
            <SocialIconButton 
              Icon={Github} 
              href={socialLinks.github}
              color="gray"
              label="GitHub"
            />
            <LeetCodeIconButton 
              href={socialLinks.leetcode}
              label="LeetCode"
            />
            <SocialIconButton 
              Icon={Instagram} 
              href={socialLinks.instagram}
              color="pink"
              label="Instagram"
            />
          </div>
        </motion.div>

        {/* Photo Section - Left Side */}
        <motion.div
          className="flex justify-center md:justify-start"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <div className="relative">
            <div className="w-64 h-80 md:w-72 md:h-96 rounded-2xl overflow-hidden border-2 border-cyan-400/60 shadow-2xl shadow-cyan-500/30 relative group">
              <img 
                src={heroImage} 
                alt="Bharath G - Full Stack Developer specializing in AI, ML, and embedded systems" 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                loading="eager"
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
        {/* Name */}
        <motion.h1
          className="h1 mb-6 text-center"
          style={{ color: '#ffffff' }}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          Hi, I'm <span className="text-emerald-400 bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent font-['Orbitron'] tracking-wider" style={{ color: '#34f5c5', fontFamily: 'Orbitron, sans-serif' }}>Bharath G ⚡</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.div
          className="mb-6 w-full"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.8, type: 'spring' }}
        >
          <div className="text-xl md:text-2xl text-cyan-400 mb-6 font-sans tracking-wider text-center">
            Electronics & Communication Engineer
          </div>
        </motion.div>

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

      
    </section>
  );
};

/* Social Icon Button Component */
const SocialIconButton = ({ Icon, href, color, label }) => {
  const colorClasses = {
    emerald: 'text-emerald-400 hover:bg-emerald-500/20 hover:shadow-emerald-500/50',
    blue: 'text-blue-400 hover:bg-blue-500/20 hover:shadow-blue-500/50',
    gray: 'text-gray-400 hover:bg-gray-500/20 hover:shadow-gray-500/50',
    pink: 'text-pink-400 hover:bg-pink-500/20 hover:shadow-pink-500/50',
  };

  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110 ${colorClasses[color]}`}
      whileHover={{ scale: 1.15, rotate: 5 }}
      whileTap={{ scale: 0.95 }}
      title={label}
    >
      <Icon className="w-6 h-6" />
    </motion.a>
  );
};

/* LeetCode Icon Button Component */
const LeetCodeIconButton = ({ href, label }) => (
  <motion.a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110 text-yellow-400 hover:bg-yellow-500/20 hover:shadow-yellow-500/50"
    whileHover={{ scale: 1.15, rotate: 5 }}
    whileTap={{ scale: 0.95 }}
    title={label}
  >
    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
      <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.3 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.101-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.522 2.545 2.545 0 0 1 .619-1.164L9.13 8.114l1.588-1.6 7.689-7.699a1.374 1.374 0 0 0 0-1.943L13.483.439A1.374 1.374 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0 1.951 0l5.911-5.922a1.38 1.38 0 0 0 0-1.951 1.38 1.38 0 0 0-1.951 0l-5.911 5.922a1.38 1.38 0 0 0 0 1.951z"/>
    </svg>
  </motion.a>
);

export default Hero;
