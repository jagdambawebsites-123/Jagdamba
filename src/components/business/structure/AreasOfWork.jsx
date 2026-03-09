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
                <h2 className="font-serif font-normal capitalize tracking-normal text-[#111C55] mb-10 text-center text-[24px] leading-[150%] md:text-[40px] md:leading-[150%]">
                    Areas <span className="text-[#B88C2E]">Of Work</span>
                </h2>

                <div className="flex flex-row overflow-x-auto scrollbar-hide gap-4 md:grid md:grid-cols-3 md:gap-6">
                    {areas.map((area, index) => (
                        <div
                            key={index}
                            className="shrink-0 w-[330px] h-[300px] md:w-[416px] md:h-[478px] bg-[#111C55] rounded-[12px] md:rounded-[20px] py-[24px] px-[16px] md:py-[82px] md:px-[62px] flex flex-col items-center text-center gap-[20px] md:gap-[40px] hover:bg-[#1a2760] transition-colors duration-300"
                        >
                            <div className="mb-2 flex justify-center">
                                <Image
                                    src={area.icon}
                                    alt={area.title}
                                    width={72}
                                    height={72}
                                    className="w-[72px] h-[72px] object-contain"
                                />
                            </div>

                            <h3 className="text-center capitalize tracking-normal text-[#8E94B3] font-serif font-normal text-[20px] leading-[100%] md:text-white md:font-sans md:font-semibold md:text-[24px] md:leading-[152%]">
                                {area.title}
                            </h3>

                            <p className="text-center tracking-normal text-[#8E94B3] font-serif font-normal text-[12px] leading-[17px] md:text-white md:font-sans md:text-[16px] md:leading-[22px]">
                                {area.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
