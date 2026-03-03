import Image from "next/image";

const categories = [
  { label: "SHOPPING", src: "/images/business/mall/shopping.png" },
  { label: "ENTERTAINMENT", src: "/images/business/mall/entertainment.png" },
  { label: "GAMES", src: "/images/business/mall/games.png" },
  { label: "FOOD AND BEVERAGES", src: "/images/business/mall/food.png" },
];

export default function MallExploreSection() {
  return (
    <div className="relative w-full min-h-[60vh] md:min-h-[70vh] lg:min-h-screen overflow-hidden">
      {/* Background Image */}
      <Image
        src="/images/business/mall/content-bg.png"
        alt="Explore background"
        fill
        className="object-cover object-center"
        priority
      />

      {/* Dark overlay */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to bottom, rgba(0,0,0,0.40) 0%, rgba(0,0,0,0) 45%, rgba(0,0,0,0) 100%)",
        }}
      />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-[60vh] md:min-h-[70vh] lg:min-h-screen px-6 md:px-10 xl:px-25 py-12 lg:py-20 gap-10 md:gap-16 lg:gap-28">
        {/* Heading */}
        <h2 className="text-white font-serif font-normal text-[32px] md:text-[48px] lg:text-[64px] leading-none text-center">
          Explore, Enjoy, Elevate.
        </h2>

        {/* Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5 lg:gap-8 w-full max-w-4xl lg:max-w-full">
          {categories.map((cat) => (
            <div key={cat.label} className="flex flex-col items-center bg-white rounded-2xl p-2 md:p-3 pb-4 md:pb-5 shadow-lg w-full">
              {/* Image */}
              <div className="w-full h-35 md:h-52 lg:h-72 rounded-xl overflow-hidden">
                <Image
                  src={cat.src}
                  alt={cat.label}
                  width={296}
                  height={240}
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Label */}
              <span className="text-[#111C55] font-sans font-medium text-[11px] md:text-[16px] lg:text-[20px] leading-[135%] tracking-widest uppercase text-center mt-3 px-1">
                {cat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
