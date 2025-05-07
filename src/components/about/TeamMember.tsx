import Image from "next/image";

interface TeamMemberProps {
  name: string;
  email: string;
  linkedin: string;
  image: string;
}

export default function TeamMember({ name, email, linkedin, image }: TeamMemberProps) {
  return (
    <div className="text-center px-4 mb-8">
      <div className="group relative w-32 h-32 mx-auto mb-4 overflow-hidden rounded-full shadow-md border border-gray-200 transform transition-all duration-300 hover:shadow-lg">
        <Image 
          src={image} 
          alt={name}
          fill
          className="object-cover object-top transition-transform duration-300 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>
      <h3 
        className="text-base font-semibold mb-1 text-gray-800"
        style={{fontFamily: 'var(--font-gotham)', letterSpacing: '-0.02em'}}
      >
        {name}
      </h3>
      <div className="flex flex-col items-center gap-1">
        <a 
          href={`mailto:${email}`} 
          className="text-xs text-gray-600 hover:text-primary transition-colors truncate max-w-[150px]"
          style={{fontFamily: 'var(--font-gotham)', fontWeight: 300}}
          title={email}
        >
          {email}
        </a>
        <a 
          href={`https://linkedin.com/in/${linkedin}`} 
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs text-gray-600 hover:text-primary transition-colors flex items-center"
          style={{fontFamily: 'var(--font-gotham)', fontWeight: 300}}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 mr-1" fill="currentColor" viewBox="0 0 24 24">
            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
          </svg>
          {linkedin}
        </a>
      </div>
    </div>
  );
} 