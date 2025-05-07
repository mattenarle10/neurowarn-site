"use client";
import Image from 'next/image';
import Link from 'next/link';

export default function AboutSection() {
  return (
    <section className="py-8 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Section Heading */}
          <div className="text-center mb-16">
            <h2 
              className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent mb-3" 
              style={{fontFamily: 'var(--font-gotham)', letterSpacing: '-0.02em'}}
            >
              What is Neurowarn?
            </h2>
            <div className="w-16 h-1 bg-primary mx-auto rounded-full"></div>
          </div>
          
          {/* Logo - Positioned outside and above the card */}
          <div className="relative z-20 mx-auto w-24 h-24 -mb-12">
            <div className="bg-white rounded-full p-3 shadow-md border border-gray-100 w-full h-full">
              <div className="relative w-full h-full">
                <Image
                  src="/logo/n-gray.png"
                  alt="Neurowarn Logo"
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>
          
          {/* Combined Card with About and Evaluation */}
          <div className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100 relative">
            {/* Static rings around the card */}
            <div className="absolute inset-0 border-2 border-primary/10 rounded-xl"></div>
            <div className="absolute inset-0 border border-primary/5 rounded-xl"></div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 pt-14">
              {/* About Column */}
              <div className="p-2">
                <div className="mb-3 flex items-center">
                  <div className="w-1 h-5 bg-primary rounded-full mr-2"></div>
                  <h3 
                    className="text-lg font-bold bg-gradient-to-r from-primary/90 to-primary bg-clip-text text-transparent" 
                    style={{fontFamily: 'var(--font-gotham)', letterSpacing: '-0.02em'}}
                  >
                    Neurowarn BCI
                  </h3>
                </div>
                
                <p 
                  className="text-gray-700 leading-relaxed mb-3 text-sm" 
                  style={{fontFamily: 'var(--font-gotham)', fontWeight: 300}}
                >
                  Neurowarn BCI is a safety enhancement system for EEG-controlled wheelchairs that uses a Recurrent Neural Network (RNN) to predict potential hazards and provide warnings to users.
                </p>
                
                <p 
                  className="text-gray-700 leading-relaxed text-sm" 
                  style={{fontFamily: 'var(--font-gotham)', fontWeight: 300}}
                >
                  The system integrates brain-computer interface technology with obstacle detection sensors to create a safer mobility experience for users with severe motor disabilities.
                </p>
                
                {/* Feature Pills */}
                <div className="mt-3 flex flex-wrap gap-1">
                  {['RNN', 'EEG', 'Safety', 'Prediction', 'BCI'].map((tag, index) => (
                    <span 
                      key={index}
                      className="px-2 py-0.5 bg-gray-100 text-gray-700 rounded-full text-xs font-medium"
                      style={{fontFamily: 'var(--font-gotham)'}}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              
              {/* Evaluation Column */}
              <div className="p-2 border-t md:border-t-0 md:border-l border-gray-100 md:pl-4">
                <div className="mb-3 flex items-center">
                  <div className="w-1 h-5 bg-secondary rounded-full mr-2"></div>
                  <h3 
                    className="text-lg font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent" 
                    style={{fontFamily: 'var(--font-gotham)', letterSpacing: '-0.02em'}}
                  >
                    System Evaluation
                  </h3>
                </div>
                
                <p 
                  className="text-gray-700 leading-relaxed mb-3 text-sm" 
                  style={{fontFamily: 'var(--font-gotham)', fontWeight: 300}}
                >
                  The system's effectiveness and usability were rigorously evaluated using the ISO 9241-11 standard with high user satisfaction and system performance.
                </p>
                
                {/* Metrics */}
                <div className="grid grid-cols-2 gap-2 mb-2">
                  {/* Accuracy Card */}
                  <div className="bg-gray-50 rounded-lg p-2 border border-gray-100">
                    <div className="flex justify-between items-start mb-1">
                      <h4 className="text-xs font-medium text-gray-700" style={{fontFamily: 'var(--font-gotham)'}}>Overall Accuracy</h4>
                      <span className="text-xs bg-green-100 text-green-800 px-1 py-0.5 rounded-full font-medium">High</span>
                    </div>
                    <div className="flex items-baseline">
                      <span className="text-xl font-bold text-gray-900" style={{fontFamily: 'var(--font-gotham)'}}>94%</span>
                      <span className="ml-1 text-xs text-gray-500">confidence</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-1 mt-1">
                      <div className="bg-green-500 h-1 rounded-full" style={{ width: '94%' }}></div>
                    </div>
                  </div>
                  
                  {/* User Rating Card */}
                  <div className="bg-gray-50 rounded-lg p-2 border border-gray-100">
                    <div className="flex justify-between items-start mb-1">
                      <h4 className="text-xs font-medium text-gray-700" style={{fontFamily: 'var(--font-gotham)'}}>User Satisfaction</h4>
                      <span className="text-xs bg-purple-100 text-purple-800 px-1 py-0.5 rounded-full font-medium">Good</span>
                    </div>
                    <div className="flex items-baseline">
                      <span className="text-xl font-bold text-gray-900" style={{fontFamily: 'var(--font-gotham)'}}>4.27</span>
                      <span className="ml-1 text-xs text-gray-500">/ 5</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-1 mt-1">
                      <div className="bg-purple-500 h-1 rounded-full" style={{ width: '85.4%' }}></div>
                    </div>
                  </div>
                </div>
                
                {/* ISO Badge */}
                <div className="flex items-center justify-center">
                  <div className="flex items-center bg-gray-100 px-2 py-1 rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-gray-500 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                    <span className="text-xs font-medium text-gray-700" style={{fontFamily: 'var(--font-gotham)'}}>
                      ISO 9241-11 Standard
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* How It Works Section */}
          <div className="mt-24 mb-16">
            <div className="text-center mb-12">
              <h2 
                className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent mb-3" 
                style={{fontFamily: 'var(--font-gotham)', letterSpacing: '-0.02em'}}
              >
                How It Works
              </h2>
              <div className="w-16 h-1 bg-primary mx-auto rounded-full"></div>
            </div>

            <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6">
                {/* Step 1 */}
                <div className="p-5 rounded-xl bg-gray-50/70 border border-gray-100 text-center transition-all duration-300 hover:shadow-lg group hover:bg-white">
                  <div className="mb-5 relative mx-auto w-28 h-28 transform group-hover:scale-105 transition-transform duration-300">
                    <div className="absolute inset-0 bg-primary/5 rounded-full"></div>
                    <div className="absolute inset-1 bg-primary/10 rounded-full"></div>
                    <div className="absolute inset-2 shadow-lg rounded-full overflow-hidden">
                      <Image
                        src="/images/1.png"
                        alt="EEG Setup"
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 33vw"
                      />
                    </div>
                  </div>
                  <h3 
                    className="text-base font-semibold mb-3 text-gray-800 group-hover:text-primary transition-colors duration-300" 
                    style={{fontFamily: 'var(--font-gotham)', letterSpacing: '-0.02em'}}
                  >
                    Setup EEG Device
                  </h3>
                  <p 
                    className="text-gray-600 text-sm" 
                    style={{fontFamily: 'var(--font-gotham)', fontWeight: 300}}
                  >
                    Connect and calibrate the EEG headset to capture brain signals for wheelchair control.
                  </p>
                </div>

                {/* Step 2 */}
                <div className="p-5 rounded-xl bg-gray-50/70 border border-gray-100 text-center transition-all duration-300 hover:shadow-lg group hover:bg-white">
                  <div className="mb-5 relative mx-auto w-28 h-28 transform group-hover:scale-105 transition-transform duration-300">
                    <div className="absolute inset-0 bg-secondary/5 rounded-full"></div>
                    <div className="absolute inset-1 bg-secondary/10 rounded-full"></div>
                    <div className="absolute inset-2 shadow-lg rounded-full overflow-hidden">
                      <Image
                        src="/images/2.png"
                        alt="Wheelchair Setup"
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 33vw"
                      />
                    </div>
                  </div>
                  <h3 
                    className="text-base font-semibold mb-3 text-gray-800 group-hover:text-secondary transition-colors duration-300" 
                    style={{fontFamily: 'var(--font-gotham)', letterSpacing: '-0.02em'}}
                  >
                    Configure Wheelchair
                  </h3>
                  <p 
                    className="text-gray-600 text-sm" 
                    style={{fontFamily: 'var(--font-gotham)', fontWeight: 300}}
                  >
                    Install AccessAssist and connect sensors to the wheelchair for obstacle detection.
                  </p>
                </div>

                {/* Step 3 */}
                <div className="p-5 rounded-xl bg-gray-50/70 border border-gray-100 text-center transition-all duration-300 hover:shadow-lg group hover:bg-white">
                  <div className="mb-5 relative mx-auto w-28 h-28 transform group-hover:scale-105 transition-transform duration-300">
                    <div className="absolute inset-0 bg-gray-800/5 rounded-full"></div>
                    <div className="absolute inset-1 bg-gray-800/10 rounded-full"></div>
                    <div className="absolute inset-2 shadow-lg rounded-full overflow-hidden">
                      <Image
                        src="/images/3.png"
                        alt="Neurowarn Interface"
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 33vw"
                      />
                    </div>
                  </div>
                  <h3 
                    className="text-base font-semibold mb-3 text-gray-800 group-hover:text-gray-900 transition-colors duration-300" 
                    style={{fontFamily: 'var(--font-gotham)', letterSpacing: '-0.02em'}}
                  >
                    Run Neurowarn Interface
                  </h3>
                  <p 
                    className="text-gray-600 text-sm" 
                    style={{fontFamily: 'var(--font-gotham)', fontWeight: 300}}
                  >
                    Launch the interface to begin real-time hazard prediction and receive warning alerts.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
