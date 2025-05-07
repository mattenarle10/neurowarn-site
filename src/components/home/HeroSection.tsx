"use client";
import { useEffect, useState } from 'react';
import { CarouselSlide, FloatingElementProps } from '@/types/carousel';
import Carousel3D from '../carousel/Carousel3D';
import FloatingElement from '../carousel/FloatingElement';

export default function Hero() {
  const [mounted, setMounted] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  
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
  }, []);

  // Generate random positions for floating elements
  const floatingElements: FloatingElementProps[] = [];
  if (mounted) {    
    // Create more arrows specifically
    for (let i = 0; i < 8; i++) {
      floatingElements.push({
        id: i,
        x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth * 0.8 : 800),
        y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight * 0.8 : 600),
        size: Math.random() * 15 + 25, // Bigger arrows
        rotation: Math.random() * 360,
        color: "#c53735", // Primary color for arrows
        duration: Math.random() * 4 + 4,
        delay: Math.random() * 2,
        type: 'arrow',
        opacity: 0.15 // More visible
      });
    }
    
    // Add other elements
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
        opacity: 0.08
      });
    }
  }

  return (
    <div className="relative min-h-[90vh] flex items-center justify-center pt-24 bg-white overflow-hidden">
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
        />
      ))}
      
      <div className="container mx-auto px-4 py-8 z-10 flex flex-col items-center justify-center">
        <div className="w-full mx-auto text-center">
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
