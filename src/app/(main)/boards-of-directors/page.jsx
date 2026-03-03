"use client";

import Image from "next/image";
import { BOARDS_OF_DIRECTORS_DATA } from "@/data/boards-of-directors";
import TeamCard from "@/components/teamBoardDirectors/TeamCard";
import BgOurTeam from "@/assets/teamBoardDirectors/Bgourteam.png";

export default function BoardsOfDirectorsPage() {
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
                <div className="text-center mb-4 md:mb-6">
                    <h1 className="text-3xl md:text-[40px] font-serif text-[#1A2B56] flex items-center justify-center gap-4">
                        <span className="font-normal">Our</span>
                        <span className="text-[#B88C2E] font-normal">Team</span>
                    </h1>
                </div>

                {/* Team Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-12 gap-x-8 md:gap-x-12">
                    {BOARDS_OF_DIRECTORS_DATA.map((member) => (
                        <TeamCard
                            key={member.name}
                            image={member.image}
                            name={member.name}
                            designation={member.designation}
                        />
                    ))}
                </div>
            </div>
        </main>
    );
}

