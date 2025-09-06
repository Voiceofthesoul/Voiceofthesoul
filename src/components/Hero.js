import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolio';

const Hero = () => {
  const [typingText, setTypingText] = useState('');
  const roles = ['Full Stack Developer', 'Data Engineer', 'Problem Solver'];
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    let currentIndex = 0;
    const currentRole = roles[roleIndex];
    
    const typingInterval = setInterval(() => {
      if (currentIndex <= currentRole.length) {
        setTypingText(currentRole.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(typingInterval);
        setTimeout(() => {
          setRoleIndex((prev) => (prev + 1) % roles.length);
        }, 2000);
      }
    }, 100);

    return () => clearInterval(typingInterval);
  }, [roleIndex]);

  return (
    <section id="home" className="min-h-screen flex items-center pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            Hi, I'm{' '}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              {portfolioData.personal.name}
            </span>
          </h1>
          
          <div className="text-2xl md:text-3xl text-gray-600 mb-6 h-10">
            {typingText}
            <span className="animate-pulse">|</span>
          </div>
          
          <p className="text-lg text-gray-600 mb-8">
            Transforming ideas into elegant digital solutions. Currently engineering 
            innovative systems at Vertiv while pursuing Computer Science at Tec de Monterrey.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <motion.a
              href="#contact"
              className="px-8 py-3 bg-gradient-to-r from-primary to-secondary text-white rounded-full font-semibold hover:shadow-xl transition-shadow"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get In Touch
            </motion.a>
            <motion.a
              href="#projects"
              className="px-8 py-3 border-2 border-primary text-primary rounded-full font-semibold hover:bg-primary hover:text-white transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View Projects
            </motion.a>
          </div>

          <div className="grid grid-cols-3 gap-8">
            <div>
              <span className="text-3xl font-bold text-primary">5+</span>
              <p className="text-gray-600">Years Experience</p>
            </div>
            <div>
              <span className="text-3xl font-bold text-primary">10+</span>
              <p className="text-gray-600">Projects Completed</p>
            </div>
            <div>
              <span className="text-3xl font-bold text-primary">4+</span>
              <p className="text-gray-600">Technologies</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="relative"
        >
          <div className="bg-gradient-to-r from-primary to-secondary rounded-lg p-6 text-white">
            <div className="flex gap-2 mb-4">
              <div className="w-3 h-3 bg-red-500 rounded-full"></div>
              <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            </div>
            <pre className="text-sm overflow-x-auto">
              <code>{`const developer = {
  name: "Emiliano Sánchez",
  location: "Monterrey, México",
  languages: ["Python", "JavaScript", "C++"],
  interests: ["AI", "VR", "Data"],
  currentlyLearning: "Cloud Architecture"
};`}</code>
            </pre>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;