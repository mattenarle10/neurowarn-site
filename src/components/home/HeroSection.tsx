"use client";
import { useEffect, useState, useRef } from 'react';
import { CarouselSlide, FloatingElementProps } from '@/types/carousel';
import Carousel3D from '../carousel/Carousel3D';
import FloatingElement from '../carousel/FloatingElement';
import Link from 'next/link';

export default function Hero() {
  const [mounted, setMounted] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const heroRef = useRef<HTMLDivElement>(null);
  
  // Carousel slides data
  const slides: CarouselSlide[] = [
    {
      id: 1,
      image: "/images/neurowarn-interface.png",
      alt: "Neurowarn Interface",
      title: "Neurowarn Interface",
      description: "Recurrent neural network prediction system for EEG-controlled wheelchairs"
    },
    {
      id: 2,
      image: "/images/eeg-interface.webp",
      alt: "Emotiv Insight Headset",
      title: "Emotiv Insight Headset",
      description: "Advanced EEG headset for brain-computer interface control"
    },
    {
      id: 3,
      image: "/images/wheelchair-interface.png",
      alt: "Smart Wheelchair",
      title: "Access Assist Module",
      description: "Smart wheelchair integration with obstacle warning system"
    }
  ];
  
  useEffect(() => {
    setMounted(true);
    
    // Handle mouse move for parallax effect
    const handleMouseMove = (e: MouseEvent) => {
      if (heroRef.current) {
        const { left, top, width, height } = heroRef.current.getBoundingClientRect();
        const x = (e.clientX - left) / width;
        const y = (e.clientY - top) / height;
        setMousePosition({ x, y });
      }
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  // Generate optimized positions for floating elements
  const floatingElements: FloatingElementProps[] = [];
  if (mounted) {    
    // Create more arrows specifically with interactive behavior
    for (let i = 0; i < 8; i++) {
      const x = Math.random() * (typeof window !== 'undefined' ? window.innerWidth * 0.8 : 800);
      const y = Math.random() * (typeof window !== 'undefined' ? window.innerHeight * 0.8 : 600);
      
      floatingElements.push({
        id: i,
        x,
        y,
        size: Math.random() * 15 + 25, // Bigger arrows
        rotation: Math.random() * 360,
        color: "#c53735", // Primary color for arrows
        duration: Math.random() * 4 + 4,
        delay: Math.random() * 2,
        type: 'arrow',
        opacity: 0.15, // More visible
        interactive: true,
        mousePosition
      });
    }
    
    // Add other elements with different behaviors
    for (let i = 0; i < 12; i++) {
      floatingElements.push({
        id: i + 8,
        x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth * 0.8 : 800),
        y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight * 0.8 : 600),
        size: Math.random() * 20 + 15,
        rotation: Math.random() * 360,
        color: i % 2 === 0 ? "#8b8b8b" : "#000000",
        duration: Math.random() * 4 + 4,
        delay: Math.random() * 2,
        type: i % 2 === 0 ? 'neuron' : 'wave',
        opacity: 0.08,
        interactive: i % 3 === 0, // Make some elements interactive
        mousePosition
      });
    }
  }

  return (
    <div ref={heroRef} className="relative min-h-[90vh] flex items-center justify-center pt-20 sm:pt-24 bg-white overflow-hidden">
      {/* Background with subtle gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-white to-gray-50/30 z-0"></div>
      
      {/* Background floating elements */}
      {mounted && floatingElements.map((el) => (
        <FloatingElement
          key={el.id}
          id={el.id}
          x={el.x}
          y={el.y}
          size={el.size}
          rotation={el.rotation}
          color={el.color}
          duration={el.duration}
          delay={el.delay}
          type={el.type}
          opacity={el.opacity}
          interactive={el.interactive}
          mousePosition={mousePosition}
        />
      ))}
      
      <div className="container mx-auto px-4 sm:px-6 py-6 sm:py-8 z-10 flex flex-col items-center justify-center">
        <div className="text-center mb-4 sm:mb-8">
          <h1 
            className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent mb-3 sm:mb-4 tracking-tight leading-tight"
            style={{fontFamily: 'var(--font-gotham)'}}
          >
            Safety Enhancement 
            <br className="inline" />
            for <span className="text-primary">EEG-controlled</span>
            <br className="inline sm:hidden" /> Wheelchairs
          </h1>
          <p 
            className="text-sm sm:text-base text-gray-600 max-w-2xl mx-auto mb-5 sm:mb-6 px-2"
            style={{fontFamily: 'var(--font-gotham)', fontWeight: 300}}
          >
            Neurowarn uses recurrent neural networks to predict potential hazards and provide warnings to users of brain-computer interface wheelchairs
          </p>
          
          {/* Call-to-action buttons */}
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link 
              href="/paper" 
              className="px-5 sm:px-6 py-2.5 sm:py-3 bg-primary hover:bg-primary/90 text-white rounded-lg font-medium transition-all hover:shadow-md transform hover:-translate-y-0.5"
              style={{fontFamily: 'var(--font-gotham)'}}
            >
              View Research Paper
            </Link>
            <Link 
              href="/about" 
              className="px-5 sm:px-6 py-2.5 sm:py-3 bg-white hover:bg-gray-50 text-gray-800 rounded-lg font-medium border border-gray-200 transition-all hover:shadow-sm hover:border-gray-300 transform hover:-translate-y-0.5"
              style={{fontFamily: 'var(--font-gotham)'}}
            >
              Learn About Team
            </Link>
          </div>
        </div>
        
        <div className="w-full mx-auto text-center mt-4 sm:mt-8">
          {/* 3D Carousel Component */}
          <Carousel3D 
            slides={slides} 
            currentSlide={currentSlide}
            setCurrentSlide={setCurrentSlide}
          />
        </div>
      </div>
    </div>
  );
}
