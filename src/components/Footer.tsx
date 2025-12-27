export function Footer() {
  return (
    <footer className="py-16 border-t border-border/30">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <p className="text-sm text-muted-foreground/50 tracking-wide">
          © {new Date().getFullYear()} Ramadanlys · Nørrebro, København
        </p>
      </div>
    </footer>
  );
}
