"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

const NAV_ITEMS = [
  {
    label: 'About',
    href: '#',
    subColumns: [
      [
        { name: 'About Jagdamba Group', href: '/about/aboutUs' },
        { name: 'Awards & Recognition', href: '/about/about-awards' },
      ],
      [
        { name: 'Our History', href: '/about/our-history' },
      ]
    ]
  },
  {
    label: 'Businesses',
    href: '#',
    subColumns: [
      [
        { name: 'Trailer Manufacturing', href: '/business/trailer' },
        { name: 'Structure Manufacturing', href: '/business/structure-manufacturing' },
        { name: 'Mining & Calcining', href: '/business/mining-calcining' },
        { name: 'Machining & Casting', href: '/business/machining-casting' },
      ],
      [
        { name: 'Waterpark', href: '/business/waterpark' },
        { name: 'Resort', href: '/business/resort' },
        { name: 'Mall', href: '/business/mall' },
      ]
    ]
  },
  {
    label: 'Team',
    href: '#',
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

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [expandedMobileItem, setExpandedMobileItem] = useState(null);

  const pathname = usePathname();

  // Do not render Header on the Sanity Studio page
  if (pathname?.startsWith('/studio')) return null;

  // Check if we are on the root route
  const isRoot = pathname === '/';
  // Determine if the header should use "Dark Mode" (Dark background, white text)
  const isManagingDirectors = pathname === '/managing-directors';
  const isBoardsOfDirectors = pathname === '/boards-of-directors';
  const isTeam = pathname === '/team';
  const isContact = pathname === '/contact';
  const isTrailer = pathname === '/trailer';
  const isNews = pathname === '/news';

  // When dropdown is open, the header turns white so we need dark text/logo
  const isDarkHeader = isDropdownOpen
    ? false
    : (!isManagingDirectors && !isBoardsOfDirectors && !isContact && !isNews) || isMobileMenuOpen || isRoot || isTrailer;

  useEffect(() => {
    setHoveredLabel(null);
    setIsDropdownOpen(false);
    setIsMobileMenuOpen(false);
    setExpandedMobileItem(null);
  }, [pathname]);

  const handleMouseEnter = (item) => {
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

  // Header color logic
  const getHeaderStyles = () => {
    // 1. Mobile menu always takes priority
    if (isMobileMenuOpen) return 'bg-black/95';

    // 2. Dropdown open: white background to stay in sync with the curtain below
    if (isDropdownOpen) return 'bg-white';

    // 3. White Header Pages: Only for specific list pages
    if (isManagingDirectors || isBoardsOfDirectors || isContact || isNews) return 'bg-white';

    // 4. Background for pages with Hero images (Home, Trailer) - Added black shade effect
    if (isRoot || isTrailer) return 'bg-gradient-to-b from-black/90 via-black/40 to-transparent';

    // 5. Specific Background for history page
    if (pathname.toLowerCase() === '/about/our-history') return 'bg-[#111C55]';

    // 6. Default Fallback
    return 'bg-gradient-to-b from-black/80 to-transparent text-white';
  };

  return (
    <header
      className={`${(isManagingDirectors || isBoardsOfDirectors || isContact || isNews) ? 'fixed' : 'fixed'} top-0 left-0 w-full z-50 transition-all duration-700 ease-in-out
      ${getHeaderStyles()}
      `}
      onMouseLeave={handleMouseLeave}
    >
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-24 relative z-50">
        <div className="flex justify-between items-center h-20 md:h-24">

          {/* Logo Section - Dynamically swaps based on header background */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="relative flex items-center" onClick={() => setIsMobileMenuOpen(false)}>
              <Image
                src={isDarkHeader ? "/images/logo-white.png" : "/images/logo-dark.png"}
                alt="Logo"
                width={180}
                height={48}
                className="h-8 sm:h-10 lg:h-12 xl:h-16 w-auto object-contain transition-all duration-300"
                priority
              />
            </Link>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="relative hidden md:flex md:space-x-4 lg:space-x-8 xl:space-x-12 h-full">
            {NAV_ITEMS.map((item) => (
              <div key={item.label} className="h-full flex items-center">
                <Link
                  href={item.href || '#'}
                  onMouseEnter={() => handleMouseEnter(item)}
                  // Text color shifts dynamically
                  className={`relative flex items-center cursor-pointer transition-colors duration-500 h-full
                    ${isDarkHeader ? 'text-white' : (isManagingDirectors || isNews) ? 'text-gray-500' : 'text-[#374151]'} hover:text-[#F6B426]
                  `}
                >
                  <span className="md:text-sm lg:text-[15px] xl:text-[17px] font-sans font-medium tracking-wide">{item.label}</span>
                  {item.subColumns && <ChevronDownIcon className="mt-0.5" />}

                  {/* Loading Bar Underline */}
                  <div
                    className={`absolute bottom-0 left-0 w-full h-1 bg-[#F6B426] origin-left
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
                        className="text-[15px] font-bold text-gray-700 hover:text-[#F6B426] transition-colors duration-300"
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
              // Hamburger color shifts dynamically
              className={`transition-colors duration-300 hover:text-[#F6B426] ${isDarkHeader ? 'text-white' : 'text-gray-800'}`}
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? (
                <svg className="h-6 w-6 md:h-8 md:w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-6 w-6 md:h-8 md:w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
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

      {/* Mobile Menu Overlay */}
      <div
        className={`md:hidden absolute top-full left-0 w-full bg-black/95 backdrop-blur-md overflow-hidden transition-all duration-500 ease-in-out border-t border-white/10
        ${isMobileMenuOpen ? 'max-h-[calc(100vh-6rem)] opacity-100 visible overflow-y-auto' : 'max-h-0 opacity-0 invisible pointer-events-none'}`}
      >
        <div className="px-6 py-10 flex flex-col gap-y-8">
          {NAV_ITEMS.map((item) => (
            <div key={item.label} className="flex flex-col border-b border-white/5 pb-6 last:border-0">
              {item.subColumns ? (
                <>
                  <button
                    onClick={() => toggleMobileAccordion(item.label)}
                    className="flex justify-between items-center text-white text-xl font-sans font-medium w-full text-left"
                  >
                    {item.label}
                    <ChevronDownIcon
                      className={`transform transition-transform duration-300 w-5 h-5 ${expandedMobileItem === item.label ? 'rotate-180 text-[#F6B426]' : 'text-white/60'}`}
                    />
                  </button>
                  <div
                    className={`grid transition-all duration-500 ease-in-out
                    ${expandedMobileItem === item.label ? 'grid-rows-[1fr] opacity-100 mt-6' : 'grid-rows-[0fr] opacity-0'}`}
                  >
                    <div className="overflow-hidden flex flex-col gap-y-5 pl-4 border-l border-[#F6B426]/30">
                      {item.subColumns.flat().map((sub) => (
                        <Link
                          key={sub.name}
                          href={sub.href}
                          className="text-lg font-sans font-medium text-gray-400 hover:text-[#F6B426] transition-colors"
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
                  className="text-white text-xl font-sans font-medium w-full text-left hover:text-[#F6B426] transition-colors"
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

function ChevronDownIcon({ className = "" }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor"
      className={`w-3 h-3 ml-1.5 transition-all duration-500 opacity-90 ${className}`}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
    </svg>
  );
}