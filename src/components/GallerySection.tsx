import { useState } from "react";
import { X } from "lucide-react";

import childrenChoir from "@/assets/gallery/children-choir.png";
import ramadanLights from "@/assets/gallery/ramadan-lights.png";
import iftarDinner from "@/assets/gallery/iftar-dinner.png";
import venueWide from "@/assets/gallery/venue-wide.png";

const galleryImages = [
  { src: venueWide, alt: "Fællesskab i Multisalen" },
  { src: childrenChoir, alt: "Børnekor synger" },
  { src: ramadanLights, alt: "Ramadanlyset tændes" },
  { src: iftarDinner, alt: "Fælles iftar" },
];

export function GallerySection() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  return (
    <section id="galleri" className="py-20 md:py-32">
      <div className="max-w-6xl mx-auto px-6">
        {/* Grid with varied sizes */}
        <div className="grid grid-cols-6 gap-3 md:gap-4">
          {/* Large featured image */}
          <button
            onClick={() => setSelectedImage(0)}
            className="col-span-6 md:col-span-4 group relative overflow-hidden rounded-2xl aspect-[16/9]"
          >
            <img
              src={galleryImages[0].src}
              alt={galleryImages[0].alt}
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-background/0 group-hover:bg-background/10 transition-colors duration-500" />
          </button>

          {/* Side stack */}
          <div className="col-span-6 md:col-span-2 grid grid-cols-2 md:grid-cols-1 gap-3 md:gap-4">
            {galleryImages.slice(1, 3).map((image, idx) => (
              <button
                key={idx}
                onClick={() => setSelectedImage(idx + 1)}
                className="group relative overflow-hidden rounded-2xl aspect-square md:aspect-[4/3]"
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-background/0 group-hover:bg-background/10 transition-colors duration-500" />
              </button>
            ))}
          </div>

          {/* Bottom image */}
          <button
            onClick={() => setSelectedImage(3)}
            className="col-span-6 group relative overflow-hidden rounded-2xl aspect-[21/9]"
          >
            <img
              src={galleryImages[3].src}
              alt={galleryImages[3].alt}
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-background/0 group-hover:bg-background/10 transition-colors duration-500" />
          </button>
        </div>
      </div>

      {/* Lightbox */}
      {selectedImage !== null && (
        <div
          className="fixed inset-0 z-50 bg-background/98 backdrop-blur-xl flex items-center justify-center p-6"
          onClick={() => setSelectedImage(null)}
        >
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-8 right-8 p-3 rounded-full border border-border/50 text-muted-foreground hover:text-foreground hover:border-border transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
          
          <img
            src={galleryImages[selectedImage].src}
            alt={galleryImages[selectedImage].alt}
            className="max-w-full max-h-[85vh] rounded-xl"
            onClick={(e) => e.stopPropagation()}
          />

          {/* Dots */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
            {galleryImages.map((_, idx) => (
              <button
                key={idx}
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedImage(idx);
                }}
                className={`w-1.5 h-1.5 rounded-full transition-all ${
                  selectedImage === idx
                    ? "bg-primary w-6"
                    : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                }`}
              />
            ))}
          </div>
        </div>
      )}
    </section>
  );
}
