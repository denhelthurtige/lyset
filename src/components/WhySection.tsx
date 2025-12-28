import iftarDinner from "@/assets/gallery/iftar-dinner.png";

export function WhySection() {
  return (
    <section className="py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* Image */}
          <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
            <img
              src={iftarDinner}
              alt="Fællesskab ved Ramadanlys"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Text Content */}
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-display tracking-wide text-foreground">
              Hvorfor Ramadanlys
            </h2>
            
            <div className="space-y-5 text-muted-foreground leading-relaxed">
              <p>
                Ramadanlys er skabt for at give plads til de øjeblikke, der ellers forsvinder i hverdagen.
                Øjeblikke, hvor vi samles, deler tid og skaber fælles minder.
              </p>
              
              <p>
                Ramadanen rummer værdier som nærvær, gavmildhed og refleksion. Med Ramadanlys ønsker vi at bringe disse værdier ind i byens rum – åbent og inkluderende – så de kan deles på tværs af baggrunde, generationer og traditioner.
              </p>
              
              <p>
                Som et tilbagevendende arrangement vender Ramadanlys tilbage hvert år for at tænde lyset, samle mennesker og minde os om betydningen af fællesskab og samhørighed.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
