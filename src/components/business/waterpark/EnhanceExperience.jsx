import Image from "next/image";

export default function EnhanceExperience() {
  const experiences = [
    {
      title: "FINE DINE",
      image: "/images/business/waterpark/fine-dine.png", // Replace with your actual image paths
    },
    {
      title: "RESORT",
      image: "/images/business/waterpark/resort.png",
    },
    {
      title: "NIGHT POOL",
      image: "/images/business/waterpark/night-pool.png",
    },
    {
      title: "TOY STORE",
      image: "/images/business/waterpark/toy-store.png",
    },
  ];

  return (
    <section className="relative w-full py-16 md:py-24 overflow-hidden">
      {/* Background Image & Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/business/waterpark/experience-bg.png" // The darkened background image
          alt="Resort Background"
          fill
          className="object-cover"
        />
        {/* Dark gradient/overlay to ensure text and cards pop */}
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 md:px-8">
        {/* Section Heading */}
        <h2 className="text-2xl md:text-[40px] text-center text-white font-serif mb-10 md:mb-14 drop-shadow-md">
          Enhance Your Experience
        </h2>

        {/* Grid Layout:
          - grid-cols-2: Creates a 2x2 grid on mobile devices
          - md:grid-cols-4: Changes to a 1x4 grid on screens md (768px) and larger 
        */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 lg:gap-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg flex flex-col px-2 pt-2 md:px-4 md:pt-4 transition-transform hover:-translate-y-1 duration-300"
            >
              {/* Card Image Container (creates the framed effect) */}
              <div className="relative w-full aspect-square rounded-lg overflow-hidden">
                <Image
                  src={exp.image}
                  alt={exp.title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Card Text */}
              <div className="py-2 md:py-6 flex-grow flex items-center justify-center">
                <h3 className="text-[#111C55] font-medium text-[10px] sm:text-sm md:text-[20px] tracking-normal text-center">
                  {exp.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}