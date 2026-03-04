"use client";

import { useState } from "react";
import Image from "next/image";

export default function ResortRoomsSection({
  logo,
  heading,
  description,
  stayArrowLeft,
  stayArrowRight,
  arrowLeft,
  arrowRight,
  items = [],
}) {
  const [current, setCurrent] = useState(0);
  const total = items.length;
  const visible = 3;

  const prev = () => setCurrent((c) => (c - 1 + total) % total);
  const next = () => setCurrent((c) => (c + 1) % total);

  const visibleItems = Array.from({ length: visible }, (_, i) => items[(current + i) % total]);

  return (
    <section className="w-full bg-[#F5F5F5] py-12 md:py-16 lg:py-20">
      <div className="container mx-auto px-6 md:px-10 xl:px-25 flex flex-col items-center gap-12 md:gap-16 lg:gap-20">

        <div className="relative w-36 md:w-48 lg:w-56 h-16 md:h-20 lg:h-24">
          <Image
            src={logo}
            alt="La Fountain Resort Logo"
            fill
            className="object-contain"
            priority
          />
        </div>

        <p className="text-[#464646] font-serif font-bold text-[16px] md:text-[32px] lg:text-[40px] leading-relaxed text-center max-w-4xl">
          {description}
        </p>

        <div className="flex items-center gap-4 md:gap-8 lg:gap-14">
          <div className="relative w-16 h-6 md:w-24 md:h-8 lg:w-36 lg:h-10 shrink-0">
            <Image src={stayArrowLeft} alt="" fill className="object-contain" />
          </div>
          <h2 className="font-serif font-normal text-[16px] md:text-[36px] lg:text-[48px] text-[#464646] leading-tight whitespace-nowrap">
            {heading}
          </h2>
          <div className="relative w-16 h-6 md:w-24 md:h-8 lg:w-36 lg:h-10 shrink-0">
            <Image src={stayArrowRight} alt="" fill className="object-contain" />
          </div>
        </div>

        <div className="w-full">
          <div className="relative w-full">
            <button
              onClick={prev}
              aria-label="Previous"
              className="hidden md:flex absolute -left-8 lg:-left-14 top-1/2 -translate-y-1/2 z-30 w-14 h-14 lg:w-16 lg:h-16 items-center justify-center"
            >
              <div className="relative w-14 h-14 lg:w-16 lg:h-16">
                <Image src={arrowLeft} alt="Previous" fill className="object-contain" />
              </div>
            </button>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10 lg:gap-14 overflow-hidden md:px-10 lg:px-12 place-items-center">
              {visibleItems.map((room, idx) => (
                <div
                  key={`${room.name}-${idx}`}
                  className={`flex flex-col bg-white border border-[#464646] overflow-hidden mx-auto md:mx-0 w-[350px] h-[368px] md:w-[400px] md:h-[612px] ${idx !== 0 ? 'hidden md:flex' : ''}`}
                  style={{ borderRadius: "8px" }}
                >
                  <div className="relative w-full shrink-0 h-[215px] md:h-[400px]">
                    <Image
                      src={room.src}
                      alt={room.name}
                      fill
                      className="object-cover"
                    />
                  </div>

                  <div className="flex flex-col gap-2 p-4 lg:p-5 flex-1">
                    <h3 className="font-serif font-normal text-[16px] md:text-[20px] lg:text-[24px] text-[#464646]">
                      {room.name}
                    </h3>
                    <ul className="space-y-1 pl-4">
                      {room.details.map((detail) => (
                        <li
                          key={detail}
                          className="flex items-center gap-2 text-[#464646] font-sans font-normal text-[12px] md:text-[16px] lg:text-[20px]"
                        >
                          <span className="shrink-0 w-1.5 h-1.5 rounded-full bg-[#464646] inline-block" />
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>

            <button
              onClick={next}
              aria-label="Next"
              className="hidden md:flex absolute -right-8 lg:-right-14 top-1/2 -translate-y-1/2 z-30 w-14 h-14 lg:w-16 lg:h-16 items-center justify-center"
            >
              <div className="relative w-14 h-14 lg:w-16 lg:h-16">
                <Image src={arrowRight} alt="Next" fill className="object-contain" />
              </div>
            </button>
          </div>

          <div className="flex md:hidden justify-end gap-3 mt-4">
            <button onClick={prev} aria-label="Previous" className="w-9 h-9 flex items-center justify-center">
              <div className="relative w-9 h-9">
                <Image src={arrowLeft} alt="Previous" fill className="object-contain" />
              </div>
            </button>
            <button onClick={next} aria-label="Next" className="w-9 h-9 flex items-center justify-center">
              <div className="relative w-9 h-9">
                <Image src={arrowRight} alt="Next" fill className="object-contain" />
              </div>
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
