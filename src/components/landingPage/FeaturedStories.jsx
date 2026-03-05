import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import Link from "next/link";
import Image from "next/image";

const FALLBACK_STORIES = [
  {
    id: 1,
    image: "/images/landingPage/award-ceremony.jpg",
    title: "Jagdamba Trailer awarded as an emerging brand in Indian trailer industry.",
    date: "April 27, 2024",
    href: "/news"
  },
  {
    id: 2,
    image: "/images/landingPage/oem-ranking.png",
    title: "Listed in the global OEM ranking for World Trailer Manufacturers.",
    date: "Sep 26, 2023",
    href: "/news"
  },
  {
    id: 3,
    image: "/images/landingPage/motorindia-feature.png",
    title: "Jagdamba Trailer got featured in Nov, 2024 Motor India Magazine.",
    date: "Nov 22, 2024",
    href: "/news"
  },
];

async function getFeaturedStories() {
  try {
    if (!process.env.NEXT_PUBLIC_SANITY_PROJECT_ID) {
      return FALLBACK_STORIES;
    }

    // Fetch specifically from the Featured Stories collection (fetching more than 3 to allow scrolling)
    const query = `*[_type == "featuredStory"] | order(_createdAt desc)[0...10]`;
    const stories = await client.fetch(query, {}, { next: { revalidate: 60 } });

    if (!stories || stories.length === 0) return FALLBACK_STORIES;

    return stories.map(post => ({
      id: post._id,
      image: post.mainImage ? urlFor(post.mainImage).url() : null,
      title: post.title,
      date: post.date ? new Date(post.date).toLocaleDateString('en-US', {
        month: 'short',
        day: 'numeric',
        year: 'numeric'
      }) : "",
      href: post.href || "/news"
    }));
  } catch (error) {
    console.error("Error fetching featured stories:", error);
    return FALLBACK_STORIES;
  }
}

export default async function FeaturedStories() {
  const stories = await getFeaturedStories();

  return (
    <div className="relative w-full">
      {/* 80% Dark Navy Background Layer */}
      <div className="absolute top-0 left-0 w-full h-[80%] bg-[#fbfbfb] md:bg-[#0a1a44] -z-10"></div>

      {/* Bottom 20% Light Background Layer */}
      <div className="absolute bottom-0 left-0 w-full h-[20%] bg-[#fbfbfb] -z-20"></div>

      <div className="container mx-auto">
        <section className="relative z-0 pb-16 md:pb-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 md:pt-20">

            {/* Header Area */}
            <div className="flex justify-center md:justify-between items-center mb-8 md:mb-14">
              <h2 className="text-3xl text-center md:text-left md:text-5xl font-serif text-[#111C55] md:text-white">
                Our <span className="text-[#c19a49]">Featured Stories</span>
              </h2>

              {/* Desktop Button: Hidden on mobile */}
              <div className="hidden md:block">
                <Link href="/news">
                  <ViewAllButton variant="desktop" />
                </Link>
              </div>
            </div>

            {/* Cards Grid - Updated to be scrollable on desktop if needed */}
            <div className="
              grid grid-flow-col auto-cols-[85%] sm:auto-cols-[45%] overflow-x-auto gap-6 pb-6 snap-x snap-mandatory 
              md:auto-cols-[calc(33.333%-16px)] scrollbar-hide
            ">
              {stories.map((story) => (
                <Link
                  href={story.href || "/news"}
                  key={story.id}
                  className="group block h-full snap-center"
                >
                  <div className="bg-white rounded-sm shadow-lg overflow-hidden flex flex-col h-full transition-transform duration-300 hover:-translate-y-2">
                    <div className="relative w-full aspect-[407/489] bg-[#f8f9fa]">
                      <Image
                        src={story.image || "/images/placeholder.jpg"}
                        alt={story.title}
                        fill
                        sizes="(max-width: 768px) 85vw, (max-width: 1200px) 33vw, 407px"
                        className="object-cover object-center"
                      />
                    </div>

                    <div className="p-6 md:p-8 flex flex-col flex-grow">
                      <p className="text-[#4b5563] text-sm md:text-base mb-6 leading-relaxed flex-grow">
                        {story.title}
                      </p>
                      <p className="text-[#0a1a44] font-bold text-xs uppercase tracking-wider">
                        {story.date}
                      </p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            {/* Mobile Button: Full width at the bottom */}
            <div className="mt-10 flex justify-center md:hidden">
              <Link href="/news" className="w-full">
                <ViewAllButton variant="mobile" />
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

// Responsive View All Button
function ViewAllButton({ variant }) {
  const isMobile = variant === "mobile";

  return (
    <button className={`
      group flex items-center justify-center gap-2 rounded-full border transition-all duration-300
      ${isMobile
        ? "w-full py-3.5 border-[#0a1a44]/40 text-[#0a1a44] text-sm font-bold hover:text-white hover:bg-[#0a1a44] tracking-wide"
        : "px-6 py-2.5 border-white text-white text-sm font-medium hover:bg-white hover:text-[#0a1a44]"
      }
    `}>
      VIEW ALL STORIES
      <ArrowUpRightIcon className={`
        w-4 h-4 text-[#c19a49] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5
        ${!isMobile && "group-hover:text-[#0a1a44]"}
      `} />
    </button>
  );
}

function ArrowUpRightIcon({ className }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className={className}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
    </svg>
  );
}