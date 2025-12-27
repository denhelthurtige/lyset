import { Navigation } from "@/components/Navigation";
import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { EventsSection } from "@/components/EventsSection";
import { GallerySection } from "@/components/GallerySection";
import { CTASection } from "@/components/CTASection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <EventsSection />
      <GallerySection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;
