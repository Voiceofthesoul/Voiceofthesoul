import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { portfolioData } from '../data/portfolio';

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  const categories = {
    all: 'All',
    languages: 'Languages',
    frontend: 'Frontend',
    backend: 'Backend',
    tools: 'Tools & Others'
  };

  const getAllSkills = () => {
    if (activeCategory === 'all') {
      return [
        ...portfolioData.skills.languages.map(skill => ({ name: skill, category: 'languages' })),
        ...portfolioData.skills.frontend.map(skill => ({ name: skill, category: 'frontend' })),
        ...portfolioData.skills.backend.map(skill => ({ name: skill, category: 'backend' })),
        ...portfolioData.skills.tools.map(skill => ({ name: skill, category: 'tools' }))
      ];
    }
    return portfolioData.skills[activeCategory].map(skill => ({ 
      name: skill, 
      category: activeCategory 
    }));
  };

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Tech Stack
            </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Proficient in modern technologies and frameworks, continuously expanding my skill set
          </p>
        </motion.div>

        <div className="flex justify-center gap-2 mb-8 flex-wrap">
          {Object.entries(categories).map(([key, label]) => (
            <button
              key={key}
              onClick={() => setActiveCategory(key)}
              className={`px-6 py-2 rounded-full font-medium transition-all ${
                activeCategory === key
                  ? 'bg-gradient-to-r from-primary to-secondary text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
            >
              {label}
            </button>
          ))}
        </div>

        <motion.div 
          layout
          className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4"
        >
          {getAllSkills().map((skill, index) => (
            <motion.div
              key={skill.name}
              layout
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              whileHover={{ y: -5 }}
              className="bg-white p-4 rounded-lg shadow-md hover:shadow-xl transition-all text-center"
            >
              <div className="text-3xl mb-2">
                {skill.category === 'languages' && '💻'}
                {skill.category === 'frontend' && '🎨'}
                {skill.category === 'backend' && '⚙️'}
                {skill.category === 'tools' && '🛠️'}
              </div>
              <p className="font-semibold text-gray-800">{skill.name}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;