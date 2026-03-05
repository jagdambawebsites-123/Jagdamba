"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
// Import your data array here
// import { businessesData } from './data';

export default function BusinessSection() {
  const [isVisible, setIsVisible] = useState({});
  const sectionRefs = useRef([]);

  const businesses = [
    {
      id: "trailer-manufacturing",
      title: "Trailer Manufacturing",
      description:
        "In 2019, Jagdamba Trailers has swiftly established itself as a prominent and trustworthy brand within the Indian Trailer Industry. We manufacture a wide array of trailer types, including flatbed trailers, tanker trailers, and specialized transport solutions.",
      image: "/images/landingPage/trailers.png",
      link: "/trailer",
      hasLink: true,
    },
    {
      id: "structure-manufacturing",
      title: "Structure Manufacturing",
      description:
        "Jagdamba Structurals Pvt. Ltd is a highly diversified, fastest growing company in fabrication, erection of Steel Structure, equipment, PEB & Building Projects. The range of products we manufacture and provide to our customers includes parts for industrial equipment.",
      image: "/images/landingPage/structure.png",
      link: "/business/structure-manufacturing",
      hasLink: true,
    },
    {
      id: "mining-calcining",
      title: "Mining & Calcining",
      description:
        "We specialize in the extraction, processing, and supply of high-quality minerals and stones. Our expertise encompasses a diverse range of products, including stone, aggregate, dolomite, calcined materials, and limestone, catering to a wide array of industrial and construction needs. The range of products we offer includes essential materials for construction, infrastructure projects, and various industrial applications.",
      image: "/images/landingPage/mining.png",
      link: "/business/mining-calcining",
      hasLink: true,
    },
    {
      id: "machining-casting",
      title: "Machining & Casting",
      description:
        "Our steel ingots serve railways, steel rolling mills, engineering industries, cement industries, power generation centers, industrial machinery manufacturers, and the automobile sector. We are committed to quality and safety, adhering to government regulations and industrial health standards aims to support the nation's industrial growth by providing high-quality steel castings.",
      image: "/images/landingPage/casting.png",
      link: "/business/machining-casting",
      hasLink: true,
    },
    {
      id: "la-fountain-resort",
      title: "LÃ Fountain Resort",
      description:
        "Nestled in serene surroundings, LÃ Fountain resort offers a perfect blend of luxury and tranquility, designed to provide an unforgettable experience for our guests. At LÃ Fountain Resort, we pride ourselves on delivering top-notch hospitality, exceptional service, and a range of amenities tailored to meet the diverse needs of our visitors. Whether you're seeking a relaxing getaway, a family vacation, or a venue for special events, our resort is the ideal destination.",
      image: "/images/landingPage/la-fountain-resort.png",
      link: "/business/resort",
      hasLink: true,
    },
    {
      id: "jagdamba-funworld",
      title: "Jagdamba Funworld",
      description:
        "Jagdamba Funworld nestled in the scenic beauty of Chandrahasini Timarlaga, near Raigarh in Chhattisgarh, India. This exciting destination offers a perfect blend of thrill, relaxation, and enjoyment for visitors of all ages. Thrill-seekers can indulge in exhilarating water slides that twist, turn, and plunge into refreshing pools below.",
      image: "/images/landingPage/funworld.png",
      link: "/business/waterpark",
      hasLink: true,
    },
    {
      id: "grand-mall",
      title: "Grand Mall",
      description:
        "We are committed to providing our visitors with a diverse range of high-quality retail stores, dining options, and entertainment facilities. From top fashion brands to gourmet restaurants and state-of-the-art cinemas, our mall caters to the varied tastes and preferences of our customers. Our spacious, modern design and welcoming atmosphere ensure a comfortable and enjoyable visit for families, friends, and solo shoppers alike.",
      image: "/images/landingPage/grand-mall.png",
      link: "/business/mall",
      hasLink: true,
    },
    {
      id: "jagdamba-global-equipment",
      title: "Jagdamba Global Equipment Solution FZC",
      description:
        "Jagdamba Global Equipment Solution FZC, based in Dubai, is a leading manufacturer specializing in high-quality trailers, pressure vessels, and precision fabrication for the refining and mixed-industry sectors. Combining advanced engineering with rigorous quality standards, we deliver robust, reliable, and customized solutions tailored to the demanding needs of our clients.",
      image: "/images/landingPage/global-equipment.png",
      link: "/contact",
      hasLink: false,
    },
    {
      id: "swapan-engineering",
      title: "Swapan Engineering Co.",
      description:
        "Swapan Engineering Co. is Jagdamba Group’s latest venture, established in Kolkata to strengthen our footprint in the railway sector. Specializing in the manufacturing of railway electrical equipment, this new plant brings precision, quality, and innovation to components that power India’s rail infrastructure. With Swapan Engineering, we aim to drive forward reliable and future-ready rail solutions.",
      image: "/images/landingPage/swapan-engineering.png",
      link: "/contact",
      hasLink: false,
    },
    {
      id: "jagdamba-agro",
      title: "Jagdamba Agro",
      description:
        "Jagdamba Agro, the agricultural arm of Jagdamba Group, is dedicated to empowering modern farmers with robust and efficient equipment. From durable tractor trolleys to versatile farming implements, our products are engineered for reliability, ease of use, and high performance in diverse field conditions. Designed to enhance productivity and reduce manual labor, Jagdamba Agro's equipment supports sustainable agriculture and helps growers maximize yield with minimal effort.",
      image: "/images/landingPage/agro.png",
      link: "/contact",
      hasLink: false,
    },
    {
      id: "jagdamba-trailer-service",
      title: "Jagdamba Trailer Service",
      description:
        "Jagdamba Trailer Service is our dedicated support division, offering specialized maintenance and repair solutions for the trailer industry. From routine servicing to critical repairs, we ensure your trailers remain road-ready, reliable, and compliant with safety standards. Backed by expert technicians and prompt service, we help maximize uptime and extend the life of every trailer on the move.",
      image: "/images/landingPage/trailer-service.png",
      link: "/contact",
      hasLink: false,
    },
  ];
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible((prev) => ({ ...prev, [entry.target.id]: true }));
          }
        });
      },
      { threshold: 0.15 },
    );

    sectionRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="w-full bg-[#F5F5F5]">
      <section className="container relative w-full bg-[#F5F5F5] px-6 md:px-10 xl:px-25 py-16 md:py-24 overflow-hidden mx-auto max-w-7xl">
        {/* Header Section */}
        <div className="text-center mb-16 md:mb-24 relative z-20">
          <h2 className="text-4xl md:text-5xl font-serif text-[#111C55] mb-6 lg:mb-8">
            Our <span className="text-[#B88C2E]">Business</span>
          </h2>
        </div>

        {/* Faint Base Line */}
        <div className="absolute left-1/2 top-48 bottom-32 w-[2px] bg-[#B88C2E]/10 -translate-x-1/2 hidden md:block z-0" />

        <div className="space-y-24 md:space-y-32 relative z-10">
          {businesses.map((item, index) => {
            const isEven = index % 2 === 0;
            const shown = isVisible[item.id];

            return (
              <div
                key={item.id}
                id={item.id}
                ref={(el) => (sectionRefs.current[index] = el)}
                // md:flex-row-reverse flips the order on desktop for odd indices
                className={`relative flex flex-col ${isEven ? "md:flex-row" : "md:flex-row-reverse"} items-start w-full group`}
              >
                {/* Gradient Line Segment */}
                <div className="absolute left-1/2 -translate-x-1/2 top-[175px] -translate-y-1/2 w-[2px] h-[600px] bg-gradient-to-b from-transparent via-[#FFC13D] to-transparent z-0 hidden md:block" />

                {/* Central Bullet */}
                <div className="absolute left-1/2 -translate-x-1/2 top-[175px] -translate-y-1/2 w-5 h-5 rounded-full bg-[#FFC13D] border-[4px] border-[#F5F5F5] shadow-sm z-10 hidden md:block" />

                {/* DOM Item 1: ALWAYS THE IMAGE (Guarantees Image is on top on mobile) */}
                <div
                  className={`w-full md:w-1/2 flex transition-all duration-700 ease-out relative z-10
                    ${shown ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}
                    ${isEven ? "md:pr-12 lg:pr-20 md:justify-end" : "md:pl-12 lg:pl-20 md:justify-start"}
                  `}
                >
                  <div className="relative w-full max-w-[454px] h-[350px] rounded-[16px] overflow-hidden shadow-lg flex-shrink-0">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>

                {/* DOM Item 2: ALWAYS THE TEXT */}
                <div
                  className={`w-full md:w-1/2 mt-8 md:mt-0 flex transition-all duration-700 ease-out delay-150 relative z-10
                    ${shown ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}
                    ${isEven ? "md:pl-12 lg:pl-20 md:justify-start" : "md:pr-12 lg:pr-20 md:justify-end"}
                  `}
                >
                  <div className="w-full max-w-[454px] text-left pt-2">
                    <h3 className="text-3xl font-serif font-semibold text-[#111C55] mb-4">
                      {item.title}
                    </h3>
                    <p className="text-[#6B7280] text-base md:text-lg leading-relaxed mb-6 md:mb-8 font-sans">
                      {item.description}
                    </p>
                    <div>
                      {item.hasLink ? (
                        <ExploreButton link={item.link} />
                      ) : (
                        <></>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}

// Reusable Button Component
function ExploreButton({ link }) {
  return (
    <>
      <Link
        href={link}
        className="md:hidden flex items-center gap-2 border-b-2 border-[#111C55] pb-1 text-[#111C55] text-[1.1rem] font-medium w-fit"
      >
        Explore
        <ArrowUpRightIcon className="w-5 h-5 text-[#B88C2E]" />
      </Link>

      <Link
        href={link}
        className="hidden md:inline-flex group px-8 py-2.5 w-fit rounded-full border border-[#161c3a] items-center gap-3 text-[#161c3a] font-medium hover:bg-[#161c3a] hover:text-white transition-all duration-300"
      >
        Explore
        <ArrowUpRightIcon className="w-4 h-4 text-[#c19b4e] group-hover:text-[#c19b4e]" />
      </Link>
    </>
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
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
      />
    </svg>
  );
}
