import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  return (
    <header className="absolute top-0 left-0 w-full z-50 transition-all duration-500 ease-in-out 
      bg-gradient-to-b from-black/70 to-black/50 
      shadow-[0_2px_9px_0_rgba(0,0,0,0.1)]
      hover:bg-white hover:from-transparent hover:to-transparent group">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-24">
          
          {/* Logo Section */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="relative flex items-center">
              {/* WHITE LOGO (Visible by default) */}
              <img 
                src="/images/logo-white.png" 
                alt="Logo White" 
                className="h-12 w-auto object-contain transition-opacity duration-300 opacity-100 group-hover:opacity-0" 
              />
              {/* DARK LOGO (Hidden by default, fades in on hover) */}
              <img 
                src="/images/logo-dark.png" 
                alt="Logo Dark" 
                className="absolute inset-0 h-12 w-auto object-contain transition-opacity duration-300 opacity-0 group-hover:opacity-100" 
              />
            </Link>
          </div>

          {/* Navigation Links */}
          <nav className="hidden md:flex space-x-8 lg:space-x-10">
            {['About', 'Businesses', 'Team'].map((item) => (
              <div key={item} className="flex items-center cursor-pointer text-white group-hover:text-gray-800 transition-colors duration-300">
                <span className="text-sm font-medium">{item}</span>
                <ChevronDownIcon />
              </div>
            ))}

            <Link href="/news" className="text-sm font-medium text-white group-hover:text-gray-800 transition-colors duration-300">
              News & Media
            </Link>
            
            <Link href="/contact" className="text-sm font-medium text-white group-hover:text-gray-800 transition-colors duration-300">
              Contact Us
            </Link>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button className="text-white group-hover:text-gray-800 transition-colors duration-300">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>

        </div>
      </div>
    </header>
  );
}

function ChevronDownIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" 
      className="w-4 h-4 ml-1 opacity-80 group-hover:text-gray-500 transition-colors duration-300">
      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
    </svg>
  );
}