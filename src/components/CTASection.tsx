import { CONFIG } from "@/config/event";
import { EventButton } from "@/components/ui/event-button";
import { ArrowRight } from "lucide-react";

export function CTASection() {
  const coheraReady = !CONFIG.coheraLink.includes("TODO");

  return (
    <section className="py-24 md:py-32">
      <div className="max-w-xl mx-auto px-6 text-center">
        <EventButton asChild size="lg" className="text-base md:text-lg px-8 py-4">
          <a
            href={coheraReady ? CONFIG.coheraLink : "https://coheraconnect.com"}
            target="_blank"
            rel="noreferrer"
          >
            Se events & tilmelding på Cohera
            <ArrowRight className="w-5 h-5 ml-2" />
          </a>
        </EventButton>
      </div>
    </section>
  );
}
