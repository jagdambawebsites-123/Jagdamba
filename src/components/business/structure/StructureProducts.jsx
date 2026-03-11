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
                <h2 className="text-[24px] leading-[150%] md:text-[40px] md:leading-normal font-serif text-[#111C55] whitespace-nowrap">
                    Our <span className="text-[#B88C2E]">Products</span>
                </h2>
                <p className="w-full lg:w-1/2 text-[#6B7280] text-[12px] leading-[18px] md:text-[24px] md:leading-relaxed font-sans">
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
                <span className="align-middle tracking-normal font-serif font-normal text-[#111C55] text-[16px] leading-[100%] md:font-sans md:text-[#6B7280] md:text-[32px] md:leading-[100%]">To know more, visit:</span>
                <a
                    href="https://jagdambastructure.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border border-[#111C55] text-[#111C55] font-sans tracking-normal hover:bg-[#111C55] hover:text-white transition-colors duration-300 flex items-center w-[224px] h-[32px] md:w-[294px] md:h-[48px] pt-[16px] pr-[32px] pb-[16px] pl-[32px] gap-[10px] md:gap-[4px] rounded-[30px] md:rounded-full border font-normal text-[12px] leading-[100%] md:font-medium md:text-[18px] md:leading-[27px]"
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
