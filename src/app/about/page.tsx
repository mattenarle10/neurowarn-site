"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import TeamMember from "@/components/about/TeamMember";
import PostListTile from "@/components/about/PostListTile";

export default function AboutPage() {
  const teamMembers = [
    {
      name: "Matthew Ariel A. Enarle",
      email: "matthew.enarle@wvsu.edu.ph",
      linkedin: "matthew-enarle",
      image: "/images/team/matt_avatar.jpeg",
    },
    {
      name: "Kyle E. Billones",
      email: "kylebillones.63@gmail.com",
      linkedin: "kylebillones",
      image: "/images/team/kyle_avatar.jpeg",
    },
    {
      name: "Alecxander Jamille Andaya",
      email: "alecxanderjamille.andaya@wvsu.edu.ph",
      linkedin: "alecxander-jamille-andaya",
      image: "/images/team/alecx_avatar.jpeg",
    },
    {
      name: "Jasper M. Nillos",
      email: "jasper.nillos@wvsu.edu.ph",
      linkedin: "jasper-nillos",
      image: "/images/team/jasper_avatar.jpeg",
    },

    {
      name: "Shayne B. Yanson",
      email: "shayne.yanson@gmail.com",
      linkedin: "shayneyanson",
      image: "/images/team/shayne_avatar.jpeg",
    },

  ];

  const relatedPosts = [
    {
      title: "LOOK: Team Mobilitee secured Third Place and won the Best Startup Logo in the 9th Philippine Startup",
      source: "facebook.com/share/p/1Ab6uwK887",
      url: "https://www.facebook.com/share/p/1Ab6uwK887/",
      thumbnailSrc: "/images/thumbnails/thumbnail_cict.png",
      sourceLabel: "WVSU - College of Information",
    },
    {
      title: "NEWS UPDATE: CICTzens develop mobility solution for PWDs, ranks 3rd in reg'l startup challenge",
      source: "facebook.com/share/p/15kTZRAGeV",
      url: "https://www.facebook.com/share/p/15kTZRAGeV/",
      thumbnailSrc: "/images/thumbnails/thumbnail_fd.jpg",
      sourceLabel: "Forum-Dimensions",
    },
    {
      title: "What does it take to turn a passion project into an award-winning startup?",
      source: "linkedin.com/posts/kylebillones",
      url: "https://www.linkedin.com/posts/kylebillones_%F0%9D%97%AA%F0%9D%97%B5%F0%9D%97%AE%F0%9D%98%81-%F0%9D%97%B1%F0%9D%97%BC%F0%9D%97%B2%F0%9D%98%80-%F0%9D%97%B6%F0%9D%98%81-%F0%9D%98%81%F0%9D%97%AE%F0%9D%97%B8%F0%9D%97%B2-%F0%9D%98%81%F0%9D%97%BC-%F0%9D%98%81%F0%9D%98%82-activity-7254547257402744832-IzBg",
      thumbnailSrc: "/images/thumbnails/thumbnail_dict.jpeg",
      sourceLabel: "LinkedIn Post",
    }
  ];
  
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      
      {/* Team Section with Space for Navbar */}
      <section className="pt-32 pb-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">

         
              
              {/* Team Photo - More vertical */}
              <div className="relative w-full max-w-2xl h-[550px] mx-auto mb-12 rounded-xl overflow-hidden shadow-md border border-gray-200">
                <Image 
                  src="/images/team_neuro.jpg" 
                  alt="Neurowarn Team" 
                  fill
                  className="object-contain object-center"
                />
              </div>
              <h1 
                className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent mb-3" 
                style={{fontFamily: 'var(--font-gotham)', letterSpacing: '-0.02em'}}
              >
                Our Team
              </h1>
              <div className="w-16 h-1 bg-primary mx-auto rounded-full mb-8"></div>
            </div>

            
            
            {/* Team Members in 3-2 layout */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              
              {teamMembers.slice(0, 3).map((member, index) => (
                <TeamMember 
                  key={index}
                  name={member.name}
                  email={member.email}
                  linkedin={member.linkedin}
                  image={member.image}
                />
              ))}
              
              {/* Bottom row with 2 members centered */}
              <div className="col-span-3 flex justify-center">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-md">
                  {teamMembers.slice(3, 5).map((member, index) => (
                    <TeamMember 
                      key={index}
                      name={member.name}
                      email={member.email}
                      linkedin={member.linkedin}
                      image={member.image}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Related Posts Section with Notion-like list tiles */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 
                className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent mb-3" 
                style={{fontFamily: 'var(--font-gotham)', letterSpacing: '-0.02em'}}
              >
                Related Posts
              </h2>
              <div className="w-16 h-1 bg-primary mx-auto rounded-full mb-8"></div>

            </div>
            
            <div className="max-w-4xl mx-auto">
              {relatedPosts.map((post, index) => (
                <PostListTile 
                  key={index}
                  title={post.title}
                  source={post.source}
                  url={post.url}
                  thumbnailSrc={post.thumbnailSrc}
                  sourceLabel={post.sourceLabel}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </main>
  );
} 