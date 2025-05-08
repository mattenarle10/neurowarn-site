"use client";
import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
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

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  // Close mobile menu when navigating
  const handleNavigation = () => {
    setMobileMenuOpen(false);
  };

  return (
    <nav 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white/90 backdrop-blur-sm shadow-sm py-2 sm:py-3' 
          : 'bg-transparent py-3 sm:py-4'
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <div>
          <Link href="/" className="flex items-center">
            <Image 
              src="/logo-full/full-n-logo.png" 
              alt="Neurowarn Logo" 
              width={150} 
              height={32} 
              className="h-7 sm:h-8 w-auto"
              priority
            />
          </Link>
        </div>
        
        {/* Mobile Menu Button */}
        <button 
          className="block md:hidden text-black focus:outline-none"
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
        
        {/* Desktop Navigation Links */}
        <div className="hidden md:flex space-x-10 lg:space-x-12 font-medium" style={{fontFamily: 'var(--font-gotham)'}}>
          <Link 
            href="/"
            className={`text-sm lg:text-base text-black hover:text-primary transition-colors relative group ${!scrolled && 'drop-shadow-sm'}`}
          >
            Home
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
          </Link>
          
          <Link 
            href="/about"
            className={`text-sm lg:text-base text-black hover:text-primary transition-colors relative group ${!scrolled && 'drop-shadow-sm'}`}
          >
            About
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
          </Link>
          
          <Link 
            href="/paper"
            className={`text-sm lg:text-base text-black hover:text-primary transition-colors relative group ${!scrolled && 'drop-shadow-sm'}`}
          >
            Paper
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
          </Link>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <div 
        className={`md:hidden absolute left-0 right-0 bg-white shadow-md transition-all duration-300 overflow-hidden ${
          mobileMenuOpen ? 'max-h-60 border-b border-gray-200' : 'max-h-0'
        }`}
      >
        <div className="container mx-auto px-4 py-2">
          <div className="flex flex-col space-y-3 py-2" style={{fontFamily: 'var(--font-gotham)'}}>
            <Link 
              href="/"
              onClick={handleNavigation}
              className="text-black hover:text-primary transition-colors px-2 py-1.5 rounded-md hover:bg-gray-50"
            >
              Home
            </Link>
            
            <Link 
              href="/about"
              onClick={handleNavigation}
              className="text-black hover:text-primary transition-colors px-2 py-1.5 rounded-md hover:bg-gray-50"
            >
              About
            </Link>
            
            <Link 
              href="/paper"
              onClick={handleNavigation}
              className="text-black hover:text-primary transition-colors px-2 py-1.5 rounded-md hover:bg-gray-50"
            >
              Paper
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
