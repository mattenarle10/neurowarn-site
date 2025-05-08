import Image from "next/image";
import { useState } from "react";

interface PostListTileProps {
  title: string;
  source: string;
  url: string;
  thumbnailSrc: string;
  sourceLabel: string;
}

export default function PostListTile({
  title,
  source,
  url,
  thumbnailSrc,
  sourceLabel
}: PostListTileProps) {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="flex flex-col sm:flex-row items-center p-4 sm:p-5 mb-5 rounded-xl border border-gray-200 bg-white hover:bg-gray-50/50 hover:border-gray-300 hover:shadow-md transition-all duration-300 group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Mobile image for small screens (top) */}
      <div className="w-full sm:hidden mb-4 rounded-lg overflow-hidden">
        <div className="w-full aspect-video relative rounded-lg overflow-hidden shadow-sm border border-gray-100">
          <Image
            src={thumbnailSrc}
            alt={`${title} thumbnail`}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </div>
      </div>
      
      <div className="flex-grow pr-0 sm:pr-4 order-2 sm:order-1">
        <div className="flex items-center mb-2">
          <span 
            className="text-xs py-1 px-3 rounded-full bg-gradient-to-r from-primary/20 to-primary/5 text-primary font-medium border border-primary/10 shadow-sm"
            style={{fontFamily: 'var(--font-gotham)', letterSpacing: '0.01em'}}
          >
            {sourceLabel}
          </span>
        </div>
        <h3 
          className="text-sm sm:text-base font-medium text-gray-800 mb-2 group-hover:text-gray-900 transition-colors duration-300 line-clamp-3 sm:line-clamp-2" 
          style={{fontFamily: 'var(--font-gotham)', letterSpacing: '-0.01em'}}
        >
          {title}
        </h3>
        <div className="flex items-center">
          <svg 
            className="w-3.5 h-3.5 text-gray-400 mr-1.5 group-hover:text-primary transition-colors duration-300" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
          </svg>
          <p 
            className="text-xs text-gray-500 group-hover:text-gray-700 transition-colors duration-300" 
            style={{fontFamily: 'var(--font-gotham)', fontWeight: 300}}
          >
            {source}
          </p>
        </div>
      </div>
      
      {/* Desktop image (right side) */}
      <div className="hidden sm:block flex-shrink-0 order-1 sm:order-2">
        <div className="w-40 h-28 relative rounded-lg overflow-hidden shadow-sm border border-gray-100 transition-all duration-300 group-hover:shadow-md group-hover:border-gray-200">
          <Image
            src={thumbnailSrc}
            alt={`${title} thumbnail`}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-tr from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          
          {/* View indicator that appears on hover */}
          <div 
            className={`absolute right-2 bottom-2 bg-white/80 backdrop-blur-sm rounded-full p-1.5 shadow-sm transform transition-all duration-300 ${
              isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
            }`}
          >
            <svg className="w-3 h-3 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </div>
        </div>
      </div>
    </a>
  );
} 