"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState, useRef } from "react";

export default function ChairmanTeamPage() {
    const [mounted, setMounted] = useState(false);

    const images = [1, 2, 3, 4, 5, 6, 7];
    const numClones = 3;
    const extendedImages = [...images.slice(-numClones), ...images, ...images.slice(0, numClones)];
    const totalSlides = images.length;

    const [currentIndex, setCurrentIndex] = useState(numClones);
    const [isTransitioning, setIsTransitioning] = useState(false);

    const nextSlide = () => {
        if (isTransitioning) return;
        setIsTransitioning(true);
        setCurrentIndex((prev) => prev + 1);
    };

    const prevSlide = () => {
        if (isTransitioning) return;
        setIsTransitioning(true);
        setCurrentIndex((prev) => prev - 1);
    };

    useEffect(() => {
        if (!isTransitioning) return;

        const timer = setTimeout(() => {
            setIsTransitioning(false);

            if (currentIndex >= totalSlides + numClones) {
                setCurrentIndex(numClones);
            } else if (currentIndex < numClones) {
                setCurrentIndex(totalSlides + numClones - 1);
            }
        }, 700);

        return () => clearTimeout(timer);
    }, [currentIndex, isTransitioning, totalSlides, numClones]);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;

    return (
        <div className="min-h-screen w-full bg-white font-sans selection:bg-yellow-500/30 relative flex flex-col">

            {/* SECTION 1: BLUE INTRO - Vectors Preserved */}
            <div className="h-auto min-h-[85vh] md:h-screen w-full bg-[#111C55] text-white relative flex flex-col overflow-hidden shrink-0">
                <section className="relative flex-1 px-6 md:px-16 lg:px-24 flex flex-col lg:flex-row items-center justify-center lg:justify-between z-10 overflow-hidden pt-12 lg:pt-0">
                    <div className="w-full lg:w-[55%] flex flex-col justify-center items-center lg:items-start text-center lg:text-left h-auto lg:h-full pt-16 sm:pt-24 lg:pt-0 pb-4 lg:pb-12">
                        <div className="animate-in fade-in slide-in-from-bottom-12 lg:slide-in-from-left-12 duration-1000 w-full">
                            <h1 className="text-[32px] leading-[1.0] md:text-[64px] md:leading-[1.35] font-baskerville font-normal tracking-[0] mb-2 md:mb-4 text-white drop-shadow-2xl text-center lg:text-left whitespace-nowrap">
                                Umesh Agrawal
                            </h1>

                            <div className="mb-6 lg:mb-10 relative flex flex-col items-center lg:items-start w-full lg:w-fit px-2 md:px-0">
                                <h2 className="text-[20px] md:text-[40px] font-libre font-extralight text-[#BBBBBB] leading-[1.35] tracking-[0] text-center lg:text-left w-full">
                                    Chairman
                                </h2>
                                <div className="hidden lg:block w-full h-[3px] bg-[#FF9E02] mt-3 shadow-[0_0_20px_rgba(255,158,2,0.6)]"></div>
                            </div>

                            <div className="relative max-w-sm lg:max-w-2xl px-1 sm:px-4 lg:px-0 lg:pr-12 mt-10 md:mt-12 group mx-auto lg:ml-12 text-center lg:text-left">
                                {/* Quote Icons - Absolute for mobile, Relative/Flex for desktop */}
                                <div className="absolute -top-10 left-2 md:relative md:top-0 md:left-0 flex flex-row items-center gap-1 mb-2 md:mb-3 md:-ml-12 justify-center lg:justify-start">
                                    <Image src="/images/chairman/quote1.png" alt="opening quote" width={25} height={35} className="object-contain w-[18px] h-[26px] lg:w-[25px] lg:h-[35px]" />
                                    <Image src="/images/chairman/quote1.png" alt="opening quote" width={25} height={35} className="object-contain w-[18px] h-[26px] lg:w-[25px] lg:h-[35px]" />
                                </div>

                                <p className="text-[14px] md:text-[28px] font-libre font-normal text-[#BBBBBB] md:text-white/90 leading-[20px] md:leading-[1.24] tracking-[0] relative z-10 lg:ml-6 text-center lg:text-left">
                                    In every challenge lies the seed of<br className="hidden md:block" />
                                    opportunity; the leaders who embrace<br className="hidden md:block" />
                                    it will see it blossom into success.
                                </p>

                                <div className="absolute -bottom-10 right-2 md:relative md:bottom-0 md:right-0 flex flex-row items-center justify-end gap-1 md:-mt-2 mr-0.5 lg:mr-18">
                                    <Image src="/images/chairman/quote2.png" alt="closing quote" width={25} height={35} className="object-contain w-[22px] h-[30px] lg:w-[25px] lg:h-[35px]" />
                                    <Image src="/images/chairman/quote2.png" alt="closing quote" width={25} height={35} className="object-contain w-[22px] h-[30px] lg:w-[25px] lg:h-[35px]" />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="w-full lg:w-[45%] flex justify-center items-end h-auto lg:h-full relative mt-12 lg:mt-auto animate-in fade-in slide-in-from-bottom-12 duration-1000">
                        <div className="relative w-full h-[400px] sm:h-[500px] lg:h-full lg:max-h-[85vh] flex items-end overflow-hidden">
                            <Image
                                src="/images/chairman/chairman.png"
                                alt="Umesh Agrawal - Chairman"
                                fill
                                className="object-contain object-bottom drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
                                priority
                            />
                        </div>
                    </div>
                </section>

                <div className="absolute top-0 right-0 w-full h-[150%] -z-10 opacity-[0.25] scale-150 pointer-events-none">
                    <Image src="/images/chairman/Vector1.png" alt="" fill className="object-cover" />
                </div>
                <div className="absolute top-80 right-[1%] w-[95%] h-[70%] z-10 opacity-100 pointer-events-none">
                    <Image src="/images/chairman/Vector1.png" alt="" fill className="object-contain object-right-top" />
                </div>
                <div className="absolute top-[-120px] md:top-72 left-[5%] w-[50%] h-[25%] z-10 opacity-100 pointer-events-none">
                    <Image src="/images/chairman/Vector2.png" alt="" fill className="object-contain" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-br from-transparent via-[#111C55]/40 to-[#0a1440] -z-30"></div>
            </div>

            {/* SECTION 2: WHITE PAGE (Biography + Carousel) */}
            <div className="w-full bg-white relative py-16 md:py-32 flex flex-col overflow-hidden">

                {/* UPDATED: Group 2 shifted UP using negative top value */}
                <div className="absolute -top-[20%] left-0 w-full h-full z-0 pointer-events-none">
                    <Image
                        src="/images/chairman/Group 2.png"
                        alt=""
                        fill
                        className="object-contain opacity-40"
                    />
                </div>

                <div className="w-full px-6 md:px-24 flex flex-col items-center">
                    <div className="max-w-7xl w-full relative z-10">
                        <div className="flex flex-col items-center mb-12 md:mb-20 mx-auto w-fit">
                            <h2 className="text-3xl md:text-[50px] font-serif text-[#111C55] tracking-[0.1em] md:tracking-[0.15em] uppercase mb-1">
                                CHAIRMAN
                            </h2>
                            <div className="w-full h-[2px] md:h-[3px] bg-[#CA9015]"></div>
                        </div>

                        <div className="w-full space-y-6 md:space-y-8 text-[14px] md:text-[18px] text-[#6B7280] leading-[20px] md:leading-[26px] font-libre font-normal tracking-[0] text-center md:text-left px-2 md:px-0">
                            <p>Mr. Umesh Agrawal (born 9th June 1971) epitomizes the indomitable entrepreneurial spirit of a visionary dedicated to transforming the industrial landscape. As the District President of Raigarh (Chhattisgarh), he is lauded for his dynamic leadership, pioneering efforts, and innovative genius. Mr. Umesh Agrawal has become an inspiring figure, sparking the imagination of a generation of entrepreneurs and business leaders in India.</p>
                            <p>His extraordinary vision has redefined the potential of the Indian manufacturing sector, particularly in machining, casting, and trailer manufacturing. He challenged conventional wisdom, recognizing the strategic importance of innovation and quality in industrial growth. The corporate philosophy he champions is clear: &ldquo;Innovate Relentlessly. Lead with Integrity. Strive for Excellence.&rdquo;</p>
                            <p>Under Mr. Umesh Agrawal&apos;s visionary leadership, Jagdamba Group has emerged as a leading force in various industries, carving out a distinct place in the competitive market. His entrepreneurial mission has set numerous revolutionary precedents, contributing significantly to the social and economic development of the region.</p>
                            <p>Mr. Umesh Agrawal&apos;s contributions have been recognized by numerous national and international organizations, earning him accolades for his exceptional service to industry and trade. His relentless pursuit of excellence and his unwavering commitment to progress continue to drive the Jagdamba Group towards new heights, aligning with his grand vision for India&apos;s industrial future.</p>
                        </div>
                    </div>
                </div>

                {/* Carousel remains unchanged */}
                <div className="mt-16 md:mt-20 w-screen overflow-hidden">
                    <div className="flex flex-col items-center">
                        <div className="relative w-full overflow-visible">
                            <div
                                className="flex transition-transform duration-700 ease-in-out gap-4 md:gap-8"
                                style={{
                                    transform: `translateX(calc(-${currentIndex * (typeof window !== 'undefined' ? (window.innerWidth < 768 ? 216 : 718) : 718)}px + 50% - ${typeof window !== 'undefined' ? (window.innerWidth < 768 ? 100 : 351) : 351}px))`
                                }}
                            >
                                {extendedImages.map((num, idx) => (
                                    <div
                                        key={`${num}-${idx}`}
                                        className="relative shrink-0 w-[200px] h-[135px] md:w-[702px] md:h-[475px] rounded-[12px] md:rounded-[50px] overflow-hidden transition-all duration-700 origin-center"
                                    >
                                        <Image src={`/images/chairman/${num}.png`} alt={`Chairman Moment ${num}`} fill className="object-cover" />
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="flex items-center gap-4 -mt-6 md:-mt-8 z-30 relative">
                            <button onClick={prevSlide} className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-[#CA9015] flex items-center justify-center text-white hover:bg-[#a87812] transition-all hover:scale-110 active:scale-95">
                                <svg className="w-5 h-5 md:w-8 md:h-8 transform rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12H3m18 0l-6-6m6 6l-6 6" /></svg>
                            </button>
                            <button onClick={nextSlide} className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-[#CA9015] flex items-center justify-center text-white hover:bg-[#a87812] transition-all hover:scale-110 active:scale-95">
                                <svg className="w-5 h-5 md:w-8 md:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12H3m18 0l-6-6m6 6l-6 6" /></svg>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="h-10 md:h-12"></div>
            </div>
        </div>
    );
}