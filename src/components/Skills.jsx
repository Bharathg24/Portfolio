import React from 'react';
import { motion } from 'framer-motion';
import { Code, Microchip, Settings } from 'lucide-react';

const skillsData = {
  programming: [
    { name: 'C', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg', color: '#A8B9CC' },
    { name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg', color: '#3776AB' },
    { name: 'Java', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg', color: '#007396' },
    { name: 'Verilog HDL', icon: 'https://cdn.simpleicons.org/verilog/10B981', color: '#10B981' }
  ],
  embedded: [
    { name: 'ARM Cortex-M3 (LPC1768)', icon: 'https://cdn.simpleicons.org/arm/00BED6', color: '#00BED6' },
    { name: 'Basys3 & PYNQ Z2 (FPGA)', icon: 'https://cdn.simpleicons.org/xilinx/E01F27', color: '#E01F27' },
    { name: 'ESP32-Microcontroller', icon: 'https://cdn.simpleicons.org/espressif/E7352C', color: '#E7352C' },
    { name: 'PIC16F877A-Microcontroller', icon: 'https://cdn.simpleicons.org/microchip/EE3233', color: '#EE3233' },
    { name: '8051-Microcontroller', icon: 'https://cdn.simpleicons.org/intel/0071C5', color: '#0071C5' },
    { name: '8086-Microprocessor', icon: 'https://cdn.simpleicons.org/intel/0071C5', color: '#0071C5' },
  ],
  tools: [
    { name: 'Cadence', icon: 'https://cdn.simpleicons.org/cadence/FF0000', color: '#FF0000' },
    { name: 'Proteus', icon: 'https://cdn.simpleicons.org/proteusbiomedical/22D3EE', color: '#22D3EE' },
    { name: 'ModelSim', icon: 'https://cdn.simpleicons.org/intel/0071C5', color: '#0071C5' },
    { name: 'KiCAD', icon: 'https://cdn.simpleicons.org/kicad/314CB0', color: '#314CB0' },
    { name: 'Keil µVision', icon: 'https://cdn.simpleicons.org/arm/00BED6', color: '#00BED6' },
    { name: 'MATLAB', icon: 'https://cdn.simpleicons.org/mathworks/0076A8', color: '#0076A8' },
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

// Professional icon component with better styling
const SkillIcon = ({ skill }) => {
  const [imageError, setImageError] = React.useState(false);

  if (skill.icon && !imageError) {
    return (
      <img 
        src={skill.icon} 
        alt={skill.name} 
        className="w-10 h-10 object-contain transition-transform duration-300 group-hover:scale-110"
        onError={() => setImageError(true)}
        loading="lazy"
      />
    );
  }
  return (
    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-cyan-500 to-emerald-500 flex items-center justify-center">
      <span className="text-white font-bold text-xl">
        {skill.name.charAt(0)}
      </span>
    </div>
  );
};

const Skills = ({ id }) => {
  return (
    <section id={id} className="section py-20">
      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="h2">Technical Expertise</h2>
        <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-emerald-400 mx-auto mt-4 rounded-full" />
      </motion.div>

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
                  className="flex items-center gap-4 p-4 rounded-xl hover:bg-gradient-to-r hover:from-cyan-500/10 hover:to-emerald-500/10 transition-all group cursor-pointer border border-transparent hover:border-cyan-500/30"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: skillIndex * 0.08 }}
                  whileHover={{ scale: 1.03, x: 5 }}
                >
                  <div className="w-14 h-14 flex items-center justify-center bg-gray-800/70 rounded-xl group-hover:bg-gray-700/70 transition-all shadow-lg group-hover:shadow-cyan-500/20">
                    <SkillIcon skill={skill} />
                  </div>
                  <span className="text-gray-300 group-hover:text-cyan-400 transition-colors font-medium text-sm">
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
