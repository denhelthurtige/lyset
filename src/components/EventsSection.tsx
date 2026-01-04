import ramadanlys from "@/assets/events/ramadanlys.png";
import ramadanmarked from "@/assets/events/ramadanmarked.png";
import langbordsmiddag from "@/assets/events/langbordsmiddag.png";

const COHERA_LINK = "https://coheraconnect.com/organization/ab65c34d-6db0-4f4f-8563-1c95d1ee59ba";

const events = [
  {
    image: ramadanlys,
    title: "Ramadanlys",
    subtitle: "Tænding af lyset. Ét fælles øjeblik.",
  },
  {
    image: ramadanmarked,
    title: "Ramadanmarked",
    subtitle: "Liv, bevægelse og ramadanstemning.",
  },
  {
    image: langbordsmiddag,
    title: "Ramadan Langbordsmiddag",
    subtitle: "Ét bord. Mange mennesker.",
    large: true,
  },
];

export function EventsSection() {
  return (
    <section id="arrangementer" className="py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-6">
        {/* First two cards side by side */}
        <div className="grid md:grid-cols-2 gap-4 md:gap-6 mb-4 md:mb-6">
          {events.slice(0, 2).map((event, idx) => (
            <a 
              key={idx}
              href={COHERA_LINK}
              target="_blank"
              rel="noreferrer"
              className="group relative aspect-[4/5] overflow-hidden rounded-2xl cursor-pointer"
            >
              <img
                src={event.image}
                alt={event.title}
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/95 via-background/20 to-transparent" />
              
              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                <h3 className="text-2xl md:text-3xl font-display text-foreground tracking-wide">
                  {event.title}
                </h3>
                <p className="mt-2 text-muted-foreground font-light text-sm md:text-base">
                  {event.subtitle}
                </p>
              </div>
            </a>
          ))}
        </div>
        
        {/* Large third card */}
        <a 
          href={COHERA_LINK}
          target="_blank"
          rel="noreferrer"
          className="group relative aspect-[16/9] md:aspect-[21/9] overflow-hidden rounded-2xl block cursor-pointer"
        >
          <img
            src={events[2].image}
            alt={events[2].title}
            className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/95 via-background/20 to-transparent" />
          
          <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10">
            <h3 className="text-3xl md:text-4xl font-display text-foreground tracking-wide">
              {events[2].title}
            </h3>
            <p className="mt-2 text-muted-foreground font-light">
              {events[2].subtitle}
            </p>
          </div>
        </a>
      </div>
    </section>
  );
}
