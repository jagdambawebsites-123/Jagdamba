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
        { name: 'Tata Motors', src: '/images/landingPage/logos/tata.svg' },
    ];

    const infiniteClients = [...clients, ...clients];

    return (
        <div className='w-full bg-[#F5F5F5]'>
            <div className="container bg-[#F5F5F5] py-16 sm:py-24 w-full overflow-hidden">

                <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-5 md:gap-12 mb-16 sm:mb-32 px-6 md:px-10 xl:px-25 text-center md:text-left">
                    <h2 className="font-serif font-normal tracking-normal capitalize text-center md:text-left text-[#111C55] text-[24px] leading-[150%] md:text-[40px] md:leading-[100%] whitespace-nowrap">
                        Our <span className="text-[#B88C2E]">Clients</span>
                    </h2>
                    <p className="text-[#6B7280] font-sans font-normal tracking-normal text-[24px] leading-[36px] max-w-xl text-center md:text-left">
                        We are committed to the idea of respect and decency, in relation to our employees, as well as to customers, partners and suppliers of the company.
                    </p>
                </div>

                <div className="relative w-full py-8 flex overflow-hidden">

                    <div
                        className="absolute inset-0 z-10 pointer-events-none"
                        style={{
                            maskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)',
                            WebkitMaskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)'
                        }}
                    ></div>

                    <div className="flex w-max animate-infinite-scroll">
                        {infiniteClients.map((client, index) => (
                            <div
                                key={index}
                                className="flex justify-center items-center w-37.5 sm:w-50 mx-4 sm:mx-8"
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