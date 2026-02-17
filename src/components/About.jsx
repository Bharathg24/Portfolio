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
  
];

const About = ({ id }) => {
  return (
    <section id={id} className="section py-20">
      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="h2">About Me</h2>
        <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-emerald-400 mx-auto mt-4 rounded-full" />
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-12">
        {/* Left Side - About Content */}
        <motion.div
          className="card p-8"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="space-y-6 text-lg text-gray-300 leading-relaxed">
            <p>
              I'm an Electronics and Communication Engineering student passionate about embedded systems, VLSI design, and digital electronics. I love building hardware solutions using microcontrollers and programmable devices.
            </p>

            <p>
              I specialize in ARM Cortex-based systems, FPGA design with Verilog HDL, and microprocessor architecture. I have practical experience with various microcontrollers including LPC1768, ESP32, PIC16F877A, 8051, and 8086.
            </p>

            <p>
              My skills include embedded C programming, hardware interfacing, and communication protocols like UART, I2C, and SPI. I work with tools such as ModelSim, Keil µVision, and Proteus for development and simulation.
            </p>

            <p>
              I'm focused on real-time systems, firmware development, and optimizing hardware for better performance and efficiency. My goal is to contribute to innovative embedded systems and semiconductor technologies.
            </p>

          </div>
        </motion.div>

        {/* Right Side - Education Timeline */}
        <motion.div
          className="relative"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-2xl text-cyan-400 font-bold mb-8 text-center md:text-left">Education</h3>

          <div className="relative mt-10">
            {/* Timeline Line (center of education column) */}
            <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-400 via-emerald-400 to-cyan-400 transform -translate-x-1/2 hidden md:block"></div>
            {/* Mobile line */}
            <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-400 via-emerald-400 to-cyan-400 md:hidden"></div>

            <div className="space-y-10">
              {educationData.map((edu, index) => {
                const isLeft = index % 2 === 0;
                return (
                  <motion.div
                    key={index}
                    className="relative"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.12 }}
                  >
                    {/* Timeline Dot */}
                    <div className="absolute left-6 md:left-1/2 top-8 w-4 h-4 bg-cyan-400 rounded-full border-4 border-gray-900 transform -translate-x-1/2 z-10 shadow-lg shadow-cyan-400/50">
                      <div className="absolute inset-0 bg-cyan-400 rounded-full animate-ping opacity-60"></div>
                    </div>

                    {/* Content Row */}
                    <div className="md:flex md:items-start md:justify-between">
                      {/* Left Card (desktop) / Stacked (mobile) */}
                      <div className={`hidden md:block md:w-[46%] ${isLeft ? 'md:pr-10' : 'md:pr-10 md:opacity-0 md:pointer-events-none'}`}>
                        {isLeft && (
                          <motion.div
                            className="card p-5 group ml-12 md:ml-0"
                            whileHover={{ y: -4 }}
                            transition={{ duration: 0.25 }}
                          >
                            <div className="flex items-start gap-3 mb-3">
                              <div className="w-10 h-10 bg-gradient-to-br from-cyan-500/20 to-emerald-500/20 rounded-lg flex items-center justify-center transition-transform group-hover:scale-110">
                                <GraduationCap className="w-5 h-5 text-cyan-400" />
                              </div>
                              <div className="flex-1">
                                <h4 className="text-lg font-bold text-white mb-1 transition-colors group-hover:text-cyan-400">
                                  {edu.degree}
                                </h4>
                                <p className="text-cyan-400 font-semibold text-sm mb-1">{edu.field}</p>
                              </div>
                            </div>

                            <p className="text-white font-medium text-sm mb-1">{edu.institution}</p>
                            <p className="text-gray-400 text-xs mb-2">{edu.location}</p>

                            <div className="flex items-center gap-2 mb-2 text-emerald-400">
                              <Calendar className="w-3 h-3" />
                              <span className="text-xs font-medium">{edu.year}</span>
                            </div>

                            <p className="text-gray-300 text-xs mb-2 leading-relaxed">{edu.description}</p>

                            <div className="pt-2 border-t border-gray-700">
                              <span className="text-emerald-400 font-semibold text-xs">{edu.gpa}</span>
                            </div>
                          </motion.div>
                        )}
                      </div>

                      {/* Right Card */}
                      <div className={`hidden md:block md:w-[46%] ${!isLeft ? 'md:pl-10' : 'md:pl-10 md:opacity-0 md:pointer-events-none'}`}>
                        {!isLeft && (
                          <motion.div
                            className="card p-5 group ml-12 md:ml-0"
                            whileHover={{ y: -4 }}
                            transition={{ duration: 0.25 }}
                          >
                            <div className="flex items-start gap-3 mb-3">
                              <div className="w-10 h-10 bg-gradient-to-br from-cyan-500/20 to-emerald-500/20 rounded-lg flex items-center justify-center transition-transform group-hover:scale-110">
                                <GraduationCap className="w-5 h-5 text-cyan-400" />
                              </div>
                              <div className="flex-1">
                                <h4 className="text-lg font-bold text-white mb-1 transition-colors group-hover:text-cyan-400">
                                  {edu.degree}
                                </h4>
                                <p className="text-cyan-400 font-semibold text-sm mb-1">{edu.field}</p>
                              </div>
                            </div>

                            <p className="text-white font-medium text-sm mb-1">{edu.institution}</p>
                            <p className="text-gray-400 text-xs mb-2">{edu.location}</p>

                            <div className="flex items-center gap-2 mb-2 text-emerald-400">
                              <Calendar className="w-3 h-3" />
                              <span className="text-xs font-medium">{edu.year}</span>
                            </div>

                            <p className="text-gray-300 text-xs mb-2 leading-relaxed">{edu.description}</p>

                            <div className="pt-2 border-t border-gray-700">
                              <span className="text-emerald-400 font-semibold text-xs">{edu.gpa}</span>
                            </div>
                          </motion.div>
                        )}
                      </div>

                      {/* Mobile card fallback (always visible on mobile) */}
                      <div className="md:hidden ml-12">
                        <motion.div className="card p-5 group" whileHover={{ y: -2 }} transition={{ duration: 0.2 }}>
                          <div className="flex items-start gap-3 mb-3">
                            <div className="w-10 h-10 bg-gradient-to-br from-cyan-500/20 to-emerald-500/20 rounded-lg flex items-center justify-center">
                              <GraduationCap className="w-5 h-5 text-cyan-400" />
                            </div>
                            <div className="flex-1">
                              <h4 className="text-lg font-bold text-white mb-1">{edu.degree}</h4>
                              <p className="text-cyan-400 font-semibold text-sm mb-1">{edu.field}</p>
                            </div>
                          </div>
                          <p className="text-white font-medium text-sm mb-1">{edu.institution}</p>
                          <p className="text-gray-400 text-xs mb-2">{edu.location}</p>
                          <div className="flex items-center gap-2 mb-2 text-emerald-400">
                            <Calendar className="w-3 h-3" />
                            <span className="text-xs font-medium">{edu.year}</span>
                          </div>
                          <p className="text-gray-300 text-xs mb-2 leading-relaxed">{edu.description}</p>
                          <div className="pt-2 border-t border-gray-700">
                            <span className="text-emerald-400 font-semibold text-xs">{edu.gpa}</span>
                          </div>
                        </motion.div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;