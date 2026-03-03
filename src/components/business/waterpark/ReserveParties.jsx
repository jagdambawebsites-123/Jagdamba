"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export default function ReserveParties() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const slides = [
    {
      title: "Resort",
      description:
        "Welcome to our luxurious resort, a serene escape from everyday life. Ideal for romantic getaways, family vacations, and special events, our resort offers world-class amenities, including a pristine pool, fine dining, expansive lawns, and an elegant banquet hall. Enjoy comfortable accommodations and exceptional service in a tranquil setting. Explore nearby attractions, indulge in spa treatments, and participate in exciting recreational activities. Our dedicated staff is committed to making your stay unforgettable, ensuring every detail is perfect. Book your stay today and experience unparalleled relaxation and hospitality at our resort.",
      image: "/images/business/waterpark/reserveParties/resort.png",
    },
    {
      title: "Pool Side Party",
      description:
        "Reserve your perfect poolside party at our waterpark and resort! Our stunning pool area provides the ideal setting for any celebration, from birthdays and anniversaries to corporate events and reunions. Enjoy the refreshing ambiance, luxurious amenities, and exceptional service as you and your guests create unforgettable memories. Whether it's a lively gathering or a relaxed get-together, our poolside venue promises a spectacular experience for all. Book now and let us make your next event a splash!",
      image: "/images/business/waterpark/reserveParties/pool-side-party.png",
    },
    {
      title: "Lawn Party",
      description:
        "Host your next unforgettable event on our beautifully manicured lawn. Perfect for weddings, birthday celebrations, corporate gatherings, and more, our expansive lawn provides a picturesque setting that combines natural beauty with elegant charm. Enjoy the open air, lush greenery, and customizable setups that cater to your unique vision. Our dedicated team ensures every detail is taken care of, allowing you to relax and celebrate in style. Reserve our lawn today and create memories that will last a lifetime.",
      image: "/images/business/waterpark/reserveParties/lawn-party.png",
    },
    {
      title: "Banquet Hall Party",
      description:
        "Experience the elegance and sophistication of our state-of-the-art banquet hall, perfect for hosting weddings, corporate events, gala dinners, and special celebrations. Our versatile space can be tailored to suit your event's unique requirements, offering a luxurious ambiance complemented by modern amenities and impeccable service. From exquisite décor to gourmet catering, our dedicated team ensures every detail is flawlessly executed. Reserve our banquet hall today and let us help you create an unforgettable event that exceeds your expectations.",
      image: "/images/business/waterpark/reserveParties/banquet-hall-party.png",
    },
    {
      title: "Fine Dine",
      description:
        "Indulge in an exquisite dining experience at our resort's fine dining restaurant. Perfect for romantic dinners, family celebrations, or business meetings, our elegant setting offers a refined ambiance and impeccable service. Savor gourmet dishes crafted from the finest ingredients, paired with an exceptional selection of wines. Whether you are celebrating a special occasion or simply enjoying a night out, our fine dining restaurant promises a culinary journey that delights the senses. Reserve your table now and experience the pinnacle of dining sophistication.",
      image: "/images/business/waterpark/reserveParties/fine-dine.png",
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <section className="relative w-full py-20 bg-[#F5F5F5] overflow-hidden flex flex-col items-center">
      {/* Background Decor: Top Right Dots */}
      <div className="absolute top-0 -right-10 w-30 h-30 md:w-48 md:h-48 pointer-events-none opacity-60">
        <Image
          src="/images/business/waterpark/reserveParties/doted-semi-circle.svg"
          alt="Decorative dots"
          fill
          className="object-contain object-top object-right"
        />
      </div>

      {/* Heading */}
      <div className="w-full max-w-5xl px-4 md:px-8 relative z-10 flex justify-center md:justify-start mb-20">
        <h2 className="text-3xl w-full md:text-4xl text-[#CA9015] font-serif font-bold text-center">
          Reserve For Parties
        </h2>
      </div>

      {/* Carousel Container */}
      <div className="relative z-10 w-full max-w-5xl px-4 md:px-8">
        {/* We use a fixed minimum height so the absolutely positioned slides don't collapse the container */}
        <div className="relative bg-white rounded-3xl md:rounded-[2.5rem] shadow-xl overflow-hidden min-h-[650px] md:min-h-[450px] w-full">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`absolute inset-0 w-full h-full flex flex-col-reverse md:flex-row transition-opacity duration-700 ease-in-out ${
                index === currentIndex
                  ? "opacity-100 z-10"
                  : "opacity-0 z-0 pointer-events-none"
              }`}
            >
              {/* Left Side: Text Content */}
              <div className="relative w-full md:w-1/2 bg-[#B7E0EB] p-8 md:p-12 lg:p-14 flex flex-col justify-center h-1/2 md:h-full">
                {/* Background Decor: CLOUD */}
                <div className="absolute -inset-50 pointer-events-none opacity-40">
                  <Image
                    src="/images/business/waterpark/reserveParties/cloud.png"
                    alt="Decorative clouds"
                    fill
                    className="object-contain"
                  />
                </div>
                <h3 className="text-2xl md:text-3xl text-[#464646] text-center md:text-left font-serif mb-4 md:mb-6">
                  {slide.title}
                </h3>
                <p className="text-[#464646] text-xs md:text-sm leading-relaxed text-justify opacity-90">
                  {slide.description}
                </p>
              </div>

              {/* Right Side: Image */}
              <div className="w-full md:w-1/2 relative h-1/2 md:h-full">
                <Image
                  src={slide.image}
                  alt={slide.title}
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          ))}
        </div>

        {/* Background Decor: Bottom Right Dots */}
        <div className="absolute -bottom-[24px] -right-[24px] w-30 h-30 md:w-48 md:h-48 pointer-events-none opacity-60">
          <Image
            src="/images/business/waterpark/reserveParties/doted-circle.svg"
            alt="Decorative dots"
            fill
            className="object-contain object-bottom object-right"
          />
        </div>

        {/* 3D Duck Graphic */}
        <div className="absolute -top-18 -left-6 md:-top-25 md:-left-12 w-34 h-34 md:w-52 md:h-52 z-20 pointer-events-none drop-shadow-2xl">
          <Image
            src="/images/business/waterpark/reserveParties/3d-duck.png"
            alt="Duck Mascot"
            fill
            className="object-contain"
          />
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center items-center gap-2 mt-8 z-10 relative">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`transition-all duration-300 rounded-full ${
                currentIndex === index
                  ? "w-6 h-2 bg-[#1a2b5e]"
                  : "w-2 h-2 bg-gray-300 hover:bg-gray-400"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
