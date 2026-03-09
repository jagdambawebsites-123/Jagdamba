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
              <h2 className="text-[24px] md:text-[40px] leading-[150%] md:leading-[135%] font-serif font-normal text-[#111C55] capitalize">
                {titleStart}{" "}{titleHighlight}
              </h2>
              <div className="text-[#111C55]/63 text-[12px] md:text-[18px] leading-[20px] md:leading-[26px] space-y-4 md:space-y-6 lg:space-y-8 font-sans font-normal md:font-medium text-center lg:text-left">
                {paragraphs.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
            </div>

            <div className="w-full lg:w-2/5 flex flex-col items-center lg:items-end text-center lg:text-right">
              <span className="text-[40px] md:text-[72px] leading-[152%] font-serif font-normal text-[#CA9015]">
                {statNumber}
              </span>
              <span className="text-[12px] md:text-[24px] leading-[152%] tracking-[0.17em] uppercase font-sans font-normal text-[#111C55]/63 mt-2 bg-[#111C55A1] md:bg-transparent px-2 md:px-0 text-white md:text-[#111C55]/63">
                {statLabel}
              </span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
