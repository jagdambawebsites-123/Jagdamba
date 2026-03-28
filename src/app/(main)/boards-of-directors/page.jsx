"use client";

import Image from "next/image";
import { BOARDS_OF_DIRECTORS_DATA } from "@/data/boards-of-directors";
import TeamCard from "@/components/teamBoardDirectors/TeamCard";
import BgOurTeam from "@/assets/teamBoardDirectors/Bgourteam.png";

import { useState, useEffect } from "react";

export default function BoardsOfDirectorsPage() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    return (
        <main className="relative w-full bg-[#F5F5F7] pt-32 pb-24 md:pt-40 md:pb-32 overflow-hidden min-h-screen">
            {/* Background Decor - Refined to match image */}
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-0">
                <div className="absolute top-[20%] left-0 w-full h-[45%] opacity-40">
                    <Image
                        src={BgOurTeam}
                        alt="background decor"
                        fill
                        className="object-contain object-left scale-105"
                    />
                </div>
                <div className="absolute top-[67%] left-[-2%] w-full h-[45%] opacity-40">
                    <Image
                        src={BgOurTeam}
                        alt="background decor"
                        fill
                        className="object-contain object-left scale-105"
                    />
                </div>
            </div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-24 relative z-10">
                {/* Title Section */}
                <div 
                    className={`text-center mb-4 md:mb-6 transition-all duration-[2500ms] ease-[cubic-bezier(0.25,1,0.5,1)] ${
                        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                    }`}
                    data-no-global-animate="true"
                >
                    <h1 className="text-[24px] md:text-[40px] font-serif text-[#111C55] flex items-center justify-center gap-4">
                        <span className="font-normal" data-no-global-animate="true">Our</span>
                        <span className="text-[#CA9015] font-normal" data-no-global-animate="true">Team</span>
                    </h1>
                </div>

                {/* Team Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-12 gap-x-8 md:gap-x-12">
                    {BOARDS_OF_DIRECTORS_DATA.map((member, index) => (
                        <TeamCard
                            key={member.name}
                            image={member.image}
                            name={member.name}
                            designation={member.designation}
                            index={index}
                        />
                    ))}
                </div>
            </div>
        </main>
    );
}

