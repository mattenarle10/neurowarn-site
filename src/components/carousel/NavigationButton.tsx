"use client";
import { motion } from 'framer-motion';

interface NavigationButtonProps {
  direction: 'prev' | 'next';
  onClick: () => void;
}

export default function NavigationButton({ direction, onClick }: NavigationButtonProps) {
  return (
    <motion.button
      onClick={onClick}
      className={`absolute top-1/2 -translate-y-1/2 ${direction === 'prev' ? '-left-8' : '-right-8'} 
                  z-30 w-16 h-16 flex items-center justify-center group`}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      initial={{ opacity: 0, x: direction === 'prev' ? -20 : 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ 
        duration: 0.4,
        type: "spring",
        stiffness: 300
      }}
    >
      {/* Futuristic button design */}
      <div className="relative">
        {/* Outer glow effect */}
        <motion.div 
          className="absolute inset-0 rounded-full bg-primary/20 blur-md"
          initial={{ scale: 0.8, opacity: 0.5 }}
          animate={{ scale: [0.8, 1.1, 0.8], opacity: [0.5, 0.8, 0.5] }}
          transition={{ 
            repeat: Infinity, 
            duration: 3,
            ease: "easeInOut"
          }}
        />
        
        {/* Button background with gradient */}
        <div className="relative w-14 h-14 rounded-full bg-gradient-to-br from-white to-gray-100 
                      flex items-center justify-center shadow-lg border border-gray-100
                      group-hover:shadow-primary/20 group-hover:border-primary/50 transition-all duration-300">
          
          {/* Inner circle */}
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary/90 to-primary/70 
                        flex items-center justify-center shadow-inner">
            
            {/* Arrow icon */}
            {direction === 'prev' ? (
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15 18L9 12L15 6" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            ) : (
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 6L15 12L9 18" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            )}
          </div>
        </div>
        
        {/* Animated lines */}
        <motion.div 
          className={`absolute top-1/2 ${direction === 'prev' ? 'right-12' : 'left-12'} h-px w-4 bg-primary`}
          animate={{ width: [4, 8, 4], opacity: [0.3, 0.7, 0.3] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
        />
        <motion.div 
          className={`absolute top-1/2 ${direction === 'prev' ? 'right-10' : 'left-10'} h-px w-2 bg-primary`}
          animate={{ width: [2, 5, 2], opacity: [0.2, 0.5, 0.2] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut", delay: 0.2 }}
        />
      </div>
    </motion.button>
  );
}
