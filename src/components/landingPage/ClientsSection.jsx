import React from 'react';
import Image from 'next/image';

export default function ClientsSection() {
  const clients = [
    { name: 'Jindal Stainless', src: '/images/landingPage/logos/jsla.png', width: 80, height: 40 },
    { name: 'JSW Steel', src: '/images/landingPage/logos/jsw.png', width: 80, height: 40 },
    { name: 'Jindal Steel & Power', src: '/images/landingPage/logos/jindalpower.png', width: 80, height: 40 },
    { name: 'Mitsubishi Power', src: '/images/landingPage/logos/mitsubishii.png', width: 140, height: 40 },
    { name: 'JSSL', src: '/images/landingPage/logos/jssll.png', width: 80, height: 40 },
    { name: 'AM/NS India', src: '/images/landingPage/logos/amnss.png', width: 80, height: 40 },
    { name: 'Tata Motors', src: '/images/landingPage/logos/tata.png', width: 80, height: 40 },
  ];

  const infiniteClients = [...clients, ...clients];

  return (
    <div className='w-full bg-[#F8F9FA]'>
      <div className="container bg-[#F8F9FA] py-16 sm:py-24 w-full overflow-hidden">
        
        {/* Top Text Section */}
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-6 md:gap-12 mb-16 sm:mb-32 px-4 sm:px-6 lg:px-8 text-center md:text-left">
          <h2 className="text-4xl sm:text-[40px] font-serif text-[#111C55] whitespace-nowrap">
            Our <span className="text-[#B88C2E]">Clients</span>
          </h2>
          <p className="text-[#6B7280] font-light text-base sm:text-2xl leading-relaxed max-w-xl">
            We are committed to the idea of respect and decency, in relation to our employees, as well as to customers, partners and suppliers of the company.
          </p>
        </div>

        {/* Infinite Slider Container */}
        {/* Added: border-y and py-8 for spacing between borders and logos */}
        <div className="relative w-full border-y border-gray-200 py-8 flex overflow-hidden">
          
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
                <Image 
                  src={client.src} 
                  alt={client.name} 
                  width={client.width} 
                  height={client.height}
                  className="h-8 sm:h-10 md:h-12 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300"
                />
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}