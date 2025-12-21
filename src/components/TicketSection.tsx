import { CONFIG } from "@/config/event";
import { EventCard } from "@/components/ui/event-card";
import { EventBadge } from "@/components/ui/event-badge";
import { EventButton } from "@/components/ui/event-button";
import { Instagram, Facebook, Ticket } from "lucide-react";

export function TicketSection() {
  const coheraReady = !CONFIG.coheraLink.includes("TODO");
  const instagramReady = !CONFIG.instagramLink.includes("TODO");
  const facebookReady = !CONFIG.facebookEventLink.includes("TODO");

  return (
    <section id="billetter" className="py-12">
      <div className="max-w-[1050px] mx-auto px-5">
        <h2 className="text-3xl font-display font-bold">Billetter</h2>
        <p className="mt-2 text-muted-foreground max-w-2xl">
          Billetter og betaling håndteres via Cohera.
        </p>

        <EventCard className="mt-6">
          <div className="flex justify-between items-start gap-4 flex-wrap">
            <div>
              <div className="flex items-center gap-3">
                <Ticket className="w-5 h-5 text-primary" />
                <h3 className="text-lg font-bold">Tilmelding & billetter</h3>
              </div>
              <p className="mt-2 text-muted-foreground">
                Billetter håndteres via Cohera (inkl. betaling og bekræftelse).
              </p>
            </div>
            <EventBadge variant="price">{CONFIG.dinnerPrice}</EventBadge>
          </div>

          <div className="mt-4 text-muted-foreground leading-relaxed">
            Middag/iftar starter ved maghrib{" "}
            <span className="text-foreground font-medium">{CONFIG.maghribTime}</span>.
            <br />
            Menu: {CONFIG.dinnerMenu.join(", ")}.
          </div>

          <div className="mt-5 flex flex-wrap gap-3">
            <EventButton asChild>
              <a
                href={coheraReady ? CONFIG.coheraLink : "https://coheraconnect.com"}
                target="_blank"
                rel="noreferrer"
              >
                Gå til Cohera (billetter)
              </a>
            </EventButton>

            <EventButton variant="secondary" asChild>
              <a
                href={instagramReady ? CONFIG.instagramLink : "https://instagram.com"}
                target="_blank"
                rel="noreferrer"
              >
                <Instagram className="w-4 h-4" />
                Instagram
              </a>
            </EventButton>

            <EventButton variant="secondary" asChild>
              <a
                href={facebookReady ? CONFIG.facebookEventLink : "https://facebook.com"}
                target="_blank"
                rel="noreferrer"
              >
                <Facebook className="w-4 h-4" />
                Facebook
              </a>
            </EventButton>
          </div>

          <p className="mt-4 text-xs text-muted-foreground">
            Tip: Når Cohera-siden er live, så del ramadanlys.dk som "infohub" og Cohera som "checkout".
          </p>
        </EventCard>
      </div>
    </section>
  );
}
