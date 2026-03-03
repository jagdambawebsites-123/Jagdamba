import Image from "next/image";
import Link from "next/link";

const infoItems = [
  {
    icon: "/images/business/resort/clock.png",
    label: "Check In - Check Out",
    lines: ["Check -in from 12:00 pm", "Check -out until 6:00 pm"],
  },
  {
    icon: "/images/business/resort/dining.png",
    label: "Dinning",
    lines: ["2 Restaurants, 1 Food Court"],
  },
  {
    icon: "/images/business/resort/bed.png",
    label: "Rooms and Suites",
    lines: ["44 rooms,  4 suites  with bathtub  and 2  Presidential suites with jacuzzi"],
  },
  {
    icon: "/images/business/resort/facilities.png",
    label: "Our Facilities",
    lines: ["2 Banquet Halls, Lawn"],
  },
  {
    icon: "/images/business/resort/telephone.png",
    label: "Contact",
    lines: ["Sarangarh Road, near Chandrahasini Mandir, Timarlaga,", "Chhattisgarh 496001"],
  },
  {
    icon: "/images/business/resort/social.png",
    label: "Social Network",
    lines: ["Stay in touch and follow us on social media"],
  },
  {
    icon: "/images/business/resort/reservation.png",
    label: "Reservation",
    lines: ["Call Us: ( +91 ) 9981115783", "Email: lafountainresorts@gmail.com"],
  },
];

export default function ResortGettingHere({ stayArrowLeft, stayArrowRight, mapsUrl }) {
  return (
    <section className="w-full bg-[#F5F5F5] py-12 md:py-16 lg:py-20">
      <div className="container mx-auto px-6 md:px-10 xl:px-25 flex flex-col gap-12 md:gap-16 lg:gap-20">

        <div className="flex items-center justify-center gap-4 md:gap-10 lg:gap-14">
          <div className="relative w-16 h-6 md:w-24 md:h-8 lg:w-36 lg:h-10 shrink-0">
            <Image src={stayArrowLeft} alt="" fill className="object-contain" />
          </div>
          <h2 className="font-serif font-normal text-[16px] md:text-[40px] lg:text-[48px] text-[#464646] leading-tight whitespace-nowrap">
            Getting Here
          </h2>
          <div className="relative w-16 h-6 md:w-24 md:h-8 lg:w-36 lg:h-10 shrink-0">
            <Image src={stayArrowRight} alt="" fill className="object-contain" />
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-start">

          <a
            href={mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="order-first lg:order-last shrink-0 w-full lg:w-[45%] block overflow-hidden rounded-sm cursor-pointer"
            aria-label="Open in Google Maps"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3693.5!2d83.0726!3d21.5714!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a2046b0b0b0b0b1%3A0x1234567890abcdef!2sLa%20Fountain%20Resort%2C%20Sarangarh!5e0!3m2!1sen!2sin!4v1"
              width="100%"
              className="h-[260px] md:h-[400px] lg:h-[680px]"
              style={{ border: 0, display: "block", pointerEvents: "none", filter: "grayscale(1) invert(1) brightness(0.85)" }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="La Fountain Resort Location"
            />
          </a>

          <div className="order-last lg:order-first flex-1 grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-6 md:gap-y-8">
            {infoItems.map((item) => (
              <div key={item.label} className="flex flex-col gap-1 border-b border-[#46464640] pb-4 md:pb-6">
                <span className="text-[#46464680] font-sans font-normal text-[14px] md:text-[18px] lg:text-[20px] flex items-center gap-2">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={item.icon} alt="" className="w-4 h-4 md:w-5 md:h-5 object-contain opacity-50" />
                  {item.label}
                </span>
                {item.lines.map((line, i) => (
                  <p key={i} className="text-[#464646] font-sans font-normal text-[14px] md:text-[18px] lg:text-[20px] leading-relaxed pl-[24px] md:pl-[28px]">
                    {line}
                  </p>
                ))}
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-3 md:gap-4">
          <span className="font-serif font-normal text-[#464646] text-[18px] md:text-[28px] lg:text-[32px]">
            To Know More, Visit:
          </span>
          <a
            href="https://lafountainresorts.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 md:px-5 md:py-2.5 rounded-full border border-[#111C55] text-[#111C55] font-sans font-semibold text-[14px] hover:bg-[#111C55] hover:text-white transition-colors"
          >
            lafountainresorts.com
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </a>
        </div>

      </div>
    </section>
  );
}
