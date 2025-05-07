"use client";
import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white/90 backdrop-blur-sm shadow-sm py-3' 
          : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 flex flex-col items-center justify-center">
        {/* Logo */}
        <div className="mb-2">
          <Link href="/" className="flex items-center">
            <Image 
              src="/logo-full/full-n-logo.png" 
              alt="Neurowarn Logo" 
              width={150} 
              height={32} 
              className="h-8 w-auto"
              priority
            />
          </Link>
        </div>
        
        {/* Navigation Links */}
        <div className="flex space-x-12 font-medium" style={{fontFamily: 'var(--font-gotham)'}}>
          <Link 
            href="/"
            className={`text-black hover:text-primary transition-colors relative group ${!scrolled && 'drop-shadow-sm'}`}
          >
            Home
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
          </Link>
          
          <Link 
            href="/about"
            className={`text-black hover:text-primary transition-colors relative group ${!scrolled && 'drop-shadow-sm'}`}
          >
            About
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
          </Link>
          
          <Link 
            href="/paper"
            className={`text-black hover:text-primary transition-colors relative group ${!scrolled && 'drop-shadow-sm'}`}
          >
            Paper
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
          </Link>
        </div>
      </div>
    </nav>
  );
}
