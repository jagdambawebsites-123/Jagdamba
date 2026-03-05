import Image from "next/image";

export default function FacilitiesAndTickets() {
  const facilities = [
    {
      name: "Shower & Changing Room",
      icon: "/images/business/waterpark/facilities/shower.png",
    },
    {
      name: "Locker Room",
      icon: "/images/business/waterpark/facilities/locker.png",
    },
    {
      name: "Multi Cuisine Restaurant",
      icon: "/images/business/waterpark/facilities/restaurant.png",
    },
    {
      name: "Costumes For Rent",
      icon: "/images/business/waterpark/facilities/costume.png",
    },
    {
      name: "Parking",
      icon: "/images/business/waterpark/facilities/parking.png",
    },
    {
      name: "Life Guards",
      icon: "/images/business/waterpark/facilities/lifeguard.png",
    },
  ];

  const tickets = [
    { title: "For Kids - Above 3 Feet", price: "Rs. 400/-" },
    { title: "For Adults", price: "Rs. 490/-" },
    { title: "For Kids - Below 3 Feet", price: "Free" },
  ];

  return (
    // Outer container with the beige/cream background
    <section className="relative w-full bg-[#F5F5F5] overflow-hidden flex flex-col items-center">
      {/* --- TOP SECTION: FACILITIES (White Background) --- */}
      <div className="relative w-full pt-20 pb-32 md:pb-48 flex flex-col items-center z-10">
        {/* 3D Dolphin - Top Right */}
        <div className="absolute top-4 right-4 md:top-0 md:right-10 w-34 h-34 md:w-60 md:h-60 z-20 pointer-events-none drop-shadow-2xl">
          <Image
            src="/images/business/waterpark/facilities/dolphin2.png"
            alt="Dolphin Mascot"
            fill
            className="object-contain"
          />
        </div>

        {/* Heading */}
        <div className="w-full relative z-10 flex justify-center mb-12">
          <h2 className="text-3xl md:text-4xl text-[#CA9015] font-serif font-bold text-center">
            Facilities
          </h2>
        </div>

        {/* Facilities Grid */}
        <div className="relative z-10 max-w-4xl w-full px-4 md:px-8 grid grid-cols-2 md:grid-cols-3 gap-y-10 md:gap-y-16 gap-x-4 text-center">
          {facilities.map((fac, index) => (
            <div key={index} className="flex flex-col items-center gap-4">
              {/* Circular textured icon wrapper */}
              <div className="relative w-20 h-20 md:w-24 md:h-24 rounded-full shadow-sm hover:scale-105 transition-transform duration-300">
                <Image
                  src={fac.icon}
                  alt={fac.name}
                  fill
                  className="object-contain"
                />
              </div>
              <span className="text-[#2b3954] text-sm md:text-base font-serif max-w-[150px] leading-tight">
                {fac.name}
              </span>
            </div>
          ))}
        </div>

        {/* SVG Wave Transition (Attached to the bottom of the white section) */}
        <div className="absolute -bottom-[1px] left-0 w-full z-10 overflow-hidden leading-none pointer-events-none">
          <svg
            viewBox="0 0 1504 623"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1503.5 507.501C833 863.5 529.5 252.501 0 552.001V0H1503.5V507.501Z"
              fill="url(#paint0_linear_878_7250)"
            />
            <defs>
              <linearGradient
                id="paint0_linear_878_7250"
                x1="751.75"
                y1="0"
                x2="751.75"
                y2="622.677"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#F6B426" stopOpacity="0" />
                <stop offset="1" stopColor="#F6B426" stopOpacity="0.15" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>

      {/* Overlapping Mustard/Yellow Blob Decor
      <div className="absolute right-0 top-[40%] md:top-[45%] w-32 h-64 md:w-64 md:h-96 bg-[#D89F2A] rounded-l-full z-0 opacity-90 pointer-events-none transform translate-x-8" /> */}

      {/* --- BOTTOM SECTION: TICKET PLAN (Beige Background) --- */}
      <div className="relative w-full py-20 flex flex-col items-center z-10">
        {/* Background Decor: Zigzag (Right) */}
        <div className="absolute top-0 -right-4 md:bottom-40 md:right-8 w-30 h-12 md:w-48 md:h-24 pointer-events-none z-0">
          <Image
            src="/images/business/waterpark/facilities/zig-zag-waves.png"
            alt="Decorative zigzag"
            fill
            className="object-contain"
          />
        </div>
        {/* Background Decor: ORANGE WAVE (Right) */}
        <div className="absolute -top-20 md:-top-60 -right-8 md:-right-8 w-22 h-25 md:w-40 md:h-80 pointer-events-none z-0">
          <Image
            src="/images/business/waterpark/tickets/peak-wave.svg"
            alt="Decorative zigzag"
            fill
            className="object-contain"
          />
        </div>

        {/* Heading */}
        <div className="w-full relative z-10 flex justify-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl text-[#CA9015] font-serif font-bold text-center">
            Our Ticket Plan
          </h2>
        </div>

        {/* Tickets Grid */}
        <div className="relative z-10 max-w-7xl w-full px-4 md:px-8 grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
          {/* Background Decor: Dotted Circle (Left) */}
          <div className="absolute bottom-0 -left-0 md:-top-20 md:-left-20 w-40 h-40 md:w-64 md:h-64 pointer-events-none opacity-80 z-0">
            <Image
              src="/images/business/waterpark/tickets/doted-circle-golden.svg"
              alt="Decorative dots"
              fill
              className="object-contain"
            />
          </div>

          {tickets.map((ticket, index) => (
            <div
              key={index}
              className="relative flex flex-col items-center justify-center min-h-[380px] hover:-translate-y-2 transition-transform duration-300"
            >
              {/* Ticket Background Image */}
              <div className="absolute inset-0 z-0 pointer-events-none drop-shadow-2xl">
                <Image
                  src="/images/business/waterpark/tickets/ticket.png" // Ensure this is the correct path for the new image
                  alt="Ticket Background"
                  fill
                  className="object-contain"
                />
              </div>

              {/* Ticket Content */}
              <div className="relative z-10 flex flex-col items-center justify-center w-full px-8 md:px-10">
                <div className="w-16 h-16 relative mb-6">
                  <Image
                    src="/images/business/waterpark/tickets/ticket-icon.png" // The blue circular ticket icon
                    alt="Ticket Icon"
                    fill
                    className="object-contain"
                  />
                </div>
                <h3 className="text-white font-serif text-lg mb-4 text-center">
                  {ticket.title}
                </h3>
                <p className="text-white font-serif text-sm opacity-90 text-center">
                  {ticket.price}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}