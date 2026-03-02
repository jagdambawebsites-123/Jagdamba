import Image from 'next/image';

const AREAS = [
    {
        title: "Steel And Fabrications",
        description:
            "Steel and fabrication services provided by Jagdamba Structures encompass a wide range of activities, from sourcing and customization to fabrication, finishing, and installation of steel components structures.",
        icon: "/images/business/structure/steel-icon.png",
    },
    {
        title: "Mechanical And Piping",
        description:
            "Mechanical and piping services provided by Jagdamba Structures encompass a wide range of activities, from design to installation, maintenance, and repair of mechanical systems and piping networks.",
        icon: "/images/business/structure/mechanical-icon.png",
    },
    {
        title: "Erection Services",
        description:
            "Erection services provided by Jagdamba Structures play a crucial role in the construction industry, facilitating the assembly and installation of structural steel components for a wide range of projects.",
        icon: "/images/business/structure/Erection-icon.png",
    },
];

export default function AreasOfWork({ areas = AREAS }) {
    return (
        <section className="w-full bg-[#F5F5F5] px-6 md:px-10 xl:px-25 py-16">
            <div className="container mx-auto">
                {/* Heading */}
                <h2 className="text-3xl md:text-[40px] font-serif text-[#111C55] mb-10 text-center">
                    Areas <span className="text-[#B88C2E]">Of Work</span>
                </h2>

                {/* Cards */}
                <div className="flex flex-row overflow-x-auto scrollbar-hide gap-4 md:grid md:grid-cols-3 md:gap-6">
                    {areas.map((area, index) => (
                        <div
                            key={index}
                            className="shrink-0 w-[75vw] md:w-auto bg-[#111C55] rounded-2xl py-10 px-8 md:py-20.5 md:px-15.5 flex flex-col items-center text-center gap-5 hover:bg-[#1a2760] transition-colors duration-300"
                        >
                            {/* Icon */}
                            <div className="mb-2 flex justify-center">
                                <Image
                                    src={area.icon}
                                    alt={area.title}
                                    width={64}
                                    height={64}
                                    className="w-14 h-14 object-contain"
                                />
                            </div>

                            {/* Title */}
                            <h3 className="text-[#8E94B3] text-[24px] font-sans font-semibold leading-snug">
                                {area.title}
                            </h3>

                            {/* Description */}
                            <p className="text-[#8E94B3] text-[16px] font-sans leading-relaxed">
                                {area.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
