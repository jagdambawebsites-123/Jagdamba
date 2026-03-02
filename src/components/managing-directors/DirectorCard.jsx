import Image from 'next/image';

const DirectorCard = ({ name, description, image, isReversed }) => {
    return (
        <div className={`w-full flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-12 py-8 md:py-12 px-6 lg:px-24 ${isReversed ? 'lg:flex-row-reverse' : ''}`}>

            {/* Text Content */}
            <div className="w-full lg:w-[45%] text-center lg:text-left">
                <div className="max-w-xl xl:max-w-2xl mx-auto lg:mx-0">
                    <h3 className="text-2xl md:text-3xl xl:text-4xl font-serif text-[#111C55] mb-4 leading-tight">{name}</h3>
                    <p className="text-[#6B7280] font-sans leading-relaxed text-sm md:text-base lg:text-base xl:text-lg">
                        {description}
                    </p>
                </div>
            </div>

            {/* Image Container - order-first on mobile */}
            <div className={`relative w-full lg:w-[42%] flex justify-center order-first lg:order-none ${isReversed ? 'lg:justify-start' : 'lg:justify-end'}`}>
                <div className="relative w-full max-w-[550px]">
                    <Image
                        src={image}
                        alt={name}
                        width={800}
                        height={600}
                        className="w-full h-auto"
                    />
                </div>
            </div>
        </div>
    );
};

export default DirectorCard;
