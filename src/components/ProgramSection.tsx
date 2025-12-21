import { PROGRAM_ITEMS } from "@/config/event";
import { EventCard } from "@/components/ui/event-card";
import { Sparkles } from "lucide-react";

export function ProgramSection() {
  return (
    <section id="program" className="py-12">
      <div className="max-w-[1050px] mx-auto px-5">
        <h2 className="text-3xl font-display font-bold">Program (foreløbigt)</h2>
        <p className="mt-2 text-muted-foreground max-w-2xl">
          Vi holder det tydeligt og realistisk — opdateres når talere og sceneplan er bekræftet.
        </p>

        <div className="mt-6 space-y-3">
          {PROGRAM_ITEMS.map((item, idx) => (
            <EventCard 
              key={idx} 
              subtle 
              className="group hover:border-primary/30 transition-all duration-300"
            >
              <div className="flex gap-4 items-start">
                <div className="min-w-[110px] font-bold text-primary flex items-center gap-2">
                  {item.title.includes("Lys") && (
                    <Sparkles className="w-4 h-4 animate-pulse" />
                  )}
                  {item.time}
                </div>
                <div>
                  <h3 className="font-bold text-foreground group-hover:text-primary transition-colors">
                    {item.title}
                  </h3>
                  <p className="mt-1 text-muted-foreground">{item.desc}</p>
                </div>
              </div>
            </EventCard>
          ))}
        </div>
      </div>
    </section>
  );
}
