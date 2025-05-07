"use client";
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { CarouselSlide } from '@/types/carousel';
import SlideIndicators from './SlideIndicators';

// 3D Card variants
const cardVariants = {
  active: { 
    scale: 1,
    opacity: 1,
    rotateY: 0,
    z: 50,
    x: 0,
    transition: { 
      type: "spring",
      stiffness: 300,
      damping: 20,
      duration: 0.4
    }
  },
  previous: { 
    scale: 0.85,
    opacity: 0.6,
    rotateY: 15,
    z: -50,
    x: "-35%",
    transition: { 
      type: "spring",
      stiffness: 300,
      damping: 30,
      duration: 0.4
    }
  },
  next: { 
    scale: 0.85,
    opacity: 0.6,
    rotateY: -15,
    z: -50,
    x: "35%",
    transition: { 
      type: "spring",
      stiffness: 300,
      damping: 30,
      duration: 0.4
    }
  },
  hidden: { 
    scale: 0.7,
    opacity: 0,
    z: -100,
    x: "70%",
    transition: { 
      duration: 0.3
    }
  },
  hiddenLeft: { 
    scale: 0.7,
    opacity: 0,
    z: -100,
    x: "-70%",
    transition: { 
      duration: 0.3
    }
  }
};

// Description card variants
const descriptionVariants = {
  hidden: { 
    opacity: 0, 
    y: 20,
    transition: { duration: 0.2 }
  },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { 
      duration: 0.4,
      delay: 0.2
    }
  }
};

interface Carousel3DProps {
  slides: CarouselSlide[];
  currentSlide: number;
  setCurrentSlide: React.Dispatch<React.SetStateAction<number>>;
}

export default function Carousel3D({ slides, currentSlide, setCurrentSlide }: Carousel3DProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  
  // Get card state based on its position relative to current slide
  const getCardState = (index: number) => {
    if (index === currentSlide) return "active";
    if (index === getPrevIndex(currentSlide)) return "previous";
    if (index === getNextIndex(currentSlide)) return "next";
    if (index < currentSlide) return "hiddenLeft";
    return "hidden";
  };
  
  // Get previous slide index with wraparound
  const getPrevIndex = (current: number) => {
    return current === 0 ? slides.length - 1 : current - 1;
  };
  
  // Get next slide index with wraparound
  const getNextIndex = (current: number) => {
    return current === slides.length - 1 ? 0 : current + 1;
  };
  
  // Handle slide navigation
  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };
  
  // Handle touch events for mobile swipe
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };
  
  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };
  
  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;
    
    if (isLeftSwipe) {
      goToSlide(getNextIndex(currentSlide));
    } else if (isRightSwipe) {
      goToSlide(getPrevIndex(currentSlide));
    }
    
    setTouchStart(null);
    setTouchEnd(null);
  };
  
  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') {
        goToSlide(getPrevIndex(currentSlide));
      } else if (e.key === 'ArrowRight') {
        goToSlide(getNextIndex(currentSlide));
      }
    };
    
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [currentSlide]);

  return (
    <div className="w-full max-w-6xl mx-auto">
      {/* 3D Carousel Container */}
      <div 
        ref={containerRef}
        className="relative perspective-1200 w-full h-[350px] mx-auto mb-8"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {/* Cards */}
        {slides.map((slide, index) => (
          <motion.div 
            key={slide.id}
            className="absolute top-0 left-0 right-0 mx-auto w-[65%] h-full cursor-pointer preserve-3d"
            onClick={() => goToSlide(index)}
            variants={cardVariants}
            initial="hidden"
            animate={getCardState(index)}
            style={{
              transformStyle: "preserve-3d",
              transformOrigin: "center center",
              zIndex: index === currentSlide ? 10 : (index === getPrevIndex(currentSlide) || index === getNextIndex(currentSlide)) ? 5 : 0
            }}
          >
            {/* Card Content */}
            <div className="bg-white rounded-2xl shadow-xl w-full h-full overflow-hidden border border-gray-100">
              {/* Card Header - Sleeker design */}
              <div className="flex justify-between items-center px-4 py-2 bg-gradient-to-r from-gray-50 to-white border-b border-gray-100">
                <div className="flex items-center space-x-1">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                  <div className="w-1.5 h-1.5 rounded-full bg-secondary"></div>
                  <div className="w-1.5 h-1.5 rounded-full bg-black"></div>
                </div>
                <div className="text-xs font-medium bg-gradient-to-r from-primary/80 to-primary bg-clip-text text-transparent" style={{fontFamily: 'var(--font-gotham)'}}>
                  NEUROWARN
                </div>
              </div>
              
              {/* Card Image - With border radius */}
              <div className="relative w-full h-[calc(100%-40px)] p-3">
                <div className="w-full h-full rounded-xl overflow-hidden">
                  <Image 
                    src={slide.image} 
                    alt={slide.alt} 
                    fill
                    className="object-contain"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    priority={index === 0}
                    style={{ borderRadius: '12px' }}
                  />
                </div>
              </div>
              
              {/* Card Title - Sleeker design */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-r from-black/70 to-black/50 backdrop-blur-sm py-2 px-4">
                <h3 className="text-sm font-medium text-white tracking-wide" style={{fontFamily: 'var(--font-gotham)'}}>
                  {slide.title}
                </h3>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
      
      {/* Description Card (separate from carousel) - Sleeker design */}
      <motion.div 
        className="bg-gradient-to-br from-white to-gray-50 rounded-xl shadow-lg p-6 max-w-2xl mx-auto mb-6 border border-gray-100"
        variants={descriptionVariants}
        initial="hidden"
        animate="visible"
        key={`desc-${currentSlide}`}
      >
        <div className="flex items-center mb-3">
          <div className="w-1 h-6 bg-primary rounded-full mr-3"></div>
          <h3 className="text-xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent" style={{fontFamily: 'var(--font-gotham)', letterSpacing: '-0.02em'}}>
            {slides[currentSlide].title}
          </h3>
        </div>
        <p className="text-gray-700 leading-relaxed pl-4 border-l border-gray-200" style={{fontFamily: 'var(--font-gotham)', fontWeight: 300}}>
          {slides[currentSlide].description}
        </p>
      </motion.div>
      
      {/* Carousel indicators */}
      <SlideIndicators 
        slides={slides} 
        currentIndex={currentSlide} 
        setCurrentIndex={setCurrentSlide} 
      />
    </div>
  );
}
