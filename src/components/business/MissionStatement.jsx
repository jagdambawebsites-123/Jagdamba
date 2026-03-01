import Image from "next/image";

export default function MissionStatement() {
  return (
    <div className="w-full bg-[#F5F5F5]">
      <section className="container mx-auto px-6 md:px-10 xl:px-25 py-10 md:py-24">
        <div className="flex flex-col lg:flex-row items-start justify-between gap-12 lg:gap-20">
          {/* Left Column: Heading & Text */}
          <div className="w-full lg:w-1/2 flex flex-col items-start /*lg:items-start */text-left lg:text-left">
            <h2 className="text-2xl md:text-[40px] font-serif leading-tight mb-6 lg:mb-8">
              <span className="block text-[#111C55]">Refining Excellence.</span>
              <span className="block text-[#CA9015]">Mining Progress.</span>
            </h2>
            <p className="text-[#6B7280] text-sm md:text-base leading-relaxed max-w-[400px]">
              Driving advancements in mining and perfecting global industry standards.
            </p>
          </div>
          {/* Right Column: Image Container */}
          <div className="w-full lg:w-1/2">
            <div className="relative aspect-[70/44] overflow-hidden rounded-sm shadow-sm">
              <Image
                src="/images/business/mining-footer.png"
                alt="Mining and refining progress"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
