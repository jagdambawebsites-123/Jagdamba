"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

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
    href: '/business',
    subColumns: [
      [
        { name: 'Trailer Manufacturing', href: '/trailer-manufacturing' },
        { name: 'Structure Manufacturing', href: '/structure-manufacturing' },
        { name: 'Mining & Calcining', href: '/business/mining-calcining' },
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
  // Desktop States
  const [hoveredLabel, setHoveredLabel] = useState(null);
  const [dropdownData, setDropdownData] = useState(null); 
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); 
  const [isInitialHover, setIsInitialHover] = useState(false);

  // Mobile States
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [expandedMobileItem, setExpandedMobileItem] = useState(null);
  
  const pathname = usePathname(); 

  // Close everything when the route changes
  useEffect(() => {
    setHoveredLabel(null);
    setIsDropdownOpen(false);
    setIsMobileMenuOpen(false); // Snap mobile menu shut on route change
    setExpandedMobileItem(null); // Reset mobile accordion
  }, [pathname]);

  const handleMouseEnter = (item) => {
    // Only trigger desktop hover effects if mobile menu is closed
    if (isMobileMenuOpen) return;

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

  const toggleMobileAccordion = (label) => {
    setExpandedMobileItem(expandedMobileItem === label ? null : label);
  };

  return (
    <header 
      className={`absolute top-0 left-0 w-full z-50 transition-all duration-700 ease-in-out shadow-[0_2px_9px_0_rgba(0,0,0,0.1)]
      ${isMobileMenuOpen ? 'bg-black/95' : 'bg-gradient-to-b from-black/70 to-black/50'}
      `}
      onMouseLeave={handleMouseLeave}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-50">
        <div className="flex justify-between items-center h-24">
          
          {/* Logo Section */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="relative flex items-center" onClick={() => setIsMobileMenuOpen(false)}>
              <img 
                src="/images/logo-white.png" 
                alt="Logo" 
                className="h-12 w-auto object-contain" 
              />
            </Link>
          </div>

          {/* Desktop Navigation Links */}
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
                  
                  {/* Loading Bar Underline */}
                  <div 
                    className={`absolute bottom-0 left-0 w-full h-1 bg-[#CA9015] origin-left
                      ${hoveredLabel === item.label ? 'scale-x-100 opacity-100' : 'scale-x-0 opacity-0'}
                      ${(hoveredLabel === item.label && isInitialHover) ? 'transition-all duration-500 ease-out' : 'transition-none'}
                    `} 
                  />
                </Link>
              </div>
            ))}

            {/* Desktop Sub-nav Text Layer */}
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

          {/* Mobile Menu Hamburger Toggle */}
          <div className="md:hidden flex items-center">
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-white hover:text-[#CA9015] transition-colors duration-300"
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? (
                /* Close (X) Icon */
                <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                /* Hamburger Icon */
                <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Desktop Background Curtain */}
      <div 
        className={`hidden md:grid absolute top-full left-0 w-full shadow-xl bg-white z-10 transition-all duration-700 ease-in-out
        ${isDropdownOpen ? 'grid-rows-[1fr] opacity-100 visible' : 'grid-rows-[0fr] opacity-0 invisible pointer-events-none'}`}
      >
        <div className="overflow-hidden">
          <div className={`w-full h-[1px] bg-gray-200 transition-opacity duration-200 ${isDropdownOpen ? 'opacity-100' : 'opacity-0'}`} />
          
          <div className="pt-10 pb-8 invisible" aria-hidden="true">
            <div className="flex gap-x-20">
              {dropdownData?.subColumns?.map((column, colIdx) => (
                <div key={colIdx} className="flex flex-col gap-y-6 min-w-[200px]">
                  {column.map((sub, i) => (
                    <div key={i} className="text-[15px] font-bold">{sub.name}</div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay (Slides down from exactly under the header) */}
      <div 
        className={`md:hidden absolute top-full left-0 w-full bg-black/95 backdrop-blur-md overflow-hidden transition-all duration-500 ease-in-out border-t border-white/10
        ${isMobileMenuOpen ? 'max-h-[calc(100vh-6rem)] opacity-100 visible overflow-y-auto' : 'max-h-0 opacity-0 invisible pointer-events-none'}`}
      >
        <div className="px-6 py-8 flex flex-col gap-y-6">
          {NAV_ITEMS.map((item) => (
            <div key={item.label} className="flex flex-col border-b border-white/10 pb-4 last:border-0">
              {item.subColumns ? (
                <>
                  <button 
                    onClick={() => toggleMobileAccordion(item.label)}
                    className="flex justify-between items-center text-white text-lg font-medium w-full text-left"
                  >
                    {item.label}
                    <ChevronDownIcon 
                      className={`transform transition-transform duration-300 ${expandedMobileItem === item.label ? 'rotate-180 text-[#CA9015]' : 'text-white/80'}`} 
                    />
                  </button>
                  
                  {/* Mobile Accordion Content (Flattened list) */}
                  <div 
                    className={`grid transition-all duration-500 ease-in-out
                    ${expandedMobileItem === item.label ? 'grid-rows-[1fr] opacity-100 mt-5' : 'grid-rows-[0fr] opacity-0'}`}
                  >
                    <div className="overflow-hidden flex flex-col gap-y-5 pl-4 border-l border-white/20">
                      {item.subColumns.flat().map((sub) => (
                        <Link 
                          key={sub.name} 
                          href={sub.href}
                          className="text-base font-medium text-gray-300 hover:text-[#CA9015] transition-colors"
                        >
                          {sub.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                </>
              ) : (
                <Link 
                  href={item.href || '#'}
                  className="text-white text-lg font-medium w-full text-left hover:text-[#CA9015] transition-colors"
                >
                  {item.label}
                </Link>
              )}
            </div>
          ))}
        </div>
      </div>

    </header>
  );
}

// Updated Icon component to accept dynamic classes for mobile rotation
function ChevronDownIcon({ className = "" }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" 
      className={`w-4 h-4 ml-1 transition-all duration-500 ${className || 'opacity-80'}`}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
    </svg>
  );
}