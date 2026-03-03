"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState, useRef } from "react";


export default function ChairmanTeamPage() {
    const [mounted, setMounted] = useState(false);

    const images = [1, 2, 3, 4, 5, 6, 7];
    const numClones = 3; // Number of clones at each end for stability
    const extendedImages = [...images.slice(-numClones), ...images, ...images.slice(0, numClones)];
    const totalSlides = images.length;
    const extendedTotalSlides = extendedImages.length;

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

    // Handle the infinite "jump" after transition
    useEffect(() => {
        if (!isTransitioning) return;

        const timer = setTimeout(() => {
            setIsTransitioning(false);

            if (currentIndex >= totalSlides + numClones) {
                // Jump to original first item (no transition)
                setCurrentIndex(numClones);
            } else if (currentIndex < numClones) {
                // Jump to original last item (no transition)
                setCurrentIndex(totalSlides + numClones - 1);
            }
        }, 700); // Must match transition duration

        return () => clearTimeout(timer);
    }, [currentIndex, isTransitioning, totalSlides, numClones]);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;

    return (
        <div className="min-h-screen w-full bg-white font-sans selection:bg-yellow-500/30 relative flex flex-col">

            {/* SECTION 1: BLUE INTRO (Smaller on mobile, full screen on desktop) */}
            <div className="h-auto min-h-[70vh] sm:min-h-[75vh] md:h-screen w-full bg-[#111C55] text-white relative flex flex-col overflow-hidden shrink-0">

                {/* Hero Content */}
                <section className="relative flex-1 px-6 md:px-16 lg:px-24 flex flex-col lg:flex-row items-center justify-center lg:justify-between z-10 overflow-hidden lg:pt-0">

                    {/* Text Area */}
                    <div className="w-full lg:w-[55%] flex flex-col justify-center items-center lg:items-start text-center lg:text-left h-auto lg:h-full pb-8 lg:pb-12">
                        <div className="animate-in fade-in slide-in-from-bottom-12 lg:slide-in-from-left-12 duration-1000">
                            <h1 className="text-3xl md:text-6xl lg:text-7xl font-serif mb-2 md:mb-4 leading-tight text-white drop-shadow-2xl">
                                Umesh Agrawal
                            </h1>
                            <div className="mb-6 lg:mb-10 relative flex flex-col items-center lg:items-start w-full lg:w-fit px-4 md:px-0">
                                <h2 className="text-xl sm:text-2xl md:text-4xl lg:text-[40px] font-libre font-extralight text-[#BBBBBB] leading-[1.35] tracking-[0.2em] text-center lg:text-left w-full">
                                    Chairman
                                </h2>
                                <div className="hidden lg:block w-full h-[3px] bg-[#FF9E02] mt-3 shadow-[0_0_20px_rgba(255,158,2,0.6)]"></div>
                            </div>

                            {/* Unified Quote Container */}
                            <div className="relative max-w-sm lg:max-w-2xl px-4 lg:px-0 lg:pr-12 mt-6 lg:mt-12 ml-2 lg:ml-8 group">

                                {/* Opening quote images - side by side */}
                                <div className="flex flex-row items-center gap-1 mb-2 md:mb-3 -ml-2 lg:-ml-8">
                                    <Image
                                        src="/images/chairman/quote1.png"
                                        alt="opening quote"
                                        width={25}
                                        height={35}
                                        className="object-contain w-[11px] h-[16px] lg:w-[25px] lg:h-[35px]"
                                    />
                                    <Image
                                        src="/images/chairman/quote1.png"
                                        alt="opening quote"
                                        width={25}
                                        height={35}
                                        className="object-contain w-[11px] h-[16px] lg:w-[25px] lg:h-[35px]"
                                    />
                                </div>

                                {/* Quote Text */}
                                <p className="text-base md:text-lg lg:text-[28px] font-libre font-light text-white/90 leading-normal relative z-10 -mt-2 md:-mt-4 ml-4 md:ml-8">
                                    In every challenge lies the seed of<br className="hidden md:block" />
                                    opportunity; the leaders who embrace<br className="hidden md:block" />
                                    it will see it blossom into success.
                                </p>

                                {/* Closing quote images - side by side */}
                                <div className="flex flex-row items-center justify-end gap-1 -mt-1 lg:-mt-2 mr-0.5 lg:-mr-8">
                                    <Image
                                        src="/images/chairman/quote2.png"
                                        alt="closing quote"
                                        width={25}
                                        height={35}
                                        className="object-contain w-[14px] h-[20px] lg:w-[25px] lg:h-[35px]"
                                    />
                                    <Image
                                        src="/images/chairman/quote2.png"
                                        alt="closing quote"
                                        width={25}
                                        height={35}
                                        className="object-contain w-[14px] h-[20px] lg:w-[25px] lg:h-[35px]"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Chairman Image */}
                    <div className="w-full lg:w-[45%] flex justify-center items-end h-auto lg:h-full relative mt-auto animate-in fade-in slide-in-from-bottom-12 duration-1000">
                        <div className="relative w-full h-[340px] sm:h-[380px] lg:h-full lg:max-h-[85vh] flex items-end overflow-hidden">
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

                {/* Subtle Background Elements */}
                <div className="absolute top-0 right-0 w-full h-[150%] -z-10 opacity-[0.25] scale-150 pointer-events-none">
                    <Image
                        src="/images/chairman/Vector1.png"
                        alt=""
                        fill
                        className="object-cover"
                    />
                </div>
                {/* Vector 1 - Top Right Large */}
                <div className="absolute top-80 right-[1%] w-[95%] h-[70%] z-10 opacity-100 pointer-events-none">
                    <Image
                        src="/images/chairman/Vector1.png"
                        alt=""
                        fill
                        className="object-contain object-right-top"
                    />
                </div>
                <div className="absolute top-[-120px] md:top-70 left-[5%] w-[50%] h-[25%] z-10 opacity-100 pointer-events-none">
                    <Image
                        src="/images/chairman/Vector2.png"
                        alt=""
                        fill
                        className="object-contain"
                    />
                </div>

                {/* Background Gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-transparent via-[#111C55]/40 to-[#0a1440] -z-30"></div>
            </div>

            {/* SECTION 2: WHITE PAGE (Biography + Carousel) */}
            <div className="w-full bg-white relative py-20 md:py-32 flex flex-col overflow-hidden">

                {/* Subtle Background Vectors (Repositioned to Top) */}
                <div className="absolute inset-0 -z-10 pointer-events-none overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-full opacity-[0.03] scale-x-[-1]">
                        <Image
                            src="/images/chairman/Vector1.png"
                            alt=""
                            fill
                            className="object-cover"
                        />
                    </div>
                </div>

                {/* Vector 14 - Large, Right Side (like Vector1 on page 1) */}
                <div className="absolute top-87 right-[1%] w-[95%] h-[70%] z-0 opacity-100 pointer-events-none">
                    <Image
                        src="/images/chairman/Vector1.png"
                        alt=""
                        fill
                        className="object-contain object-right-top"
                    />
                </div>

                {/* Vector 15 - Smaller, Left Side (like Vector2 on page 1) */}
                <div className="absolute top-80 left-[1%] w-[50%] h-[25%] z-0 opacity-100 pointer-events-none">
                    <Image
                        src="/images/chairman/Vector2.png"
                        alt=""
                        fill
                        className="object-contain"
                    />
                </div>

                {/* Biography Section (Padded) */}
                <div className="w-full px-8 md:px-24 flex flex-col items-center">
                    <div className="max-w-7xl w-full relative z-10">
                        {/* Section Heading */}
                        <div className="flex flex-col items-center mb-16 md:mb-20 mx-auto w-fit">
                            <h2 className="text-5xl md:text-[50px] font-serif text-[#111C55] tracking-[0.15em] uppercase mb-1">
                                CHAIRMAN
                            </h2>
                            <div className="w-full h-[3px] bg-[#CA9015]"></div>
                        </div>

                        {/* Biography Content Wrapper */}
                        <div className="w-full space-y-8 text-[18px] text-[#6B7280] leading-[26px] font-libre font-normal text-justify md:text-left px-4 md:px-0">
                            <p>
                                Mr. Umesh Agrawal (born 9th June 1971) epitomizes the indomitable entrepreneurial spirit of a visionary dedicated to transforming the industrial landscape. As the District President of Raigarh (Chhattisgarh), he is lauded for his dynamic leadership, pioneering efforts, and innovative genius. Mr. Umesh Agrawal has become an inspiring figure, sparking the imagination of a generation of entrepreneurs and business leaders in India.
                            </p>

                            <p>
                                His extraordinary vision has redefined the potential of the Indian manufacturing sector, particularly in machining, casting, and trailer manufacturing. He challenged conventional wisdom, recognizing the strategic importance of innovation and quality in industrial growth. The corporate philosophy he champions is clear: &ldquo;Innovate Relentlessly. Lead with Integrity. Strive for Excellence.&rdquo;
                            </p>

                            <p>
                                Under Mr. Umesh Agrawal&apos;s visionary leadership, Jagdamba Group has emerged as a leading force in various industries, carving out a distinct place in the competitive market. His entrepreneurial mission has set numerous revolutionary precedents, contributing significantly to the social and economic development of the region.
                            </p>

                            <p>
                                Mr. Umesh Agrawal&apos;s contributions have been recognized by numerous national and international organizations, earning him accolades for his exceptional service to industry and trade. His relentless pursuit of excellence and his unwavering commitment to progress continue to drive the Jagdamba Group towards new heights, aligning with his grand vision for India&apos;s industrial future.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Image Carousel Section (Responsive Design) */}
                <div className="mt-16 md:mt-20 w-screen overflow-hidden">
                    <div className="flex flex-col items-center">
                        <div className="relative w-full overflow-visible">
                            <div
                                className="flex transition-transform duration-700 ease-in-out gap-4 md:gap-8"
                                style={{
                                    transform: `translateX(calc(-${currentIndex * (typeof window !== 'undefined' ? (window.innerWidth < 768 ? 266 : window.innerWidth < 1024 ? 632 : 832) : 832)}px + 50% - ${typeof window !== 'undefined' ? (window.innerWidth < 768 ? 125 : window.innerWidth < 1024 ? 300 : 400) : 400}px))`
                                }}
                            >
                                {extendedImages.map((num, idx) => (
                                    <div
                                        key={`${num}-${idx}`}
                                        className="relative shrink-0 w-[250px] sm:w-[400px] md:w-[600px] lg:w-[800px] h-[180px] sm:h-[300px] md:h-[400px] lg:h-[500px] rounded-[20px] md:rounded-[40px] lg:rounded-[50px] overflow-hidden transition-all duration-700 origin-center scale-100 opacity-100"
                                    >
                                        <Image
                                            src={`/images/chairman/${num}.png`}
                                            alt={`Chairman Moment ${num}`}
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Navigation Arrows */}
                        <div className="flex items-center gap-4 -mt-10 z-30 relative">
                            <button
                                onClick={prevSlide}
                                className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-[#CA9015] flex items-center justify-center text-white hover:bg-[#a87812] transition-all hover:scale-110 active:scale-95 group"
                                aria-label="Previous slide"
                            >
                                <svg className="w-6 h-6 md:w-8 md:h-8 transform rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12H3m18 0l-6-6m6 6l-6 6" />
                                </svg>
                            </button>
                            <button
                                onClick={nextSlide}
                                className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-[#CA9015] flex items-center justify-center text-white hover:bg-[#a87812] transition-all hover:scale-110 active:scale-95 group"
                                aria-label="Next slide"
                            >
                                <svg className="w-6 h-6 md:w-8 md:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12H3m18 0l-6-6m6 6l-6 6" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>

                {/* Dynamic Spacer (Further Reduced) */}
                <div className="h-10 md:h-12"></div>
            </div>

        </div>
    );
}
