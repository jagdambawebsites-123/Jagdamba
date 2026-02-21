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
    <section className={`relative w-full min-h-screen flex flex-col items-center snap-start overflow-hidden ${isDarkBlue ? 'bg-[#111C55]' : ''}`}>

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

      {/* ── Dotted line connector at the very top — matches hero bottom line ── */}
      <div className="relative z-10 flex justify-center w-full pt-0">
        <div className="w-px h-10 md:h-12 border-l-[3px] border-dashed border-white" />
      </div>

      {/* ── Year Heading ── */}
      <div className="relative z-10 flex justify-center w-full mt-4 mb-14 md:mb-14">
        <h2 className="text-5xl md:text-7xl font-(family-name:--font-libre-baskerville) text-[#b89146] tracking-widest select-none">
          {year}
        </h2>
      </div>

      {textOnly ? (
        /* ── Text-Only Hero-Style Layout ── */
        <div className="relative z-10 flex flex-col items-center justify-center text-center px-6 max-w-7xl mx-auto mb-16 flex-1">
          {title && (
            <h3 className="text-[28px] md:text-[70px] font-(family-name:--font-libre-baskerville) text-[#b89146] mb-6 leading-tight">
              {title}
            </h3>
          )}
          {description && (
            <p className="text-white/75 font-(family-name:--font-libre-franklin) leading-relaxed text-[16px] md:text-[30px] max-w-6xl">
              {description}
            </p>
          )}
        </div>
      ) : (
        /* ── Standard Image + Text Card ── */
        <div
          className={`relative z-10 flex flex-col md:flex-row ${isReversed ? 'md:flex-row-reverse' : 'md:flex-row'} w-[92%] md:w-[88%] max-w-5xl bg-white shadow-2xl overflow-hidden mx-auto mb-6 h-[55vh] md:h-auto md:min-h-[478px]`}
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
          <div className="flex-1 p-6 md:p-12 flex flex-col justify-center bg-white">
            {title && (
              <h3 className="text-[20px] md:text-[28px] font-(family-name:--font-libre-baskerville) text-[#111C55] mb-3 leading-tight">
                {title}
              </h3>
            )}
            {description && (
              <p className="text-[#737373] font-(family-name:--font-libre-franklin) leading-relaxed text-[14px] md:text-[18px]">
                {description}
              </p>
            )}
          </div>
        </div>
      )}

      {/* ── Right-side Vertical Timeline — hidden on mobile ── */}
      <div className="hidden md:flex absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-20 flex-col items-end gap-3">
        {allYears &&
          allYears.map((y) => {
            const isActive = y === year;
            return (
              <div key={y} className="flex items-center gap-2">
                <span
                  className={`text-[10px] font-bold tracking-widest transition-all duration-300 ${isActive ? 'text-white opacity-100' : 'text-white opacity-20'
                    }`}
                >
                  {y}
                </span>
                <div
                  className={`rounded-full transition-all duration-300 ${isActive
                    ? 'w-[3px] h-10 bg-white'
                    : 'w-[2px] h-6 bg-white/25'
                    }`}
                />
              </div>
            );
          })}
      </div>
    </section>
  );
};

export default TimelineSection;