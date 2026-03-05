"use client";

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState, useRef } from 'react';

// Custom Counter component for the animation
function Counter({ end, suffix = "", duration = 2000 }) {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    let startTime = null;
    const animate = (currentTime) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      
      // easeOutExpo function for a smooth slow-down at the end
      const easeOut = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      setCount(Math.floor(easeOut * end));

      if (progress < 1) {
        window.requestAnimationFrame(animate);
      }
    };

    window.requestAnimationFrame(animate);
  }, [end, duration, isVisible]);

  return <span ref={ref}>{count}{suffix}</span>;
}

export default function AboutSection() {
  return (
    <div className='w-full bg-[#F5F5F5]'>
      <section className="container relative w-full bg-[#F5F5F5] px-6 md:px-10 xl:px-25 py-16 md:py-24 overflow-hidden">
        {/* Background Decorative Waves */}
        <div className="hidden md:block absolute top-1/2 left-0 w-full h-auto -translate-y-1/2 opacity-60 pointer-events-none">
          <Image
            src="/images/landingPage/about-us-bg-decoration.png"
            alt=""
            width={1920}
            height={400}
            className="w-full h-auto object-cover"
            priority
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto">

          {/* Top Row: Heading and Text */}
          <div className="flex flex-col lg:flex-row lg:justify-between gap-10 lg:gap-20 mb-12 md:mb-20 lg:mb-28">

            {/* Left Column: Heading & Button */}
            <div className="w-full lg:w-1/3 flex flex-col items-center lg:items-start text-center lg:text-left">
              <h2 className="text-4xl md:text-5xl font-serif text-[#111C55] mb-6 lg:mb-8">
                About <span className="text-[#B88C2E]">Us</span>
              </h2>

              {/* Hidden on mobile/tablet, flex on desktop */}
              <Link href="/about/aboutUs">
                <button className="hidden lg:flex group px-8 py-2.5 rounded-full border border-[#161c3a] items-center gap-3 text-[#161c3a] font-medium hover:bg-[#161c3a] hover:text-white transition-all duration-300">
                  Explore
                  <ArrowUpRightIcon className="w-4 h-4 text-[#c19b4e] group-hover:text-[#c19b4e]" />
                </button>
              </Link>
            </div>

            {/* Right Column: Paragraphs */}
            <div className="w-full lg:w-2/3 text-center lg:text-left text-[#6B7280] text-base md:text-lg leading-relaxed space-y-6 font-sans">
              <p>
                At Jagdamba Group, we are dedicated to India's growth and development through our diverse business ventures. As a distinguished conglomerate, we operate in waterpark management, trailer manufacturing, mining, sponge iron production, resort management, and mall operations. Our efforts are focused on contributing to the nation's progress by creating employment opportunities, building world-class manufacturing facilities, and supporting local economies.
              </p>
              <p>
                Our foundation is built on principles of integrity, honesty, safety, enjoyment, and strong industry partnerships earning the trust of our clientele. Our skilled and experienced team, combined with a client-centric approach ensures the successful completion of every project. By consistently delivering exceptional services an high-quality results, we reinforce our commitment to India's advancement and strive to shape a prosperous futur for the nation.
              </p>
            </div>
          </div>

          {/* Bottom Row: Statistics */}
          <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-0">

            {/* Stat 1 */}
            <div className="flex-1 flex flex-col items-center text-center">
              <span className="text-4xl md:text-5xl font-serif text-[#111C55] mb-1">
                <Counter end={20} suffix="+" />
              </span>
              <span className="text-[#6B7280] text-sm md:text-base font-medium">Years of Experience</span>
            </div>

            {/* Divider: Horizontal on mobile, Vertical on MD+ */}
            <div className="w-16 h-[1px] md:w-[2px] md:h-16 bg-[#B88C2E] opacity-50 md:opacity-100"></div>

            {/* Stat 2 */}
            <div className="flex-1 flex flex-col items-center text-center">
              <span className="text-4xl md:text-5xl font-serif text-[#111C55] mb-1">
                <Counter end={3} suffix="K+" />
              </span>
              <span className="text-[#6B7280] text-sm md:text-base font-medium">No. of Employees</span>
            </div>

            {/* Divider: Horizontal on mobile, Vertical on MD+ */}
            <div className="w-16 h-[1px] md:w-[2px] md:h-16 bg-[#B88C2E] opacity-50 md:opacity-100"></div>

            {/* Stat 3 */}
            <div className="flex-1 flex flex-col items-center text-center">
              <span className="text-4xl md:text-5xl font-serif text-[#111C55] mb-1">
                <Counter end={500} suffix="+" />
              </span>
              <span className="text-[#6B7280] text-sm md:text-base font-medium">Projects Completed</span>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}

function ArrowUpRightIcon({ className }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2.5}
      stroke="currentColor"
      className={className}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
    </svg>
  );
}