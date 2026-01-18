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
          className="inline-block px-8 py-3 text-lg font-medium bg-pink-500 text-white rounded-full hover:bg-pink-600 transition-colors duration-300"
        >
          Se events og deltag
        </a>
      </div>
    </section>
  );
}
