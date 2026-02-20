"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";

const slides = [
  {
    id: 0,
    title: "Impact",
    watermark: "IMPACT",
    bgColor: "#111C55",
    borderColor: "#4D5580",
    image: "/images/landingPage/impact.png",
    desc: [
      "We are committed to building world-class manufacturing facilities and innovative business models that contribute to India's economic landscape. By generating employment across multiple sectors, we empower communities and support local economies.",
      "We forge strong industry partnerships and collaborate with global leaders to bring the best innovations to India. At Jagdamba Group, we pursue self-reliant, sustainable growth.",
    ],
  },
  {
    id: 1,
    title: "Safety",
    watermark: "SAFETY",
    bgColor: "#d1a03d",
    borderColor: "#F3D085",
    image: "/images/landingPage/safety.png",
    desc: [
      "We are committed to ensuring the highest standards of safety for all our employees. Our comprehensive safety programs are designed to protect our staff in every aspect of their work.",
      "We believe that a safe workplace is a productive workplace. By fostering a culture of safety, we not only protect our employees but also enhance their overall well-being and job satisfaction.",
    ],
  },
  {
    id: 2,
    title: "Greenery",
    watermark: "GREENERY",
    bgColor: "#1a462b",
    borderColor: "#3D7C43",
    image: "/images/landingPage/greenery.png",
    desc: [
      "Our commitment to plantation and greenery is a testament to our dedication to preserving and enhancing the natural environment. We actively engage in extensive tree-planting initiatives.",
      "Our green initiatives are designed to reduce our carbon footprint and create healthier, more vibrant surroundings. We believe that a commitment to the environment is essential for the future.",
    ],
  },
];

export default function ImpactSection() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const currentBgColor = slides[current].bgColor;
  const currentBorderColor = slides[current].borderColor;

  return (
    <section
      className="relative w-full py-16 lg:py-32 overflow-hidden transition-colors duration-1000 ease-in-out text-white flex flex-col justify-center"
      style={{ backgroundColor: currentBgColor }}
    >
      {/* Full width horizontal borders */}
      <div
        className="relative w-full border-y transition-colors duration-1000 ease-in-out"
        style={{ borderColor: currentBorderColor }}
      >
        {/* Watermark text */}
        <div
          className="absolute top-full -translate-y-1/2 right-4 lg:right-16 px-2 lg:px-8 z-20 pointer-events-none select-none transition-colors duration-1000 ease-in-out"
          style={{ backgroundColor: currentBgColor }}
        >
          <span
            className="text-[36px] sm:text-[48px] md:text-[80px] lg:text-[128px] whitespace-nowrap leading-none font-serif font-bold transition-all duration-1000 ease-in-out block"
            style={{
              WebkitTextStroke: `2px ${currentBorderColor}`,
              color: currentBgColor,
            }}
          >
            {slides[current].watermark}
          </span>
        </div>

       <div className="container">
         {/* Inner Content - Removed vertical padding from here so the child touches the borders */}
        <div className="w-full max-w-[1200px] mx-auto px-4 sm:px-8 lg:px-12 relative z-10">
          {/* Left Border Decoration - Added vertical padding (py-10 lg:py-24) here instead */}
          <div
            className="w-full border-l-[1px] border-b-[1px] rounded-bl-[40px] sm:rounded-bl-[72px] transition-colors duration-1000 ease-in-out py-10 lg:py-24"
            style={{ borderColor: currentBorderColor }}
          >
            {/* Height-establishing container */}
            <div className="relative w-full min-h-[750px] lg:min-h-[500px]">
              {slides.map((slide, index) => (
                <div
                  key={slide.id}
                  className={`absolute top-0 left-0 w-full h-full flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-16 pt-8 pb-12 pl-6 pr-2 sm:pl-10 sm:pr-6 lg:pl-16 lg:pr-0 transition-opacity duration-1000 ease-in-out ${
                    index === current
                      ? "opacity-100 z-10"
                      : "opacity-0 z-0 pointer-events-none"
                  }`}
                >
                  {/* Left Column: Text Content */}
                  <div className="w-full lg:w-1/2 flex flex-col justify-center h-auto lg:h-full">
                    <h2 className="text-4xl md:text-6xl font-serif mb-4 md:mb-6">
                      {slide.title}
                    </h2>
                    <div className="space-y-4 md:space-y-6 text-white/90 text-sm md:text-base leading-relaxed font-sans">
                      {slide.desc.map((p, i) => (
                        <p key={i}>{p}</p>
                      ))}
                    </div>

                    {/* Desktop Navigation Dots */}
                    <div className="hidden lg:flex gap-3 mt-10">
                      {slides.map((_, i) => (
                        <button
                          key={i}
                          onClick={() => setCurrent(i)}
                          className={`h-2.5 rounded-full transition-all duration-300 ${
                            current === i
                              ? "w-10 bg-white"
                              : "w-2.5 bg-white/40 hover:bg-white/60"
                          }`}
                          aria-label={`Go to slide ${i + 1}`}
                        />
                      ))}
                    </div>
                  </div>

                  {/* Right Column: Image & Mobile Dots */}
                  <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-end justify-center">
                    {/* Image */}
                    <div className="relative w-full max-w-[500px] mx-auto lg:mx-0 lg:ml-auto aspect-[4/3] rounded-tl-2xl rounded-tr-2xl rounded-bl-2xl rounded-br-[6rem] overflow-hidden shadow-2xl border border-white/10">
                      <Image
                        src={slide.image}
                        alt={slide.title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 50vw"
                        priority={index === 0}
                      />
                    </div>

                    {/* Mobile Navigation Dots */}
                    <div className="flex lg:hidden gap-3 w-full max-w-[500px] justify-start mt-6">
                      {slides.map((_, i) => (
                        <button
                          key={i}
                          onClick={() => setCurrent(i)}
                          className={`h-2.5 rounded-full transition-all duration-300 ${
                            current === i
                              ? "w-10 bg-white"
                              : "w-2.5 bg-white/40 hover:bg-white/60"
                          }`}
                          aria-label={`Go to slide ${i + 1}`}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
       </div>
      </div>
    </section>
  );
}
