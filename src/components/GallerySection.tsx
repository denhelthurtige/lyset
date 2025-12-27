import { useState } from "react";
import { X } from "lucide-react";

import childrenChoir from "@/assets/gallery/children-choir.png";
import ramadanLights from "@/assets/gallery/ramadan-lights.png";
import iftarDinner from "@/assets/gallery/iftar-dinner.png";
import venueWide from "@/assets/gallery/venue-wide.png";

const galleryImages = [
  { src: childrenChoir, alt: "Børnekor synger" },
  { src: ramadanLights, alt: "Ramadanlyset tændes" },
  { src: iftarDinner, alt: "Fælles iftar" },
  { src: venueWide, alt: "Multisalen" },
];

export function GallerySection() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  return (
    <section id="galleri" className="py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-6">
        {/* Masonry-style grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
          {galleryImages.map((image, idx) => (
            <button
              key={idx}
              onClick={() => setSelectedImage(idx)}
              className={`group relative overflow-hidden rounded-xl transition-all duration-500 hover:shadow-2xl ${
                idx === 0 ? "md:col-span-2 md:row-span-2 aspect-square" : "aspect-square"
              }`}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-background/0 group-hover:bg-background/20 transition-colors duration-300" />
            </button>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {selectedImage !== null && (
        <div
          className="fixed inset-0 z-50 bg-background/95 backdrop-blur-xl flex items-center justify-center p-6"
          onClick={() => setSelectedImage(null)}
        >
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-6 right-6 p-3 rounded-full bg-card border border-border hover:bg-secondary transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
          
          <img
            src={galleryImages[selectedImage].src}
            alt={galleryImages[selectedImage].alt}
            className="max-w-full max-h-[85vh] rounded-xl shadow-2xl"
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
                className={`w-2 h-2 rounded-full transition-all ${
                  selectedImage === idx
                    ? "bg-primary w-6"
                    : "bg-muted-foreground/40 hover:bg-muted-foreground"
                }`}
              />
            ))}
          </div>
        </div>
      )}
    </section>
  );
}
