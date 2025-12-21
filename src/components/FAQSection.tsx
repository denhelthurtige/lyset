import { FAQ_ITEMS } from "@/config/event";
import { EventCard } from "@/components/ui/event-card";
import { HelpCircle } from "lucide-react";

export function FAQSection() {
  return (
    <section id="faq" className="py-12">
      <div className="max-w-[1050px] mx-auto px-5">
        <h2 className="text-3xl font-display font-bold">FAQ</h2>
        <p className="mt-2 text-muted-foreground max-w-2xl">
          De vigtigste svar — så vi undgår forvirring på dagen.
        </p>

        <div className="mt-6 space-y-3">
          {FAQ_ITEMS.map((item, idx) => (
            <EventCard 
              key={idx} 
              subtle 
              className="group hover:border-primary/30 transition-all duration-300"
            >
              <div className="flex items-start gap-3">
                <HelpCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-bold text-foreground group-hover:text-primary transition-colors">
                    {item.q}
                  </h3>
                  <p className="mt-2 text-muted-foreground">{item.a}</p>
                </div>
              </div>
            </EventCard>
          ))}
        </div>
      </div>
    </section>
  );
}
