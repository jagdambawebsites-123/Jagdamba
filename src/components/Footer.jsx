"use client";

import Link from "next/link";
import Image from "next/image";
import mailIcon from "@/assets/footer/mail.png";
import phoneIcon from "@/assets/footer/phone.png";

const FOOTER_LINKS = [
    {
        heading: "HOME",
        links: [
            { name: "About Us", href: "/about" },
            { name: "Business", href: "/business" },
            { name: "Team", href: "/team" },
            { name: "News & Media", href: "/news" },
            { name: "Contact Us", href: "/contact" },
        ],
    },
    {
        heading: "ABOUT US",
        links: [
            { name: "About us", href: "/about" },
            { name: "Our History", href: "/about/our-history" },
            { name: "Awards", href: "/awards" },
        ],
    },
    {
        heading: "BUSINESS",
        links: [
            { name: "Trailer Manufacturing", href: "/trailer-manufacturing" },
            { name: "Structural Manufacturing", href: "/structure-manufacturing" },
            { name: "Mining & Calcining", href: "/business/mining-calcining" },
            { name: "Casting & Machining", href: "/business/machining-casting" },
            { name: "Waterpark", href: "/waterpark" },
            { name: "Resort", href: "/resort" },
            { name: "Mall", href: "/mall" },
        ],
    },
    {
        heading: "TEAM",
        links: [
            { name: "Chairman", href: "/chairman" },
            { name: "Managing Director", href: "/managing-directors" },
            { name: "Team", href: "/team" },
        ],
    },
];

const CONTACT_INFO = {
    heading: "CONTACT US",
    email: {
        label: "Mail Us",
        value: "info@jagdambagroup.com",
        href: "mailto:info@jagdambagroup.com",
    },
    phone: {
        label: "Call Us",
        value: "(00) 112 365 489",
        href: "tel:+00112365489",
    },
};

export default function Footer() {
    return (
        <footer className="bg-[#111C55] text-white">
            {/* Top Link Columns */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-8">
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 p-6 sm:p-8 lg:p-10">
                    {/* Navigation columns */}
                    {FOOTER_LINKS.map((section) => (
                        <div key={section.heading}>
                            <h3 className="text-[#F6B426] text-sm font-bold tracking-wider mb-5">
                                {section.heading}
                            </h3>
                            <ul className="flex flex-col gap-3">
                                {section.links.map((link) => (
                                    <li key={link.name}>
                                        <Link
                                            href={link.href}
                                            className="text-white/80 text-sm hover:text-[#F6B426] transition-colors duration-300"
                                        >
                                            {link.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}

                    {/* Contact Us column */}
                    <div>
                        <h3 className="text-[#F6B426] text-sm font-bold tracking-wider mb-5">
                            {CONTACT_INFO.heading}
                        </h3>
                        <div className="flex flex-col gap-5">
                            {/* Email */}
                            <div className="flex items-start gap-3">
                                <Image src={mailIcon} alt="Mail" width={20} height={20} className="w-10 h-10 mt-0.5 opacity-70" />
                                <div>
                                    <p className="text-white/60 text-xs mb-0.5">
                                        {CONTACT_INFO.email.label}
                                    </p>
                                    <a
                                        href={CONTACT_INFO.email.href}
                                        className="text-white/80 text-sm hover:text-[#F6B426] transition-colors duration-300"
                                    >
                                        {CONTACT_INFO.email.value}
                                    </a>
                                </div>
                            </div>

                            {/* Phone */}
                            <div className="flex items-start gap-3">
                                <Image src={phoneIcon} alt="Phone" width={20} height={20} className="w-10 h-10 mt-0.5 opacity-70" />
                                <div>
                                    <p className="text-white/60 text-xs mb-0.5">
                                        {CONTACT_INFO.phone.label}
                                    </p>
                                    <a
                                        href={CONTACT_INFO.phone.href}
                                        className="text-white/80 text-sm hover:text-[#F6B426] transition-colors duration-300"
                                    >
                                        {CONTACT_INFO.phone.value}
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Logo Row */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-4 flex justify-end">
                <Image
                    src="/images/logo-white.png"
                    alt="Jagdamba Group"
                    width={320}
                    height={90}
                    className="h-24 w-auto object-contain"
                />
            </div>


            {/* Copyright row */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 pb-8 flex flex-row justify-between items-center">
                <p className="text-white/50 text-xs">
                    © 2025 , Jagdamba Group. All rights reserved
                </p>
                <div className="flex gap-6">
                    <Link
                        href="/legal-notice"
                        className="text-white/50 text-xs hover:text-white/80 transition-colors duration-300"
                    >
                        Legal Notice
                    </Link>
                    <Link
                        href="/privacy-policy"
                        className="text-white/50 text-xs hover:text-white/80 transition-colors duration-300"
                    >
                        Privacy Policy
                    </Link>
                </div>
            </div>

        </footer>
    );
}
