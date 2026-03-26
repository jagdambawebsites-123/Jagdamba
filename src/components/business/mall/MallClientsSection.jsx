import React from "react";
import Image from "next/image";

export default function MallClientsSection() {
  const brands = [
    { name: "Pantaloons", src: "/images/business/mall/pantaloons.png" },
    { name: "Reliance Smart", src: "/images/business/mall/reliance.png" },
    { name: "Dominos", src: "/images/business/mall/dominos.png" },
    { name: "Louis Philippe", src: "/images/business/mall/lp.png" },
    { name: "GC", src: "/images/business/mall/gc.png" },
    { name: "Hungama", src: "/images/business/mall/hungama.png" },
    { name: "Gym", src: "/images/business/mall/gym.png" },
    { name: "Bukaari", src: "/images/business/mall/bukaari.png" },
    { name: "TUS", src: "/images/business/mall/tus.png" },
    { name: "Dress", src: "/images/business/mall/dress.png" },
    { name: "Queens", src: "/images/business/mall/queens.png" },
  ];

  const infiniteBrands = [...brands, ...brands];

  return (
    <div className="w-full bg-[#F5F5F5]">
      <div className="w-full py-12 overflow-hidden">
        <div className="relative w-full py-8 flex overflow-hidden">
          <div
            className="absolute inset-0 z-10 pointer-events-none"
            style={{
              maskImage:
                "linear-gradient(to right, transparent, black 15%, black 85%, transparent)",
              WebkitMaskImage:
                "linear-gradient(to right, transparent, black 15%, black 85%, transparent)",
            }}
          />

          <div className="flex w-max animate-infinite-scroll">
            {infiniteBrands.map((brand, index) => (
              <div
                key={index}
                className="flex justify-center items-center w-[100px] h-[100px] lg:w-70 lg:h-70 mx-4 lg:mx-8 shrink-0"
              >
                <Image
                  src={brand.src}
                  alt={brand.name}
                  width={280}
                  height={280}
                  sizes="(min-width: 1024px) 280px, 100px"
                  className="w-full h-full object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
