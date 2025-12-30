export function Footer() {
  return (
    <footer className="py-16 border-t border-border/30">
      <div className="max-w-6xl mx-auto px-6 text-center space-y-3">
        <p className="text-sm text-muted-foreground/70 tracking-wide">
          Kontakt:{" "}
          <a 
            href="mailto:info@ramadanlys.dk" 
            className="hover:text-primary transition-colors"
          >
            info@ramadanlys.dk
          </a>
        </p>
        <p className="text-sm text-muted-foreground/50 tracking-wide">
          © {new Date().getFullYear()} Ramadanlyset · CVR: 46135326 · Nørrebro, København
        </p>
      </div>
    </footer>
  );
}
