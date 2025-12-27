export function Footer() {
  return (
    <footer className="py-12 border-t border-border">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <p className="text-sm text-muted-foreground/60">
          © {new Date().getFullYear()} Ramadanlys · Nørrebro, København
        </p>
      </div>
    </footer>
  );
}
