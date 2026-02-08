
import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

function ProjectCard({ title, description, tools, link }) {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="group relative p-6 rounded-lg bg-[#457B9D] border border-[#A8DADC]/30 hover:border-[#A8DADC] transition-all duration-300 shadow-lg"
      style={{
        boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.boxShadow = '0 10px 15px -3px rgba(168, 218, 220, 0.3)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1)';
      }}
    >
      <div className="space-y-4">
        <div className="flex items-start justify-between">
          <h3 className="text-2xl font-bold text-[#F1FAEE] group-hover:text-[#A8DADC] transition-colors duration-300">
            {title}
          </h3>
          {link && (
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-[#E63946] hover:bg-[#A8DADC] transition-colors duration-300"
            >
              <ExternalLink className="w-5 h-5 text-[#F1FAEE] group-hover:text-[#457B9D]" />
            </a>
          )}
        </div>
        
        <p className="text-[#F1FAEE]/90 leading-relaxed">
          {description}
        </p>

        <div className="flex flex-wrap gap-2">
          {tools.map((tool, index) => (
            <span
              key={index}
              className="px-3 py-1 text-sm rounded-full border border-[#A8DADC]/40 text-[#A8DADC] bg-[#457B9D]/50"
            >
              {tool}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default ProjectCard;
