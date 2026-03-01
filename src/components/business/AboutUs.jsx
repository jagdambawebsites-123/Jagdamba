import Image from "next/image";

export default function AboutUs() {
  return (
    <div className="w-full bg-[#F5F5F5]">
      <section className="container relative w-full bg-[#F5F5F5] px-6 md:px-10 xl:px-25 py-10 md:py-16 overflow-hidden">
        {/* Background Decorative Waves */}
        <div className="absolute top-1/2 left-0 w-full h-auto -translate-y-1/2 opacity-60 pointer-events-none">
          <Image
            src="/images/landingPage/about-us-bg-decoration.png"
            alt=""
            width={1920}
            height={400}
            className="w-full h-auto object-cover"
            priority
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto">
          {/* Top Row: Heading and Text */}
          <div className="flex flex-col lg:flex-row lg:justify-between gap-2 lg:gap-20">
            {/* Left Column: Heading & Button */}
            <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left">
              <h2 className="text-2xl md:text-[40px] font-serif text-[#111C55] mb-4 lg:mb-8">
                Mining and <span className="text-[#CA9015]">Calcining </span>
              </h2>
            </div>

            {/* Right Column: Paragraphs */}
            <div className="w-full lg:w-1/2 text-center lg:text-left text-[#6B7280] text-sm md:text-base leading-relaxed space-y-6 font-sans">
              <p>
                We specialise in the extraction, processing, and supply of
                high-quality minerals and stones. Our expertise encompasses a
                diverse range of products, including stone, aggregate, dolomite,
                calcined materials, and limestone, catering to a wide array of
                industrial and construction needs.
              </p>
              <p>
                The range of products we
                offer includes essential materials for construction,
                infrastructure projects, and various industrial applications.
                Our commitment to excellence ensures that our clients receive
                reliable, top-grade materials that meet their specific
                requirements.              </p>
                <p> Our advanced mining techniques and processing
                facilities reflect our dedication to quality and environmental
                responsibility. We strive to lead the industry by implementing
                sustainable practices that benefit both our customers and the
                communities we serve.</p>

            </div>
          </div>
        </div>
      </section>
    </div>
  );
}