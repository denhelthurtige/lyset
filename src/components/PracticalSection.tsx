import { CONFIG } from "@/config/event";
import { EventCard } from "@/components/ui/event-card";
import { MapPin, Clock, Mail, Map } from "lucide-react";

export function PracticalSection() {
  const hasMap = !CONFIG.googleMapsEmbedSrc.includes("TODO");
  const emailReady = !CONFIG.generalContactEmail.includes("TODO");

  return (
    <section id="praktisk" className="py-12">
      <div className="max-w-[1050px] mx-auto px-5">
        <h2 className="text-3xl font-display font-bold">Praktisk info</h2>
        <p className="mt-2 text-muted-foreground max-w-2xl">
          Sted, tider og kort.
        </p>

        <div className="mt-6 grid md:grid-cols-2 gap-5">
          <EventCard subtle>
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5 text-primary" />
              <h3 className="font-bold text-lg">Praktisk</h3>
            </div>

            <div className="mt-4 space-y-2 text-muted-foreground leading-relaxed">
              <p className="text-foreground font-medium">{CONFIG.dateLabel}</p>
              <p>Marked: {CONFIG.marketTime}</p>
              <p>Program: {CONFIG.programTime}</p>
              <p>Lys tændes: {CONFIG.lightsOnTime}</p>
              <p>Iftar: {CONFIG.maghribTime}</p>

              <div className="pt-3 mt-3 border-t border-border">
                <div className="flex items-start gap-2">
                  <MapPin className="w-4 h-4 text-primary mt-1" />
                  <div>
                    <p className="text-foreground font-medium">{CONFIG.locationName}</p>
                    <p>{CONFIG.address}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-4 pt-4 border-t border-border">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Mail className="w-4 h-4" />
                <span>Kontakt: </span>
                {emailReady ? (
                  <a 
                    href={`mailto:${CONFIG.generalContactEmail}`}
                    className="text-accent hover:underline"
                  >
                    {CONFIG.generalContactEmail}
                  </a>
                ) : (
                  <span className="text-muted-foreground/60">(indsæt email i config)</span>
                )}
              </div>
            </div>
          </EventCard>

          <EventCard subtle>
            <div className="flex items-center gap-2">
              <Map className="w-5 h-5 text-primary" />
              <h3 className="font-bold text-lg">Kort</h3>
            </div>

            <div className="mt-4">
              {hasMap ? (
                <iframe
                  title="Event location map"
                  src={CONFIG.googleMapsEmbedSrc}
                  width="100%"
                  height="260"
                  className="border-0 rounded-xl"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              ) : (
                <div className="bg-secondary/50 rounded-xl p-6 text-center">
                  <Map className="w-12 h-12 text-muted-foreground/50 mx-auto mb-3" />
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Indsæt Google Maps embed link i{" "}
                    <code className="bg-background px-1.5 py-0.5 rounded text-xs">
                      CONFIG.googleMapsEmbedSrc
                    </code>
                    <br />
                    <span className="text-xs">
                      Google Maps → Del → Integrer et kort → kopiér <code>src</code>
                    </span>
                  </p>
                </div>
              )}
            </div>
          </EventCard>
        </div>
      </div>
    </section>
  );
}
