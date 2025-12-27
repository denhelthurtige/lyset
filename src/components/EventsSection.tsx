import ramadanlys from "@/assets/events/ramadanlys.jpg";
import ramadanmarked from "@/assets/events/ramadanmarked.png";
import langbordsmiddag from "@/assets/events/langbordsmiddag.png";

const events = [
  {
    image: ramadanlys,
    title: "Ramadanlys",
    subtitle: "Når lyset tændes, samles vi.",
  },
  {
    image: ramadanmarked,
    title: "Ramadanmarked",
    subtitle: "Stemning, inspiration og fællesskab.",
  },
  {
    image: langbordsmiddag,
    title: "Langbordsmiddag",
    subtitle: "Fælles iftar – ét bord, mange mennesker.",
  },
];

export function EventsSection() {
  return (
    <section id="arrangementer" className="py-20 md:py-32">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-4 md:gap-6">
          {events.map((event, idx) => (
            <div 
              key={idx} 
              className="group relative aspect-[3/4] overflow-hidden rounded-2xl"
            >
              <img
                src={event.image}
                alt={event.title}
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
              />
              {/* Soft gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-background/95 via-background/30 to-transparent" />
              
              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                <h3 className="text-2xl md:text-3xl font-display text-foreground tracking-wide">
                  {event.title}
                </h3>
                <p className="mt-2 text-muted-foreground font-light">
                  {event.subtitle}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
