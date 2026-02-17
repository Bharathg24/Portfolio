import React from 'react';
import { motion } from 'framer-motion';
import { Award, CheckCircle } from 'lucide-react';
import aiFoundationImg from '../assets/AI Foundation.png';
import ssitImg from '../assets/SSIT.jpg';

const certificationsData = [
  
   {
    title: 'SSIT Certification',
    issuer: 'SSIT',
    date: '2025',
    description: 'Professional development certification focused on technical skills, software engineering practices, and industry-standard methodologies for modern technology solutions.',
    skills: ['Technical Skills', 'Professional Development'],
    image: ssitImg,
  },
  {
    title: 'AI Foundation',
    issuer: 'AI Foundation',
    date: '2025',
    description: 'Comprehensive certification covering fundamental concepts of Artificial Intelligence, including machine learning algorithms, neural networks, and deep learning frameworks.',
    skills: ['Artificial Intelligence', 'Machine Learning', 'Deep Learning'],
    image: aiFoundationImg,
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

      <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto px-4">
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
            {cert.image ? (
              <div className="mb-4">
                <img 
                  src={cert.image} 
                  alt={`${cert.title} certification issued by ${cert.issuer}`} 
                  className="w-full h-64 object-contain bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-lg border-2 border-cyan-400/30 group-hover:border-cyan-400/60 transition-colors p-4"
                  loading="lazy"
                />
              </div>
            ) : null}
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-gradient-to-br from-cyan-500/20 to-emerald-500/20 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform flex-shrink-0">
                <Award className="w-6 h-6 text-cyan-400" />
              </div>

              <div className="flex-1">
                <h3 className="text-xl font-bold mb-2 text-white group-hover:text-cyan-400 transition-colors">
                  {cert.title}
                </h3>

                <p className="text-gray-400 text-sm mb-3">
                  {cert.issuer} • {cert.date}
                </p>

                {cert.description && (
                  <p className="text-gray-300 text-sm mb-3 line-clamp-2">
                    {cert.description}
                  </p>
                )}

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
