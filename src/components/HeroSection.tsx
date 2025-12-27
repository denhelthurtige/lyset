import { CONFIG } from "@/config/event";
import ramadanLights from "@/assets/gallery/ramadan-lights.png";

export function HeroSection() {
  return (
    <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={ramadanLights}
          alt="Ramadanlys"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/60 to-background" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-3xl mx-auto animate-fade-in">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold tracking-tight leading-[1.1] text-foreground">
          Lys. Fællesskab. Samvær.
        </h1>
        
        <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-xl mx-auto leading-relaxed">
          Ramadanlys samler Nørrebro omkring Ramadanen.
        </p>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-pulse">
        <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-muted-foreground/50 rounded-full" />
        </div>
      </div>
    </section>
  );
}
