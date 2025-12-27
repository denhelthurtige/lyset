import { Sparkles } from "lucide-react";

export function AboutSection() {
  return (
    <section id="om" className="py-16">
      <div className="max-w-[800px] mx-auto px-5">
        <div className="text-center space-y-6">
          <div className="flex justify-center">
            <Sparkles className="w-8 h-8 text-primary animate-pulse" />
          </div>
          
          <h1 className="text-3xl md:text-4xl font-display font-bold leading-tight">
            Ramadanlys 2026
          </h1>
          
          <p className="text-xl text-primary font-medium">
            Lys, fællesskab og samvær på Nørrebro
          </p>
          
          <div className="space-y-5 text-muted-foreground leading-relaxed text-left md:text-center">
            <p>
              Ramadanlys er et åbent fællesskabsinitiativ i hjertet af Nørrebro, der markerer 
              Ramadanen gennem lys, kultur og nærvær. Med lysceremonien som samlingspunkt 
              skaber Ramadanlys rum for møder på tværs af generationer, baggrunde og traditioner 
              – med fokus på fællesskab, respekt og samhørighed i byen.
            </p>
            
            <p>
              I forbindelse med Ramadanlys 2026 inviterer vi til tre sammenhængende arrangementer, 
              som tilsammen danner rammen om en hel dag med oplevelser, refleksion og fælles samvær.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
