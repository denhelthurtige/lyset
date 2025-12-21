import { useState } from "react";
import { EventCard } from "@/components/ui/event-card";
import { Camera, X } from "lucide-react";

import childrenChoir from "@/assets/gallery/children-choir.png";
import ramadanLights from "@/assets/gallery/ramadan-lights.png";
import iftarDinner from "@/assets/gallery/iftar-dinner.png";
import venueWide from "@/assets/gallery/venue-wide.png";

const galleryImages = [
  {
    src: childrenChoir,
    alt: "Børnekor synger ramadansange",
    caption: "Børnekoret synger ved Nørrebrohallen",
  },
  {
    src: ramadanLights,
    alt: "Glædelig Ramadan lys ved Den Røde Plads",
    caption: "Ramadanlysene tændes på Den Røde Plads",
  },
  {
    src: iftarDinner,
    alt: "Iftar middag i Multisalen",
    caption: "Fælles iftar-middag",
  },
  {
    src: venueWide,
    alt: "Multisalen fyldt med gæster",
    caption: "Over 350 gæster samlet til iftar",
  },
];

export function GallerySection() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  return (
    <section id="galleri" className="py-12">
      <div className="max-w-[1050px] mx-auto px-5">
        <div className="flex items-center gap-3 mb-2">
          <Camera className="w-6 h-6 text-primary" />
          <h2 className="text-3xl font-display font-bold">Sidste år</h2>
        </div>
        <p className="text-muted-foreground max-w-2xl mb-8">
          Billeder fra Ramadanlys 2025 — en uforglemmelig dag med fællesskab, børnekor og iftar.
        </p>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {galleryImages.map((image, idx) => (
            <button
              key={idx}
              onClick={() => setSelectedImage(idx)}
              className="group relative aspect-square overflow-hidden rounded-xl border border-border bg-card hover:border-primary/50 transition-all duration-300"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-3">
                  <p className="text-sm font-medium text-foreground">{image.caption}</p>
                </div>
              </div>
            </button>
          ))}
        </div>

        {/* Featured Image */}
        <EventCard subtle className="mt-6 p-0 overflow-hidden">
          <div className="relative aspect-[21/9] overflow-hidden">
            <img
              src={venueWide}
              alt="Panorama af Ramadanlys arrangement"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-transparent to-transparent">
              <div className="absolute bottom-0 left-0 p-6 max-w-md">
                <p className="text-xs text-primary font-medium uppercase tracking-wider mb-2">
                  Ramadanlys 2025
                </p>
                <h3 className="text-xl font-display font-bold text-foreground mb-2">
                  En aften med fællesskab
                </h3>
                <p className="text-sm text-muted-foreground">
                  Over 350 gæster samlede sig til iftar i Multisalen ved Den Røde Plads.
                </p>
              </div>
            </div>
          </div>
        </EventCard>
      </div>

      {/* Lightbox Modal */}
      {selectedImage !== null && (
        <div
          className="fixed inset-0 z-50 bg-background/95 backdrop-blur-xl flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-6 right-6 p-2 rounded-full bg-card border border-border hover:bg-secondary transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
          
          <div className="max-w-4xl w-full">
            <img
              src={galleryImages[selectedImage].src}
              alt={galleryImages[selectedImage].alt}
              className="w-full h-auto rounded-xl border border-border shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
            <p className="mt-4 text-center text-foreground font-medium">
              {galleryImages[selectedImage].caption}
            </p>
          </div>

          {/* Navigation */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
            {galleryImages.map((_, idx) => (
              <button
                key={idx}
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedImage(idx);
                }}
                className={`w-2 h-2 rounded-full transition-all ${
                  selectedImage === idx
                    ? "bg-primary w-6"
                    : "bg-muted-foreground/50 hover:bg-muted-foreground"
                }`}
              />
            ))}
          </div>
        </div>
      )}
    </section>
  );
}
