"use client";

import { useState, useRef, useEffect, useCallback } from "react";
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
  const total = items.length;
  const cloneCount = 3;

  // Seamless infinite loop: clone last 3 before, first 3 after
  const extended = [
    ...items.slice(-cloneCount),
    ...items,
    ...items.slice(0, cloneCount),
  ];

  const [offset, setOffset] = useState(cloneCount); // start at first real card
  const [transitioning, setTransitioning] = useState(false);
  const trackRef = useRef(null);
  const [stepPx, setStepPx] = useState(0);

  // Measure step = card width + gap by diffing positions of two adjacent cards
  const measure = useCallback(() => {
    if (!trackRef.current) return;
    const cards = trackRef.current.children;
    if (cards.length < 2) return;
    const step = cards[1].getBoundingClientRect().left - cards[0].getBoundingClientRect().left;
    if (step > 0) setStepPx(step);
  }, []);

  useEffect(() => {
    // Delay slightly so layout is complete before measuring
    const id = setTimeout(measure, 50);
    window.addEventListener("resize", measure);
    return () => { clearTimeout(id); window.removeEventListener("resize", measure); };
  }, [measure]);

  const slide = (dir) => {
    setTransitioning(true);
    setOffset((o) => o + dir);
  };

  const handleTransitionEnd = () => {
    const firstReal = cloneCount;
    const lastReal = cloneCount + total - 1;
    if (offset > lastReal) {
      setTransitioning(false);
      setOffset(firstReal + (offset - lastReal - 1));
    } else if (offset < firstReal) {
      setTransitioning(false);
      setOffset(lastReal - (firstReal - offset - 1));
    }
  };

  // Re-enable transition after a jump (double rAF to let DOM commit)
  useEffect(() => {
    if (!transitioning) {
      const id = requestAnimationFrame(() =>
        requestAnimationFrame(() => setTransitioning(true))
      );
      return () => cancelAnimationFrame(id);
    }
  }, [transitioning]);

  const translateX = stepPx ? -(offset * stepPx) : 0;

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

        <p className="text-[#464646] font-serif font-normal text-[14px] md:text-[32px] leading-[21px] md:leading-[100%] tracking-normal text-center max-w-4xl">
          {description}
        </p>

        <div className="flex items-center gap-4 md:gap-8 lg:gap-14">
          <div className="relative w-16 h-6 md:w-24 md:h-8 lg:w-36 lg:h-10 shrink-0">
            <Image src={stayArrowLeft} alt="" fill className="object-contain" />
          </div>
          <h2 className="font-serif font-normal text-[16px] md:text-[40px] text-[#464646] leading-[100%] tracking-normal text-center whitespace-nowrap">
            {heading}
          </h2>
          <div className="relative w-16 h-6 md:w-24 md:h-8 lg:w-36 lg:h-10 shrink-0">
            <Image src={stayArrowRight} alt="" fill className="object-contain" />
          </div>
        </div>

        <div className="w-full">
          <div className="relative w-full">
            <button
              onClick={() => slide(-1)}
              aria-label="Previous"
              className="hidden md:flex absolute -left-8 lg:-left-14 top-1/2 -translate-y-1/2 z-30 w-9 h-9 lg:w-10 lg:h-10 items-center justify-center"
            >
              <div className="relative w-9 h-9 lg:w-10 lg:h-10">
                <Image src={arrowLeft} alt="Previous" fill className="object-contain" />
              </div>
            </button>

            <div className="overflow-hidden md:px-2 lg:px-3">
              <div
                ref={trackRef}
                onTransitionEnd={handleTransitionEnd}
                className="flex gap-6 md:gap-10 lg:gap-14"
                style={{
                  transform: `translateX(${translateX}px)`,
                  transition: transitioning && stepPx ? "transform 500ms cubic-bezier(0.4, 0, 0.2, 1)" : "none",
                  willChange: "transform",
                }}
              >
                {extended.map((room, idx) => (
                  <div
                    key={idx}
                    className="flex flex-col bg-white border border-[#464646] overflow-hidden shrink-0 w-[348px] h-[368px] md:w-[398px] md:h-[612px]"
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

                    <div className="flex flex-col p-4 lg:p-5 flex-1">
                      <h3 className="font-serif font-normal text-[16px] md:text-[24px] text-[#464646] leading-[100%] tracking-normal mb-6">
                        {room.name}
                      </h3>
                      <ul className="space-y-1 pl-4">
                        {room.details.map((detail) => (
                          <li
                            key={detail}
                            className="flex items-center gap-2 text-[#464646] font-sans font-normal text-[12px] md:text-[20px] leading-[10px] md:leading-[100%] tracking-normal"
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
            </div>

            <button
              onClick={() => slide(1)}
              aria-label="Next"
              className="hidden md:flex absolute -right-8 lg:-right-14 top-1/2 -translate-y-1/2 z-30 w-9 h-9 lg:w-10 lg:h-10 items-center justify-center"
            >
              <div className="relative w-9 h-9 lg:w-10 lg:h-10">
                <Image src={arrowRight} alt="Next" fill className="object-contain" />
              </div>
            </button>
          </div>

          <div className="flex md:hidden justify-end gap-3 mt-4">
            <button onClick={() => slide(-1)} aria-label="Previous" className="w-9 h-9 flex items-center justify-center">
              <div className="relative w-9 h-9">
                <Image src={arrowLeft} alt="Previous" fill className="object-contain" />
              </div>
            </button>
            <button onClick={() => slide(1)} aria-label="Next" className="w-9 h-9 flex items-center justify-center">
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
