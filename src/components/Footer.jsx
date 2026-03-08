"use client";

import Link from "next/link";
import Image from "next/image";
import mailIcon from "@/assets/footer/mail.png";
import phoneIcon from "@/assets/footer/phone.png";
import { usePathname } from "next/navigation";

const FOOTER_LINKS = [
    {
        heading: "HOME",
        links: [
            { name: "About Us", href: "/about/aboutUs" },
            { name: "Business", href: "/#business" },
            { name: "Team", href: "/boards-of-directors" },
            { name: "News & Media", href: "#" },
            { name: "Contact Us", href: "/contact" },
        ],
    },
    {
        heading: "ABOUT US",
        links: [
            { name: "About us", href: "/about/aboutUs" },
            { name: "Our History", href: "/about/our-history" },
            { name: "Awards", href: "/about/about-awards" },
        ],
    },
    {
        heading: "BUSINESS",
        links: [
            { name: "Trailer Manufacturing", href: "/business/trailer" },
            { name: "Structural Manufacturing", href: "/business/structure-manufacturing" },
            { name: "Mining & Calcining", href: "/business/mining-calcining" },
            { name: "Casting & Machining", href: "/business/machining-casting" },
            { name: "Waterpark", href: "business/waterpark" },
            { name: "Resort", href: "/business/resort" },
            { name: "Mall", href: "/business/mall" },
        ],
    },
    {
        heading: "TEAM",
        links: [
            { name: "Chairman", href: "/chairman" },
            { name: "Managing Director", href: "/managing-directors" },
            { name: "Board of Directors", href: "/boards-of-directors" },
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

export default function Footer({ forceShow = false }) {
    const pathname = usePathname();

    // Do not render Footer on pages that manage their own footer
    if (pathname?.startsWith('/studio')) return null;
    if (!forceShow && pathname === '/about/our-history') return null;

    return (
        <footer className="bg-[#111C55] text-white font-sans">

            {/* ── Nav columns ── */}
            <div className="max-w-7xl mx-auto px-2 sm:px-2 lg:px-0 pt-12 pb-8">
                <div className="grid grid-cols-2 md:grid-cols-5 gap-8 p-6 sm:p-8 lg:p-4">

                    {/* Nav link columns — all 4 shown on both mobile and desktop */}
                    {FOOTER_LINKS.map((section) => (
                        <div key={section.heading}>
                            <h3 className="text-[#B88C2E] text-sm font-bold tracking-wider mb-5 font-sans">
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

                    {/* Contact Us — desktop only */}
                    <div className="hidden md:block">
                        <h3 className="text-[#B88C2E] text-sm font-bold tracking-wider mb-5 font-sans">
                            {CONTACT_INFO.heading}
                        </h3>
                        <div className="flex flex-col gap-5">
                            <div className="flex items-start gap-3">
                                <Image src={mailIcon} alt="Mail" width={20} height={20} className="w-10 h-10 mt-0.5 opacity-70" />
                                <div>
                                    <p className="text-white/60 text-xs mb-0.5">{CONTACT_INFO.email.label}</p>
                                    <a href={CONTACT_INFO.email.href} className="text-white/80 text-sm hover:text-[#F6B426] transition-colors duration-300">
                                        {CONTACT_INFO.email.value}
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-start gap-3">
                                <Image src={phoneIcon} alt="Phone" width={20} height={20} className="w-10 h-10 mt-0.5 opacity-70" />
                                <div>
                                    <p className="text-white/60 text-xs mb-0.5">{CONTACT_INFO.phone.label}</p>
                                    <a href={CONTACT_INFO.phone.href} className="text-white/80 text-sm hover:text-[#F6B426] transition-colors duration-300">
                                        {CONTACT_INFO.phone.value}
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            {/* ── MOBILE bottom section ── */}
            <div className="md:hidden">
                {/* Separator */}
                <div className="border-t border-white/15 mx-4" />

                {/* Logo + email */}
                <div className="px-6 pt-6 pb-5 flex flex-col items-start gap-4">
                    <Image
                        src="/images/logo-white.png"
                        alt="Jagdamba Group"
                        width={200}
                        height={56}
                        className="h-14 w-auto object-contain"
                    />
                    <a href={CONTACT_INFO.email.href} className="flex items-center gap-3 text-white/80 text-sm">
                        <Image src={mailIcon} alt="Mail" width={20} height={20} className="w-8 h-8 opacity-70" />
                        {CONTACT_INFO.email.value}
                    </a>
                </div>

                {/* Separator */}
                <div className="border-t border-white/15 mx-4" />

                {/* Copyright + legal */}
                <div className="px-6 pt-5 pb-10 flex flex-col gap-4">
                    <p className="text-white/50 text-sm">
                        © 2025 , Jagdamba Group. All rights reserved
                    </p>
                    <div className="flex items-center gap-3 text-white/50 text-sm">
                        <Link href="/legal-notice" className="hover:text-white/80 transition-colors duration-300">
                            Legal Notice
                        </Link>
                        <span className="text-white/30">|</span>
                        <Link href="/privacy-policy" className="hover:text-white/80 transition-colors duration-300">
                            Privacy Policy
                        </Link>
                    </div>
                </div>
            </div>

            {/* ── DESKTOP bottom section ── */}
            <div className="hidden md:block">
                {/* Logo row — right aligned */}
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
                        <Link href="/legal-notice" className="text-white/50 text-xs hover:text-white/80 transition-colors duration-300">
                            Legal Notice
                        </Link>
                        <Link href="/privacy-policy" className="text-white/50 text-xs hover:text-white/80 transition-colors duration-300">
                            Privacy Policy
                        </Link>
                    </div>
                </div>
            </div>

        </footer>
    );
}
