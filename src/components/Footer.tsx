import { CONFIG } from "@/config/event";
import { EventButton } from "@/components/ui/event-button";
import { Sparkles, MapPin, Ticket } from "lucide-react";

export function Footer() {
  const coheraReady = !CONFIG.coheraLink.includes("TODO");

  return (
    <footer className="border-t border-border py-10">
      <div className="max-w-[1050px] mx-auto px-5">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-primary" />
              <h3 className="font-bold text-lg">{CONFIG.eventName}</h3>
            </div>
            <p className="mt-2 text-muted-foreground leading-relaxed">
              {CONFIG.tagline}
            </p>
          </div>

          <div>
            <div className="flex items-center gap-2">
              <MapPin className="w-5 h-5 text-primary" />
              <h3 className="font-bold text-lg">Sted</h3>
            </div>
            <p className="mt-2 text-muted-foreground">{CONFIG.locationName}</p>
            <p className="text-muted-foreground">{CONFIG.address}</p>
          </div>

          <div>
            <div className="flex items-center gap-2">
              <Ticket className="w-5 h-5 text-primary" />
              <h3 className="font-bold text-lg">Tilmelding</h3>
            </div>
            <p className="mt-2 text-muted-foreground">Billetter via Cohera.</p>
            <div className="mt-3">
              <EventButton asChild size="sm">
                <a
                  href={coheraReady ? CONFIG.coheraLink : "https://coheraconnect.com"}
                  target="_blank"
                  rel="noreferrer"
                >
                  Gå til Cohera
                </a>
              </EventButton>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-border">
          <p className="text-sm text-muted-foreground/60">
            © {new Date().getFullYear()} Ramadanlys. Version 0.1 — ultra-simpel og klar til iteration.
          </p>
        </div>
      </div>
    </footer>
  );
}
