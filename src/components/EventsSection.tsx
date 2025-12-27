import { Moon, ShoppingBag, Utensils } from "lucide-react";
import { EventCard } from "@/components/ui/event-card";

const events = [
  {
    icon: Moon,
    emoji: "🌙",
    title: "Ramadanlys – Lysceremoni & fællesskab",
    description: `Vi samles for at tænde Ramadan-lysskiltet og markere begyndelsen på Ramadanen. 
      Lysceremonien er et fælles øjeblik, hvor vi sammen fejrer værdier som fællesskab, håb og nærvær. 
      Der vil være taler, fællessang, børneindslag og aktiviteter, som skaber en varm og inkluderende 
      stemning for både børn og voksne.`,
  },
  {
    icon: ShoppingBag,
    emoji: "✨",
    title: "Ramadanmarked",
    description: `Tidligere på dagen åbner Ramadanmarkedet – et levende og hyggeligt marked med boder, 
      inspiration, aktiviteter samt kaffe og kage. Markedet er åbent for alle og skaber en uformel ramme, 
      hvor man kan komme og gå og opleve ramadanstemningen i fællesskab.`,
  },
  {
    icon: Utensils,
    emoji: "🍽️",
    title: "Langbordsmiddag – Fælles iftar",
    description: `Når solen går ned, samles vi til fælles iftar ved langborde. Langbordsmiddagen er et 
      roligt og samlende øjeblik, hvor vi deler et måltid og afslutter dagen sammen. Menuen består af 
      klassiske retter, og middagen er familievenlig og åben for alle med billet.`,
  },
];

export function EventsSection() {
  return (
    <section id="arrangementer" className="py-16">
      <div className="max-w-[1050px] mx-auto px-5">
        <h2 className="text-2xl md:text-3xl font-display font-bold text-center mb-10">
          Tre arrangementer – én dag
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {events.map((event, idx) => (
            <EventCard 
              key={idx} 
              subtle 
              className="group hover:border-primary/30 transition-all duration-300 flex flex-col"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="text-2xl">{event.emoji}</span>
                <event.icon className="w-5 h-5 text-primary" />
              </div>
              
              <h3 className="text-lg font-display font-bold mb-3 group-hover:text-primary transition-colors">
                {event.title}
              </h3>
              
              <p className="text-muted-foreground leading-relaxed text-sm flex-1">
                {event.description}
              </p>
            </EventCard>
          ))}
        </div>
      </div>
    </section>
  );
}
