
import React, { useEffect, useState } from 'react';

function AnimatedBackground() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 20;
      const y = (e.clientY / window.innerHeight - 0.5) * 20;
      setMousePosition({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-[#457B9D]">
      {/* Animated grid - Lighter and more subtle */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`,
          transition: 'transform 0.3s ease-out',
          backgroundImage: `
            linear-gradient(to right, #A8DADC 1px, transparent 1px),
            linear-gradient(to bottom, #A8DADC 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
        }}
      />

      {/* Subtle ambient orbs - Reduced opacity for lighter background */}
      <div 
        className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#A8DADC] rounded-full blur-[150px] opacity-20"
        style={{
          transform: `translate(${mousePosition.x * 2}px, ${mousePosition.y * 2}px)`,
          transition: 'transform 0.5s ease-out'
        }}
      />
      <div 
        className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#F1FAEE] rounded-full blur-[150px] opacity-10"
        style={{
          transform: `translate(${-mousePosition.x * 2}px, ${-mousePosition.y * 2}px)`,
          transition: 'transform 0.5s ease-out'
        }}
      />
    </div>
  );
}

export default AnimatedBackground;
