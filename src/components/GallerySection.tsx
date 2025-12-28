import childrenChoir from "@/assets/gallery/children-choir.png";
import ramadanLights from "@/assets/gallery/ramadan-lights.png";
import iftarDinner from "@/assets/gallery/iftar-dinner.png";
import venueWide from "@/assets/gallery/venue-wide.png";

const galleryImages = [
  { src: venueWide },
  { src: childrenChoir },
  { src: ramadanLights },
  { src: iftarDinner },
];

export function GallerySection() {
  return (
    <section id="galleri" className="py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
          {galleryImages.map((image, idx) => (
            <div
              key={idx}
              className="group relative overflow-hidden rounded-xl aspect-square"
            >
              <img
                src={image.src}
                alt=""
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-background/0 group-hover:bg-background/10 transition-colors duration-500" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
