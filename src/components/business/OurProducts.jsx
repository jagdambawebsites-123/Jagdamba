import Image from "next/image";

const products = [
  { name: "CALCINING", src: "/images/business/mining/products/calcining.png" },
  { name: "AGGREGATE", src: "/images/business/mining/products/aggregate.png" },
  { name: "LIME STONE", src: "/images/business/mining/products/limestone.png" },
  { name: "DOLOMITE", src: "/images/business/mining/products/dolomite.png" },
];

export default function OurProducts() {
  return (
    <div className="w-full bg-[#F5F5F5]">
      <section className="container mx-auto px-6 md:px-10 xl:px-25 py-10 md:py-16">
        
        {/* Top Row: Responsive Heading and Description */}
        <div className="flex flex-col lg:flex-row lg:justify-between items-center lg:items-start gap-6 lg:gap-20 mb-12 md:mb-16">
          <h2 className="text-2xl lg:w-1/2 md:text-[40px] font-serif text-[#111C55] text-center lg:text-left">
            Our <span className="text-[#CA9015]">Products</span>
          </h2>
          
          <p className="w-full lg:w-1/2 text-center lg:text-left text-[#6B7280] text-sm md:text-base leading-relaxed font-sans">
            The company&apos;s extensive collection of stones has garnered widespread acclaim 
            from engineers and builders, positioning it as a preferred choice for 
            commercial and residential applications.
          </p>
        </div>

        {/* Bottom Row: 2x2 Grid on Mobile, 4-column on Desktop */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6">
          {products.map((product) => (
            <div 
              key={product.name} 
              className="relative group aspect-square overflow-hidden rounded-lg md:rounded-xl"
            >
              {/* Image */}
              <Image
                src={product.src}
                alt={product.name}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 768px) 50vw, 25vw"
              />
              
              {/* Dark Overlay for Text Readability */}
              <div className="absolute inset-0 bg-black/30 flex items-center justify-center p-2">
                <h3 className="text-white font-bold tracking-widest text-xs sm:text-sm md:text-lg text-center">
                  {product.name}
                </h3>
              </div>
            </div>
          ))}
        </div>

      </section>
    </div>
  );
}