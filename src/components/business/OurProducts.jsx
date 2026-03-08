"use client";

import { useState, useRef } from "react";
import Image from "next/image";

export default function OurProducts({ 
  titleStart = "Our", 
  titleHighlight = "Products", 
  description, 
  products,
  isCarousel = false 
}) {
  const scrollRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  // --- PC Drag-to-Scroll Logic ---
  const handleMouseDown = (e) => {
    if (!scrollRef.current) return;
    setIsDragging(true);
    setStartX(e.pageX - scrollRef.current.offsetLeft);
    setScrollLeft(scrollRef.current.scrollLeft);
  };

  const handleMouseUpOrLeave = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e) => {
    if (!isDragging || !scrollRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * 1.5; 
    scrollRef.current.scrollLeft = scrollLeft - walk;
  };

  // --- Proportional Scroll Mapping ---
  const handleScroll = () => {
    if (!scrollRef.current) return;
    const container = scrollRef.current;
    
    const maxScroll = container.scrollWidth - container.clientWidth;

    if (maxScroll <= 0) {
      setActiveIndex(0);
      return;
    }

    const scrollPercentage = container.scrollLeft / maxScroll;
    const newIndex = Math.round(scrollPercentage * (products.length - 1));

    if (newIndex !== activeIndex) {
      setActiveIndex(newIndex);
    }
  };

  // --- Click Dot to Scroll Proportionally ---
  const scrollToItem = (index) => {
    if (!scrollRef.current) return;
    const container = scrollRef.current;
    const maxScroll = container.scrollWidth - container.clientWidth;

    if (maxScroll > 0) {
      const targetScroll = (index / (products.length - 1)) * maxScroll;
      
      container.scrollTo({
        left: targetScroll,
        behavior: "smooth"
      });
    }
    setActiveIndex(index);
  };

  return (
    <div className="w-full bg-[#F5F5F5]">
      <section className="container mx-auto px-6 md:px-10 xl:px-25 py-10 md:py-16 overflow-hidden">
        
        {/* Top Row: Responsive Heading and Description */}
        <div className="flex flex-col lg:flex-row lg:justify-between items-center lg:items-start gap-6 lg:gap-20 mb-12 md:mb-16">
          <h2 className="text-2xl lg:w-1/2 md:text-[40px] font-serif text-[#111C55] text-center lg:text-left">
            {titleStart} <span className="text-[#CA9015]">{titleHighlight}</span>
          </h2>
          <p className="w-full lg:w-1/2 text-center lg:text-left text-[#6B7280] text-[12px] md:text-[16px] leading-6 font-sans">
            {description}
          </p>
        </div>

        {/* Bottom Row: Conditional Render */}
        {!isCarousel ? (
          // Standard Grid Layout (For Calcining)
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6 justify-items-center">
            {products.map((product) => (
              <ProductCard key={product.name} product={product} isCarousel={false} />
            ))}
          </div>
        ) : (
          // Fixed Size Horizontal Carousel (For Casting)
          <div className="relative w-full">
            {/* Draggable Scroll Container */}
            <div 
              ref={scrollRef}
              onMouseDown={handleMouseDown}
              onMouseLeave={handleMouseUpOrLeave}
              onMouseUp={handleMouseUpOrLeave}
              onMouseMove={handleMouseMove}
              onScroll={handleScroll}
              className={`flex overflow-x-auto gap-4 md:gap-6 pb-4 hide-scrollbar select-none [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] ${
                isDragging ? "cursor-grabbing" : "cursor-grab active:cursor-grabbing"
              } ${!isDragging ? "scroll-smooth snap-x snap-mandatory" : ""}`}
            >
              {products.map((product) => (
                <div 
                  key={product.name} 
                  className={`shrink-0 w-[133px] h-[120px] md:w-[177px] md:h-[160px] snap-center lg:snap-start ${
                    isDragging ? "pointer-events-none" : ""
                  }`}
                >
                  <ProductCard product={product} isCarousel={true} />
                </div>
              ))}
            </div>

            {/* Pagination Dots */}
            <div className="flex justify-center items-center mt-6 flex-wrap gap-2 max-w-[90%] mx-auto">
              {products.map((_, index) => (
                <button
                  key={index}
                  onClick={() => scrollToItem(index)}
                  className={`transition-all duration-300 rounded-full ${
                    index === activeIndex 
                      ? "w-4 h-1.5 bg-[#111C55]" 
                      : "w-1.5 h-1.5 bg-[#C7C7CC] hover:bg-gray-400" 
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        )}
      </section>
    </div>
  );
}

// Sub-component tailored to handle both modes gracefully
function ProductCard({ product, isCarousel }) {
  return (
    <div 
      className={`relative group overflow-hidden bg-[#8a8a8a] ${
        isCarousel 
          ? "w-full h-full" 
          : "w-full max-w-[244px] aspect-[244/220] mx-auto rounded-2xl lg:rounded-none" 
      }`}
    >
      {/* Image */}
      <Image
        src={product.src}
        alt={product.name}
        fill
        draggable={false} 
        className="object-cover transition-transform duration-500 group-hover:scale-105"
        sizes={isCarousel ? "(max-width: 768px) 133px, 177px" : "(max-width: 768px) 50vw, 25vw"}
      />
      
      {/* Dark Overlay for Text Readability */}
      <div className="absolute inset-0 bg-black/50 flex items-center justify-center p-2 transition-colors duration-300 group-hover:bg-black/40">
        <h3 className={`text-white font-bold tracking-wider text-center uppercase ${
          isCarousel ? "text-[10px] sm:text-xs md:text-sm leading-tight" : "text-xs sm:text-sm md:text-lg"
        }`}>
          {product.name}
        </h3>
      </div>
    </div>
  );
}