"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import ButtonPrimary from "../landingPage/ButtonPrimary";

export default function BusinessHero({ image, title, link, buttonText = "About Us" }) {
  return (
    <div className=" relative h-screen w-full overflow-hidden bg-black text-white">
      {/* Background Images Layer */}
      <div
        className={`absolute inset-0`}
      >
        <Image
          src={image}
          alt="Hero Background"
          fill
          className="object-cover"
        />
        {/* Main Overlay */}
        <div className="absolute inset-0 bg-linear-to-r from-black/70 via-black/40 to-transparent" />
      </div>

      {/* Content Layer */}
      <div className="relative z-10 h-full flex items-center px-6 md:px-10 xl:px-25">
        {/* The Container: Limits width to 1200px (or your theme's default) and centers itself */}
        <div className="container mx-auto">
          {/* Responsive Alignment: 
              items-center + text-center for mobile
              md:items-start + md:text-left for desktop
          */}
          <div className="flex flex-col items-start text-left w-full md:w-fit gap-5 xl:gap-12 font-serif">
            <h1 className="text-[28px] sm:text-[36px] md:text-[48px] lg:text-[64px] leading-tight">
              {title}
            </h1>

            {/* Accent Line */}
            <div className="h-1 w-full max-w-75 md:max-w-none bg-[#CA9015]" />

            <Link href={link}>
              <ButtonPrimary content={buttonText} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}