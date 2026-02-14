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
    gpa: ''
  }
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
              I am an Electronics and Communication Engineering student with a strong foundation in digital electronics,
              circuits and networks, VLSI, and embedded systems. I am passionate about designing efficient hardware-oriented
              solutions by integrating digital logic, microcontrollers, and programmable devices.
            </p>

            <p>
              My technical interests lie in ARM Cortex-based systems, FPGA-based digital design using Verilog HDL, and
              low-level microprocessor architecture.
            </p>

            <p>
              I have hands-on knowledge of ARM Cortex-M3 (LPC1768), ESP32, PIC16F877A, 8051 microcontroller, and 8086
              microprocessor architectures. I am comfortable with embedded C programming, hardware interfacing, and
              communication protocols such as UART, I2C, and SPI. I also have exposure to FPGA implementation, simulation
              tools like ModelSim, and embedded development environments including Keil µVision and Proteus.
            </p>

            <p>
              My academic background has strengthened my understanding of digital system design, semiconductor fundamentals,
              processor architecture, and system-level problem solving. I am highly motivated to build a career in core
              electronics domains such as embedded systems, VLSI design, and hardware development, where I can contribute to
              innovative and scalable engineering solutions.
            </p>

            <p>
              I am particularly interested in real-time system design, efficient firmware development, and optimizing
              hardware performance for reliability and power efficiency. I continuously work on improving my understanding of
              system architecture, interrupt handling, memory management, and peripheral configuration in embedded platforms.
              With a strong analytical mindset and a practical approach to engineering challenges, I aim to contribute
              meaningfully to advanced embedded and semiconductor technologies.
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
                      <div className={`md:w-[46%] ${isLeft ? 'md:pr-10' : 'md:pr-10 md:opacity-0 md:pointer-events-none'}`}>
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
                      <div className={`md:w-[46%] ${!isLeft ? 'md:pl-10' : 'md:pl-10 md:opacity-0 md:pointer-events-none'}`}>
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
