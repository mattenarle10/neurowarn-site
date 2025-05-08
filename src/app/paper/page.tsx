"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useState, useEffect } from "react";

export default function PaperPage() {
  const [activeTab, setActiveTab] = useState<'paper' | 'manual'>('paper');
  const [loading, setLoading] = useState(true);

  // Handle tab change with loading state
  const handleTabChange = (tab: 'paper' | 'manual') => {
    setLoading(true);
    setActiveTab(tab);
  };

  useEffect(() => {
    // Reset loading state after a short delay to allow iframe to load
    const timer = setTimeout(() => {
      setLoading(false);
    }, 300);
    
    return () => clearTimeout(timer);
  }, [activeTab]);

  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      
      <div className="container mx-auto px-4 sm:px-6 pb-12 sm:pb-20">
        {/* Header Section with responsive spacing */}
        <div className="max-w-5xl mx-auto">
          <div className="text-center pt-16 sm:pt-20 pb-6 sm:pb-8">
 
          </div>
          
          {/* PDF Viewer Section */}
          <div className="mb-12 sm:mb-20">
            {/* Tab Buttons - aligned left */}
            <div className="mb-6 sm:mb-8">
              <div className="flex max-w-sm relative border-b border-gray-200">
                <button
                  onClick={() => handleTabChange('paper')}
                  className={`py-2 sm:py-3 px-4 sm:px-6 text-xs sm:text-sm font-medium transition-colors relative ${
                    activeTab === 'paper' 
                      ? 'text-primary' 
                      : 'text-gray-500 hover:text-gray-700'
                  }`}
                  style={{fontFamily: 'var(--font-gotham)'}}
                >
                  Research Paper
                  {activeTab === 'paper' && (
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-primary"></span>
                  )}
                </button>
                <button
                  onClick={() => handleTabChange('manual')}
                  className={`py-2 sm:py-3 px-4 sm:px-6 text-xs sm:text-sm font-medium transition-colors relative ${
                    activeTab === 'manual' 
                      ? 'text-gray-700' 
                      : 'text-gray-500 hover:text-gray-700'
                  }`}
                  style={{fontFamily: 'var(--font-gotham)'}}
                >
                  User Manual
                  {activeTab === 'manual' && (
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gray-700"></span>
                  )}
                </button>
              </div>
            </div>
            
            {/* Content Area */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
              {/* PDF Viewer (takes 2/3 on desktop) */}
              <div className="lg:col-span-2">
                <div className="rounded-xl overflow-hidden border border-gray-200 shadow-md h-[350px] sm:h-[400px] md:h-[500px] lg:h-[600px]">
                  {/* Loading overlay */}
                  {loading && (
                    <div className="absolute inset-0 bg-gray-50 flex items-center justify-center z-10">
                      <div className="w-6 h-6 sm:w-8 sm:h-8 border-3 sm:border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
                    </div>
                  )}
                  
                  {/* PDF Viewer */}
                  <div className="bg-white h-full relative">
                    <iframe 
                      src={activeTab === 'paper' ? "/pdf/NeurowarnBCI.pdf" : "/pdf/NeurowarnUserManual.pdf"}
                      className="w-full h-full"
                      title={activeTab === 'paper' ? "Neurowarn Research Paper" : "Neurowarn User Manual"}
                      onLoad={() => setLoading(false)}
                    />
                  </div>
                </div>
              </div>
              
              {/* Document Info Panel */}
              <div className="bg-gradient-to-br from-gray-50 to-gray-50/80 backdrop-blur-sm rounded-xl p-5 sm:p-7 flex flex-col justify-between border border-gray-200 shadow-md h-auto lg:h-[600px] group hover:shadow-lg transition-shadow duration-300">
                <div>
                  <h2 
                    className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-gray-800 group-hover:text-gray-900 transition-colors"
                    style={{fontFamily: 'var(--font-gotham)', letterSpacing: '-0.02em'}}
                  >
                    {activeTab === 'paper' ? 'Research Paper' : 'User Manual'}
                  </h2>
                  
                  <div className="inline-flex items-center px-3 py-1.5 rounded-full bg-gray-100 border border-gray-200 text-xs sm:text-sm text-gray-700 mb-4 sm:mb-5 shadow-sm">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5 sm:h-4 sm:w-4 mr-1.5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    <span style={{fontFamily: 'var(--font-gotham)', fontWeight: 500}}>{activeTab === 'paper' ? '14 MB PDF' : '20 MB PDF'}</span>
                  </div>
                  
                  <div className="mb-6 sm:mb-8 bg-white/60 rounded-lg p-4 border border-gray-100">
                    <p 
                      className="text-sm sm:text-base text-gray-700 leading-relaxed"
                      style={{fontFamily: 'var(--font-gotham)', fontWeight: 300}}
                    >
                      {activeTab === 'paper' 
                        ? 'Comprehensive research on Neurowarn, including methodology, results, and discussions on safety enhancement for EEG-controlled wheelchairs.' 
                        : 'Complete guide for users and caregivers on how to set up, operate, and maintain the Neurowarn system safely.'}
                    </p>
                  </div>
                </div>
                
                <div className="space-y-3 sm:space-y-4 mt-auto">
                  <a 
                    href={activeTab === 'paper' ? "/pdf/NeurowarnBCI.pdf" : "/pdf/NeurowarnUserManual.pdf"} 
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-full ${
                      activeTab === 'paper' 
                        ? 'bg-primary hover:bg-primary/90' 
                        : 'bg-blue-600 hover:bg-blue-700'
                    } text-white rounded-lg font-medium py-3 sm:py-3.5 flex items-center justify-center transition-all shadow-sm hover:shadow text-sm sm:text-base transform hover:-translate-y-0.5 duration-200`}
                    style={{fontFamily: 'var(--font-gotham)'}}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 sm:h-5 sm:w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                    Open in New Tab
                  </a>
                  
                  <a 
                    href={activeTab === 'paper' ? "/pdf/NeurowarnBCI.pdf" : "/pdf/NeurowarnUserManual.pdf"} 
                    download={activeTab === 'paper' ? "Neurowarn_Research_Paper.pdf" : "Neurowarn_User_Manual.pdf"}
                    className="w-full bg-white border border-gray-200 text-gray-800 rounded-lg font-medium py-3 sm:py-3.5 flex items-center justify-center hover:bg-gray-50 transition-all shadow-sm hover:shadow hover:border-gray-300 text-sm sm:text-base transform hover:-translate-y-0.5 duration-200"
                    style={{fontFamily: 'var(--font-gotham)'}}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 sm:h-5 sm:w-5 mr-2 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                    </svg>
                    Download
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          {/* Special Thanks Section */}
          <section className="pt-6 sm:pt-8 pb-8 sm:pb-12 border-t border-gray-100">
            <div className="text-center mb-8 sm:mb-10">
              <h2 
                className="text-xl sm:text-2xl md:text-3xl font-bold mb-3 bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent" 
                style={{fontFamily: 'var(--font-gotham)', letterSpacing: '-0.02em'}}
              >
                Special Thanks
              </h2>
              <div className="w-16 sm:w-20 h-1 bg-primary mx-auto rounded-full mb-4 sm:mb-6"></div>
            </div>
            
            <div className="bg-white rounded-xl p-5 sm:p-8 border border-gray-100 shadow-md">
              <p className="text-sm sm:text-base text-gray-700 mb-6 sm:mb-8 leading-relaxed text-center"
                style={{fontFamily: 'var(--font-gotham)', fontWeight: 300}}>
                The following individuals, whose invaluable contributions made this study possible:
              </p>
              
              <div className="space-y-4 sm:space-y-6">
                <div className="p-4 sm:p-5 rounded-lg bg-gray-50 border border-gray-100 hover:shadow-sm transition-shadow">
                  <h3 className="text-sm sm:text-base text-gray-800 font-semibold mb-2"
                    style={{fontFamily: 'var(--font-gotham)'}}>
                    To Sir Mark Joseph J. Solidarios and Dr. Felipe Vista IV,
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-700 pl-3 sm:pl-4 border-l-2 border-primary/30"
                    style={{fontFamily: 'var(--font-gotham)', fontWeight: 300}}>
                    For their guidance, expertise, and continuous encouragement as advisers, helping shape the study from the very beginning.
                  </p>
                </div>
                
                <div className="p-4 sm:p-5 rounded-lg bg-gray-50 border border-gray-100 hover:shadow-sm transition-shadow">
                  <h3 className="text-sm sm:text-base text-gray-800 font-semibold mb-2"
                    style={{fontFamily: 'var(--font-gotham)'}}>
                    To John Christopher Mateo,
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-700 pl-3 sm:pl-4 border-l-2 border-primary/30"
                    style={{fontFamily: 'var(--font-gotham)', fontWeight: 300}}>
                    For his generosity in offering his time, valuable advice, and moral support, that motivated the researchers throughout the process.
                  </p>
                </div>
                
                <div className="p-4 sm:p-5 rounded-lg bg-gray-50 border border-gray-100 hover:shadow-sm transition-shadow">
                  <h3 className="text-sm sm:text-base text-gray-800 font-semibold mb-2"
                    style={{fontFamily: 'var(--font-gotham)'}}>
                    To Dr. Albert Causo,
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-700 pl-3 sm:pl-4 border-l-2 border-primary/30"
                    style={{fontFamily: 'var(--font-gotham)', fontWeight: 300}}>
                    For his significant insights in system architecture, component selection, firmware development, and testing methodologies, that greatly contributed to the efficiency, reliability, and accuracy of the system.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
      
      <Footer />
    </main>
  );
} 