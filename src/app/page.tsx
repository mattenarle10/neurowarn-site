import Navbar from "@/components/Navbar";
import Hero from "@/components/home/HeroSection";
import AboutSection from "@/components/home/AboutSection";
import VideoSection from "@/components/home/VideoSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <AboutSection />
      <VideoSection />
      <Footer />
    </main>
  );
}
