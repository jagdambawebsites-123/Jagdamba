'use client';

import React from 'react';
import Image from 'next/image';

const TimelineSection = ({
  year,
  title,
  description,
  contentImg,
  bgImg,
  dottedLineImg,
  isReversed,
  allYears,
  textOnly,
  isDarkBlue,
  stroke1,
  stroke2,
}) => {
  return (
    <section className={`relative w-full min-h-screen md:h-screen flex flex-col items-center snap-start overflow-hidden pt-24 pb-6 ${isDarkBlue ? 'bg-[#111C55]' : ''}`}>

      {/* ── Stroke wave images (flag sections) ── */}
      {isDarkBlue && stroke1 && (
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
          {/* Stroke 1 — upper wave */}
          <div className="absolute" style={{ top: '42%', transform: 'translateY(-50%)', width: '65%' }}>
            <Image
              src={stroke1}
              alt="wave stroke 1"
              width={1920}
              height={120}
              style={{ width: '100%', height: 'auto', opacity: 100 }}
              priority
            />
          </div>
          {/* Stroke 2 — lower wave */}
          <div className="absolute w-full" style={{ top: '51%', transform: 'translateY(-50%)' }}>
            <Image
              src={stroke2}
              alt="wave stroke 2"
              width={1920}
              height={120}
              style={{ width: '100%', height: 'auto', opacity: 100 }}
              priority
            />
          </div>
        </div>
      )}

      {/* ── Standard background image (non-flag sections) ── */}
      {bgImg && !isDarkBlue && (
        <div className="absolute inset-0 z-0">
          <Image
            src={bgImg}
            alt="section background"
            fill
            className="object-cover opacity-60"
            priority
          />
          {/* Dark overlay */}
          <div className="absolute inset-0 bg-black/60" />
        </div>
      )}

      {/* ── Dotted line connector — flows from top of section into content ── */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 z-10 flex justify-center" style={{ height: '8.5rem' }}>
        <div className="w-px h-full" style={{ width: '3px', backgroundImage: 'repeating-linear-gradient(to bottom, white 0, white 8px, transparent 8px, transparent 26px)' }} />
      </div>

      {/* ── Year Heading ── */}
      <div className="relative z-10 flex justify-center w-full mt-6 mb-6 md:mb-8">
        <h2 className="text-[64px] font-serif text-[#b89146] tracking-widest select-none">
          {year}
        </h2>
      </div>

      {textOnly ? (
        /* ── Text-Only Hero-Style Layout ── */
        <div className="relative z-10 flex flex-col items-center justify-center text-center px-6 max-w-7xl mx-auto mb-16 flex-1">
          {title && (
            <h3 className="text-[28px] md:text-[70px] font-serif text-[#b89146] mb-6 leading-tight">
              {title}
            </h3>
          )}
          {description && (
            <p className="text-white/75 font-sans leading-relaxed text-[16px] md:text-[30px] max-w-6xl">
              {description}
            </p>
          )}
        </div>
      ) : (
        /* ── Standard Image + Text Card ── */
        <div
          className={`relative z-10 flex flex-col md:flex-row ${isReversed ? 'md:flex-row-reverse' : 'md:flex-row'} w-[320px] h-[365px] md:w-[88%] md:h-auto max-w-5xl bg-white shadow-2xl overflow-hidden mx-auto mb-6 md:min-h-[360px]`}
        >
          {/* Top (mobile) / Left or Right (desktop): Content Image */}
          <div className="relative w-full md:w-1/2 shrink-0 h-[45%] md:h-auto">
            {contentImg && (
              <Image
                src={contentImg}
                alt={title || year}
                fill
                className="object-cover object-center"
                sizes="(max-width: 768px) 100vw, 45vw"
              />
            )}
          </div>

          {/* Bottom (mobile) / Right or Left (desktop): Text pane */}
          <div className="flex-1 p-8 md:p-12 flex flex-col justify-center bg-white overflow-hidden">
            {title && (
              <h3 className="text-[18px] md:text-[28px] font-serif text-[#111C55] mb-3 leading-tight">
                {title}
              </h3>
            )}
            {description && (
              <p className="text-[#737373] font-sans leading-relaxed text-[12px] md:text-[18px]">
                {description}
              </p>
            )}
          </div>
        </div>
      )}

      {/* ── Right-side Vertical Timeline — hidden on mobile ── */}
      {allYears && allYears.length > 0 && (
        <div className="hidden md:flex absolute right-4 md:right-8 top-0 bottom-0 z-20 flex-col items-end justify-between pt-40 pb-16">
          {allYears.map((y) => {
            const isActive = y === year;
            const isFirst = y === allYears[0];
            const isLast = y === allYears[allYears.length - 1];
            const showLabel = isActive || isFirst || isLast;
            return (
              <div key={y} className="flex items-center gap-2">
                {showLabel ? (
                  <span className={`text-xs font-bold tracking-widest transition-all duration-300 ${isActive ? 'text-white opacity-100' : 'text-white/30'}`}>
                    {y}
                  </span>
                ) : (
                  <span className="w-[36px]" />
                )}
                <div className={`transition-all duration-300 w-[8px] h-11 ${isActive ? 'bg-white' : 'bg-white/25'}`} />
              </div>
            );
          })}
        </div>
      )}
    </section>
  );
};

export default TimelineSection;