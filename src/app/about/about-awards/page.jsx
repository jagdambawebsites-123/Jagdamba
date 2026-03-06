"use client";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";

export default function AwardsPage() {
  const [mounted, setMounted] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [awards, setAwards] = useState([]);

  useEffect(() => {
    setMounted(true);

    const fetchAwards = async () => {
      try {
        const query = `*[_type == "featuredStory"] | order(_createdAt desc)[0...10]`;
        const data = await client.fetch(query);

        if (data && data.length > 0) {
          const formattedAwards = data.map(item => ({
            id: item._id,
            image: item.mainImage ? urlFor(item.mainImage).url() : "/images/placeholder.jpg",
            title: item.title,
            date: item.date ? new Date(item.date).toLocaleDateString('en-US', {
              day: 'numeric',
              month: 'long',
              year: 'numeric'
            }) : "",
            href: item.href || "#"
          }));
          setAwards(formattedAwards);
        }
      } catch (error) {
        console.error("Error fetching awards from Sanity:", error);
      }
    };

    fetchAwards();
  }, []);

  const nextSlide = () => {
    if (awards.length === 0) return;
    setCurrentIndex((prev) => (prev + 1) % awards.length);
  };

  const prevSlide = () => {
    if (awards.length === 0) return;
    setCurrentIndex((prev) => (prev - 1 + awards.length) % awards.length);
  };

  if (!mounted) return null;

  return (
    <div className="min-h-screen bg-[#111C55] font-libre text-white overflow-hidden relative">
      {/* Background Glow */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#111C55] rounded-full blur-[150px] -z-10 opacity-50 translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#111C55] rounded-full blur-[150px] -z-10 opacity-30 -translate-x-1/2 translate-y-1/2"></div>

      {/* Background Vectors */}
      <div className="absolute top-0 right-0 w-full h-[150%] -z-10 opacity-[0.25] scale-150 pointer-events-none">
        <Image
          src="/images/aboutPage/about-awards/Vector1.png"
          alt=""
          fill
          className="object-cover"
        />
      </div>

      <div className="absolute top-60 right-[1%] w-[95%] h-[70%] z-0 opacity-100 pointer-events-none">
        <Image
          src="/images/aboutPage/about-awards/Vector2.png"
          alt=""
          fill
          className="object-contain object-right-top"
        />
      </div>
      <div className="absolute top-[-40px] md:top-20 left-[2%] w-[42%] h-[25%] z-0 opacity-100 pointer-events-none">
        <Image
          src="/images/aboutPage/about-awards/Vector2.png"
          alt=""
          fill
          className="object-contain"
        />
      </div>

      {/* --- AWARDS SECTION --- */}
      <main className="relative z-10 px-8 md:px-20 pt-24 md:pt-32 lg:pt-40 pb-12 md:pb-20">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 xl:gap-24 items-start">
          <div className="lg:w-[40%] animate-slide-left lg:pl-12 z-20">
            <h1 className="font-baskerville mb-6 md:mb-10 leading-[1.2] tracking-normal text-[28px] sm:text-[36px] md:text-[45px] lg:text-[50px] font-normal">
              Awards & <span className="text-[#FFB800] font-baskerville">Recognition</span>
            </h1>
            <div className="space-y-4 md:space-y-10 text-white/80 text-[16px] sm:text-[18px] md:text-[22px] leading-[1.5] md:leading-[1.6] font-light max-w-none tracking-wide">
              <p>
                Our journey is marked by numerous awards and honours, each
                reflecting our dedication to quality, creative problem-solving,
                and making a significant difference in every field we engage.
              </p>
              <p>
                These recognitions are not just milestones but reminders of
                the trust placed in us by our partners, clients, and
                communities.
              </p>
            </div>
          </div>

          <div className="lg:w-fit w-full relative animate-slide-right lg:-mt-4 ml-auto flex flex-col items-center">
            <div className="overflow-hidden pb-6 md:pb-10 w-full max-w-[380px] md:max-w-none md:w-[calc(380px*2+24px)]">
              <div
                className="flex transition-transform duration-700 cubic-bezier(0.4, 0, 0.2, 1) gap-6"
                style={{
                  transform: `translateX(-${currentIndex * (currentIndex === 0 ? 0 : (mounted && window.innerWidth < 768 ? 320 : 404))}px)`,
                }}
              >
                {awards.map((award) => (
                  <div
                    key={award.id}
                    className="w-[300px] md:w-[380px] bg-white rounded-2xl overflow-hidden shadow-[0_15px_40px_rgba(0,0,0,0.4)] group shrink-0 mx-auto md:cursor-default cursor-pointer relative"
                    onClick={() => { if (window.innerWidth < 768) nextSlide(); }}
                  >
                    <div className="relative h-[180px] md:h-[280px] overflow-hidden">
                      <Image
                        src={award.image}
                        alt={award.title.toString()}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="p-5 md:p-8 text-black">
                      <h3 className="font-libre font-medium text-[#6B7280] mb-4 md:mb-8 text-[18px] leading-[26px] tracking-tight min-h-[3rem]">
                        {award.title}
                      </h3>
                      <p className="font-libre font-normal text-[#111C55] text-[16px] leading-[1.24] tracking-normal mt-3">
                        {award.date}
                      </p>
                    </div>
                    <div className="md:hidden absolute bottom-4 right-4 flex items-center gap-1 text-[#111C55]/40 text-xs font-libre">
                      <span>tap</span>
                      <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex gap-2 mb-8 md:hidden">
              {awards.map((_, i) => (
                <div
                  key={i}
                  onClick={() => setCurrentIndex(i)}
                  className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${i === currentIndex ? 'w-6 bg-white' : 'w-2 bg-white/30'}`}
                />
              ))}
            </div>

            <div className="hidden md:flex justify-end gap-5 mt-4 w-full md:w-[calc(380px*2+24px)]">
              <button onClick={prevSlide} className="w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-white flex items-center justify-center transition-all hover:scale-110 active:scale-95 group shadow-lg">
                <svg className="w-8 h-8 transform rotate-180 text-[#111C55] transition-transform group-hover:-translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>
              <button onClick={nextSlide} className="w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-white flex items-center justify-center transition-all hover:scale-110 active:scale-95 group shadow-lg">
                <svg className="w-8 h-8 text-[#111C55] transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </main>

      {/* --- STATS SECTION --- */}
      <section className="relative -mt-8 md:-mt-14 bg-[#111C55] md:bg-transparent">
        <div className="absolute inset-0 -z-10 hidden md:flex overflow-hidden">
          <div className="w-[44%] h-full bg-[#f2f4f7]"></div>
          <div className="w-[56%] h-full relative">
            <div className="absolute top-0 inset-x-0 h-[80%] bg-[#111C55]"></div>
            <div className="absolute bottom-0 inset-x-0 h-[20%] bg-white"></div>
          </div>
        </div>

        <div className="px-8 md:px-20 flex flex-col lg:flex-row items-center lg:items-end justify-between gap-16 md:gap-12 relative z-10 pt-10 lg:pt-0">
          <div className="w-full max-w-[90%] md:max-w-3xl min-h-[60px] bg-white rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.15)] py-12 px-8 md:py-20 md:px-20 relative border border-gray-100 flex flex-col justify-center items-center md:ml-10 z-20 mb-12 md:mb-20 order-2 lg:order-1 mt-10 lg:mt-0">
            <div className="absolute top-4 left-4 md:top-4 md:left-4">
              <Image src="/images/aboutPage/about-awards/Quotes left.png" alt="Opening Quote" width={60} height={45} className="w-10 h-auto md:w-20" />
            </div>
            <blockquote className="font-baskerville font-normal text-[#111C55] text-[16px] md:text-[20px] leading-[24px] md:leading-[28px] text-center max-w-2xl px-2">
              The team is dedicated, and the work environment <br className="hidden md:block" />
              promotes growth. The company&apos;s commitment to <br className="hidden md:block" />
              quality and innovation is inspiring.
            </blockquote>
            <div className="absolute bottom-4 right-4 md:bottom-4 md:right-4">
              <Image src="/images/aboutPage/about-awards/Quotes right.png" alt="Closing Quote" width={60} height={45} className="w-10 h-auto md:w-20" />
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-center md:justify-end items-center gap-16 md:gap-20 pb-6 md:pb-32 pr-0 w-full lg:w-auto order-1 lg:order-2 mt-10 lg:mt-0">
            <div className="flex flex-row items-center gap-6 group">
              <span className="text-[48px] md:text-[64px] font-baskerville font-normal text-[#CA9015] leading-[1.24] transition-transform group-hover:scale-110 duration-500">2K</span>
              <div className="flex flex-col text-left">
                <span className="text-[20px] md:text-[24px] font-libre font-normal text-[#BBBBBB] leading-[1.24]">Combined</span>
                <span className="text-[20px] md:text-[24px] font-libre font-normal text-[#BBBBBB] leading-[1.24]">Reviews</span>
              </div>
            </div>
            <div className="flex flex-row items-center gap-6 group">
              <span className="text-[48px] md:text-[64px] font-baskerville font-normal text-[#CA9015] leading-[1.24] transition-transform group-hover:scale-110 duration-500">10K</span>
              <div className="flex flex-col text-left">
                <span className="text-[20px] md:text-[24px] font-libre font-normal text-[#BBBBBB] leading-[1.24]">Happy</span>
                <span className="text-[20px] md:text-[24px] font-libre font-normal text-[#BBBBBB] leading-[1.24]">Clients</span>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 w-full h-64 hidden md:flex z-0">
          <div className="w-[42%] bg-white h-full"></div>
          <div className="w-[58%] bg-[#111C55] h-full"></div>
        </div>
      </section>

      {/* --- PRESENCE SECTION --- */}
      <section className="w-full min-h-screen bg-white relative overflow-hidden py-24 lg:pt-12 lg:pb-32">
        <div className="absolute top-0 left-0 w-full h-full opacity-[0.03] scale-x-[-1] pointer-events-none">
          <Image src="/images/aboutPage/about-awards/Vector1.png" alt="" fill className="object-cover" />
        </div>
        <div className="absolute top-80 right-[1%] w-[95%] h-[70%] z-0 opacity-100 pointer-events-none">
          <Image src="/images/aboutPage/about-awards/Vector 12.png" alt="" fill className="object-contain object-right-top" />
        </div>
        <div className="absolute top-[320px] left-[4%] w-[50%] h-[25%] z-0 opacity-100 pointer-events-none">
          <Image src="/images/aboutPage/about-awards/Vector 13.png" alt="" fill className="object-contain" />
        </div>
        <div className="absolute top-1/2 left-0 w-full h-[60%] -translate-y-1/2 opacity-10 pointer-events-none">
          <Image src="/images/aboutPage/about-awards/Vector 14.png" alt="Decorative Wave" fill className="object-contain" />
        </div>

        <div className="max-w-[1400px] mx-auto px-6 md:px-20 relative z-10">
          <div className="flex flex-col lg:grid lg:grid-cols-2 items-center justify-between gap-12 lg:gap-8 mt-8 lg:mt-0">
            <div className="w-full flex flex-col space-y-8 lg:space-y-12 order-1">
              <div className="w-full flex flex-col items-start lg:pt-12">
                <h2 className="font-baskerville font-normal text-[#111C55] mb-4 md:mb-6 text-[32px] md:text-[48px] xl:text-[52px] leading-[1.1]">
                  Our <span className="text-[#CA9015]">Presence</span>
                </h2>
                <p className="font-libre font-normal text-[#6B7280] text-[15px] md:text-[18px] leading-[1.5] max-w-xl">
                  We delivered projects around 198 locations in 18 states in India, <br className="hidden xl:block" /> making a global impact with our work.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4 md:gap-6 w-full max-w-lg">
                <div className="bg-[#111C55] rounded-2xl p-5 lg:p-6 flex items-center gap-5 shadow-[0_10px_30px_rgba(5,11,44,0.15)] border border-white/5 transition-transform hover:scale-105 duration-300">
                  <div className="w-10 h-10 md:w-12 md:h-12 relative shrink-0">
                    <Image src="/images/aboutPage/about-awards/mumbai.png" alt="Mumbai Icon" fill className="object-contain brightness-0 invert" />
                  </div>
                  <span className="text-xs md:text-lg font-semibold tracking-[0.1em] text-white uppercase font-playfair">Mumbai</span>
                </div>
                <div className="bg-[#111C55] rounded-2xl p-5 lg:p-6 flex items-center gap-5 shadow-[0_10px_30px_rgba(5,11,44,0.15)] border border-white/5 transition-transform hover:scale-105 duration-300">
                  <div className="w-10 h-10 md:w-12 md:h-12 relative shrink-0">
                    <Image src="/images/aboutPage/about-awards/red-fort.png" alt="Delhi Icon" fill className="object-contain brightness-0 invert" />
                  </div>
                  <span className="text-xs md:text-lg font-semibold tracking-[0.1em] text-white uppercase font-playfair">Delhi</span>
                </div>
                <div className="bg-[#111C55] rounded-2xl p-5 lg:p-6 flex items-center gap-5 shadow-[0_10px_30px_rgba(5,11,44,0.15)] border border-white/5 transition-transform hover:scale-105 duration-300">
                  <div className="w-10 h-10 md:w-12 md:h-12 relative shrink-0">
                    <Image src="/images/aboutPage/about-awards/chennai.png" alt="Chennai Icon" fill className="object-contain brightness-0 invert opacity-90" />
                  </div>
                  <span className="text-xs md:text-lg font-semibold tracking-[0.1em] text-white uppercase font-playfair">Chennai</span>
                </div>
                <div className="bg-[#111C55] rounded-2xl p-5 lg:p-6 flex items-center gap-5 shadow-[0_10px_30px_rgba(5,11,44,0.15)] border border-white/5 transition-transform hover:scale-105 duration-300">
                  <div className="w-10 h-10 md:w-12 md:h-12 relative shrink-0">
                    <Image src="/images/aboutPage/about-awards/bangalore.png" alt="Bangalore Icon" fill className="object-contain brightness-0 invert" />
                  </div>
                  <span className="text-xs md:text-lg font-semibold tracking-[0.1em] text-white uppercase font-playfair">Bangalore</span>
                </div>
              </div>
            </div>

            {/* --- MAP SIZE INCREASED HERE --- */}
            <div className="w-full flex justify-center lg:justify-end items-center order-2 relative">
              {/* Increased max-w to 950px and lg:scale to 1.25 */}
              <div className="relative w-full max-w-[400px] md:max-w-[750px] xl:max-w-[950px] aspect-[4/5] md:aspect-square lg:scale-125 lg:translate-y-16 transition-all duration-1000">
                <Image
                  src="/images/aboutPage/about-awards/indiaMap.png"
                  alt="India Map Presence"
                  fill
                  className="object-contain drop-shadow-[0_20px_60px_rgba(17,28,85,0.12)]"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}