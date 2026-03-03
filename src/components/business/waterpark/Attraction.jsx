"use client";

import Image from "next/image";
import { useRef, useState } from "react";

export default function Attraction() {
  const sliderRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  // FIX: Store drag variables in a ref so they survive component re-renders
  const dragState = useRef({
    isDown: false,
    startX: 0,
    scrollLeft: 0,
  });

  // --- Mouse Drag Functions ---
  const handleMouseDown = (e) => {
    dragState.current.isDown = true;
    if (!sliderRef.current) return;
    sliderRef.current.classList.add("cursor-grabbing");
    dragState.current.startX = e.pageX - sliderRef.current.offsetLeft;
    dragState.current.scrollLeft = sliderRef.current.scrollLeft;
  };

  const handleMouseLeave = () => {
    dragState.current.isDown = false;
    if (!sliderRef.current) return;
    sliderRef.current.classList.remove("cursor-grabbing");
  };

  const handleMouseUp = () => {
    dragState.current.isDown = false;
    if (!sliderRef.current) return;
    sliderRef.current.classList.remove("cursor-grabbing");
  };

  const handleMouseMove = (e) => {
    if (!dragState.current.isDown || !sliderRef.current) return;
    e.preventDefault();
    const x = e.pageX - sliderRef.current.offsetLeft;
    const walk = (x - dragState.current.startX) * 1.5; // Adjusted slightly for smoother pull
    sliderRef.current.scrollLeft = dragState.current.scrollLeft - walk;
  };

  // --- Scroll Tracking & Dot Navigation ---
  const handleScroll = () => {
    if (!sliderRef.current) return;
    const container = sliderRef.current;
    const scrollPosition = container.scrollLeft;
    const maxScroll = container.scrollWidth - container.clientWidth;

    if (Math.ceil(scrollPosition) >= maxScroll - 5) {
      if (activeIndex !== attractions.length - 1) {
        setActiveIndex(attractions.length - 1);
      }
      return;
    }

    let closestIndex = 0;
    let minDistance = Infinity;

    Array.from(container.children).forEach((child, index) => {
      const childLeft = child.offsetLeft - container.offsetLeft;
      const distance = Math.abs(childLeft - 24 - scrollPosition);

      if (distance < minDistance) {
        minDistance = distance;
        closestIndex = index;
      }
    });

    if (closestIndex !== activeIndex) {
      setActiveIndex(closestIndex);
    }
  };

  const scrollToDot = (index) => {
    if (!sliderRef.current) return;
    const container = sliderRef.current;
    const child = container.children[index];
    
    if (child) {
      const targetLeft = child.offsetLeft - container.offsetLeft;
      container.scrollTo({
        left: targetLeft - 24, 
        behavior: "smooth",
      });
    }
    setActiveIndex(index);
  };

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
        <div className="absolute inset-0 top-0 pointer-events-none opacity-50 z-0">
          <Image
            src="/images/business/waterpark/attraction/blue-clouds.png"
            alt="Decorative clouds"
            fill
            className="object-contain object-top"
          />
        </div>

        <div className="relative w-full z-10 text-[0px] leading-[0]">
          <Image
            src="/images/business/waterpark/attraction/attraction-hero3.png"
            alt="Hero Background"
            width={1511}
            height={551}
            className="w-full h-auto block m-0 p-0"
            priority
          />
          <div className="w-full pb-[10.6%]" />
        </div>
      </div>

      {/* --- BOTTOM SECTION: ATTRACTION CARDS --- */}
      <div className="relative w-full bg-linear-to-b from-[#BBDAE1] to-[#F5F5F5] pb-20 -mt-10 sm:-mt-16 md:-mt-32 flex flex-col items-center z-20">
        <div className="absolute inset-0 -top-60 -left-40 pointer-events-none opacity-50 z-0">
          <Image
            src="/images/business/waterpark/attraction/cloud-white.png"
            alt="Decorative clouds"
            fill
            className="object-contain object-left"
          />
        </div>
        <div className="absolute inset-0 -top-30 pointer-events-none opacity-50 z-0">
          <Image
            src="/images/business/waterpark/attraction/cloud-white.png"
            alt="Decorative clouds"
            fill
            className="object-contain object-right"
          />
        </div>

        <div className="w-full relative z-10 flex justify-center mb-8 md:mb-12">
          <h2 className="text-3xl md:text-4xl text-[#CA9015] font-serif font-bold text-center">
            Jagdamba Attraction
          </h2>
        </div>

        {/* Cards Container */}
        <div 
          ref={sliderRef}
          onMouseDown={handleMouseDown}
          onMouseLeave={handleMouseLeave}
          onMouseUp={handleMouseUp}
          onMouseMove={handleMouseMove}
          onScroll={handleScroll}
          className="w-full pt-8 flex gap-4 md:gap-8 overflow-x-auto hide-scrollbar px-6 md:px-12 z-10 pb-4 cursor-grab active:cursor-grabbing select-none"
        >
          {attractions.map((attr, index) => (
            <div
              key={index}
              className="flex flex-col items-center flex-shrink-0 group pointer-events-none"
            >
              <div className="relative w-36 h-36 md:w-52 md:h-52 rounded-full border-[1.5px] border-dashed border-[#2b3954] p-2 md:p-3 transition-transform duration-300 group-hover:scale-105">
                <div className="relative w-full h-full rounded-full overflow-hidden shadow-sm">
                  <Image
                    src={attr.image}
                    alt={attr.name}
                    fill
                    draggable={false} 
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
              </div>
              <span className="text-[#2b3954] text-sm md:text-base font-serif mt-4 text-center select-none">
                {attr.name}
              </span>
            </div>
          ))}
        </div>

        {/* Dynamic Pagination Dots */}
        <div className="flex justify-center items-center gap-2 mt-8 z-10 relative">
          {attractions.map((_, index) => (
            <button
              key={index}
              onClick={() => scrollToDot(index)}
              className={`transition-all duration-300 rounded-full ${
                activeIndex === index
                  ? "w-6 h-2 bg-[#1a2b5e]"
                  : "w-2 h-2 bg-gray-300 hover:bg-gray-400"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

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