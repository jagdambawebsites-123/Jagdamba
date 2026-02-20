import React from "react";
import Image from "next/image";

export default function QuoteSection() {
  return (
    <div className="bg-[#111C55] py-9 text-white">
      <div className="relative w-full flex justify-center items-center border-y-[1px] border-white/50">
        {/* Quote Image Container */}
        <div className="absolute top-6 left-4 sm:top-[20px] sm:left-[40px] md:left-[100px] z-0">
          <Image
            src="/images/landingPage/quotes-element.png"
            alt="quotes"
            height={304}
            width={364}
            // Scales from 50px on mobile to 364px on desktop, maintaining aspect ratio
            className="w-[50px] sm:w-[150px] md:w-[364px] h-auto object-contain opacity-50 md:opacity-100"
          />
        </div>

        {/* Quote Text */}
        <div className="container">
            <p className="relative z-10 ml-[20px] sm:ml-[60px] px-6 sm:px-24 lg:px-44 w-full text-center border-l-[1px] rounded-bl-[40px] sm:rounded-bl-[72px] border-white/50 py-16 sm:py-32 lg:py-44 text-xl sm:text-3xl md:text-5xl font-serif font-normal">
          “Success is not final, failure is not fatal: It is the courage to
          continue that counts”
        </p>
        </div>
      </div>
    </div>
  );
}
