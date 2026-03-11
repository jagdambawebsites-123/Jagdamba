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
      <Image
        src="/images/business/mall/content-bg.png"
        alt="Explore background"
        fill
        className="object-cover object-center"
        priority
      />

      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to bottom, rgba(0,0,0,0.40) 0%, rgba(0,0,0,0) 45%, rgba(0,0,0,0) 100%)",
        }}
      />

      <div className="relative z-10 flex flex-col items-center justify-center min-h-[60vh] md:min-h-[70vh] lg:min-h-screen px-6 md:px-10 xl:px-25 py-12 lg:py-20 gap-10 md:gap-16 lg:gap-28">
        <h2 className="text-white font-serif font-normal text-[18px] md:text-[36px] lg:text-[52px] leading-none text-center">
          Explore, Enjoy, Elevate.
        </h2>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5 lg:gap-8 w-full max-w-4xl lg:max-w-full">
          {categories.map((cat) => (
            <div key={cat.label} className="flex flex-col items-center bg-white p-6 shadow-lg w-full gap-6" style={{ borderRadius: '7.98px' }}>
              <div className="w-full h-35 md:h-52 lg:h-72 overflow-hidden" style={{ borderRadius: '3.99px' }}>
                <Image
                  src={cat.src}
                  alt={cat.label}
                  width={296}
                  height={240}
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="text-[#111C55] font-sans font-medium text-[10px] md:text-[20px] leading-[135%] md:leading-[28px] tracking-normal md:tracking-[0.05em] uppercase text-center">
                {cat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
