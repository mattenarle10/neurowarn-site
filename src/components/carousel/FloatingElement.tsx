"use client";
import { motion } from 'framer-motion';
import { FloatingElementProps } from '@/types/carousel';

// Brain-themed floating elements
export default function FloatingElement({ 
  delay, 
  x, 
  y, 
  size, 
  color, 
  duration, 
  rotation, 
  type, 
  opacity 
}: FloatingElementProps) {
  return (
    <motion.div
      className="absolute"
      style={{
        x, y,
        opacity,
        transform: `rotate(${rotation}deg)`,
      }}
      animate={{
        y: [y, y - 20, y],
        x: [x, x + 5, x],
        rotate: [rotation, rotation + 5, rotation],
      }}
      transition={{
        duration,
        repeat: Infinity,
        repeatType: "reverse",
        delay,
        ease: "easeInOut"
      }}
    >
      {type === 'arrow' && (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )}
      {type === 'neuron' && (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="12" cy="12" r="3" stroke={color} strokeWidth="1.5"/>
          <path d="M12 5V9M12 15V19M5 12H9M15 12H19M6.5 6.5L9 9M15 15L17.5 17.5M6.5 17.5L9 15M15 9L17.5 6.5" stroke={color} strokeWidth="1.5" strokeLinecap="round"/>
        </svg>
      )}
      {type === 'wave' && (
        <svg width={size} height={size/3} viewBox="0 0 100 30" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0,15 Q25,0 50,15 T100,15" stroke={color} strokeWidth="1.5" fill="none"/>
        </svg>
      )}
    </motion.div>
  );
}
