const STATS = [
    { value: "20+", label: "Years Of Experience", highlight: false },
    { value: "1200+", label: "Qualified Workers", highlight: true },
    { value: "800 +", label: "Successful Projects", highlight: false },
    { value: "15+", label: "Partners", highlight: false },
];

export default function StructureStats({ stats = STATS }) {
    const [s0, s1, s2, s3] = stats;

    const Card = ({ stat, className = "" }) => (
        <div
            className={`rounded-2xl px-5 py-6 md:px-8 md:py-10 flex flex-col justify-start min-h-25 md:min-h-60 transition-transform duration-300 hover:scale-[1.02]
                ${stat.highlight ? "bg-[#CA9015]" : "bg-[#111C55]"} ${className}`}
        >
            <p className="text-[16px] md:text-[36px] font-bold mb-1 md:mb-2 font-serif text-white tracking-normal leading-tight">
                {stat.value}
            </p>
            <p className={`text-[11px] md:text-[20px] font-sans tracking-normal leading-snug ${stat.highlight ? "text-white" : "text-[#BBBBBB]"}`}>
                {stat.label}
            </p>
        </div>
    );

    return (
        <section className="w-full bg-[#F5F5F5] px-6 md:px-10 xl:px-25 pb-16">
            <div className="container mx-auto flex flex-col gap-4 md:gap-6">
                <div className="flex gap-4 md:gap-6">
                    <Card stat={s0} className="w-[40%]" />
                    <Card stat={s1} className="w-[60%]" />
                </div>
                <div className="flex gap-4 md:gap-6">
                    <Card stat={s2} className="w-[60%]" />
                    <Card stat={s3} className="w-[40%]" />
                </div>
            </div>
        </section>
    );
}

