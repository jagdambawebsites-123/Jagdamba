import Image from "next/image";

const teamData = [
  {
    id: 1,
    name: "Umesh Agrawal",
    role: "CHAIRMAN",
    image: "/images/landingPage/umesh-agrawal.png",
  },
  {
    id: 2,
    name: "Amit Agrawal",
    role: "MANAGING DIRECTOR",
    image: "/images/landingPage/amit-agrawal.png",
  },
  {
    id: 3,
    name: "Shiv Agrawal",
    role: "MANAGING DIRECTOR",
    image: "/images/landingPage/shiv-agrawal.png",
  },
];

export default function TeamSection() {
  return (
    <div className="w-full bg-[#fbfbfb]">
      <div className="container mx-auto">
        <section className="w-full bg-[#fbfbfb] py-20 lg:py-28 overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Header Area */}
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-4xl md:text-5xl font-serif text-[#111C55]">
                Our <span className="text-[#B88C2E]">Team</span>
              </h2>

              {/* Desktop Button: Hidden on mobile (sm), visible on md+ */}
              <div className="hidden sm:block">
                <ViewAllButton />
              </div>
            </div>

            {/* Team Grid / Scrollable Container */}
            <div
              className="
              grid grid-flow-col auto-cols-[85%] sm:auto-cols-[45%] overflow-x-auto gap-6 pb-8 snap-x snap-mandatory scrollbar-hide
              md:grid-cols-2 md:grid-flow-row md:auto-cols-auto md:overflow-visible md:gap-8 lg:gap-12 lg:grid-cols-3
            "
            >
              {teamData.map((member) => (
                <div key={member.id} className="flex flex-col snap-center">
                  <div className="relative w-full aspect-[4/5] bg-[#111832] rounded-[2rem] overflow-hidden mb-6 shadow-md">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover object-bottom z-10"
                    />
                  </div>
                  <div className="flex flex-col items-start px-2">
                    <h3 className="text-xl font-bold text-[#161c3a] mb-1.5">
                      {member.name}
                    </h3>
                    <p className="text-[#8c92a4] text-sm font-semibold tracking-wider uppercase">
                      {member.role}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Mobile Button: Visible on mobile, hidden on sm+ */}
            <div className="mt-10 flex justify-center sm:hidden">
              <ViewAllButton />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

// Extracted Button Component for reusability
function ViewAllButton() {
  return (
    <button
      className="
            group 
            w-full sm:w-auto        /* Full width on mobile, auto on desktop */
            flex items-center justify-center gap-2 
            px-8 py-3.5             /* Increased padding for better tap target */
            rounded-full border border-[#161c3a]/40 
            text-[#161c3a] text-sm font-bold tracking-wide
            hover:bg-[#161c3a] hover:text-white 
            transition-all duration-300
        "
    >
      VIEW ALL MEMBERS
      <ArrowUpRightIcon className="w-4 h-4 text-[#c19b4e] group-hover:text-[#c19b4e] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
    </button>
  );
}

function ArrowUpRightIcon({ className }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      className={className}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
      />
    </svg>
  );
}
