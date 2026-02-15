import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Github, Linkedin, Instagram, MessageCircle } from 'lucide-react';
import { socialLinks } from '../utils/data';

const Footer = () => {
  return (
    <footer className="bg-gray-900/50 border-t border-gray-800 py-8">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Social Media Links */}
          <div className="flex justify-center gap-4 mb-6">
            <SocialIcon Icon={Github} href={socialLinks.github} />
            <SocialIcon Icon={Linkedin} href={socialLinks.linkedin} />
            <SocialIcon Icon={Instagram} href={socialLinks.instagram} />
            <SocialIcon Icon={MessageCircle} href={socialLinks.whatsapp} />
            <LeetCodeIcon href={socialLinks.leetcode} />
          </div>

         
          <p className="text-gray-500 text-sm mt-2">
            © {new Date().getFullYear()} All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

/* Social Icon Component */
const SocialIcon = ({ Icon, href }) => (
  <motion.a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center text-gray-400 hover:text-cyan-400 hover:bg-cyan-500/20 transition-all"
    whileHover={{ scale: 1.1, y: -3 }}
    whileTap={{ scale: 0.95 }}
  >
    <Icon className="w-5 h-5" />
  </motion.a>
);

/* LeetCode Icon Component */
const LeetCodeIcon = ({ href }) => (
  <motion.a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center text-gray-400 hover:text-yellow-400 hover:bg-yellow-500/20 transition-all"
    whileHover={{ scale: 1.1, y: -3 }}
    whileTap={{ scale: 0.95 }}
  >
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
      <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.3 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.101-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.522 2.545 2.545 0 0 1 .619-1.164L9.13 8.114l1.588-1.6 7.689-7.699a1.374 1.374 0 0 0 0-1.943L13.483.439A1.374 1.374 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0 1.951 0l5.911-5.922a1.38 1.38 0 0 0 0-1.951 1.38 1.38 0 0 0-1.951 0l-5.911 5.922a1.38 1.38 0 0 0 0 1.951z"/>
    </svg>
  </motion.a>
);

export default Footer;
