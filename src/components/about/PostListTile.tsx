import Image from "next/image";

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
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center p-5 mb-5 rounded-lg border border-gray-200 bg-white hover:bg-gray-50 transition-colors"
    >
      <div className="flex-grow pr-4">
        <div className="flex items-center mb-2">
          <span className="text-xs py-1 px-3 rounded-full bg-gradient-to-r from-primary/20 to-primary/10 text-primary font-medium">
            {sourceLabel}
          </span>
        </div>
        <h3 
          className="text-base font-medium text-gray-800 mb-1" 
          style={{fontFamily: 'var(--font-gotham)'}}
        >
          {title}
        </h3>
        <p 
          className="text-xs text-gray-500" 
          style={{fontFamily: 'var(--font-gotham)', fontWeight: 300}}
        >
          {source}
        </p>
      </div>
      <div className="flex-shrink-0">
        <div className="w-40 h-28 rounded-lg bg-gray-100 relative overflow-hidden shadow-sm border border-gray-100">
          <Image
            src={thumbnailSrc}
            alt={`${title} thumbnail`}
            fill
            className="object-cover"
          />
        </div>
      </div>
    </a>
  );
} 