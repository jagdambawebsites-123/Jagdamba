"use client";

import { DIRECTORS_DATA } from "@/data/managing-directors";
import DirectorCard from "@/components/managing-directors/DirectorCard";

export default function ManagingDirectorsPage() {
    return (
        <main className="w-full bg-[#F5F5F5] pt-36 pb-24 md:pb-32 px-0">
            <div className="w-full">

                {/* Top Header Section */}
                <div className="text-center mb-2 md:mb-10">
                    <h1 className="text-2xl md:text-[40px] font-serif text-[#111C55] mb-2">
                        Managing <span className="text-[#B88C2E]">Directors</span>
                    </h1>
                </div>

                {/* Directors List */}
                <div className="flex flex-col">
                    {DIRECTORS_DATA.map((director, index) => (
                        <div key={director.name} className="flex flex-col items-center">
                            <DirectorCard
                                name={director.name}
                                description={director.description}
                                image={director.image}
                                isReversed={index % 2 !== 0}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </main>
    );
}

