"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useRef } from "react";


// Inline Chevron Down Icon for Nav
const ChevronDown = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-3 w-3 ml-2 opacity-70 group-hover:opacity-100 transition-opacity"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={3}
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
  </svg>
);
// Six Chevron Scroll Indicator Icon (Bottom Right)
const ScrollIndicator = () => (
  <div className="flex flex-col items-center animate-bounce-slow-custom">
    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 opacity-30 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
    </svg>
    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 opacity-100 text-white mt-[-24px]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
    </svg>
    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 opacity-100 text-white mt-[-24px]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
    </svg>
    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 opacity-100 text-white mt-[-24px]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
    </svg>
    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 opacity-100 text-white mt-[-24px]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
    </svg>
    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 opacity-100 text-white mt-[-24px]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
    </svg>
  </div>
);

const StatCard = ({ number, title, text }) => (
  <div className="bg-[#111C55] rounded-[40px] p-10 md:p-12 flex flex-col items-start gap-4 h-full">
    <div className="space-y-1">
      <h2 className="text-[#E6E6E6] text-[40px] font-[family-name:var(--font-libre-baskerville)] font-bold leading-[1.52] tracking-normal">{number}</h2>
      <h3 className="text-[#E6E6E6] text-[28px] font-[family-name:var(--font-libre-franklin)] font-normal leading-[1.52] tracking-normal">{title}</h3>
    </div>

    <div className="w-full h-[1px] bg-white/20 my-4" />

    <p className="text-[#BBBBBB] text-[18px] leading-[26px] font-[family-name:var(--font-libre-franklin)] font-normal tracking-normal text-left">
      {text}
    </p>
  </div>
);

const ValueCard = ({ icon, title, text }) => (
  <div className="bg-white rounded-[32px] md:rounded-[40px] p-8 md:p-12 flex flex-col items-center text-center gap-6 h-full shadow-lg z-10 relative">
    <div className="relative w-24 h-24 md:w-28 md:h-28">
      <Image src={icon} alt={title} fill className="object-contain" />
    </div>
    <div className="space-y-3 md:space-y-4">
      <h3 className="text-[#111C55]/95 text-[24px] md:text-[28px] font-[family-name:var(--font-libre-franklin)] font-semibold leading-none">{title}</h3>
      <p className="text-[#6B7280] text-[16px] md:text-[18px] leading-[22px] md:leading-[24px] font-[family-name:var(--font-libre-franklin)] font-normal tracking-normal text-center">
        {text}
      </p>
    </div>
  </div>
);

const ValuesSection = () => {
  const scrollContainerRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const values = [
    {
      icon: "/images/aboutPage/aboutUs/icon1.png",
      title: "Integrity",
      text: "Integrity is the foundation of every decision at Jagdamba Trailers."
    },
    {
      icon: "/images/aboutPage/aboutUs/icon2.png",
      title: "One Team",
      text: "At Jagdamba Trailers, we work as one team, united by our commitment to integrity."
    },
    {
      icon: "/images/aboutPage/aboutUs/icon3.png",
      title: "Safety",
      text: "Safety is our unwavering priority, upheld with the highest integrity at Jagdamba Trailers."
    }
  ];

  const handleScroll = () => {
    if (scrollContainerRef.current) {
      const scrollLeft = scrollContainerRef.current.scrollLeft;
      const slideWidth = scrollContainerRef.current.scrollWidth / values.length;
      const index = Math.round(scrollLeft / slideWidth);
      setActiveIndex(Math.min(Math.max(0, index), values.length - 1));
    }
  };

  return (
    <section className="relative w-full py-16 md:py-32 bg-[#111C55] overflow-hidden">
      {/* Decorative Curved Frame */}
      <div className="absolute top-[80px] left-[20px] md:left-[80px] right-0 bottom-[-50px] border-t border-l border-white/50 rounded-tl-[60px] md:rounded-tl-[80px] pointer-events-none" />

      <div className="relative z-10 w-full space-y-10 md:space-y-16 mt-6 md:mt-12">
        {/* Section Header */}
        <div className="text-center space-y-4 px-10 max-w-7xl mx-auto">
          <h2 className="text-[36px] md:text-[56px] font-[family-name:var(--font-libre-baskerville)] text-white leading-tight flex justify-center items-baseline gap-3">
            <span className="font-normal tracking-wide">Our</span>
            <span className="text-[#B88C2E] font-bold tracking-wide">Values</span>
          </h2>
        </div>

        {/* Carousel / Grid Container */}
        <div className="relative w-full">
          <div
            ref={scrollContainerRef}
            onScroll={handleScroll}
            className="flex md:grid md:grid-cols-3 overflow-x-auto md:overflow-visible snap-x snap-mandatory md:snap-none hide-scrollbar gap-6 md:gap-8 px-8 md:px-24 max-w-7xl mx-auto pb-4 md:pb-0"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {values.map((v, idx) => (
              <div key={idx} className="w-[85vw] min-w-[85vw] md:w-auto md:min-w-0 shrink-0 snap-center">
                <ValueCard icon={v.icon} title={v.title} text={v.text} />
              </div>
            ))}
          </div>

          {/* Pagination Dots (Mobile Only) */}
          <div className="flex justify-center items-center gap-2 mt-4 md:hidden">
            {values.map((_, idx) => (
              <div
                key={idx}
                className={`transition-all duration-300 rounded-full h-2 ${activeIndex === idx ? "w-6 bg-white" : "w-2 bg-white/30"
                  }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};


const SustainabilitySection = () => {
  const scrollContainerRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const cards = [
    {
      title: "Greenery",
      text: (
        <>
          Our commitment to plantation and greenery reflects our dedication to preserving and enhancing the natural environment. Through tree-planting and green space development across our projects, we aim to promote ecological balance, reduce our carbon footprint, and create healthier, more vibrant communities for future generations.
        </>
      ),
      image: "/images/aboutPage/aboutUs/cardImage1.png",
      bgColor: "bg-[#11552C]",
      titleColor: "text-[#CA9015] md:text-white",
      textColor: "text-white/90 md:text-[#E6E6E6]"
    },
    {
      title: "Safety",
      text: (
        <>
          Staff Safety: Our Top Priority: We are committed to ensuring the highest standards of safety for all our employees. Our comprehensive safety programs are designed to protect our staff in every aspect of their work. From rigorous training sessions to state-of-the-art safety equipment, we leave no stone unturned in maintaining a safe working environment.<br /><br />
          We believe that a safe workplace is a productive workplace. By fostering a culture of safety, we not only protect our employees but also enhance their overall well-being and job satisfaction.
        </>
      ),
      image: "/images/aboutPage/aboutUs/cardImage2.png",
      bgColor: "bg-[#CE9F3A]",
      titleColor: "text-white",
      textColor: "text-white/90"
    },
    {
      title: "Impact",
      text: (
        <>
          We are committed to building world-class manufacturing facilities and innovative business models that contribute to India's economic landscape. By generating employment across multiple sectors, we empower communities and support local economies. Our client-centric approach ensures that we deliver exceptional services and high-quality results, reinforcing our commitment to India's advancement.<br /><br />
          We forge strong industry partnerships and collaborate with global leaders to bring the best innovations to India. At Jagdamba Group, we pursue self-reliant, sustainable growth, embracing the challenge of shaping a prosperous future for India.
        </>
      ),
      image: "/images/aboutPage/aboutUs/cardImage3.png",
      bgColor: "bg-[#111C55]",
      titleColor: "text-[#CA9015] md:text-white",
      textColor: "text-white/90 md:text-[#E6E6E6]"
    }
  ];

  const handleScroll = () => {
    if (scrollContainerRef.current) {
      const scrollLeft = scrollContainerRef.current.scrollLeft;
      const slideWidth = scrollContainerRef.current.scrollWidth / cards.length;
      const index = Math.round(scrollLeft / slideWidth);
      setActiveIndex(Math.min(index, cards.length - 1));
    }
  };

  const scrollTo = (index) => {
    if (scrollContainerRef.current) {
      const slideWidth = scrollContainerRef.current.scrollWidth / cards.length;
      scrollContainerRef.current.scrollTo({
        left: slideWidth * index,
        behavior: "smooth"
      });
    }
  };

  return (
    <section className="relative w-full py-20 md:py-32 bg-[#F3F4F6] overflow-hidden">
      <div className="w-full space-y-16">
        {/* Section Header */}
        <div className="text-center space-y-4 px-10 max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-[family-name:var(--font-libre-baskerville)] text-[#000133] font-bold leading-tight flex justify-center items-baseline gap-3">
            <span className="font-normal">Sustainability</span>
          </h2>
        </div>

        {/* Carousel Container */}
        <div className="relative w-full">
          <div
            ref={scrollContainerRef}
            onScroll={handleScroll}
            className="flex overflow-x-auto snap-x snap-mandatory hide-scrollbar gap-8 md:gap-12 px-6 md:px-16 lg:px-[calc(50vw-600px)] pb-12 pt-4"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {cards.map((card, idx) => (
              <div
                key={idx}
                className={`w-[90vw] md:w-[85vw] lg:w-[1200px] max-w-none shrink-0 snap-center rounded-[24px] md:rounded-[40px] flex flex-col md:flex-row overflow-hidden shadow-2xl ${card.bgColor}`}
              >
                {/* Image Side - Positioned FIRST on mobile so it sits on top */}
                <div className="w-full h-[60vw] max-h-[400px] md:h-auto md:w-1/2 relative md:min-h-full md:aspect-auto">
                  <Image src={card.image} alt={card.title} fill className="object-cover" />
                </div>
                {/* Text Side - Positioned BELOW on mobile */}
                <div className="w-full md:w-1/2 p-8 sm:p-10 md:p-16 lg:p-20 flex flex-col justify-center space-y-4 md:space-y-8">
                  <h3 className={`text-[32px] md:text-[44px] font-[family-name:var(--font-libre-baskerville)] font-normal ${card.titleColor}`}>{card.title}</h3>
                  <p className={`text-[15px] md:text-[18px] leading-relaxed font-[family-name:var(--font-libre-franklin)] ${card.textColor}`}>
                    {card.text}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination Dots */}
          <div className="flex justify-center items-center gap-3 mt-4">
            {cards.map((_, idx) => (
              <button
                key={idx}
                onClick={() => scrollTo(idx)}
                className={`transition-all duration-300 rounded-full h-2.5 ${activeIndex === idx ? "w-6 bg-[#000133]" : "w-2.5 bg-[#000133]/30"
                  }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>

        <style jsx>{`
            .hide-scrollbar::-webkit-scrollbar {
                display: none;
            }
        `}</style>
      </div>
    </section>
  );
};

export default function AboutUsPage() {
  return (
    <div className="relative min-h-screen bg-white overflow-x-hidden font-sans">

      {/* 1. HERO SECTION */}
      <section className="relative h-screen w-full overflow-hidden">
        {/* Hero Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/aboutPage/aboutUs/about.png"
            alt="Jagdamba Industrial Site"
            fill
            className="object-cover"
            priority
          />
          {/* Darkening Overlays */}
          <div className="absolute inset-0 bg-black/40" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20" />
        </div>



        {/* Hero Title */}
        <main className="relative z-10 flex flex-col justify-center h-full pt-20 md:pt-0 px-6 sm:px-10 md:px-24">
          <div className="max-w-6xl space-y-6">
            <div className="relative inline-block">
              <h1 className="text-[36px] min-[400px]:text-4xl md:text-5xl lg:text-7xl font-[family-name:var(--font-libre-baskerville)] font-normal text-white leading-[1.15] tracking-tight animate-fade-in-custom drop-shadow-xl">
                Towards Prosperous
                <br />
                Future
              </h1>
              {/* Elegant Orange underline */}
              <div className="w-full h-[4px] md:h-[5px] mt-2 md:mt-6 animate-grow-line-custom" style={{ backgroundColor: '#B88C2E' }} />
            </div>
          </div>
        </main>


        {/* Bottom Right Scroll Indicator */}
        <div className="absolute bottom-16 right-16 z-20 hidden md:block group cursor-pointer">
          <ScrollIndicator />
        </div>
      </section>

      {/* 2. OVERVIEW & STATS SECTION */}
      <section className="relative w-full py-20 md:py-32 px-10 md:px-24 bg-[#F9F9F9]">

        {/* Background Decorative Elements */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          {/* Vector 14 - Right Side */}
          <div className="absolute top-40 right-[1%] w-[95%] h-[70%] z-0 opacity-40 pointer-events-none">
            <Image
              src="/images/aboutPage/aboutUs/Vector 14.png"
              alt=""
              fill
              className="object-contain object-right-top"
            />
          </div>

          {/* Vector 15 - Left Side */}
          <div className="absolute top-32 left-[4%] w-[50%] h-[25%] z-0 opacity-40 pointer-events-none">
            <Image
              src="/images/aboutPage/aboutUs/Vector 15.png"
              alt=""
              fill
              className="object-contain"
            />
          </div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto text-center space-y-16">
          {/* Section Header Text */}
          <div className="space-y-8">
            <h2 className="text-[#B88C2E] text-[24px] font-[family-name:var(--font-libre-baskerville)] font-bold leading-[1.52] max-w-5xl mx-auto tracking-normal">
              At Jagdamba Group, our belief in aligning our business goals with the nation's progress has been the cornerstone of our journey.
            </h2>

            <div className="space-y-6 text-[#6B7280] text-[18px] leading-[26px] max-w-4xl mx-auto font-[family-name:var(--font-libre-franklin)] font-normal tracking-normal">
              <p>
                We have evolved from our beginnings in mining, casting, and calcining to becoming an integrated
                player in trailer manufacturing, structure manufacturing. By expanding into mall operations,
                waterpark management, we are setting new standards and contributing to India's development.
                Through strong industry partnerships and eco-friendly practices, we are dedicated to shaping a
                prosperous and green future for India.
              </p>
              <p>
                At Jagdamba Group, every project we undertake is a step towards a brighter, more sustainable future for the nation.
              </p>
            </div>
          </div>

          {/* Stats Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 pt-8 px-4 md:px-0 lg:gap-16">
            <StatCard
              number="20+"
              title="Years of Experience"
              text="With 20+ years of experience, Jagdamba Group drives India's growth through diverse ventures."
            />
            <StatCard
              number="50+"
              title="Projects Completed"
              text="With 50+ projects completed, Jagdamba Group consistently delivers excellence and innovation."
            />
            <StatCard
              number="3K+"
              title="No. of Employees"
              text="With over 3000 employees, Jagdamba Group powers its diverse ventures with a dedicated workforce."
            />
          </div>
        </div>
      </section>

      {/* 3. OUR VISION SECTION */}
      <section className="relative w-full pt-20 md:pt-32 pb-10 md:pb-16 px-10 md:px-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Text Content */}
          <div className="space-y-8 max-w-xl">
            <h2 className="text-4xl md:text-6xl font-serif text-[#000133] leading-tight flex items-baseline gap-3">
              <span className="font-normal">Our</span>
              <span className="text-[#B2831E] font-medium">Vision</span>
            </h2>

            <p className="text-[#535D77] text-[16px] md:text-[18px] leading-relaxed font-sans opacity-90 text-justify">
              At Jagdamba Group, our vision is to drive sustainable growth and innovation through diverse industries.
              We aim to lead with integrity, foster strong partnerships, and create value for our clients and communities.
              By consistently delivering excellence, we aspire to shape a prosperous future. We are committed to
              empowering our workforce, embracing technological advancements, and contributing positively to society.
              Through our efforts, we envision setting new standards of success and making a lasting impact.
            </p>
          </div>

          {/* Image Content */}
          <div className="relative w-full aspect-[4/3] md:aspect-square lg:aspect-[4/3] rounded-3xl overflow-visible">
            <Image
              src="/images/aboutPage/aboutUs/vision.png"
              alt="Our Vision - Handshake"
              fill
              className="object-contain"
            />
          </div>

        </div>
      </section>

      {/* 4. OUR MISSION SECTION */}
      <section className="relative w-full pt-10 md:pt-16 pb-20 md:pb-32 px-10 md:px-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Image Content */}
          <div className="relative w-full aspect-[4/3] md:aspect-square lg:aspect-[4/3] rounded-3xl overflow-visible order-2 lg:order-1">
            <Image
              src="/images/aboutPage/aboutUs/mission.png"
              alt="Our Mission - Safety Week"
              fill
              className="object-contain"
            />
          </div>

          {/* Text Content */}
          <div className="space-y-8 max-w-xl order-1 lg:order-2">
            <h2 className="text-4xl md:text-6xl font-serif text-[#000133] leading-tight flex items-baseline gap-3">
              <span className="font-normal">Our</span>
              <span className="text-[#B2831E] font-medium">Mission</span>
            </h2>

            <p className="text-[#535D77] text-[16px] md:text-[18px] leading-relaxed font-sans opacity-90 text-justify">
              At Jagdamba Group, our mission is to deliver exceptional value in all our ventures.
              We uphold the highest standards of integrity, safety, and quality, driving innovation and
              sustainability to meet our clients' needs. We create jobs, foster a supportive work
              environment, and build strong partnerships for mutual growth. Additionally, we contribute
              to society through community development and environmental initiatives, striving for
              excellence and meaningful impact.
            </p>
          </div>

        </div>
      </section>

      {/* 5. OUR VALUES SECTION */}
      <ValuesSection />

      {/* 6. SUSTAINABILITY SECTION */}
      <SustainabilitySection />

      {/* FOOTER PLACEHOLDER (Removed per request) */}

    </div>
  );
}
