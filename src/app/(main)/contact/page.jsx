"use client";

import Image from "next/image";
import ContactUsTruck from "@/assets/ContactUsTruck.png";
import IconEnvelope from "@/assets/contactUs/Envelope.png";
import IconMapPin from "@/assets/contactUs/MapPin.png";
import IconPhone from "@/assets/contactUs/Phone.png";
export default function ContactPage() {
    return (
        <main className="relative w-full bg-[#F5F5F7] pt-24 pb-16 md:pt-36 md:pb-24 overflow-hidden min-h-screen font-sans">
            <div className="container mx-auto px-4 sm:px-6 lg:px-16 relative z-10">
                {/* Section Title */}
                <div className="max-w-7xl mx-auto mt-20 md:mt-0 mb-6 md:mb-8 text-center lg:text-left px-4 lg:px-0">
                    <h1 className="text-[24px] md:text-[40px] font-serif leading-tight">
                        <span className="text-[#111C55]">Get In </span>
                        <span className="text-[#CA9015]">Touch</span>
                    </h1>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch max-w-7xl mx-auto">
                    {/* Left Column - Contact Info */}
                    <div className="lg:col-span-5 flex flex-col bg-white rounded-2xl shadow-[0_2px_15px_rgba(0,0,0,0.05)] overflow-hidden transition-all duration-500 hover:shadow-[0_4px_25px_rgba(0,0,0,0.08)]">
                        <div className="relative w-full aspect-[16/11] md:aspect-[21/10] flex-shrink-0">
                            <Image
                                src={ContactUsTruck}
                                alt="Jagdamba Group Trucks"
                                fill
                                className="object-contain md:object-cover"
                            />
                        </div>
                        <div className="pt-0 pb-6 px-6 md:p-8 flex flex-col flex-grow justify-start md:justify-center">
                            <div className="space-y-4 md:space-y-6">
                                <h2 className="text-[#111C55] text-sm md:text-[24px] font-medium mt-[-1.25rem] md:mt-0 mb-3 md:mb-4">Jagdamba Group</h2>
                                <div className="space-y-2 md:space-y-6">
                                    {/* Location */}
                                    <a 
                                        href="https://www.google.com/maps/search/?api=1&query=Jagdamba+Group+Nandeli+Road+National+Highway+49+Jorapali+Chhattisgarh+496001+India"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-start gap-4 group transition-all duration-300"
                                    >
                                        <div className="w-4 h-4 md:w-5 md:h-5 mt-0.5 flex-shrink-0 relative">
                                            <Image
                                                src={IconMapPin}
                                                alt="Location"
                                                fill
                                                className="object-contain group-hover:scale-110 transition-transform"
                                            />
                                        </div>
                                        <p className="text-[#6B7280] leading-snug text-[12px] md:text-[18px] font-normal group-hover:text-[#CA9015] transition-colors">
                                            Nandeli Road, National Highway 49, Jorapali,<br />
                                            Chhattisgarh 496001 India
                                        </p>
                                    </a>

                                    {/* Email */}
                                    <div className="flex items-center gap-4">
                                        <div className="w-4 h-4 md:w-5 md:h-5 flex-shrink-0 relative">
                                            <Image
                                                src={IconEnvelope}
                                                alt="Email"
                                                fill
                                                className="object-contain"
                                            />
                                        </div>
                                        <a href="mailto:info@jagdambagroup.co" className="text-[#6B7280] text-[12px] md:text-[18px] font-normal hover:text-[#CA9015] transition-colors">
                                            info@jagdambagroup.co
                                        </a>
                                    </div>

                                    {/* Phone */}
                                    <div className="flex items-center gap-4">
                                        <div className="w-4 h-4 md:w-5 md:h-5 flex-shrink-0 relative">
                                            <Image
                                                src={IconPhone}
                                                alt="Phone"
                                                fill
                                                className="object-contain"
                                            />
                                        </div>
                                        <a href="tel:+917898385218" className="text-[#6B7280] text-[12px] md:text-[18px] font-normal hover:text-[#CA9015] transition-colors">
                                            +91 78983 85218
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Column - Form */}
                    <div className="lg:col-span-7 bg-white rounded-2xl shadow-[0_2px_15px_rgba(0,0,0,0.05)] p-6 md:p-8 transition-all duration-500 hover:shadow-[0_4px_25px_rgba(0,0,0,0.08)]">
                        <form className="space-y-5 flex flex-col h-full">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                {/* Name */}
                                <div className="">
                                    <label className="block mb-2 text-[15px] md:text-base font-normal md:font-medium text-[#737373] tracking-wide">Name</label>
                                    <input
                                        type="text"
                                        placeholder="Enter your name"
                                        className="w-full px-4 py-3 bg-[#FCFCFD] border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-[#B88C2E] focus:border-[#B88C2E] transition-all text-base text-gray-800 placeholder:text-xs md:placeholder:text-sm placeholder:text-gray-400 shadow-[0_2px_4px_rgba(0,0,0,0.05)]"
                                    />
                                </div>
                                {/* Email */}
                                <div className="">
                                    <label className="block mb-2 text-[15px] md:text-base font-normal md:font-medium text-[#737373] tracking-wide">Email Address</label>
                                    <input
                                        type="email"
                                        placeholder="Enter your email"
                                        className="w-full px-4 py-3 bg-[#FCFCFD] border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-[#B88C2E] focus:border-[#B88C2E] transition-all text-base text-gray-800 placeholder:text-xs md:placeholder:text-sm placeholder:text-gray-400 shadow-[0_2px_4px_rgba(0,0,0,0.05)]"
                                    />
                                </div>
                                {/* Company */}
                                <div className="">
                                    <label className="block mb-2 text-[15px] md:text-base font-normal md:font-medium text-[#737373] tracking-wide">Company (Optional)</label>
                                    <input
                                        type="text"
                                        placeholder="Enter company name"
                                        className="w-full px-4 py-3 bg-[#FCFCFD] border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-[#B88C2E] focus:border-[#B88C2E] transition-all text-base text-gray-800 placeholder:text-xs md:placeholder:text-sm placeholder:text-gray-400 shadow-[0_2px_4px_rgba(0,0,0,0.05)]"
                                    />
                                </div>
                                {/* Mobile */}
                                <div className="">
                                    <label className="block mb-2 text-[15px] md:text-base font-normal md:font-medium text-[#737373] tracking-wide">Mobile Number</label>
                                    <input
                                        type="tel"
                                        placeholder="Enter mobile number"
                                        className="w-full px-4 py-3 bg-[#FCFCFD] border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-[#B88C2E] focus:border-[#B88C2E] transition-all text-base text-gray-800 placeholder:text-xs md:placeholder:text-sm placeholder:text-gray-400 shadow-[0_2px_4px_rgba(0,0,0,0.05)] appearance-none"
                                    />
                                </div>
                            </div>

                            {/* Message */}
                            <div className="">
                                <label className="block mb-2 text-base font-normal md:font-medium text-[#737373] tracking-wide">Message</label>
                                <textarea
                                    rows={1}
                                    placeholder="Enter your message"
                                    className="w-full px-4 py-3 bg-[#FCFCFD] border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-[#B88C2E] focus:border-[#B88C2E] transition-all text-base text-gray-800 placeholder:text-xs md:placeholder:text-sm placeholder:text-gray-400 resize-none h-12 shadow-[0_2px_4px_rgba(0,0,0,0.05)] scrollbar-hide"
                                />
                            </div>

                            {/* Submit Button */}
                            <div className="mt-auto pt-0 md:pt-4">
                                <button
                                    type="submit"
                                    className="w-full py-3.5 bg-[#111C55] text-white text-sm font-semibold rounded-full hover:bg-[#1a2b56] transition-all duration-300 shadow-sm hover:shadow-md active:scale-[0.98]"
                                >
                                    Let's Connect
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </main>
    );
}

