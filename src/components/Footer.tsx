import { Facebook, Instagram, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="py-16 border-t border-border/30">
      <div className="max-w-6xl mx-auto px-6 text-center space-y-4">
        <div className="flex justify-center gap-6">
          <a 
            href="https://facebook.com/ramadanlyset" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-muted-foreground/70 hover:text-primary transition-colors"
            aria-label="Facebook"
          >
            <Facebook size={24} />
          </a>
          <a 
            href="https://instagram.com/ramadanlyset" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-muted-foreground/70 hover:text-primary transition-colors"
            aria-label="Instagram"
          >
            <Instagram size={24} />
          </a>
          <a 
            href="mailto:info@ramadanlys.dk"
            className="text-muted-foreground/70 hover:text-primary transition-colors"
            aria-label="Email"
          >
            <Mail size={24} />
          </a>
        </div>
        <p className="text-sm text-muted-foreground/50 tracking-wide">
          © {new Date().getFullYear()} Ramadanlyset · 46135326 · Nørrebro, København
        </p>
      </div>
    </footer>
  );
}
