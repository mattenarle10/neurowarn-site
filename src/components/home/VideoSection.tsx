"use client";

export default function VideoSection() {
  return (
    <section className="py-6 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          {/* Section Heading */}
          <div className="text-center mb-4">
            <h2 
              className="text-xl md:text-2xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent mb-2" 
              style={{fontFamily: 'var(--font-gotham)', letterSpacing: '-0.02em'}}
            >
              Our Promo Video
            </h2>
            <div className="w-12 h-1 bg-primary mx-auto rounded-full"></div>
          </div>
          
          {/* Video Card */}
          <div className="bg-white rounded-lg shadow-sm overflow-hidden border border-gray-100 relative">
            {/* Video Container */}
            <div className="relative pt-[50%] w-full">
              <iframe 
                className="absolute inset-0 w-full h-full"
                src="https://www.youtube.com/embed/dQw4w9WgXcQ?controls=1&rel=0&modestbranding=1"
                title="Neurowarn Demo Video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            
            {/* Video Caption - Compact Version */}
            <div className="p-3 flex justify-between items-center">
              <div className="flex items-center">
                <div className="w-1 h-4 bg-primary rounded-full mr-2"></div>
                <h3 
                  className="text-sm font-bold text-gray-800" 
                  style={{fontFamily: 'var(--font-gotham)'}}
                >
                  Neurowarn System Demo
                </h3>
              </div>
              
              {/* Video Stats - Horizontal Layout */}
              <div className="flex items-center gap-2">
                <div className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-gray-400 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-xs text-gray-500" style={{fontFamily: 'var(--font-gotham)'}}>3:32</span>
                </div>
                
                <div className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-gray-400 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                  <span className="text-xs text-gray-500" style={{fontFamily: 'var(--font-gotham)'}}>2.4K</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Added space below video section */}
          <div className="h-18"></div>
        </div>
      </div>
    </section>
  );
}
