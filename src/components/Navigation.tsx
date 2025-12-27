import { CONFIG } from "@/config/event";

export function Navigation() {
  const coheraReady = !CONFIG.coheraLink.includes("TODO");

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-background/50">
      <div className="max-w-6xl mx-auto px-6 py-5">
        <div className="flex items-center justify-between">
          <span className="font-display text-xl tracking-wide text-foreground">
            Ramadanlys
          </span>

          <a
            href={coheraReady ? CONFIG.coheraLink : "https://coheraconnect.com"}
            target="_blank"
            rel="noreferrer"
            className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300"
          >
            Events & tilmelding
          </a>
        </div>
      </div>
    </nav>
  );
}
