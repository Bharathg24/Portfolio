import React from 'react';
import { motion } from 'framer-motion';
import { Code, Microchip, Settings } from 'lucide-react';

const skillsData = {
  programming: [
    { name: 'C', icon: 'https://cdn.simpleicons.org/c/22d3ee' },
    { name: 'Python', icon: 'https://cdn.simpleicons.org/python/22d3ee' },
    { name: 'Java', icon: 'https://cdn.simpleicons.org/openjdk/22d3ee' },
    { name: 'Verilog HDL', icon: 'https://cdn.simpleicons.org/verilog/22d3ee' }

  ],
  embedded: [
    { name: 'ARM Cortex-M3 (LPC1768)', icon: 'https://cdn.simpleicons.org/arm/22d3ee' },
    { name: 'Basys3 & PYNQ Z2 (FPGA)', icon: 'https://cdn.simpleicons.org/xilinx/22d3ee' },
    { name: 'ESP32-Microcontroller', icon: 'https://cdn.simpleicons.org/espressif/22d3ee' },
    { name: 'PIC16F877A-Microcontroller', icon: 'https://cdn.simpleicons.org/microchiptechnology/22d3ee' },
    { name: '8051-Microcontroller', icon: 'https://cdn.simpleicons.org/intel/22d3ee' },
    { name: '8086-Microprocessor', icon: 'https://cdn.simpleicons.org/intel/22d3ee' },
  ],
  tools: [
    { name: 'Cadence', icon: 'https://cdn.simpleicons.org/cadence/22d3ee' },
    { name: 'Proteus', icon: 'https://cdn.simpleicons.org/circuitverse/22d3ee' },
    { name: 'ModelSim', icon: 'https://cdn.simpleicons.org/siemens/22d3ee' },
    { name: 'KiCAD', icon: 'https://cdn.simpleicons.org/kicad/22d3ee' },
    { name: 'Keil µVision', icon: 'https://cdn.simpleicons.org/arm/22d3ee' },
    { name: 'MATLAB', icon: 'https://cdn.simpleicons.org/mathworks/22d3ee' },
   
   
  ]
};

const icons = {
  programming: Code,
  embedded: Microchip,
  tools: Settings
};

const categoryLabels = {
  programming: 'Programming',
  embedded: 'Hardware Platforms',
  tools: 'Tools'
};

// Fallback icon component for skills without logos
const SkillIcon = ({ skill }) => {
  const [imageError, setImageError] = React.useState(false);

  if (skill.icon && !imageError) {
    return (
      <img 
        src={skill.icon} 
        alt={skill.name} 
        className="w-8 h-8 object-contain"
        onError={() => setImageError(true)}
      />
    );
  }
  return (
    <span className="text-cyan-400 font-bold text-lg">
      {skill.name.charAt(0)}
    </span>
  );
};

const Skills = ({ id }) => {
  return (
    <section id={id} className="section py-20">
      <h2 className="h2 text-center mb-16">Technical Expertise</h2>

      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {Object.entries(skillsData).map(([category, skills], i) => {
          const Icon = icons[category];

          return (
            <motion.div
              key={category}
              className="card"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
            >
              <Icon className="w-10 h-10 text-cyan-400 mx-auto mb-6" />
              <h3 className="text-xl text-cyan-400 mb-6 text-center">{categoryLabels[category] || category}</h3>

              {skills.map((skill, skillIndex) => (
                <motion.div 
                  key={skill.name} 
                  className="flex items-center gap-4 p-3 rounded-lg hover:bg-cyan-500/10 transition-all group"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: skillIndex * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="w-12 h-12 flex items-center justify-center bg-gray-800/50 rounded-lg group-hover:bg-cyan-500/20 transition-colors">
                    <SkillIcon skill={skill} />
                  </div>
                  <span className="text-gray-300 group-hover:text-cyan-400 transition-colors font-medium">
                    {skill.name}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default Skills;
