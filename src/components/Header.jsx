import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  return (
    <header className="w-full bg-white shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-24">
          
          {/* Logo Section */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="flex items-center gap-2">
              {/* Replace src with your actual logo path in the public folder */}
              <Image src="/images/landingPage/logo.png" alt="Jagdamba Logo" width={180} height={60} className="object-contain" />
            </Link>
          </div>

          {/* Navigation Links */}
          <nav className="hidden md:flex space-x-8 lg:space-x-10">
            {/* Nav Item with Dropdown */}
            <div className="relative group flex items-center cursor-pointer hover:text-gray-600">
              <span className="text-gray-800 text-sm font-medium">About</span>
              <ChevronDownIcon />
            </div>

            {/* Nav Item with Dropdown */}
            <div className="relative group flex items-center cursor-pointer hover:text-gray-600">
              <span className="text-gray-800 text-sm font-medium">Businesses</span>
              <ChevronDownIcon />
            </div>

            {/* Nav Item with Dropdown */}
            <div className="relative group flex items-center cursor-pointer hover:text-gray-600">
              <span className="text-gray-800 text-sm font-medium">Team</span>
              <ChevronDownIcon />
            </div>

            {/* Standard Nav Items */}
            <Link href="/news" className="text-gray-800 text-sm font-medium hover:text-gray-600 flex items-center">
              News & Media
            </Link>
            
            <Link href="/contact" className="text-gray-800 text-sm font-medium hover:text-gray-600 flex items-center">
              Contact Us
            </Link>
          </nav>

          {/* Mobile menu button (Hamburger) - Optional for smaller screens */}
          <div className="md:hidden flex items-center">
            <button className="text-gray-800 hover:text-gray-600 focus:outline-none">
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

// Reusable SVG Icon for the dropdown arrows
function ChevronDownIcon() {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      fill="none" 
      viewBox="0 0 24 24" 
      strokeWidth={2} 
      stroke="currentColor" 
      className="w-4 h-4 ml-1 text-gray-500"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
    </svg>
  );
}