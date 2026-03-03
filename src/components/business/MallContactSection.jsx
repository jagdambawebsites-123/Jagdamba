"use client";

import { Icon } from "@iconify/react";

export default function MallContactSection() {
  const googleMapsUrl =
    "https://www.google.com/maps/place/Grand+Mall+Raigarh/@21.8977,83.3947,15z";
  const googleMapsEmbedUrl =
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3695.5!2d83.3947!3d21.8977!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a211d10e2e5b1a1%3A0x6f3b3b3b3b3b3b3b!2sGrand%20Mall%20Raigarh!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin";

  return (
    <section className="w-full bg-[#F5F5F5]">
      <div className="container mx-auto px-6 md:px-10 xl:px-25 py-14 md:py-20">
        <div className="flex flex-col md:flex-row gap-8 md:gap-10 lg:gap-16 items-start">
          {/* On mobile: full column — title, map, then info. On lg: left=title+info, right=map */}

          {/* Left Side — Title + Info (desktop) */}
          <div className="w-full md:w-1/2 lg:w-1/2 flex flex-col gap-6 md:gap-10 lg:gap-14">
            {/* Section Title */}
            <h2 className="font-serif font-normal text-[24px] md:text-[36px] lg:text-[48px] leading-tight text-center md:text-left">
              <span className="text-[#111C55]">Contact </span>
              <span className="text-[#CA9015]">Us</span>
            </h2>

            {/* Map — visible only on mobile (hidden from md up) */}
            <div className="block md:hidden w-full">
              <a
                href={googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow"
              >
                <iframe
                  src={googleMapsEmbedUrl}
                  width="100%"
                  height="220"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-55 block pointer-events-none"
                  title="Grand Mall Raigarh on Google Maps"
                />
              </a>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-6 md:gap-y-8 lg:gap-y-10 gap-x-8 lg:gap-x-12">
            {/* Mall Timing */}
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2.5 text-[#464646]">
                <Icon
                  icon="mdi:clock-outline"
                  className="text-[14px] md:text-[16px] lg:text-[20px] shrink-0"
                />
                <span className="font-sans font-normal text-[14px] md:text-[16px] lg:text-[20px] text-[#464646]">
                  Mall Timing
                </span>
              </div>
              <p className="font-sans font-normal text-[14px] md:text-[16px] lg:text-[20px] text-[#464646] leading-relaxed pl-6 lg:pl-7.5">
                10:00 am - 9:30 pm
              </p>
            </div>

            {/* Contact Us */}
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2.5 text-[#464646]">
                <Icon
                  icon="mdi:phone-outline"
                  className="text-[14px] md:text-[16px] lg:text-[20px] shrink-0"
                />
                <span className="font-sans font-normal text-[14px] md:text-[16px] lg:text-[20px] text-[#464646]">
                  Contact Us
                </span>
              </div>
              <div className="pl-6 lg:pl-7.5 space-y-0.5">
                <a
                  href="tel:9302871009"
                  className="block font-sans font-normal text-[14px] md:text-[16px] lg:text-[20px] text-[#464646] leading-relaxed hover:text-[#CA9015] transition-colors"
                >
                  9302871009
                </a>
                <a
                  href="mailto:balajiinfraventures@gmail.com"
                  className="block font-sans font-normal text-[14px] md:text-[16px] lg:text-[20px] text-[#464646] leading-relaxed hover:text-[#CA9015] transition-colors break-all"
                >
                  balajiinfraventures@gmail.com
                </a>
              </div>
            </div>

            {/* Address */}
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2.5 text-[#464646]">
                <Icon
                  icon="mdi:map-marker-outline"
                  className="text-[14px] md:text-[16px] lg:text-[20px] shrink-0"
                />
                <span className="font-sans font-normal text-[14px] md:text-[16px] lg:text-[20px] text-[#464646]">
                  Address
                </span>
              </div>
              <p className="font-sans font-normal text-[14px] md:text-[16px] lg:text-[20px] text-[#464646] leading-relaxed pl-6 lg:pl-7.5">
                Gauri Shankar Mandir, New Market
                <br />
                Road, Raigarh, Chhattisgarh
                <br />
                496001
              </p>
            </div>

            {/* Social Network */}
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2.5 text-[#464646]">
                <Icon
                  icon="mdi:web"
                  className="text-[14px] md:text-[16px] lg:text-[20px] shrink-0"
                />
                <span className="font-sans font-normal text-[14px] md:text-[16px] lg:text-[20px] text-[#464646]">
                  Social Network
                </span>
              </div>
              <p className="font-sans font-normal text-[14px] md:text-[16px] lg:text-[20px] text-[#464646] leading-relaxed pl-6 lg:pl-7.5">
                Stay in touch and follow us on
                <br />
                social media
              </p>
              <div className="flex items-center gap-3 pl-6 lg:pl-7.5 mt-1">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-full bg-[#464646] text-white flex items-center justify-center hover:bg-[#CA9015] transition-colors"
                  aria-label="Facebook"
                >
                  <Icon icon="mdi:facebook" className="text-lg" />
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-full bg-[#464646] text-white flex items-center justify-center hover:bg-[#CA9015] transition-colors"
                  aria-label="Instagram"
                >
                  <Icon icon="mdi:instagram" className="text-lg" />
                </a>
              </div>
            </div>
          </div>
          </div>

          {/* Right Side — Map (tablet + desktop) */}
          <div className="hidden md:block w-full md:w-1/2 lg:w-auto lg:ml-auto">
            <a
              href={googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow"
            >
              <iframe
                src={googleMapsEmbedUrl}
                width="100%"
                height="483"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full lg:w-120.75 h-85 md:h-100 lg:h-120.75 block pointer-events-none"
                title="Grand Mall Raigarh on Google Maps"
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
