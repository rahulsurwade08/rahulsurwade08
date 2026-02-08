
import React from 'react';
import { motion } from 'framer-motion';
import { Lock, Shield, Code, Cloud, Server } from 'lucide-react';
import AnimatedBackground from './AnimatedBackground.jsx';

function HeroSection() {
  const floatingIcons = [
    { Icon: Lock, delay: 0, x: -100, y: -50 },
    { Icon: Shield, delay: 0.5, x: 100, y: -80 },
    { Icon: Code, delay: 1, x: 0, y: 100 },
    { Icon: Cloud, delay: 1.5, x: 80, y: 60 },
    { Icon: Server, delay: 2, x: -80, y: 80 }
  ];

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#457B9D]">
      <AnimatedBackground />

      {/* Floating animated icons */}
      {floatingIcons.map(({ Icon, delay, x, y }, index) => (
        <motion.div
          key={index}
          className="absolute opacity-20"
          initial={{ x, y }}
          animate={{
            y: [y, y - 20, y],
            rotate: [0, 10, -10, 0]
          }}
          transition={{
            duration: 4,
            delay,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <Icon className="w-24 h-24 text-[#A8DADC]" />
        </motion.div>
      ))}

      {/* Animated scanner line - subtle */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute h-px w-full bg-gradient-to-r from-transparent via-[#A8DADC] to-transparent opacity-40"
          initial={{ top: '0%' }}
          animate={{ top: '100%' }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </div>

      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-6xl md:text-7xl lg:text-8xl font-bold mb-6 text-[#F1FAEE]"
        >
          Rahul Surwade
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="space-y-6"
        >
          <p className="text-2xl md:text-3xl lg:text-4xl text-[#A8DADC] font-medium">
            Cloud Security & DevSecOps Expert
          </p>
          <p className="text-xl md:text-2xl text-[#F1FAEE]/90 font-medium">
            Specializing in Compliance Automation & Cloud Infrastructure Security
          </p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="pt-8"
          >
            <a 
              href="#contact"
              className="inline-block px-8 py-4 rounded-full bg-[#E63946] text-[#F1FAEE] font-bold text-lg hover:bg-[#A8DADC] hover:text-[#457B9D] transition-all duration-300 shadow-lg"
            >
              Get In Touch
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export default HeroSection;
