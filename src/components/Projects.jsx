import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Zap } from 'lucide-react';

const projectsData = [
  {
    title: 'Fabric Defect Detection System',
    description:
      'AI-based system that detects fabric defects in real time using deep learning. Implemented YOLO with PyTorch to identify defects like holes and stains, improving textile quality inspection accuracy and efficiency.',
    tech: ['YOLO', 'PyTorch', 'Deep Learning', 'Computer Vision'],
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop',
    github: '#',
    demo: '#',
  },
  {
    title: 'Smart Home Door Lock System',
    description:
      'Secure door access control system with dual authentication. Uses RFID cards and keypad-based PIN verification with ESP32 to control a solenoid lock, enhancing home security.',
    tech: ['ESP32', 'RFID', 'Keypad', 'Solenoid Lock'],
    image: 'https://images.unsplash.com/photo-1558002038-1055907df827?w=600&h=400&fit=crop',
    github: '#',
    demo: '#',
  },
  {
    title: 'AI-Based Smart Agriculture Monitoring System',
    description:
      'Intelligent monitoring system for precision agriculture. Analyzes environmental and sensor data using AI to monitor crop conditions and support better irrigation and farming decisions.',
    tech: ['AI/ML', 'IoT Sensors', 'Data Analytics', 'Precision Agriculture'],
    image: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=600&h=400&fit=crop',
    github: '#',
    demo: '#',
  },
  {
    title: 'Offline Voice-Activated Home Automation System',
    description:
      'Voice-controlled appliance automation without internet dependency. Uses Seedgrove Voice Recognition Module and ESP32 to control home appliances completely offline, ensuring privacy and reliability.',
    tech: ['ESP32', 'Voice Recognition', 'Offline Processing', 'Home Automation'],
    image: 'https://images.unsplash.com/photo-1558089687-f282ffcbc126?w=600&h=400&fit=crop',
    github: '#',
    demo: '#',
  },
];

const Projects = ({ id }) => {
  return (
    <section id={id} className="section py-20">
      {/* Heading */}
      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <h2 className="h2">Featured Projects</h2>
        <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-emerald-400 mx-auto mt-4 rounded-full" />
      </motion.div>

      {/* Projects Grid */}
      <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {projectsData.map((project, index) => (
          <motion.div
            key={index}
            className="card group overflow-hidden"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ y: -8 }}
          >
            {/* Project Image */}
            <div className="relative overflow-hidden rounded-lg mb-4 h-48">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
            </div>

            {/* Header */}
            <div className="flex items-start justify-between mb-4">
              <Zap className="w-10 h-10 text-cyan-400 neon-glow" />

              <div className="flex gap-3">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-cyan-400 transition-colors"
                >
                  <Github className="w-6 h-6" />
                </a>

                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-emerald-400 transition-colors"
                >
                  <ExternalLink className="w-6 h-6" />
                </a>
              </div>
            </div>

            {/* Content */}
            <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-cyan-400 transition-colors">
              {project.title}
            </h3>

            <p className="text-gray-300 mb-6 leading-relaxed">
              {project.description}
            </p>

            {/* Tech stack */}
            <div className="flex flex-wrap gap-2">
              {project.tech.map((tech, i) => (
                <span
                  key={i}
                  className="px-3 py-1 text-sm bg-cyan-500/10 text-cyan-400 rounded-full border border-cyan-500/30"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
