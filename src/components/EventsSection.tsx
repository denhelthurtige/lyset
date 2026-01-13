import ramadanlys from "@/assets/events/ramadanlys.png";
import ramadanmarked from "@/assets/events/ramadanmarked.png";
import langbordsmiddag from "@/assets/events/langbordsmiddag.png";

const events = [
  {
    image: ramadanlys,
    title: "Ramadanlys",
    subtitle: "Tænding af lyset. Ét fælles øjeblik.",
    link: "https://www.facebook.com/people/Ramadanlys/61585694591769/",
  },
  {
    image: ramadanmarked,
    title: "Ramadanmarked",
    subtitle: "Liv, bevægelse og ramadanstemning.",
    link: "https://www.facebook.com/people/Ramadanlys/61585694591769/",
  },
  {
    image: langbordsmiddag,
    title: "Ramadan Langbordsmiddag",
    subtitle: "Ét bord. Mange mennesker.",
    link: "https://billetto.dk/e/ramadan-langbordsmiddag-billetter-1789248?bref=eyJzIjoib3JnYW5pc2VyIiwibSI6InNoYXJlIiwiYyI6Im1hbmFnZV92aXNpdCIsImNvIjoiMSIsInQiOjE3NjgzMjM5NDB9",
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
              href={event.link}
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
          href={events[2].link}
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
              Ramadan<br />Langbordsmiddag
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
