import React from 'react';
import { motion } from 'framer-motion';
import { Code, Microchip, Settings } from 'lucide-react';

const skillsData = {
  programming: [
    { name: 'C/C++', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg' },
    { name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
    { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
    { name: 'Java', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg' }
  ],
  embedded: [
    { name: 'ESP32', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/arduino/arduino-original.svg' },
    { name: 'Arduino', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/arduino/arduino-original.svg' },
    { name: 'STM32', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/embeddedc/embeddedc-original.svg' },
    { name: 'Sensors', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/raspberrypi/raspberrypi-original.svg' }
  ],
  tools: [
    { name: 'MATLAB', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/matlab/matlab-original.svg' },
    { name: 'Proteus', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/circuit/circuit-original.svg' },
    { name: 'Git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
    { name: 'KiCAD', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kicad/kicad-original.svg' }
  ]
};

const icons = {
  programming: Code,
  embedded: Microchip,
  tools: Settings
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
              <h3 className="text-xl text-cyan-400 mb-6 capitalize text-center">{category}</h3>

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
