import { CONFIG } from "@/config/event";
import { Star, Moon } from "lucide-react";

export function Navigation() {
  const coheraReady = !CONFIG.coheraLink.includes("TODO");

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-background/50">
      <div className="max-w-6xl mx-auto px-6 py-5">
        <div className="flex items-center justify-between">
          <a 
            href="#" 
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="flex items-center gap-2 cursor-pointer"
          >
            <Star className="w-5 h-5 text-primary fill-primary" />
            <span className="font-display text-xl tracking-wide text-foreground">
              Ramadanlys
            </span>
          </a>

          <a
            href={coheraReady ? CONFIG.coheraLink : "https://coheraconnect.com"}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 px-4 py-2 text-sm font-medium bg-pink-500 text-white rounded-full hover:bg-pink-600 transition-colors duration-300"
          >
            <Moon className="w-4 h-4" />
            Tilmelding
          </a>
        </div>
      </div>
    </nav>
  );
}
