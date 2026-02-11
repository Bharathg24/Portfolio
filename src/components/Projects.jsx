import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Zap } from 'lucide-react';

const projectsData = [
  {
    title: 'IoT Home Automation',
    description:
      'ESP32-based smart home system with mobile app control, voice commands, and energy monitoring.',
    tech: ['ESP32', 'MQTT', 'React Native', 'Firebase'],
    github: '#',
    demo: '#',
  },
  {
    title: 'Health Monitoring Wearable',
    description:
      'Wearable device for real-time heart rate, SpO2, and temperature monitoring with cloud analytics.',
    tech: ['Arduino', 'Bluetooth', 'Python', 'Machine Learning'],
    github: '#',
    demo: '#',
  },
  {
    title: 'Smart Traffic System',
    description:
      'AI-powered traffic management system using computer vision and adaptive signal control.',
    tech: ['Raspberry Pi', 'OpenCV', 'TensorFlow', 'MQTT'],
    github: '#',
    demo: '#',
  },
  {
    title: 'Industrial Automation Dashboard',
    description:
      'Real-time monitoring dashboard for industrial sensors with predictive maintenance alerts.',
    tech: ['STM32', 'Modbus', 'React', 'Node.js'],
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
            className="card group"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ y: -8 }}
          >
            {/* Header */}
            <div className="flex items-start justify-between mb-4">
              <Zap className="w-12 h-12 text-cyan-400 neon-glow" />

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
