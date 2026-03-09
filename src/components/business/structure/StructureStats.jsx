const STATS = [
    { value: "20+", label: "Years Of Experience", highlight: false },
    { value: "1200+", label: "Qualified Workers", highlight: true },
    { value: "800 +", label: "Successful Projects", highlight: false },
    { value: "15+", label: "Partners", highlight: false },
];

export default function StructureStats({ stats = STATS }) {
    const [s0, s1, s2, s3] = stats;

    const Card = ({ stat, size = "40" }) => (
        <div
            className={`flex flex-col justify-start transition-transform duration-300 hover:scale-[1.02]
                ${stat.highlight ? "bg-[#CA9015]" : "bg-[#111C55]"}
                ${size === "40"
                    ? "w-[161px] h-[118px] rounded-[12px] p-[18px] gap-[10px] md:w-[540px] md:h-[240px] md:rounded-[20px] md:p-[40px] md:gap-[6px]"
                    : "w-[190px] h-[118px] rounded-[12px] p-[18px] gap-[10px] md:w-[736px] md:h-[240px] md:rounded-[20px] md:p-[40px] md:gap-[10px]"
                }`}
        >
            <p className="font-serif font-bold tracking-normal text-white text-[16px] leading-[152%] md:text-[36px] md:leading-[152%]">
                {stat.value}
            </p>
            <p className={`capitalize tracking-normal font-serif font-bold text-[11px] leading-[152%] md:font-sans md:font-medium md:text-[20px] md:leading-[28px] ${stat.highlight ? "text-white" : "text-[#BBBBBB]"}`}>
                {stat.label}
            </p>
        </div>
    );

    return (
        <section className="w-full bg-[#F5F5F5] px-6 md:px-10 xl:px-25 pb-16">
            <div className="container mx-auto flex flex-col gap-4 md:gap-6">
                <div className="flex gap-4 md:gap-6">
                    <Card stat={s0} size="40" />
                    <Card stat={s1} size="60" />
                </div>
                <div className="flex gap-4 md:gap-6">
                    <Card stat={s2} size="60" />
                    <Card stat={s3} size="40" />
                </div>
            </div>
        </section>
    );
}

