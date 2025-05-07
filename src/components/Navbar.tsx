"use client";
import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

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
    <motion.nav 
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white/90 backdrop-blur-sm shadow-sm py-3' 
          : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 flex flex-col items-center justify-center">
        {/* Logo */}
        <motion.div
          whileHover={{ scale: 1.03 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
          className="mb-2"
        >
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
        </motion.div>
        
        {/* Navigation Links */}
        <div className="flex space-x-8 font-medium" style={{fontFamily: 'var(--font-gotham)'}}>
          {['Home', 'About', 'Paper'].map((item, index) => (
            <motion.div
              key={item}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index, duration: 0.5 }}
            >
              <Link 
                href={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                className={`text-black hover:text-primary transition-colors relative group ${!scrolled && 'drop-shadow-sm'}`}
              >
                {item}
                <motion.span 
                  className="absolute -bottom-1 left-0 h-0.5 bg-primary"
                  initial={{ width: 0 }}
                  whileHover={{ width: '100%' }}
                  transition={{ duration: 0.3 }}
                />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.nav>
  );
}
