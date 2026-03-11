import React from "react";
import Image from "next/image";

const stories = [
  {
    id: 1,
    image: "/images/landingPage/award-ceremony.jpg",
    title: "Jagdamba Trailer awarded as an emerging brand in Indian trailer industry.",
    date: "April 27, 2024",
  },
  {
    id: 2,
    image: "/images/landingPage/oem-ranking.png",
    title: "Listed in the global OEM ranking for World Trailer Manufacturers.",
    date: "Sep 26, 2023",
  },
  {
    id: 3,
    image: "/images/landingPage/motorindia-feature.png",
    title: "Jagdamba Trailer got featured in Nov, 2024 Motor India Magazine.",
    date: "Nov 22, 2024",
  },
];

export default function FeaturedStories() {
  return (
    <div className="relative w-full">
      {/* 80% Dark Navy Background Layer */}
      <div className="absolute top-0 left-0 w-full h-[80%] bg-[#fbfbfb] md:bg-[#0a1a44] -z-10"></div>

      {/* Bottom 20% Light Background Layer */}
      <div className="absolute bottom-0 left-0 w-full h-[20%] bg-[#fbfbfb] -z-20"></div>
      
      <div className="container mx-auto">
        <section className="relative z-0 pb-16 md:pb-24">
          <div className="mx-auto px-4 sm:px-6 lg:px-[100px] pt-4 md:pt-20">
            
            {/* Header Area */}
            <div className="flex justify-center md:justify-between items-center mb-8 md:mb-14">
              <h2 className="text-[24px] text-center md:text-left sm:text-[40px] font-serif text-[#111C55] md:text-white">
                Our <span className="text-[#c19a49]">Featured Stories</span>
              </h2>

              {/* Desktop Button: Hidden on mobile */}
              <div className="hidden md:block">
                <ViewAllButton variant="desktop" />
              </div>
            </div>

            {/* Cards Grid */}
            <div className="
              grid grid-flow-col auto-cols-[85%] sm:auto-cols-[45%] overflow-x-auto gap-6 pb-4 snap-x snap-mandatory scrollbar-hide
              md:grid-cols-3 md:grid-flow-row md:auto-cols-auto md:overflow-visible md:pb-0
            ">
              {stories.map((story) => (
                <div
                  key={story.id}
                  className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col h-full snap-center"
                >
                  <div className="relative w-full aspect-[407/489] bg-[#f8f9fa]">
                    <Image
                      src={story.image}
                      alt={story.title}
                      fill
                      sizes="(max-width: 768px) 85vw, (max-width: 1200px) 33vw, 407px"
                      className="object-cover object-center"
                    />
                  </div>

                  <div className="p-3 md:p-6 flex flex-col flex-grow">
                    <p className="text-[#6B7280] text-[12px] sm:text-sm md:text-[18px] mb-2 md:mb-4 leading-relaxed flex-grow font-sans">
                      {story.title}
                    </p>
                    <p className="text-[#111C55] font-medium text-[18px] uppercase tracking-wider font-sans">
                      {story.date}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Mobile Button: Full width at the bottom */}
            <div className="mt-10 flex justify-center md:hidden">
              <ViewAllButton variant="mobile" />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

// Responsive View All Button
function ViewAllButton({ variant }) {
  const isMobile = variant === "mobile";
  
  return (
    <button className={`
      group flex items-center justify-center gap-2 rounded-full border transition-all duration-300 font-sans
      ${isMobile 
        ? "w-full py-3.5 border-[#0a1a44]/40 text-[#0a1a44] text-sm font-normal hover:text-white hover:bg-[#0a1a44] tracking-wide" 
        : "px-8 py-2.5 border-white text-white text-lg  font-normal hover:bg-white hover:text-[#0a1a44]"
      }
    `}>
      View All
      <ArrowUpRightIcon className={`
        w-4 h-4 text-[#c19a49] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5
        ${!isMobile && "group-hover:text-[#0a1a44]"}
      `} />
    </button>
  );
}

function ArrowUpRightIcon({ className }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className={className}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
    </svg>
  );
}