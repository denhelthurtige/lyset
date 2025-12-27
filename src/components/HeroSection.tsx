import ramadanlys from "@/assets/events/ramadanlys.jpg";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={ramadanlys}
          alt="Ramadanlys på Den Røde Plads"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-background/50 to-background" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-3xl mx-auto animate-fade-in">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-display tracking-wide leading-[1.1] text-foreground">
          Lys. Fællesskab. Samvær.
        </h1>
        
        <p className="mt-8 text-lg md:text-xl text-muted-foreground max-w-lg mx-auto leading-relaxed font-light">
          Ramadanlys samler Nørrebro omkring Ramadanen.
        </p>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
        <div className="w-px h-16 bg-gradient-to-b from-primary/60 to-transparent" />
      </div>
    </section>
  );
}
