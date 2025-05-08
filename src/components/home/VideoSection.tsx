"use client";
import { useState } from 'react';

export default function VideoSection() {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <section className="py-12 sm:py-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-2xl mx-auto">
          {/* Section Heading */}
          <div className="text-center mb-8 sm:mb-10">
            <h2 
              className="text-xl md:text-2xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent mb-3" 
              style={{fontFamily: 'var(--font-gotham)', letterSpacing: '-0.02em'}}
            >
              Our Promo Video
            </h2>
            <div className="w-12 h-1 bg-primary mx-auto rounded-full mb-2"></div>
            <p className="text-sm text-gray-500 max-w-md mx-auto" style={{fontFamily: 'var(--font-gotham)', fontWeight: 300}}>
              Watch how Neurowarn helps enhance safety in EEG-controlled wheelchairs
            </p>
          </div>
          
          {/* Video Card */}
          <div 
            className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-200 transition-all duration-300 hover:shadow-md hover:border-gray-300 transform hover:-translate-y-1 group"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {/* Video Container with overlay */}
            <div className="relative pt-[56.25%] w-full">
              <iframe 
                className="absolute inset-0 w-full h-full"
                src="https://www.youtube.com/embed/dQw4w9WgXcQ?controls=1&rel=0&modestbranding=1"
                title="Neurowarn Demo Video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              
              {/* Hover Overlay */}
              <div className={`absolute inset-0 bg-primary/10 pointer-events-none flex items-center justify-center transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`}>
                <div className={`w-16 h-16 rounded-full bg-white/80 backdrop-blur-sm shadow-lg flex items-center justify-center transition-transform duration-300 ${isHovered ? 'scale-100' : 'scale-90'}`}>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-primary" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
            </div>
            
            {/* Video Info */}
            <div className="p-4 sm:p-5 border-t border-gray-100">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                <div className="flex items-start">
                  <div className="w-1 h-full sm:h-10 bg-primary rounded-full mr-3 self-stretch"></div>
                  <div>
                    <h3 
                      className="text-base sm:text-lg font-bold text-gray-800 mb-1 group-hover:text-gray-900 transition-colors" 
                      style={{fontFamily: 'var(--font-gotham)'}}
                    >
                      Neurowarn System Demo
                    </h3>
                    <p className="text-xs text-gray-500" style={{fontFamily: 'var(--font-gotham)', fontWeight: 300}}>
                      See how our safety enhancement system works in real-world scenarios
                    </p>
                  </div>
                </div>
                
                {/* Video Stats - with enhanced design */}
                <div className="flex items-center gap-4 mt-2 sm:mt-0">
                  <div className="flex items-center px-2 py-1 rounded-full bg-gray-100 group-hover:bg-gray-200 transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5 text-gray-500 mr-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-xs font-medium text-gray-600" style={{fontFamily: 'var(--font-gotham)'}}>3:32</span>
                  </div>
                  
                  <div className="flex items-center px-2 py-1 rounded-full bg-gray-100 group-hover:bg-gray-200 transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5 text-gray-500 mr-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                    <span className="text-xs font-medium text-gray-600" style={{fontFamily: 'var(--font-gotham)'}}>2.4K</span>
                  </div>
                </div>
              </div>
              
              {/* Watch Now Button - appears on larger screens */}
              <div className="hidden sm:block mt-4 pt-3 border-t border-gray-100">
                <a 
                  href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-xs font-medium text-primary hover:text-primary/90 transition-colors"
                  style={{fontFamily: 'var(--font-gotham)'}}
                >
                  <span>Watch Full Video</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5 ml-1 transition-transform group-hover:translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
