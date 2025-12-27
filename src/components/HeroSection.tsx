import { useState, useMemo } from "react";
import { CONFIG } from "@/config/event";
import { EventCard } from "@/components/ui/event-card";
import { EventBadge } from "@/components/ui/event-badge";
import { EventButton } from "@/components/ui/event-button";
import { Copy, Check, Calendar, MapPin } from "lucide-react";
import { toast } from "sonner";

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
      toast.success("Kopieret til udklipsholder");
      setTimeout(() => setCopied(false), 1200);
    } catch {
      toast.error("Kunne ikke kopiere. Markér teksten manuelt.");
    }
  }

  return (
    <section className="py-16 animate-fade-in">
      <div className="max-w-[800px] mx-auto px-5 text-center">
        <EventBadge className="inline-flex">
          <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
          Åben for offentligheden · Nørrebro, København
        </EventBadge>

        <h1 className="mt-6 text-4xl md:text-5xl font-display font-bold tracking-tight leading-tight">
          {CONFIG.eventName}
        </h1>

        <p className="mt-4 text-muted-foreground text-lg leading-relaxed max-w-xl mx-auto">
          {CONFIG.tagline}
        </p>

        <div className="mt-6 flex flex-wrap justify-center gap-4 text-muted-foreground">
          <div className="flex items-center gap-2">
            <Calendar className="w-4 h-4 text-primary" />
            <span className="text-foreground font-medium">{CONFIG.dateLabel}</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4 text-primary" />
            <span>{CONFIG.locationName}</span>
          </div>
        </div>

        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <EventButton asChild>
            <a
              href={coheraReady ? CONFIG.coheraLink : "#billetter"}
              target={coheraReady ? "_blank" : undefined}
              rel={coheraReady ? "noreferrer" : undefined}
            >
              Tilmelding & billetter
            </a>
          </EventButton>

          <EventButton variant="secondary" asChild>
            <a href="#arrangementer">Se arrangementer</a>
          </EventButton>

          <EventButton variant="ghost" onClick={copyShare}>
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
      </div>
    </section>
  );
}
