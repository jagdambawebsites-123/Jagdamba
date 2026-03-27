"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import ButtonPrimary from "./ButtonPrimary";

const slides = [
  {
    id: 1,
    image: "/images/landingPage/hero/hero-structure.png",
    title: <>Building Tomorrow&apos;s <br /> Infrastructure</>,
    link: "/services/structure"
  },
  {
    id: 2,
    image: "/images/landingPage/hero/hero-trailer.png",
    title: <>Setting New Benchmarks</>,
    link: "/services/trailer"
  },
  {
    id: 3,
    image: "/images/landingPage/hero/hero-resort.png",
    title: <>Relax. Indulge. LA Fountain</>,
    link: "/services/resort"
  },
  {
    id: 4,
    image: "/images/landingPage/hero/hero-mining.png",
    title: <>Refining Excellence</>,
    link: "/services/mining"
  },
  {
    id: 5,
    image: "/images/landingPage/hero/hero-casting.png",
    title: <>Crafting Precision</>,
    link: "/services/casting"
  }
];
export default function HeroSection() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative h-screen w-full overflow-hidden bg-black text-white">
      {/* Background Images Layer */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === current ? "opacity-100" : "opacity-0"
            }`}
        >
          <Image
            src={slide.image}
            alt="Hero Background"
            fill
            priority={index === 0}
            className="object-cover"
          />
          {/* Main Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/25 via-black/7 to-transparent" />
        </div>
      ))}

      {/* Content Layer */}
      <div className="relative z-10 h-full flex items-center px-6 md:px-10 xl:px-25">
        {/* The Container: Limits width to 1200px (or your theme's default) and centers itself */}
        <div className="container mx-auto">
          {/* Responsive Alignment: 
              items-center + text-center for mobile
              md:items-start + md:text-left for desktop
          */}
          <div className="flex flex-col items-center text-center md:items-start md:text-left w-full md:w-fit font-serif">
            <h1 className="text-[28px] sm:text-[36px] md:text-[48px] lg:text-[64px] leading-tight mb-1.5 flex items-center">
              {slides[current].title}
            </h1>

            {/* Accent Line */}
            <div className="h-1 w-full max-w-[300px] md:max-w-none bg-[#CA9015] mb-4 md:mb-12" />

            <Link href="/about/aboutUs">
              <ButtonPrimary content="About Us" />
            </Link>
          </div>
        </div>
      </div>

      {/* Navigation Dots - Locked to the container's left edge on desktop */}
      <div className="absolute bottom-12 w-full px-6 md:px-10 xl:px-25">
        <div className="container mx-auto flex justify-center md:justify-start gap-3">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              className={`h-2 transition-all duration-300 rounded-full ${index === current ? "w-10 bg-[#CA9015]" : "w-2 bg-white/40 hover:bg-white/70"
                }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}