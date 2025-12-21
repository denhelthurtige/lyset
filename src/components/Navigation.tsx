import { CONFIG } from "@/config/event";
import { EventButton } from "@/components/ui/event-button";
import { Sparkles } from "lucide-react";

const navItems = [
  { label: "Galleri", id: "galleri" },
  { label: "Program", id: "program" },
  { label: "Billetter", id: "billetter" },
  { label: "Praktisk", id: "praktisk" },
  { label: "FAQ", id: "faq" },
];

export function Navigation() {
  const coheraReady = !CONFIG.coheraLink.includes("TODO");

  return (
    <nav className="sticky top-0 z-50 backdrop-blur-xl bg-background/75 border-b border-border">
      <div className="max-w-[1050px] mx-auto px-5 py-3">
        <div className="flex items-center justify-between gap-4 flex-wrap">
          {/* Logo / Wordmark */}
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-primary/16 border border-primary/24 flex items-center justify-center">
              <Sparkles className="w-4 h-4 text-primary" />
            </div>
            <span className="font-bold tracking-tight text-foreground">
              {CONFIG.eventName}
            </span>
          </div>

          {/* Nav Links */}
          <div className="flex items-center gap-2 flex-wrap">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className="px-3 py-2 rounded-xl text-sm text-muted-foreground hover:text-foreground hover:bg-white/5 border border-transparent hover:border-border transition-all duration-200"
              >
                {item.label}
              </a>
            ))}
            
            <EventButton asChild>
              <a
                href={coheraReady ? CONFIG.coheraLink : "#billetter"}
                target={coheraReady ? "_blank" : undefined}
                rel={coheraReady ? "noreferrer" : undefined}
              >
                Tilmelding & billetter
              </a>
            </EventButton>
          </div>
        </div>
      </div>
    </nav>
  );
}
