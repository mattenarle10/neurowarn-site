"use client";
import { motion } from 'framer-motion';
import { CarouselSlide } from '@/types/carousel';

interface SlideIndicatorsProps {
  slides: CarouselSlide[];
  currentIndex: number;
  setCurrentIndex: React.Dispatch<React.SetStateAction<number>>;
}

export default function SlideIndicators({ slides, currentIndex, setCurrentIndex }: SlideIndicatorsProps) {
  return (
    <div className="flex justify-center space-x-4 mt-6">
      {slides.map((slide: CarouselSlide, index: number) => (
        <motion.button
          key={slide.id}
          onClick={() => setCurrentIndex(index)}
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
          className="relative group"
        >
          {/* Active indicator has animated ring */}
          {index === currentIndex && (
            <motion.div 
              className="absolute inset-0 rounded-full border-2 border-primary"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ 
                scale: [0.8, 1.2, 0.8], 
                opacity: 1 
              }}
              transition={{ 
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          )}
          
          {/* Base indicator */}
          <motion.div 
            className={`w-3 h-3 rounded-full ${
              index === currentIndex 
                ? 'bg-primary' 
                : 'bg-gray-300 group-hover:bg-gray-400'
            } transition-colors duration-200`}
            animate={{ 
              scale: index === currentIndex ? 1.2 : 1,
              backgroundColor: index === currentIndex ? '#c53735' : '#d1d5db'
            }}
            transition={{ duration: 0.3 }}
          />
          
          {/* Slide number on hover */}
          <motion.div
            className="absolute -top-8 left-1/2 -translate-x-1/2 bg-black/70 text-white text-xs rounded px-2 py-1"
            initial={{ opacity: 0, y: 10 }}
            whileHover={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2 }}
          >
            {index + 1}
          </motion.div>
        </motion.button>
      ))}
    </div>
  );
}
