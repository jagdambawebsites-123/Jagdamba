import Image from "next/image";
import Link from "next/link";

export default function Throwback() {
  // Placeholders for your gallery images. Replace these with your actual file paths.
  const row1Images = [
    "/images/business/waterpark/throwBack/gallery-1.png",
    "/images/business/waterpark/throwBack/gallery-2.png",
    "/images/business/waterpark/throwBack/gallery-3.png",
    "/images/business/waterpark/throwBack/gallery-4.png",
    "/images/business/waterpark/throwBack/gallery-5.png",
  ];

  const row2Images = [
    "/images/business/waterpark/throwBack/gallery-6.png",
    "/images/business/waterpark/throwBack/gallery-7.png",
    "/images/business/waterpark/throwBack/gallery-8.png",
    "/images/business/waterpark/throwBack/gallery-9.png",
    "/images/business/waterpark/throwBack/gallery-10.png",
  ];

  return (
    <section className="relative w-full py-20 bg-[#F5F5F5] overflow-hidden flex flex-col items-center">
      {/* 3D Duck Graphic - Top Left */}
      <div className="absolute top-4 left-0 md:top-10 md:left-0 w-24 h-24 md:w-40 md:h-40 z-20 pointer-events-none drop-shadow-2xl">
        <Image
          src="/images/business/waterpark/reserveParties/3d-duck.png" // Reusing the duck from the previous section
          alt="Duck Mascot"
          fill
          className="object-contain"
        />
      </div>

      {/* Zigzag Decor - Top Right */}
      <div className="absolute top-8 -right-0 md:-top-0 md:right-0 w-32 h-16 md:w-48 md:h-20 z-10 pointer-events-none opacity-50">
        <Image
          src="/images/business/waterpark/throwBack/zig-zag-waves.svg" // Make sure to add this SVG asset
          alt="Decorative Zigzag"
          fill
          className="object-contain object-right"
        />
      </div>

      {/* Heading */}
      <div className="w-full relative z-10 flex justify-center mb-12 md:mb-16">
        <h2 className="text-3xl md:text-4xl text-[#CA9015] font-serif font-bold text-center">
          Throw You Back
        </h2>
      </div>

      {/* Gallery Section */}
      <div className="w-full flex flex-col gap-4 md:gap-6 px-4 md:px-0 z-10">
        {/* Row 1 */}
        <div className="flex w-full gap-4 md:gap-6 overflow-x-auto hide-scrollbar pb-2 md:justify-center px-4 md:px-8">
          {row1Images.map((src, index) => (
            <div
              key={`row1-${index}`}
              className="relative flex-shrink-0 w-[240px] h-[160px] md:w-[320px] md:h-[220px] rounded-2xl overflow-hidden shadow-md"
            >
              <Image
                src={src}
                alt={`Gallery image ${index + 1}`}
                fill
                className="object-cover hover:scale-105 transition-transform duration-500 ease-out"
              />
            </div>
          ))}
        </div>

        {/* Row 2 */}
        <div className="flex w-full gap-4 md:gap-6 overflow-x-auto hide-scrollbar pb-2 md:justify-center px-4 md:px-8">
          {row2Images.map((src, index) => (
            <div
              key={`row2-${index}`}
              className="relative flex-shrink-0 w-[240px] h-[160px] md:w-[320px] md:h-[220px] rounded-2xl overflow-hidden shadow-md"
            >
              <Image
                src={src}
                alt={`Gallery image ${index + 6}`}
                fill
                className="object-cover hover:scale-105 transition-transform duration-500 ease-out"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Call to Action */}
      <div className="relative z-10 mt-16 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
        <span className="text-[#464646] text-xl md:text-2xl font-serif">
          To Know More, Visit:
        </span>
        <Link 
          href="https://jagdambafunworld.com" 
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 px-6 py-2 border-2 border-[#2b3954] rounded-full text-[#2b3954] text-sm md:text-base font-medium hover:bg-[#2b3954] hover:text-white transition-all duration-300"
        >
          jagdambafunworld.com
          {/* Using a simple SVG arrow to avoid requiring external icon libraries */}
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            fill="none" 
            viewBox="0 0 24 24" 
            strokeWidth={2.5} 
            stroke="currentColor" 
            className="w-4 h-4"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
          </svg>
        </Link>
      </div>

      {/* Custom CSS to hide scrollbar but keep functionality */}
      <style dangerouslySetInnerHTML={{ __html: `
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}} />
    </section>
  );
}