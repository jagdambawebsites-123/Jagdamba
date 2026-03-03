import Link from "next/link";

export default function ResortGalleryBanner({ image, quote, buttonText, buttonLink }) {
  return (
    <div className="relative w-full">

      {/* Layer 1 — Image at natural size, no cropping */}
      <img
        src={image}
        alt="Resort Gallery"
        className="w-full h-auto block"
      />

      {/* Layer 2 — Content */}
      <div className="absolute inset-0 z-10 flex items-center px-6 md:px-10 xl:px-25">
        <div className="flex flex-col gap-3 md:gap-6 max-w-xs md:max-w-xl">
          <p className="font-sans font-medium text-white text-[12px] md:text-[22px] lg:text-[28px] leading-[145%] line-clamp-3 md:line-clamp-none">
            {quote}
          </p>
          <Link
            href={buttonLink || "#"}
            className="self-start px-4 py-1.5 md:px-6 md:py-2.5 rounded-full border border-white bg-transparent text-white font-sans font-medium text-[11px] md:text-[18px] lg:text-[24px] hover:bg-white hover:text-[#111C55] transition-colors"
          >
            {buttonText}
          </Link>
        </div>
      </div>

    </div>
  );
}


