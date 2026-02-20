import Image from 'next/image';
import { businessData } from '../../data/landingPage/businessData.js'; // Adjust path as needed
import ButtonSecondary from './ButtonSecondary.jsx';

export default function BusinessSection() {
  return (
    <div className='w-full bg-[#F5F5F5]'>
      <section className="container relative w-full bg-[#F5F5F5]">
      
        {/* Section Header */}
        <div className="pt-20 pb-10 text-center">
          <h2 className="text-4xl md:text-5xl font-serif text-[#111C55]">
            Our <span className="text-[#B88C2E]">Business</span>
          </h2>
        </div>
        {/* Scroll Container
          - h-screen/max-h: Limits height to viewport so internal scrolling works
          - overflow-y-scroll: Enables scrolling
          - snap-y snap-mandatory: The magic CSS for smooth snapping
        */}
        <div className="relative w-full overflow-y-auto snap-y snap-mandatory h-[80vh] md:h-screen scroll-smooth">
      
          {/* The Central Vertical Line (Desktop Only) */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-[#e5e5e5] -translate-x-1/2 z-0"></div>
          {/* Render Business Rows */}
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
            {businessData.map((business, index) => (
              <BusinessCard
                key={business.id}
                data={business}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

// ----------------------------------------------------------------------
// Modular Sub-Component: BusinessCard
// ----------------------------------------------------------------------

function BusinessCard({ data, index }) {
  // Determine alignment based on index (even = image left, odd = image right)
  const isEven = index % 2 === 0;

  return (
    <div className="relative w-full min-h-[80vh] md:min-h-[60vh] flex items-center justify-center snap-center py-10 md:py-0">
      
      {/* The Central "Snap" Bullet Point */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 hidden md:flex flex-col items-center justify-center">
        {/* Outer Glow/Ring */}
        <div className="w-6 h-6 rounded-full bg-[#fbfbfb] border-2 border-[#c19b4e] flex items-center justify-center shadow-sm">
           {/* Inner Dot */}
           <div className="w-2.5 h-2.5 rounded-full bg-[#c19b4e]"></div>
        </div>
      </div>

      <div className={`flex flex-col md:flex-row items-center justify-between w-full gap-8 md:gap-24 ${!isEven ? 'md:flex-row-reverse' : ''}`}>
        
        {/* Image Side */}
        <div className="w-full md:w-1/2 flex justify-center">
          <div className="relative w-full max-w-md aspect-[4/3] rounded-2xl overflow-hidden shadow-lg group">
             {/* Replace with Next/Image in production */}
             <Image src={data.image} alt={data.title} fill className="object-cover" />
             
             {/* Fallback Placeholder */}
             <div className="w-full h-full bg-slate-200 flex items-center justify-center text-slate-400">
                [Image: {data.title}]
             </div>
             
             {/* Hover overlay effect */}
             <div className="absolute inset-0 bg-[#161c3a]/0 group-hover:bg-[#161c3a]/10 transition-all duration-500"></div>
          </div>
        </div>

        {/* Text Side */}
        <div className="w-full md:w-1/2 flex flex-col items-start text-left">
          <h3 className="text-3xl font-serif text-[#161c3a] mb-4">
            {data.title}
          </h3>
          
          <p className="text-[#6b7280] leading-relaxed mb-8 max-w-lg">
            {data.description}
          </p>

           <button className="group px-8 py-2.5 rounded-full border border-[#161c3a] flex items-center gap-3 text-[#161c3a] font-medium hover:bg-[#161c3a] hover:text-white transition-all duration-300">
              Explore
              <ArrowUpRightIcon className="w-4 h-4 text-[#c19b4e] group-hover:text-[#c19b4e]" />
            </button>

        </div>

      </div>
    </div>
  );
}

// Icon Helper
function ArrowUpRightIcon({ className }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className={className}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
    </svg>
  );
}