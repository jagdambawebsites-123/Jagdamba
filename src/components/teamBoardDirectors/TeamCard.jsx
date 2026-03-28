"use client";

import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';

const TeamCard = ({ image, name, designation, index = 0 }) => {
    const cardRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                setIsVisible(true);
                observer.disconnect();
            }
        }, {
            threshold: 0.1,
            rootMargin: '50px'
        });

        if (cardRef.current) {
            observer.observe(cardRef.current);
        }

        return () => observer.disconnect();
    }, []);

    return (
        <div 
            ref={cardRef}
            data-no-global-animate="true"
            className={`bg-white border-2 border-gray-200 shadow-[0_4px_30px_0_rgba(0,0,0,0.06)] p-7 flex flex-col items-center group transition-all duration-[2500ms] ease-[cubic-bezier(0.25,1,0.5,1)] hover:-translate-y-2 hover:shadow-[0_15px_40px_rgba(0,0,0,0.12)] rounded-md w-full max-sm:max-w-[406px] max-w-[469px] mx-auto 
            ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
        >
            <div className="relative w-full aspect-square mb-6 overflow-hidden bg-[#F3F4F6] rounded-md">
                <Image
                    src={image}
                    alt={name}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    quality={100}
                    priority={index < 3} // Prioritize first few images
                    className="object-cover transition-transform duration-[1000ms] ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:scale-105"
                />
            </div>
            <div className="w-full text-left">
                <h3 className="text-[#111C55] text-xl md:text-[24px] font-medium font-sans mb-2.5 tracking-tight">
                    {name}
                </h3>
                <p className="text-[#686868] text-sm md:text-[16px] font-sans font-medium uppercase tracking-[0.08em]">
                    {designation}
                </p>
            </div>
        </div>
    );
};

export default TeamCard;
