import childrenChoir from "@/assets/gallery/children-choir.png";
import ramadanLights from "@/assets/gallery/ramadan-lights.png";
import iftarDinner from "@/assets/gallery/iftar-dinner.png";

const events = [
  {
    image: ramadanLights,
    title: "Ramadanlys",
    subtitle: "Når lyset tændes, samles vi.",
  },
  {
    image: childrenChoir,
    title: "Ramadanmarked",
    subtitle: "Stemning, inspiration og fællesskab.",
  },
  {
    image: iftarDinner,
    title: "Langbordsmiddag",
    subtitle: "Fælles iftar – ét bord, mange mennesker.",
  },
];

export function EventsSection() {
  return (
    <section id="arrangementer" className="py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-6">
          {events.map((event, idx) => (
            <div 
              key={idx} 
              className="group relative aspect-[4/5] overflow-hidden rounded-2xl"
            >
              <img
                src={event.image}
                alt={event.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
              
              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                <h3 className="text-xl md:text-2xl font-display font-bold text-foreground">
                  {event.title}
                </h3>
                <p className="mt-2 text-muted-foreground">
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
