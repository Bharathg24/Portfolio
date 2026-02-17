import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Calendar } from 'lucide-react';

const educationData = [
  {
    degree: 'Bachelor of Engineering',
    field: 'Electronics & Communication Engineering',
    institution: 'Kongu Engineering College',
    location: 'Erode, Tamil Nadu',
    year: '2023 - 2027',
    description: 'Specialized in embedded systems, IoT, and VLSI design',
    gpa: 'CGPA: 8.43/10 (till 5th semester)'
  },
  {
    degree: 'Higher Secondary Education',
    field: 'Bio-Maths',
    institution: 'Government Model School',
    location: 'Vellore, Tamil Nadu',
    year: '2021 - 2023',
    description: 'Completed with focus on Physics, Chemistry, and Mathematics.',
    gpa: 'Percentage: 89%'
  },
  {
    degree: 'Secondary Education',
    field: 'General Studies',
    institution: 'Government Boys Higher Secondary School, K.V.Kuppam',
    location: 'Vellore, Tamil Nadu',
    year: '2016 - 2021',
    description: 'Foundation in science and mathematics.',
    gpa: 'Percentage: 92%'
  }
];

const Education = ({ id }) => {
  return (
    <section id={id} className="section py-20">
      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="h2">Educational Timeline</h2>
        <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-emerald-400 mx-auto mt-4 rounded-full" />
      </motion.div>

      <div className="max-w-4xl mx-auto px-4 relative">
        {/* Timeline Line */}
        <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-400 via-emerald-400 to-cyan-400 transform md:-translate-x-1/2"></div>

        {educationData.map((edu, index) => (
          <motion.div
            key={index}
            className={`relative mb-12 flex items-start ${
              index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
            }`}
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2 }}
          >
            {/* Timeline Dot */}
            <div className="absolute left-8 md:left-1/2 w-4 h-4 bg-cyan-400 rounded-full border-4 border-gray-900 transform md:-translate-x-1/2 z-10 shadow-lg shadow-cyan-400/50">
              <div className="absolute inset-0 bg-cyan-400 rounded-full animate-ping opacity-75"></div>
            </div>

            {/* Content Card */}
            <div
              className={`w-full md:w-[45%] ml-16 md:ml-0 ${
                index % 2 === 0 ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'
              }`}
            >
              <motion.div
                className="card p-6 cursor-grow group"
                whileHover={{ scale: 1.02, y: -5 }}
                transition={{ duration: 0.3 }}
              >
                {/* Degree Icon */}
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-cyan-500/20 to-emerald-500/20 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                    <GraduationCap className="w-6 h-6 text-cyan-400" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white mb-1 group-hover:text-cyan-400 transition-colors">
                      {edu.degree}
                    </h3>
                    <p className="text-cyan-400 font-semibold mb-2">{edu.field}</p>
                  </div>
                </div>

                {/* Institution & Location */}
                <div className="mb-3">
                  <p className="text-white font-medium mb-1">{edu.institution}</p>
                  <p className="text-gray-400 text-sm flex items-center gap-2">
                    <span>{edu.location}</span>
                  </p>
                </div>

                {/* Year */}
                <div className="flex items-center gap-2 mb-3 text-emerald-400">
                  <Calendar className="w-4 h-4" />
                  <span className="text-sm font-medium">{edu.year}</span>
                </div>

                {/* Description */}
                <p className="text-gray-300 text-sm mb-3 leading-relaxed">
                  {edu.description}
                </p>

                {/* GPA */}
                <div className="pt-3 border-t border-gray-700">
                  <span className="text-emerald-400 font-semibold text-sm">{edu.gpa}</span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Education;
