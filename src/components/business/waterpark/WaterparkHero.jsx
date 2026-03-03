"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";

export default function WaterparkHero() {
  return (
    <section className="relative w-full bg-[#F5F5F5] overflow-hidden flex flex-col items-center">
      {/* --- TOP SECTION: HERO & WAVE --- */}
      <div className="relative w-full bg-linear-to-b from-[#F5F5F5] from-50% to-[#BBDAE1] to-50% pt-20 -mt-10 sm:-mt-16 md:-mt-32 flex flex-col z-10">
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
            src="/images/business/waterpark/hero-waterpark2.png" // Replace with actual hero hero if different
            alt="Hero Background"
            width={1511}
            height={551}
            className="w-full h-auto block m-0 p-0"
            priority
          />
          <div className="w-full pb-[10.6%]" />
        </div>
      </div>

      {/* --- BOTTOM SECTION: TEXT & DESCRIPTION --- */}
      <div className="relative w-full bg-linear-to-b from-[#BBDAE1] to-[#F5F5F5] pb-24 md:pb-48 -mt-10 sm:-mt-16 md:-mt-32 flex flex-col items-center z-20 px-6">
        
        {/* Background Clouds */}
        <div className="absolute inset-0 -top-35 -left-20 pointer-events-none opacity-50 z-0">
          <Image
            src="/images/business/waterpark/attraction/cloud-white.png"
            alt="Decorative clouds left"
            fill
            className="object-contain object-left"
          />
        </div>
        <div className="absolute inset-0 -top-30 pointer-events-none opacity-50 z-0">
          <Image
            src="/images/business/waterpark/attraction/cloud-white.png"
            alt="Decorative clouds right"
            fill
            className="object-contain object-right"
          />
        </div>

        {/* 3D Dolphin - Top Left */}
        <div className="absolute left-0 md:left-12 lg:left-32 -top-10 md:-top-24 w-32 h-32 lg:w-60 lg:h-60 pointer-events-none z-10 drop-shadow-2xl">
          <Image
            src="/images/business/waterpark/facilities/dolphin.png" // Add your left-facing dolphin asset
            alt="Dolphin Mascot Left"
            fill
            className="object-contain"
          />
        </div>

        {/* 3D Dolphin - Bottom Right */}
        <div className="absolute right-0 md:right-12 lg:right-32 bottom-5 -scale-x-100 bottom-0 md:bottom-10 w-32 h-32 lg:w-60 lg:h-60 pointer-events-none z-10 drop-shadow-2xl">
          <Image
            src="/images/business/waterpark/facilities/dolphin.png" // Add your right-facing dolphin asset
            alt="Dolphin Mascot Right"
            fill
            className="object-contain"
          />
        </div>

        {/* Content Container */}
        <div className="w-full max-w-4xl relative z-10 flex flex-col items-center mt-8 md:mt-20">
          
          {/* Main Heading */}
          <h1 className="text-2xl md:text-3xl lg:text-4xl text-[#CA9015] font-serif font-bold text-center mb-4 md:mb-6">
            Jagdamba Funworld - Experience Endless Thrill
          </h1>

          {/* Sub Heading */}
          <h2 className="text-xl md:text-2xl lg:text-3xl text-[#1a2b5e] font-serif font-bold text-center mb-6 md:mb-8">
            What’s On
          </h2>

          {/* Descriptive Paragraph */}
          <p className="text-[#464646] text-center text-sm md:text-base leading-relaxed">
            Jagdamba Funworld is a vibrant waterpark nestled in the scenic beauty of Chandrahasini Timarlaga, near Raigarh in Chhattisgarh, India. This exciting destination offers a perfect blend of thrill, relaxation, and enjoyment for visitors of all ages. Thrill-seekers can indulge in exhilarating water slides that twist, turn, and plunge into refreshing pools below. From high-speed slides that get the heart racing to meandering lazy rivers perfect for a leisurely float, there&apos;s something to satisfy every adrenaline craving.
          </p>
          
        </div>
      </div>
    </section>
  );
}