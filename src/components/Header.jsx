"use client";

import { useState } from 'react';
import Link from 'next/link';

const NAV_ITEMS = [
  {
    label: 'About',
    href: '/about',
    subColumns: [
      [
        { name: 'About Jagdamba Group', href: '/about-group' },
        { name: 'Awards & Recognition', href: '/awards' },
      ],
      [
        { name: 'Our History', href: '/About' },
      ]
    ]
  },
  {
    label: 'Businesses',
    href: '/businesses',
    subColumns: [
      [
        { name: 'Trailer Manufacturing', href: '/trailer-manufacturing' },
        { name: 'Structure Manufacturing', href: '/structure-manufacturing' },
        { name: 'Mining & Calcining', href: '/mining-calcining' },
        { name: 'Machining & Casting', href: '/machining-casting' },
      ],
      [
        { name: 'Waterpark', href: '/waterpark' },
        { name: 'Resort', href: '/resort' },
        { name: 'Mall', href: '/mall' },
      ]
    ]
  },
  {
    label: 'Team',
    href: '/team',
    subColumns: [
      [
        { name: 'Chairman', href: '/chairman' },
        { name: 'Boards of Directors', href: '/boards-of-directors' },
      ],
      [
        { name: 'Managing Directors', href: '/managing-directors' },
      ]
    ]
  },
  {
    label: 'News & Media',
    href: '/news'
  },
  {
    label: 'Contact Us',
    href: '/contact'
  }
];

export default function Header() {
  const [hoveredLabel, setHoveredLabel] = useState(null);
  const [dropdownData, setDropdownData] = useState(null); 
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); 
  const [isInitialHover, setIsInitialHover] = useState(false);

  const handleMouseEnter = (item) => {
    if (!hoveredLabel) {
      setIsInitialHover(true);
    } else if (hoveredLabel !== item.label) {
      setIsInitialHover(false);
    }
    
    setHoveredLabel(item.label);
    
    if (item?.subColumns) {
      setDropdownData(item);
      setIsDropdownOpen(true);
    } else {
      setIsDropdownOpen(false);
    }
  };

  const handleMouseLeave = () => {
    setHoveredLabel(null);
    setIsDropdownOpen(false); 
  };

  return (
    <header 
      className="fixed top-0 left-0 w-full z-50 transition-all duration-700 ease-in-out 
      bg-gradient-to-b from-black/70 to-black/50 shadow-[0_2px_9px_0_rgba(0,0,0,0.1)]"
      onMouseLeave={handleMouseLeave}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        <div className="flex justify-between items-center h-24">
          
          {/* Logo Section */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="relative flex items-center">
              <img 
                src="/images/logo-white.png" 
                alt="Logo" 
                className="h-12 w-auto object-contain" 
              />
            </Link>
          </div>

          {/* Navigation Links */}
          <nav className="relative hidden md:flex space-x-8 lg:space-x-10 h-full">
            {NAV_ITEMS.map((item) => (
              <div key={item.label} className="h-full flex items-center">
                <Link 
                  href={item.href || '#'} 
                  onMouseEnter={() => handleMouseEnter(item)}
                  className="relative flex items-center cursor-pointer text-white transition-colors duration-500 h-full"
                >
                  <span className="text-sm font-medium">{item.label}</span>
                  {item.subColumns && <ChevronDownIcon />}
                  
                  {/* Loading Bar Underline -> Replaced with custom hex */}
                  <div 
                    className={`absolute bottom-0 left-0 w-full h-1 bg-[#CA9015] origin-left
                      ${hoveredLabel === item.label ? 'scale-x-100 opacity-100' : 'scale-x-0 opacity-0'}
                      ${(hoveredLabel === item.label && isInitialHover) ? 'transition-all duration-500 ease-out' : 'transition-none'}
                    `} 
                  />
                </Link>
              </div>
            ))}

            {/* Sub-nav Text Layer */}
            <div 
              className={`absolute top-full left-0 w-max pt-10 pb-8 transition-all duration-500 ease-in-out
              ${isDropdownOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'}`}
            >
              <div key={dropdownData?.label} className="flex gap-x-20">
                {dropdownData?.subColumns?.map((column, colIdx) => (
                  <div key={colIdx} className="flex flex-col gap-y-6 min-w-[200px]">
                    {column.map((sub) => (
                      <Link 
                        key={sub.name} 
                        href={sub.href}
                        // Replaced hover color with custom hex
                        className="text-[15px] font-bold text-gray-800 hover:text-[#CA9015] transition-colors duration-300"
                      >
                        {sub.name}
                      </Link>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button className="text-white transition-colors duration-500">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Background Curtain */}
      <div 
        className={`absolute top-full left-0 w-full shadow-xl bg-white z-10 grid transition-all duration-700 ease-in-out
        ${isDropdownOpen ? 'grid-rows-[1fr] opacity-100 visible' : 'grid-rows-[0fr] opacity-0 invisible pointer-events-none'}`}
      >
        <div className="overflow-hidden">
          {/* Crisp divider line */}
          <div className={`w-full h-[1px] bg-gray-200 transition-opacity duration-200 ${isDropdownOpen ? 'opacity-100' : 'opacity-0'}`} />
          
          {/* Invisible 'Ghost' Content */}
          <div className="pt-10 pb-8 invisible" aria-hidden="true">
            <div className="flex gap-x-20">
              {dropdownData?.subColumns?.map((column, colIdx) => (
                <div key={colIdx} className="flex flex-col gap-y-6 min-w-[200px]">
                  {column.map((sub, i) => (
                    <div key={i} className="text-[15px] font-bold">
                      {sub.name}
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

    </header>
  );
}

function ChevronDownIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" 
      className="w-4 h-4 ml-1 opacity-80 transition-colors duration-500">
      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
    </svg>
  );
}