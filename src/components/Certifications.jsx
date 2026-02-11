import React from 'react';
import { motion } from 'framer-motion';
import { Award, CheckCircle } from 'lucide-react';

const certificationsData = [
  {
    title: 'AWS Certified IoT Developer',
    issuer: 'Amazon Web Services',
    date: '2025',
    skills: ['IoT Core', 'AWS Lambda', 'Device Management'],
  },
  {
    title: 'Embedded Systems Certification',
    issuer: 'Coursera',
    date: '2024',
    skills: ['ARM Cortex', 'RTOS', 'Bare Metal'],
  },
  {
    title: 'PCB Design Professional',
    issuer: 'Altium',
    date: '2024',
    skills: ['KiCAD', 'Eagle', 'Circuit Design'],
  },
  {
    title: 'TensorFlow Developer Certificate',
    issuer: 'Google',
    date: '2024',
    skills: ['Machine Learning', 'Neural Networks', 'TensorFlow'],
  },
];

const Certifications = ({ id }) => {
  return (
    <section id={id} className="section py-20">
      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="h2">Certifications & Achievements</h2>
        <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-emerald-400 mx-auto mt-4 rounded-full" />
      </motion.div>

      <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
        {certificationsData.map((cert, index) => (
          <motion.div
            key={cert.title}
            className="card group"
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ scale: 1.03 }}
          >
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-gradient-to-br from-cyan-500/20 to-emerald-500/20 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                <Award className="w-6 h-6 text-cyan-400" />
              </div>

              <div>
                <h3 className="text-xl font-bold mb-2 text-white group-hover:text-cyan-400 transition-colors">
                  {cert.title}
                </h3>

                <p className="text-gray-400 text-sm mb-3">
                  {cert.issuer} • {cert.date}
                </p>

                <div className="flex flex-wrap gap-2">
                  {cert.skills.map(skill => (
                    <span
                      key={skill}
                      className="px-2 py-1 text-xs bg-emerald-500/10 text-emerald-400 rounded border border-emerald-500/30 flex items-center gap-1"
                    >
                      <CheckCircle className="w-3 h-3" />
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Certifications;
