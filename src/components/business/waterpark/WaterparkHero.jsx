"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";

export default function WaterparkHero() {
  return (
    <div className="relative w-full overflow-hidden bg-black text-white">
      {/* Background Images Layer */}
      <div className="w-full aspect-[1512/821]">
        <Image
          src={"/images/business/waterpark/hero-waterpark.png"}
          alt="Hero Background"
          fill
          className="object-cover"
        />
      </div>
    </div>
  );
}
