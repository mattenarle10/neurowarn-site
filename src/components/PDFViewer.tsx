"use client";

import { useState } from 'react';

interface PDFViewerProps {
  pdfUrl: string;
  title: string;
  className?: string;
  height?: string;
  showControls?: boolean;
}

export default function PDFViewer({ pdfUrl, title, className = '', height = '800px', showControls = true }: PDFViewerProps) {
  const [pageNumber, setPageNumber] = useState(1);
  const [zoom, setZoom] = useState(100);

  const handleZoomIn = () => {
    setZoom(prev => Math.min(prev + 25, 200));
  };

  const handleZoomOut = () => {
    setZoom(prev => Math.max(prev - 25, 50));
  };

  const generatePdfUrl = () => {
    let url = pdfUrl;
    if (pageNumber > 1) {
      url += `#page=${pageNumber}`;
    }
    
    // Add zoom parameter if needed
    if (zoom !== 100) {
      url += zoom > 100 ? `&zoom=${zoom}` : `&zoom=${zoom/100}`;
    }
    
    return url;
  };

  return (
    <div className={`bg-white rounded-xl overflow-hidden border border-gray-100 shadow-md ${className}`}>
      <div style={{ height }} className="relative">
        <iframe 
          src={generatePdfUrl()} 
          className="w-full h-full" 
          title={title}
          aria-label={`PDF Viewer: ${title}`}
        />
      </div>
      
      {showControls && (
        <div className="p-3 bg-gray-50 border-t border-gray-100 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <button 
              onClick={() => setPageNumber(prev => Math.max(prev - 1, 1))}
              className="p-2 rounded-md hover:bg-gray-200 transition-colors"
              aria-label="Previous page"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-600" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            </button>
            <span className="text-sm text-gray-600">Page {pageNumber}</span>
            <button 
              onClick={() => setPageNumber(prev => prev + 1)}
              className="p-2 rounded-md hover:bg-gray-200 transition-colors"
              aria-label="Next page"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-600" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
              </svg>
            </button>
          </div>
          
          <div className="flex items-center space-x-2">
            <button 
              onClick={handleZoomOut}
              className="p-2 rounded-md hover:bg-gray-200 transition-colors"
              aria-label="Zoom out"
              disabled={zoom <= 50}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-600" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M5 10a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1z" clipRule="evenodd" />
              </svg>
            </button>
            <span className="text-sm text-gray-600">{zoom}%</span>
            <button 
              onClick={handleZoomIn}
              className="p-2 rounded-md hover:bg-gray-200 transition-colors"
              aria-label="Zoom in"
              disabled={zoom >= 200}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-600" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clipRule="evenodd" />
              </svg>
            </button>
          </div>
          
          <a 
            href={pdfUrl} 
            download
            className="text-sm text-primary flex items-center gap-1 hover:text-primary/80 transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
            Download
          </a>
        </div>
      )}
    </div>
  );
} 