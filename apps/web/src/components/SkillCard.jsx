
import React from 'react';
import { motion } from 'framer-motion';

function SkillCard({ icon: Icon, name, description }) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="group relative p-6 rounded-lg bg-[#457B9D] border border-[#A8DADC]/30 hover:bg-[#A8DADC] transition-all duration-300 cursor-pointer shadow-lg"
      style={{
        boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
      }}
    >
      <div className="flex flex-col items-center text-center space-y-4">
        <div className="p-4 rounded-full bg-[#A8DADC]/20 group-hover:bg-[#E63946] transition-all duration-300">
          <Icon className="w-8 h-8 text-[#F1FAEE] group-hover:text-[#F1FAEE] transition-colors duration-300" />
        </div>
        <h3 className="text-xl font-bold text-[#F1FAEE] group-hover:text-[#457B9D] transition-colors duration-300">
          {name}
        </h3>
        <p className="text-sm text-[#F1FAEE]/80 group-hover:text-[#457B9D]/80 transition-colors duration-300">
          {description}
        </p>
      </div>
    </motion.div>
  );
}

export default SkillCard;
