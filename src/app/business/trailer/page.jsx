"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

// Assets
import TopImg from "@/assets/trailer/Topimg.png";
import Exp1 from "@/assets/trailer/Exp1.png";
import Exp2 from "@/assets/trailer/Exp2.png";
import Exp3 from "@/assets/trailer/Exp3.png";
import LogoAshok from "@/assets/trailer/Logo1.png";
import LogoDRDO from "@/assets/trailer/Logo2.png";
import Logo3 from "@/assets/trailer/Logo3 .png";
import LogoRailways from "@/assets/trailer/Logo4.png";
import LogoTata from "@/assets/trailer/Logo5.png";
import GearIcon from "@/assets/trailer/Gear.png";
import GearMiniIcon from "@/assets/trailer/GearMini.png";
import MapImg from "@/assets/trailer/Map.svg";
import BgOurTeam from "@/assets/teamBoardDirectors/Bgourteam.png";
import OF1 from "@/assets/trailer/OF.png";
import OF2 from "@/assets/trailer/OF2.png";
import OF3 from "@/assets/trailer/OF3.png";

// Product Images
import OP1 from "@/assets/trailer/OP1.png";
import OP2 from "@/assets/trailer/OP2.png";
import OP3 from "@/assets/trailer/OP3.png";
import OP4 from "@/assets/trailer/OP4.png";
import OP5 from "@/assets/trailer/OP5.png";
import OP6 from "@/assets/trailer/OP6.png";
import FuelTankerImg from "@/assets/trailer/fuel tanker enhanced 1.png";

// Button Images
import Button1 from "@/assets/trailer/Button1.png";
import Button2 from "@/assets/trailer/Button2.png";
import Button3 from "@/assets/trailer/Button3.png";

const FACILITIES = [
    {
        title: ["Vast", "Infrastructure"],
        description: ["Over 50 acres with 200,000", "sq.ft. covered area"],
        icon: GearIcon,
        mobileIcon: GearMiniIcon
    },
    {
        title: ["Modern", "Equipment"],
        description: ["Includes CNC machineries", "and Agro-shield Gas Plant"],
        icon: OF1,
        mobileIcon: OF1
    },
    {
        title: ["Advance", "Processes"],
        description: ["Features modern jigs, fixtures,", "Shot blasts, and paint booths."],
        icon: OF2,
        mobileIcon: OF2
    },
    {
        title: ["Precision", "Welding"],
        description: ["Uses Argoshield MIG inverter", "type welding machines for", "quality assurance"],
        icon: OF3,
        mobileIcon: OF3
    }
];

const PRODUCTS = [
    {
        id: 1,
        name: "Tip Trailer",
        description: "Efficient and versatile for transporting various materials, ensuring reliability and optimized performance.",
        range: "18 cum to 40 cum",
        application: "Coal, Aggregates, Iron Ore, Fly Ash, and other Minerals.",
        price: "₹16.5 L*",
        image: OP1
    },
    {
        id: 2,
        name: "Flat Bed Trailer",
        description: "Rugged flat bed trailers with ISMC members, heavy-duty twist locks, and a rigid underbody structure for versatile cargo transport.",
        range: "20ft to 43ft length",
        application: "Steel, Coil, Container, Rail etc.",
        price: "₹13 L*",
        image: OP2
    },
    {
        id: 3,
        name: "Tipper Trailer",
        description: "Robust tippers, designed for heavy-duty hauling with rock bodies and high-grade steel for longevity.",
        range: "14 cum to 32 cum",
        application: "Aggregates, Coal, Sand, Iron Ore, Rocks and other Minerals",
        price: "₹8 L*",
        image: OP3
    },
    {
        id: 4,
        name: "Side Wall Trailer",
        description: "Strength and customization define our side wall trailers, offering durability and adaptability for diverse transport needs.",
        range: "26ft to 40ft length 2ft to 6ft height",
        application: "Food Grains, Tiles, Steel, Coils, Aggregates, Coal, Iron Ore and all other Road Sale Transportation.",
        price: "₹8 L*",
        image: OP4
    },
    {
        id: 5,
        name: "Cement Ash Bulker",
        description: "Durability and efficiency drive our cement & fly ash bulkers, ensuring seamless transport with robust design.\nFor 6W/10W prime movers and 12/14/16W rigid Chassis",
        capacity: "32cum to 54cum",
        application: "All kinds of Powder form Materials such as Cement, Fly Ash etc.",
        price: "₹8 L*",
        image: OP5
    },
    {
        id: 6,
        name: "Fuel Tanker",
        description: "Engineered for reliability, our fuel tankers, mounted on 10W, 12W, 14W, and 16W rigid chassis, are built to handle diesel, fuel, chemical, and liquid transport with ease.",
        capacity: "Starting from 12 KL to 35 KL",
        application: "Diesel, Fuel, Chemical, Liquid Tankers",
        price: "₹8 L*",
        image: FuelTankerImg
    },
    {
        id: 7,
        name: "Scoop & Rock Body",
        description: "Efficient and versatile for transporting various materials, ensuring reliability and optimized performance.",
        range: "14 cum to 32 cum",
        application: "Aggregates, Coal, Sand, Iron Ore, Rocks and other Minerals",
        price: "₹8 L*",
        image: OP6
    }
];

function ArrowUpRightIcon({ className }) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className={className}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
        </svg>
    );
}

const TrailerPage = () => {
    const [currentProduct, setCurrentProduct] = useState(0);

    const nextProduct = () => {
        setCurrentProduct((prev) => (prev + 1) % PRODUCTS.length);
    };

    const prevProduct = () => {
        setCurrentProduct((prev) => (prev - 1 + PRODUCTS.length) % PRODUCTS.length);
    };

    return (
        <div className="w-full bg-white">
            {/* --- Hero Section --- */}
            <section className="relative h-[60vh] md:h-[100vh] w-full overflow-hidden bg-black text-white font-serif md:mt-0">
                <div className="absolute inset-0">
                    <Image src={TopImg} alt="Trailer Hero" fill priority className="object-cover hero-top-img" />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/30 to-transparent flex flex-col justify-end"></div>
                </div>
                <div className="relative z-10 h-full flex flex-col justify-center items-center px-6 md:px-12 xl:px-24 md:pt-0">
                    <div className="container mx-auto">
                        <div className="flex flex-col items-start w-[289px] md:w-fit gap-[10px] xl:gap-8 pt-[10px] pb-[10px] md:py-0 border-b-[3px] border-[#CA9015] md:border-0 md:mt-10">
                            <h1 className="relative -top-10 text-[26px] sm:text-[30px] md:text-[36px] lg:text-[64px] xl:text-[64px] leading-tight xl:leading-[135%] font-sanomat-web trailer-hero-title font-normal xl:tracking-[0%] drop-shadow-lg -mt-1">
                                Setting New Benchmarks
                            </h1>
                            <div className="relative -top-10 hidden md:block h-[4px] w-full max-w-[800px] bg-[#CA9015] -mt-4" />
                            <Link href="/about">
                                <button className="relative -top-10 group mt-0 flex items-center gap-3 px-8 py-3 rounded-full border-2 border-white text-white font-sans text-[18px] font-medium hover:bg-white hover:text-black transition-all duration-300">
                                    About Us
                                    <ArrowUpRightIcon className="w-5 h-5" />
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="absolute bottom-20 right-20 hidden md:block z-10 opacity-80">
                    <div className="flex flex-col items-center">
                        {[0, 1, 2, 3, 4].map((i) => (
                            <svg key={i} className="w-16 h-12 text-white -mt-9 first:mt-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                            </svg>
                        ))}
                    </div>
                </div>
            </section >

            {/* --- Description & Stats Cards --- */}
            <section className="relative w-full bg-[#F5F5F7] px-6 md:px-12 xl:px-24 pt-20 md:pt-32 pb-10 md:pb-16 overflow-hidden">
                {/* Background Decoration Wave */}
                <div className="absolute inset-x-0 top-0 bottom-52 flex items-center justify-center -z-0 pointer-events-none opacity-100 md:opacity-50 scale-[2] md:scale-105 -rotate-12 translate-y-12 translate-x-[3.75rem] md:translate-y-0 md:translate-x-0">
                    <Image src={BgOurTeam} alt="Background decoration" fill className="object-contain" priority />
                </div>

                <div className="max-w-screen-2xl mx-auto flex flex-col lg:flex-row lg:justify-between gap-8 lg:gap-24 mb-[32px] md:mb-[100px] relative z-10">
                    <div className="lg:w-[41%] text-center lg:text-left">
                        <h2 className="text-[24px] md:text-[40px] font-serif leading-tight">
                            <span className="text-[#111C55]">Crafting The</span> <span className="text-[#CA9015]">Future</span> <br />
                            <span className="text-[#CA9015]">of Transportation</span>
                        </h2>
                    </div>
                    <div className="lg:w-[49%] flex flex-col gap-0 md:gap-8 text-[#6B7280] text-xs md:text-lg font-sans leading-normal md:leading-relaxed text-center lg:text-left">
                        <p>In 2019, Jagdamba Trailers has swiftly established itself as a prominent and trustworthy brand within the Indian Trailer Industry.</p>
                        <p>At Jagdamba Trailers, we manufacture a wide array of trailer types, including flatbed trailers, tanker trailers, and specialised transport solutions. Our products are designed to meet the rigorous demands of industries such as logistics, construction, and heavy equipment transport, providing reliable and efficient solutions for our clients.</p>
                        <p>Our  manufacturing facilities and skilled workforce ensure that every trailer we produce meets the highest standards of durability and performance.</p>
                    </div>
                </div>

                {/* Mobile: horizontal scroll row | md+: 3-col grid */}
                <div className="relative z-10 font-serif">
                    {/* Mobile scroll row */}
                    <div className="flex md:hidden gap-4 overflow-x-auto pb-2 -mx-6 px-6 scrollbar-hide">
                        {[
                            { img: Exp2, label: "50 Acres", desc: "Spread across 50 Acres" },
                            { img: Exp3, label: "300", desc: "Trailer manufacturing per month" },
                            { img: Exp1, label: "3000+", desc: "Trailer manufacturing per year" }
                        ].map((card, i) => (
                            <div key={i} className="relative flex-shrink-0 w-[65vw] overflow-hidden rounded-lg h-[140px]">
                                <Image src={card.img} alt={card.label} fill className="object-cover" />
                                <div className="absolute inset-0 bg-black/20 flex flex-col items-center justify-center text-center p-4 text-white font-serif">
                                    <h3 className="text-[16px] font-bold mb-1 tracking-wide">{card.label}</h3>
                                    <p className="text-[10px] font-normal tracking-wider opacity-90">{card.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                    {/* Desktop grid */}
                    <div className="hidden md:grid grid-cols-3 gap-6 mb-4 max-w-screen-2xl mx-auto">
                        {[
                            { img: Exp2, label: "50 Acres", desc: "Spread across 50 Acres" },
                            { img: Exp3, label: "300", desc: "Trailer manufacturing per month" },
                            { img: Exp1, label: "3000+", desc: "Trailer manufacturing per year" }
                        ].map((card, i) => (
                            <div key={i} className="relative group overflow-hidden rounded-xl h-[250px]">
                                <Image src={card.img} alt={card.label} fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
                                <div className="absolute inset-0 bg-black/10 flex flex-col items-center justify-center text-center p-6 text-white text-shadow-md font-serif">
                                    <h3 className="text-[36px] font-bold mb-3 tracking-wide">{card.label}</h3>
                                    <p className="text-[20px] font-bold tracking-wider opacity-90">{card.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section >

            {/* --- Vendors Section --- */}
            <section className="w-full bg-[#F5F5F7] pt-10 pb-8 md:pb-20">
                <div className="max-w-screen-2xl mx-auto px-6 md:px-12 xl:px-24">
                    <div className="flex flex-col lg:flex-row gap-6 lg:gap-24 mb-1 md:mb-20 items-center lg:items-start text-center lg:text-left">
                        <div className="lg:w-[40%]">
                            <h2 className="text-[24px] md:text-[40px] font-serif leading-tight">
                                <span className="text-[#111C55]">Our Vendors </span> <span className="text-[#CA9015]">&</span> <br className="hidden md:block" />
                                <span className="text-[#CA9015]">Suppliers</span>
                            </h2>
                        </div>
                        <div className="lg:w-[55%] mt-2 md:mt-0">
                            <p className="text-[#6B7280] text-[12px] md:text-[24px] font-sans leading-relaxed px-4 md:px-0">
                                We are committed to the idea of respect and decency, first of all, in relation to our employees, as well as to customers, partners and suppliers of the company.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Logo strip - Full width scroll */}
                <div className="w-full overflow-hidden relative group mt-6 md:mt-10 md:border-y border-gray-100 py-2 md:py-4">
                    <div className="flex w-fit animate-infinite-scroll">
                        {[LogoAshok, LogoTata, LogoDRDO, Logo3, LogoRailways, LogoAshok, LogoTata, LogoDRDO, Logo3, LogoRailways].map((logo, idx) => (
                            <div key={idx} className="w-32 md:w-72 h-20 md:h-32 relative flex items-center justify-center px-4 md:px-10 opacity-90 hover:opacity-100 transition-all duration-300">
                                <Image src={logo} alt="vendor logo" className="h-10 md:h-20 w-auto object-contain" />
                            </div>
                        ))}
                        {/* Duplicate for seamless loop */}
                        {[LogoAshok, LogoTata, LogoDRDO, Logo3, LogoRailways, LogoAshok, LogoTata, LogoDRDO, Logo3, LogoRailways].map((logo, idx) => (
                            <div key={`dub-${idx}`} className="w-32 md:w-72 h-20 md:h-32 relative flex items-center justify-center px-4 md:px-10 opacity-90 hover:opacity-100 transition-all duration-300">
                                <Image src={logo} alt="vendor logo" className="h-10 md:h-20 w-auto object-contain" />
                            </div>
                        ))}
                    </div>
                </div>
            </section >

            {/* --- Our Products Slider --- */}
            <section className="w-full bg-[#F5F5F7] px-6 md:px-12 xl:px-24 pt-4 md:pt-0 pb-16 md:pb-32">
                <div className="max-w-screen-2xl mx-auto">
                    <h2 className="text-[24px] md:text-[40px] font-serif mb-10 md:mb-16 text-center lg:text-left">
                        <span className="text-[#111C55]">Our </span> <span className="text-[#CA9015]">Products</span>
                    </h2>

                    <div className="bg-transparent md:bg-white md:rounded-3xl px-0 md:px-12 lg:px-16 pt-0 md:pt-16 lg:pt-20 pb-0 md:pb-24 lg:pb-28 flex flex-col lg:flex-row items-center gap-8 md:gap-12 lg:gap-20 relative">
                        {/* Image Side */}
                        <div className="w-full lg:w-[44%] relative aspect-[4/3] rounded-xl overflow-hidden md:-translate-y-4">
                            <Image
                                src={PRODUCTS[currentProduct].image}
                                alt={PRODUCTS[currentProduct].name}
                                fill
                                className="object-contain md:scale-105"
                            />
                        </div>

                        <div key={currentProduct} className="w-full lg:w-[51%] lg:pl-16 flex flex-col gap-4 font-sans animate-in fade-in duration-700">
                            <h3 className="text-[24px] md:text-[32px] font-serif font-normal text-[#111C55] md:-translate-y-3">{PRODUCTS[currentProduct].name}</h3>
                            <p className="text-[#6B7280] text-[12px] md:text-xl leading-snug">{PRODUCTS[currentProduct].description}</p>

                            <div className="space-y-4 text-[12px] md:text-xl">
                                {PRODUCTS[currentProduct].range && (
                                    <p>
                                        <span className="text-[#111C55] font-semibold">Range: </span>
                                        <span className="text-[#6B7280]">{PRODUCTS[currentProduct].range}</span>
                                    </p>
                                )}
                                {PRODUCTS[currentProduct].capacity && (
                                    <p>
                                        <span className="text-[#111C55] font-semibold">Capacity: </span>
                                        <span className="text-[#6B7280]">{PRODUCTS[currentProduct].capacity}</span>
                                    </p>
                                )}
                                <p>
                                    <span className="text-[#111C55] font-semibold">Application: </span>
                                    <span className="text-[#6B7280]">{PRODUCTS[currentProduct].application}</span>
                                </p>
                            </div>

                            <p className="text-[#CA9015] text-[16px] md:text-2xl font-medium tracking-wide">
                                Price Starts at {PRODUCTS[currentProduct].price}
                            </p>

                            {/* Slider Controls */}
                            <div className="flex gap-2 justify-end lg:absolute lg:bottom-12 lg:right-16 mt-1 lg:mt-0">
                                <button
                                    onClick={prevProduct}
                                    className="hover:opacity-80 transition-opacity active:scale-95"
                                >
                                    <Image src={Button1} alt="Previous" className="w-10 h-10 object-contain md:hidden" />
                                    <Image src={Button3} alt="Previous" className="hidden md:block w-14 h-14 object-contain scale-x-[-1]" />
                                </button>
                                <button
                                    onClick={nextProduct}
                                    className="hover:opacity-80 transition-opacity active:scale-95"
                                >
                                    <Image src={Button2} alt="Next" className="w-10 h-10 object-contain md:hidden" />
                                    <Image src={Button3} alt="Next" className="hidden md:block w-14 h-14 object-contain" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section >

            {/* --- Our Facilities --- */}
            <section className="w-full bg-[#F5F5F7] px-4 md:px-12 xl:px-24 pb-20 overflow-hidden">
                <div className="max-w-screen-2xl mx-auto">
                    <h2 className="text-[24px] md:text-[48px] font-serif mb-8 md:mb-16 text-center md:text-left ml-2 md:ml-0">
                        <span className="text-[#111C55]">Our </span> <span className="text-[#CA9015]">Facilities</span>
                    </h2>

                    {/* horizontal scroller container */}
                    <div className="flex overflow-x-auto gap-4 md:gap-8 pb-8 px-2 md:px-0 scrollbar-hide snap-x transition-all duration-500">
                        {FACILITIES.map((facility, idx) => (
                            <div
                                key={idx}
                                className="flex-shrink-0 w-[82vw] md:w-[80vw] 2xl:w-[1300px] min-h-[170px] md:min-h-[350px] 2xl:min-h-[480px] bg-[#111C55] rounded-xl md:rounded-3xl px-6 md:px-16 lg:pl-12 lg:pr-24 xl:pl-16 xl:pr-32 2xl:pl-20 2xl:pr-44 pt-4 md:pt-12 2xl:pt-20 pb-4 md:pb-16 2xl:pb-24 text-white relative overflow-hidden group snap-center"
                            >
                                {/* Subtle inner glow for premium feel */}
                                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent pointer-events-none"></div>

                                {/* ── MOBILE LAYOUT ── */}
                                <div className="flex flex-col justify-between h-full md:hidden relative z-10">
                                    <div className="space-y-3">
                                        <h3 className="text-[24px] font-serif font-light leading-tight whitespace-nowrap">
                                            {facility.title.join(" ")}
                                        </h3>
                                        <div className="text-[12px] text-white/70 font-serif font-light leading-snug space-y-0.5">
                                            {facility.description.map((line, i) => <div key={i}>{line}</div>)}
                                        </div>
                                    </div>
                                    <div className={`relative ${idx >= 2 ? 'w-24 h-24' : 'w-28 h-28'} mt-6 opacity-80`}>
                                        <Image src={facility.mobileIcon} alt={facility.title.join(" ")} fill className="object-contain animate-spin-slow" />
                                    </div>
                                </div>

                                {/* ── DESKTOP LAYOUT ── */}
                                <div className="hidden md:flex flex-row items-center justify-between gap-12 h-full">
                                    <div className="w-3/5 space-y-6">
                                        <h3 className="text-3xl lg:text-4xl 2xl:text-5xl font-serif font-light leading-tight">
                                            {facility.title.map((line, i) => <div key={i}>{line}</div>)}
                                        </h3>
                                        <div className="text-lg lg:text-2xl 2xl:text-3xl text-white/70 font-serif font-light leading-snug space-y-1">
                                            {facility.description.map((line, i) => <div key={i}>{line}</div>)}
                                        </div>
                                    </div>
                                    <div className="w-1/3 flex justify-end">
                                        <div className={`relative ${idx >= 2 ? 'w-40 lg:w-60 2xl:w-64 h-40 lg:h-60 2xl:h-64' : 'w-48 lg:w-72 2xl:w-80 h-48 lg:h-72 2xl:h-80'} opacity-90 transition-transform duration-1000 group-hover:scale-105`}>
                                            <Image src={facility.icon} alt={facility.title.join(" ")} fill className="object-contain animate-spin-slow" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section >

            {/* --- Our Presence --- */}
            <section className="w-full bg-[#F5F5F7] px-6 md:px-12 xl:px-24 pt-4 md:pt-16 pb-32 overflow-hidden relative">
                {/* Background Decorative Wave (The Sweep) */}
                <div className="absolute top-[33%] md:top-[37%] left-[65%] md:left-[53%] -translate-x-1/2 w-full opacity-60 -z-0 pointer-events-none scale-[2.2] md:scale-[1.0] -rotate-[20deg]">
                    <Image src={BgOurTeam} alt="decor" className="w-full h-auto" />
                </div>

                <div className="max-w-screen-2xl mx-auto relative z-10">
                    <h2 className="text-[24px] md:text-[48px] font-serif mb-10 md:mb-16 text-center lg:text-left">
                        <span className="text-[#111C55]">Our </span> <span className="text-[#CA9015]">Presence</span>
                    </h2>

                    <div className="relative mb-16 md:mb-24 flex justify-center">
                        {/* Map Image - Increased scale on mobile */}
                        <div className="max-w-xl w-full drop-shadow-xl scale-110 md:scale-100 transition-transform duration-500">
                            <Image src={MapImg} alt="Presence Map" width={600} height={600} className="w-full h-auto" />
                        </div>
                    </div>

                    {/* Stats Row - 3 columns on all screens to match reference image */}
                    <div className="grid grid-cols-3 gap-2 md:gap-12 text-center mb-16 md:mb-24">
                        <div className="flex flex-col items-center">
                            <span className="text-[20px] md:text-5xl font-serif font-bold text-[#111C55] leading-none">20+</span>
                            <p className="text-[#6B7280] font-sans text-[11px] md:text-[24px] font-medium leading-tight mt-2 md:mt-4 px-1 max-w-[100px] md:max-w-none">
                                Years of <br className="md:hidden" /> Experience
                            </p>
                        </div>
                        <div className="flex flex-col items-center">
                            <span className="text-[20px] md:text-5xl font-serif font-bold text-[#111C55] leading-none">3K+</span>
                            <p className="text-[#6B7280] font-sans text-[11px] md:text-[24px] font-medium leading-tight mt-2 md:mt-4 px-1 max-w-[100px] md:max-w-none">
                                No. of <br className="md:hidden" /> Employees
                            </p>
                        </div>
                        <div className="flex flex-col items-center">
                            <span className="text-[20px] md:text-5xl font-serif font-bold text-[#111C55] leading-none">500+</span>
                            <p className="text-[#6B7280] font-sans text-[11px] md:text-[24px] font-medium leading-tight mt-2 md:mt-4 px-1 max-w-[100px] md:max-w-none">
                                Projects <br className="md:hidden" /> Completed
                            </p>
                        </div>
                    </div>

                    {/* Website Visit Button */}
                    <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6 text-[14px] md:text-2xl text-[#111C55] font-serif -translate-y-6 md:translate-y-0 relative z-10">
                        <span className="opacity-90">To know more, visit:</span>
                        <Link href="https://jagdambatralier.com" target="_blank" className="inline-block">
                            <button className="flex items-center gap-3 md:gap-4 px-6 md:px-8 py-2 md:py-3 rounded-full border border-[#111C55] bg-white/60 backdrop-blur-md hover:bg-[#111C55] hover:text-white transition-all duration-500 group">
                                <span className="font-sans text-[12px] md:text-lg tracking-wide font-medium">jagdambatralier.com</span>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="#CA9015" className="w-4 h-4 md:w-5 md:h-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                                </svg>
                            </button>
                        </Link>
                    </div>
                </div>
            </section >
        </div >
    );
};

export default TrailerPage;
