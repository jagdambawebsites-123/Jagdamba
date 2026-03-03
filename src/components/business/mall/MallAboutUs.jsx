import Image from "next/image";

export default function MallAboutUs({
  titleStart,
  titleHighlight,
  paragraphs,
  statNumber,
  statLabel,
  bgDecoration = "/images/landingPage/about-us-bg-decoration.png",
}) {
  return (
    <div className="w-full bg-[#F5F5F5]">
      <section className="container relative w-full bg-[#F5F5F5] px-6 md:px-10 xl:px-25 py-10 md:py-16 overflow-hidden">
        <div className="absolute top-1/2 left-0 w-full h-auto -translate-y-1/2 opacity-60 pointer-events-none">
          <Image
            src={bgDecoration}
            alt=""
            width={1920}
            height={400}
            className="w-full h-auto object-cover"
            priority
          />
        </div>

        <div className="relative z-10 mx-auto">
          <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center gap-8 lg:gap-20">
            <div className="w-full lg:w-3/5 flex flex-col gap-4 text-center lg:text-left">
              <h2 className="text-[24px] md:text-[36px] lg:text-[48px] leading-[135%] font-serif text-[#111C55]">
                {titleStart}{" "}{titleHighlight}
              </h2>
              <div className="text-[#111C55]/63 text-[12px] md:text-[18px] lg:text-[24px] leading-[151.5%] space-y-4 md:space-y-6 lg:space-y-8 font-sans font-medium">
                {paragraphs.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
            </div>

            <div className="w-full lg:w-2/5 flex flex-col items-center lg:items-end text-center lg:text-right">
              <span className="text-[40px] md:text-[60px] lg:text-[80px] leading-[151.5%] font-serif text-[#CA9015]">
                {statNumber}
              </span>
              <span className="text-[12px] md:text-[18px] lg:text-[24px] leading-[151.5%] tracking-[0.25em] uppercase text-[#111C55]/63 font-sans mt-2">
                {statLabel}
              </span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
