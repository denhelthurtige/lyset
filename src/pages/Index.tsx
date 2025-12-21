import { Navigation } from "@/components/Navigation";
import { HeroSection } from "@/components/HeroSection";
import { GallerySection } from "@/components/GallerySection";
import { ProgramSection } from "@/components/ProgramSection";
import { TicketSection } from "@/components/TicketSection";
import { PracticalSection } from "@/components/PracticalSection";
import { FAQSection } from "@/components/FAQSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <HeroSection />
      
      <div className="section-divider" />
      <GallerySection />
      
      <div className="section-divider" />
      <ProgramSection />
      
      <div className="section-divider" />
      <TicketSection />
      
      <div className="section-divider" />
      <PracticalSection />
      
      <div className="section-divider" />
      <FAQSection />
      
      <Footer />
    </div>
  );
};

export default Index;
