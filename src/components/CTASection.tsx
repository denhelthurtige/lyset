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
          className="inline-block text-lg md:text-xl font-display tracking-wide text-primary border-b border-primary/40 pb-1 hover:border-primary transition-colors duration-300"
        >
          Se events & tilmelding på Cohera
        </a>
      </div>
    </section>
  );
}
