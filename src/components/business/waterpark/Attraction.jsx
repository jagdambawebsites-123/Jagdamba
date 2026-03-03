"use client";

import Image from "next/image";

export default function Attraction() {
  const attractions = [
    {
      name: "Kids Adventure",
      image: "/images/business/waterpark/attraction/kids-adventure.png",
    },
    {
      name: "Rain Dance",
      image: "/images/business/waterpark/attraction/rain-dance.png",
    },
    {
      name: "Multiline Slide",
      image: "/images/business/waterpark/attraction/multi-slide.png",
    },
    {
      name: "Thrill Slides",
      image: "/images/business/waterpark/attraction/thrill-slide.jpg",
    },
    {
      name: "Family Pool",
      image: "/images/business/waterpark/attraction/family-pool.jpg",
    },
    {
      name: "Pendulum",
      image: "/images/business/waterpark/attraction/pendulum.jpg",
    },
    {
      name: "Body Slide",
      image: "/images/business/waterpark/attraction/body-slide.png",
    },
    {
      name: "Wave Pool",
      image: "/images/business/waterpark/attraction/wave-pool.png",
    },
  ];

  return (
    <section className="relative w-full bg-[#F5F5F5] overflow-hidden flex flex-col items-center">
      {/* --- TOP SECTION: HERO & WAVE --- */}
      <div className="relative w-full bg-linear-to-b from-[#F5F5F5] from-50% to-[#BBDAE1] to-50% pt-20 flex flex-col z-10">
        {/* Background Clouds */}
        <div className="absolute inset-0 top-0 pointer-events-none opacity-50 z-0">
          <Image
            src="/images/business/waterpark/attraction/blue-clouds.png"
            alt="Decorative clouds"
            fill
            className="object-contain object-top"
          />
        </div>

        {/* Hero Image & Wave Container */}
        {/* We use text-[0px] and leading-[0] to kill any invisible inline text spacing */}
        <div className="relative w-full z-10 text-[0px] leading-[0]">
          <Image
            src="/images/business/waterpark/attraction/attraction-hero3.png"
            alt="Hero Background"
            width={1511}
            height={551}
            className="w-full h-auto block m-0 p-0"
            priority
          />

          {/* Invisible Spacer 
              Since the wave is absolute, it takes up zero height in the document flow. 
              This padding-bottom matches the wave's aspect ratio (266 height / 1510 width = 17.6%)
              to push the circular cards down perfectly.
          */}
          <div className="w-full pb-[10.6%]" />
        </div>
      </div>

      {/* --- BOTTOM SECTION: ATTRACTION CARDS --- */}
      {/* We use negative top margin (-mt-10 to -mt-32) to pull this section up so it overlaps the wave */}
      <div className="relative w-full bg-linear-to-b from-[#BBDAE1] to-[#F5F5F5] pb-20 -mt-10 sm:-mt-16 md:-mt-32 flex flex-col items-center z-20">
        {/* Background Clouds */}
        <div className="absolute inset-0 -top-60 -left-40 pointer-events-none opacity-50 z-0">
          <Image
            src="/images/business/waterpark/attraction/cloud-white.png"
            alt="Decorative clouds"
            fill
            className="object-contain object-left"
          />
        </div>
        {/* Background Clouds 2*/}
        <div className="absolute inset-0 -top-30 pointer-events-none opacity-50 z-0">
          <Image
            src="/images/business/waterpark/attraction/cloud-white.png"
            alt="Decorative clouds"
            fill
            className="object-contain object-right"
          />
        </div>

        {/* Heading */}
        <div className="w-full relative z-10 flex justify-center mb-8 md:mb-12">
          <h2 className="text-3xl md:text-4xl text-[#CA9015] font-serif font-bold text-center">
            Jagdamba Attraction
          </h2>
        </div>

        {/* Cards Container (Scrollable on mobile, centered on desktop) */}
        <div className="w-full pt-8 flex gap-4 md:gap-8 overflow-x-auto hide-scrollbar px-6 md:px-12 md:justify-center z-10 pb-4">
          {attractions.map((attr, index) => (
            <div
              key={index}
              className="flex flex-col items-center flex-shrink-0 group cursor-pointer"
            >
              {/* Dashed Border Container */}
              <div className="relative w-36 h-36 md:w-52 md:h-52 rounded-full border-[1.5px] border-dashed border-[#2b3954] p-2 md:p-3 transition-transform duration-300 group-hover:scale-105">
                {/* Inner Image Container */}
                <div className="relative w-full h-full rounded-full overflow-hidden shadow-sm">
                  <Image
                    src={attr.image}
                    alt={attr.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
              </div>

              {/* Card Label */}
              <span className="text-[#2b3954] text-sm md:text-base font-serif mt-4 text-center">
                {attr.name}
              </span>
            </div>
          ))}
        </div>

        {/* Pagination Dots (UI Only) */}
        <div className="flex justify-center items-center gap-2 mt-8 z-10 relative">
          <div className="w-2 h-2 rounded-full bg-gray-300" />
          <div className="w-2 h-2 rounded-full bg-gray-300" />
          <div className="w-2 h-2 rounded-full bg-gray-300" />
          <div className="w-6 h-2 rounded-full bg-[#1a2b5e]" />{" "}
          {/* Active Dot */}
          <div className="w-2 h-2 rounded-full bg-gray-300" />
          <div className="w-2 h-2 rounded-full bg-gray-300" />
        </div>
      </div>

      {/* CSS to hide scrollbar for the horizontal scroll on mobile */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `,
        }}
      />
    </section>
  );
}
