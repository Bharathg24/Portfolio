import React, { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Cpu, Activity } from 'lucide-react';

const LoadingScreen = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const completed = useRef(false);

  useEffect(() => {
    // Fallback timeout to ensure loading completes (reduced to 3 seconds)
    const fallbackTimeout = setTimeout(() => {
      if (!completed.current) {
        console.log('Loading fallback triggered');
        completed.current = true;
        onComplete();
      }
    }, 3000);

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          if (!completed.current) {
            completed.current = true;
            clearTimeout(fallbackTimeout);
            setTimeout(onComplete, 500);
          }
          return 100;
        }

        return Math.min(prev + Math.random() * 8 + 4, 100);
      });
    }, 120);

    return () => {
      clearInterval(interval);
      clearTimeout(fallbackTimeout);
    };
  }, [onComplete]);

  return (
    <motion.div
      className="fixed inset-0 bg-black z-[9999] flex flex-col items-center justify-center"
      initial={{ opacity: 1 }}
      animate={{ opacity: progress >= 100 ? 0 : 1 }}
      transition={{ duration: 0.6 }}
      style={{ display: progress >= 100 ? 'none' : 'flex' }}
    >
      {/* Chip Animation */}
      <motion.div
        className="w-32 h-32 mb-8 relative"
        animate={{ rotate: 360 }}
        transition={{ duration: 2.5, repeat: Infinity, ease: 'linear' }}
      >
        <Cpu className="w-full h-full text-cyan-400 neon-glow" />

        {/* Pulsing ring */}
        <motion.div
          className="absolute inset-0 rounded-full border-4 border-cyan-400/40"
          animate={{ scale: [1, 1.2, 1], opacity: [0.4, 0.8, 0.4] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        />
      </motion.div>

      {/* Title */}
      <motion.div
        className="text-4xl font-bold mb-8 text-cyan-400"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
      >
        <span style={{ fontFamily: 'Orbitron, sans-serif', letterSpacing: '0.1em' }}>BHARATH G ⚡</span>
      </motion.div>

      {/* Progress Bar */}
      <div className="w-64 bg-gray-800 rounded-full h-2 overflow-hidden">
        <motion.div
          className="h-full bg-gradient-to-r from-cyan-400 to-emerald-400 rounded-full"
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.25, ease: 'easeOut' }}
        />
      </div>

      {/* Status */}
      <motion.div
        className="text-sm text-gray-400 mt-4 flex items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
      >
        <Activity className="w-4 h-4 animate-spin" />
        Initializing Embedded Profile...
      </motion.div>
    </motion.div>
  );
};

export default LoadingScreen;
