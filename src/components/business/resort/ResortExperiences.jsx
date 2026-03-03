"use client";

import { useState } from "react";
import Image from "next/image";

const features = [
  { label: "Five Star Resort", src: "/images/business/resort/resort.png" },
  { label: "24 * 7 Service", src: "/images/business/resort/door-handle.png" },
  { label: "Keeping You Safe", src: "/images/business/resort/safe.png" },
  { label: "Exquisite Food", src: "/images/business/resort/food.png" },
];

export default function ResortExperiences({
  stayArrowLeft,
  stayArrowRight,
  arrowLeft,
  arrowRight,
  experiences = [],
}) {
  const [current, setCurrent] = useState(0);
  const total = experiences.length;
  const visible = 3;

  const prev = () => setCurrent((c) => (c - 1 + total) % total);
  const next = () => setCurrent((c) => (c + 1) % total);

  const visibleItems = Array.from({ length: visible }, (_, i) => experiences[(current + i) % total]);

  return (
    <section className="w-full bg-[#F5F5F5] py-12 md:py-16 lg:py-20">
      <div className="flex flex-col gap-12 md:gap-16 lg:gap-20">

        <div className="container mx-auto px-6 md:px-10 xl:px-25">
          <div className="flex items-center justify-center gap-8 md:gap-10 lg:gap-14">
            <div className="relative w-16 h-6 md:w-24 md:h-8 lg:w-36 lg:h-10 shrink-0">
              <Image src={stayArrowLeft} alt="" fill className="object-contain" />
            </div>
            <h2 className="font-serif font-normal text-[16px] md:text-[40px] lg:text-[48px] text-[#464646] leading-tight text-center">
              Experiences
            </h2>
            <div className="relative w-16 h-6 md:w-24 md:h-8 lg:w-36 lg:h-10 shrink-0">
              <Image src={stayArrowRight} alt="" fill className="object-contain" />
            </div>
          </div>
        </div>

        <div className="relative w-full">
          <div className="grid grid-cols-3 overflow-hidden">
            {visibleItems.map((exp, idx) => (
              <div key={`${exp.label}-${idx}`} className="relative overflow-hidden group" style={{ aspectRatio: "4/3" }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={exp.src}
                  alt={exp.label}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
                />
                <div className="absolute bottom-0 left-0 right-0 px-2 py-2 md:py-6 bg-gradient-to-t from-black/70 to-transparent flex justify-center">
                  <span className="text-white font-serif font-normal text-[12px] md:text-[20px] lg:text-[28px] text-center">
                    {exp.label}
                  </span>
                </div>
              </div>
            ))}
          </div>

          <button
            onClick={prev}
            aria-label="Previous"
            className="absolute left-4 md:left-6 lg:left-8 top-1/2 -translate-y-1/2 z-30 w-8 h-8 md:w-11 md:h-11 lg:w-14 lg:h-14"
          >
            <div className="relative w-full h-full">
              <Image src={arrowLeft} alt="Previous" fill className="object-contain" />
            </div>
          </button>

          <button
            onClick={next}
            aria-label="Next"
            className="absolute right-4 md:right-6 lg:right-8 top-1/2 -translate-y-1/2 z-30 w-8 h-8 md:w-11 md:h-11 lg:w-14 lg:h-14"
          >
            <div className="relative w-full h-full">
              <Image src={arrowRight} alt="Next" fill className="object-contain" />
            </div>
          </button>
        </div>

        <div className="container mx-auto px-6 md:px-10 xl:px-25">
          <div className="grid grid-cols-4 gap-3 md:gap-8">
            {features.map((feat) => (
              <div key={feat.label} className="flex flex-col items-center gap-2 md:gap-3">
                <div className="relative w-8 h-8 md:w-16 md:h-16 lg:w-20 lg:h-20">
                  <Image src={feat.src} alt={feat.label} fill className="object-contain" />
                </div>
                <span className="text-[#464646] font-serif font-normal text-[12px] md:text-[24px] lg:text-[32px] text-center">
                  {feat.label}
                </span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
