import Image from "next/image";
import Link from "next/link";

export default function Throwback() {
  // Placeholders for your gallery images. Replace these with your actual file paths.
  const row1Images = [
    "/images/business/waterpark/throwback/gallery-1.png",
    "/images/business/waterpark/throwback/gallery-2.png",
    "/images/business/waterpark/throwback/gallery-3.png",
    "/images/business/waterpark/throwback/gallery-4.png",
    "/images/business/waterpark/throwback/gallery-5.png",
  ];

  const row2Images = [
    "/images/business/waterpark/throwback/gallery-6.png",
    "/images/business/waterpark/throwback/gallery-7.png",
    "/images/business/waterpark/throwback/gallery-8.png",
    "/images/business/waterpark/throwback/gallery-9.png",
    "/images/business/waterpark/throwback/gallery-10.png",
  ];

  return (
    <section className="relative w-full py-20 bg-[#F5F5F5] overflow-hidden flex flex-col items-center">
      {/* 3D Duck Graphic - Top Left */}
      <div className="absolute top-4 left-0 md:-top-5 md:left-0 w-24 h-24 md:w-50 md:h-50 z-20 pointer-events-none drop-shadow-2xl">
        <Image
          src="/images/business/waterpark/reserveParties/3d-duck-shadow.png"
          alt="Duck Mascot"
          fill
          className="object-contain"
        />
      </div>

      {/* Zigzag Decor - Top Right */}
      <div className="absolute top-8 -right-0 md:-top-0 md:right-0 w-32 h-16 md:w-48 md:h-20 z-10 pointer-events-none">
        <Image
          src="/images/business/waterpark/throwback/zig-zag-waves.svg"
          alt="Decorative Zigzag"
          fill
          className="object-contain object-right"
        />
      </div>

      {/* Heading */}
      <div className="w-full relative z-10 flex justify-center mb-12 md:mb-16">
        <h2 className="text-[20px] md:text-3xl lg:text-[40px] text-[#CA9015] font-serif font-bold text-center">
          Throw You Back
        </h2>
      </div>

      {/* Gallery Section */}
      <div className="w-full flex flex-col gap-6 z-10">
        
        {/* Row 1: Scrolling Left */}
        <div className="w-full overflow-hidden flex relative group">
          {/* The track holding the images. It is twice the width of the original content.
            The animation moves it to -50% and then snaps back to 0.
          */}
          <div className="flex w-max animate-scroll-left group-hover:pause-scroll">
            {/* We map the array twice to create the seamless loop */}
            {[1, 2].map((groupIndex) => (
              <div key={`row1-group-${groupIndex}`} className="flex gap-4 md:gap-6 pr-4 md:pr-6">
                {row1Images.map((src, index) => (
                  <div
                    key={`row1-${groupIndex}-${index}`}
                    className="relative flex-shrink-0 w-[150px] h-[100px] md:w-[304px] md:h-[237px] rounded-2xl overflow-hidden shadow-md"
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
            ))}
          </div>
        </div>

        {/* Row 2: Scrolling Right */}
        <div className="w-full overflow-hidden flex relative group">
          {/* The track holding the images.
            The animation starts at -50% and moves to 0.
          */}
          <div className="flex w-max animate-scroll-right group-hover:pause-scroll">
            {/* We map the array twice to create the seamless loop */}
            {[1, 2].map((groupIndex) => (
              <div key={`row2-group-${groupIndex}`} className="flex gap-4 md:gap-6 pr-4 md:pr-6">
                {row2Images.map((src, index) => (
                  <div
                    key={`row2-${groupIndex}-${index}`}
                    className="relative flex-shrink-0 w-[150px] h-[100px] md:w-[304px] md:h-[237px] rounded-2xl overflow-hidden shadow-md"
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
            ))}
          </div>
        </div>

      </div>

      {/* Bottom Call to Action */}
      <div className="relative z-10 mt-16 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
        <span className="text-[#111C55] text-xl md:text-2xl font-serif">
          To Know More, Visit:
        </span>
        <Link 
          href="https://jagdambafunworld.com" 
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 px-6 py-2 border-2 border-[#111C55] rounded-full text-[#111C55] text-sm md:text-base font-medium hover:bg-[#111C55] hover:text-white transition-all duration-300"
        >
          jagdambafunworld.com
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

      {/* Custom Keyframe Animations */}
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes scrollLeft {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        
        @keyframes scrollRight {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
        
        .animate-scroll-left {
          /* Adjust the '30s' value to make it move faster or slower */
          animation: scrollLeft 30s linear infinite;
        }
        
        .animate-scroll-right {
          animation: scrollRight 30s linear infinite;
        }

        .pause-scroll {
          animation-play-state: paused;
        }
      `}} />
    </section>
  );
}