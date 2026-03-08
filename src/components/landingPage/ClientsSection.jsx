import React from 'react';
import Image from 'next/image';

export default function ClientsSection() {
  const clients = [
    { name: 'Jindal Stainless', src: '/images/landingPage/logos/jsla.svg' },
    { name: 'JSW Steel', src: '/images/landingPage/logos/jsw.svg' },
    { name: 'Jindal Steel & Power', src: '/images/landingPage/logos/jindalpower.svg' },
    { name: 'Mitsubishi Power', src: '/images/landingPage/logos/mitsubishii.svg' },
    { name: 'JSSL', src: '/images/landingPage/logos/jssl.svg' },
    { name: 'AM/NS India', src: '/images/landingPage/logos/amns.svg' },
    { name: 'Tata Motors', src: '/images/landingPage/logos/tata.png' },
  ];

  const infiniteClients = [...clients, ...clients];

  return (
    <div className='w-full bg-[#F8F9FA]'>
      <div className="container bg-[#F8F9FA] py-16 sm:py-24 w-full overflow-hidden">

        {/* Top Text Section */}
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-6 md:gap-12 mb-16 sm:mb-32 px-6 md:px-10 xl:px-25 text-center md:text-left">
          <h2 className="text-3xl sm:text-[40px] font-serif text-[#111C55] whitespace-nowrap">
            Our <span className="text-[#B88C2E]">Clients</span>
          </h2>
          <p className="text-[#6B7280] font-sans text-[14px] sm:text-2xl leading-relaxed sm:leading-9 max-w-xl">
            We are committed to the idea of respect and decency, in relation to our employees, as well as to customers, partners and suppliers of the company.
          </p>
        </div>

        {/* Infinite Slider Container */}
        {/* Added: border-y and py-8 for spacing between borders and logos */}
        <div className="relative w-full py-8 flex overflow-hidden">

          {/* Vignette/Fade Overlay using CSS Mask */}
          {/* This creates the smooth fade on left and right */}
          <div
            className="absolute inset-0 z-10 pointer-events-none"
            style={{
              maskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)',
              WebkitMaskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)'
            }}
          ></div>

          {/* The scrolling track */}
          <div className="flex w-max animate-infinite-scroll">
            {infiniteClients.map((client, index) => (
              <div
                key={index}
                className="flex justify-center items-center w-[150px] sm:w-[200px] mx-4 sm:mx-8"
              >
                <img
                  src={client.src}
                  alt={client.name}
                  className="h-8 sm:h-10 md:h-12 w-auto object-contain transition-all duration-300"
                  style={{ filter: 'brightness(0) saturate(100%) invert(11%) sepia(69%) saturate(750%) hue-rotate(208deg) brightness(95%)' }}
                />
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}