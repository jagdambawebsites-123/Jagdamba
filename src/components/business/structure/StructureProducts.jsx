const PRODUCTS = [
    { name: "Gallery Structure", src: "/images/business/structure/gallery.svg" },
    { name: "Chimney", src: "/images/business/structure/chimney.svg" },
    { name: "Frame", src: "/images/business/structure/frame.svg" },
    { name: "Columns", src: "/images/business/structure/coloums.svg" },
    { name: "Elbow", src: "/images/business/structure/elbo.svg" },
    { name: "Winch", src: "/images/business/structure/whinch.svg" },
    { name: "Lime", src: "/images/business/structure/lime.svg" },
    { name: "Square", src: "/images/business/structure/square.svg" },
    { name: "Star", src: "/images/business/structure/star.svg" },
    { name: "Transition", src: "/images/business/structure/transition.svg" },
    { name: "Cooled", src: "/images/business/structure/cooled.svg" },
];

export default function StructureProducts({ products = PRODUCTS }) {
    return (
        <section className="w-full bg-[#F5F5F5] py-16 flex flex-col gap-18 font-sans">

            <div className="container mx-auto px-6 md:px-10 xl:px-25 flex flex-col lg:flex-row lg:justify-between items-center lg:items-start text-center lg:text-left gap-6 lg:gap-20">
                <h2 className="text-3xl md:text-[40px] font-serif text-[#111C55] whitespace-nowrap">
                    Our <span className="text-[#B88C2E]">Products</span>
                </h2>
                <p className="w-full lg:w-1/2 text-[#6B7280] text-[18px] md:text-[24px] leading-relaxed font-sans">
                    At Jagdamba we pride ourselves on our commitment to excellence in fabrication
                    and erection of steel structures, equipment, Pre-engineering buildings,
                    bridges, deck sheet installation.
                </p>
            </div>

            <div className="w-full overflow-x-auto scrollbar-hide px-4 md:px-10">
                <div className="flex gap-4 md:gap-6">
                    {products.map((product, index) => (
                        <div
                            key={index}
                            className="shrink-0 w-[44vw] md:w-100 h-35 md:h-70 rounded-3xl overflow-hidden"
                        >
                            <img
                                src={product.src}
                                alt={product.name}
                                className="w-full h-full object-cover"
                            />
                        </div>
                    ))}
                </div>
            </div>

            <div className="container mx-auto px-6 md:px-10 xl:px-25 flex flex-col md:flex-row items-center justify-center gap-3 md:gap-4">
                <span className="text-[#6B7280] text-[24px] md:text-[32px] font-sans">To know more, visit:</span>
                <a
                    href="https://jagdambastructure.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border border-[#111C55] text-[#111C55] text-[18px] font-sans px-5 py-2 rounded-full hover:bg-[#111C55] hover:text-white transition-colors duration-300 flex items-center gap-2"
                >
                    jagdambastructure.com
                    <ArrowUpRightIcon className="w-3.5 h-3.5 text-[#B88C2E]" />
                </a>
            </div>

        </section>
    );
}

function ArrowUpRightIcon({ className }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2.5}
      stroke="currentColor"
      className={className}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
    </svg>
  );
}
