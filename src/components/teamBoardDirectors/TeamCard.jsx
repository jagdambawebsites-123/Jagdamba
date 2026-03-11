import Image from 'next/image';

const TeamCard = ({ image, name, designation }) => {
    return (
        <div className="bg-white border-2 border-gray-200 shadow-[0_4px_30px_0_rgba(0,0,0,0.06)] p-7 flex flex-col items-center group transition-all duration-300 hover:shadow-xl rounded-md w-full max-sm:max-w-[406px] max-w-[469px] mx-auto">
            <div className="relative w-full aspect-square mb-6 overflow-hidden bg-[#F3F4F6] rounded-md">
                <Image
                    src={image}
                    alt={name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
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
