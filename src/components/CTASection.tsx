import { CONFIG } from "@/config/event";

export function CTASection() {
  const coheraReady = !CONFIG.coheraLink.includes("TODO");

  return (
    <section className="py-28 md:py-40">
      <div className="max-w-xl mx-auto px-6 text-center">
        <a
          href={coheraReady ? CONFIG.coheraLink : "https://coheraconnect.com"}
          target="_blank"
          rel="noreferrer"
          className="inline-block px-8 py-3 text-lg font-medium bg-primary text-primary-foreground rounded-full hover:bg-primary/90 transition-colors duration-300"
        >
          Se events og deltag
        </a>
      </div>
    </section>
  );
}
