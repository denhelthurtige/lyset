import { useState, useMemo } from "react";
import { CONFIG } from "@/config/event";
import { EventCard, EventCardTitle } from "@/components/ui/event-card";
import { EventBadge } from "@/components/ui/event-badge";
import { EventButton } from "@/components/ui/event-button";
import { Copy, Check, Calendar, MapPin, Clock, Users } from "lucide-react";

export function HeroSection() {
  const [copied, setCopied] = useState(false);
  const coheraReady = !CONFIG.coheraLink.includes("TODO");

  const shareText = useMemo(() => {
    const url = typeof window !== "undefined" ? window.location.href : "ramadanlys.dk";
    return `${CONFIG.eventName} — ${CONFIG.dateLabel}\n${CONFIG.locationName}, ${CONFIG.address}\nMarked: ${CONFIG.marketTime}\nProgram: ${CONFIG.programTime}\nBilletter: ${CONFIG.coheraLink.includes("TODO") ? url : CONFIG.coheraLink}`;
  }, []);

  async function copyShare() {
    try {
      await navigator.clipboard.writeText(shareText);
      setCopied(true);
      setTimeout(() => setCopied(false), 1200);
    } catch {
      alert("Kunne ikke kopiere. Markér teksten manuelt.");
    }
  }

  return (
    <section className="py-12 animate-fade-in">
      <div className="max-w-[1050px] mx-auto px-5">
        <div className="grid md:grid-cols-2 gap-5">
          {/* Main Hero Card */}
          <EventCard className="relative overflow-hidden">
            {/* Glow effect */}
            <div className="absolute -top-20 -right-20 w-40 h-40 bg-primary/20 rounded-full blur-3xl animate-pulse-glow" />
            
            <div className="relative">
              <EventBadge>
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                Åben for offentligheden · København
              </EventBadge>

              <h1 className="mt-4 text-4xl md:text-5xl font-display font-bold tracking-tight leading-tight">
                {CONFIG.eventName}
              </h1>

              <p className="mt-4 text-muted-foreground text-lg leading-relaxed">
                {CONFIG.tagline}
              </p>

              <div className="mt-5 space-y-2 text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-primary" />
                  <span className="text-foreground font-medium">{CONFIG.dateLabel}</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-primary" />
                  <span>{CONFIG.locationName} · {CONFIG.address}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-primary" />
                  <span>
                    Marked: <span className="text-foreground font-medium">{CONFIG.marketTime}</span> · 
                    Program: <span className="text-foreground font-medium">{CONFIG.programTime}</span>
                  </span>
                </div>
                <div className="text-sm mt-2">
                  Lys tændes {CONFIG.lightsOnTime} · Iftar {CONFIG.maghribTime}
                </div>
              </div>

              <div className="mt-6 flex flex-wrap gap-3">
                <EventButton asChild>
                  <a
                    href={coheraReady ? CONFIG.coheraLink : "https://coheraconnect.com"}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Tilmelding & billetter
                  </a>
                </EventButton>

                <EventButton variant="secondary" asChild>
                  <a href="#program">Se program</a>
                </EventButton>

                <EventButton variant="secondary" onClick={copyShare}>
                  {copied ? (
                    <>
                      <Check className="w-4 h-4" />
                      Kopieret
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4" />
                      Del event
                    </>
                  )}
                </EventButton>
              </div>

              <p className="mt-4 text-xs text-muted-foreground">
                Billetter håndteres via Cohera (inkl. betaling og bekræftelse).
              </p>
            </div>
          </EventCard>

          {/* Overview Card */}
          <EventCard subtle className="space-y-4">
            <EventCardTitle className="text-lg">Kort overblik</EventCardTitle>

            <div className="space-y-3">
              <EventCard subtle className="p-4">
                <div className="flex items-center gap-3">
                  <Users className="w-5 h-5 text-primary" />
                  <div>
                    <p className="text-xs text-muted-foreground">Gæster</p>
                    <p className="text-xl font-bold">{CONFIG.expectedGuests}</p>
                  </div>
                </div>
              </EventCard>

              <EventCard subtle className="p-4">
                <div>
                  <p className="text-xs text-muted-foreground">Middag</p>
                  <p className="text-xl font-bold">{CONFIG.dinnerPrice}</p>
                  <p className="text-sm text-muted-foreground mt-1">
                    Menu: {CONFIG.dinnerMenu.join(", ")}
                  </p>
                </div>
              </EventCard>

              <EventCard subtle className="p-4">
                <p className="text-xs text-muted-foreground">Tidspunkter</p>
                <div className="mt-2 space-y-1 text-sm text-muted-foreground">
                  <p>Marked: <span className="text-foreground font-medium">{CONFIG.marketTime}</span></p>
                  <p>Program: <span className="text-foreground font-medium">{CONFIG.programTime}</span></p>
                  <p>Iftar: <span className="text-foreground font-medium">{CONFIG.maghribTime}</span></p>
                </div>
              </EventCard>
            </div>

            <p className="text-sm text-muted-foreground leading-relaxed">
              Programmet opdateres løbende. Gem siden og del den videre — her finder du altid den nyeste info.
            </p>
          </EventCard>
        </div>
      </div>
    </section>
  );
}
