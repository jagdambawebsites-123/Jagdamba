import Image from "next/image";

/**
 * NewsCard component
 * @param {Object} props
 * @param {import("next/image").StaticImageData | string} props.image - The news image
 * @param {string} props.source - Publication name (e.g. "MOTOR INDIA")
 * @param {string} props.title - Headline/article title
 * @param {string} props.date - Display date (e.g. "17 Apr, 2024")
 * @param {string} [props.href] - Optional link URL
 */
export default function NewsCard({ image, source, title, date, href }) {
    const CardWrapper = ({ children }) =>
        href ? (
            <a href={href} target="_blank" rel="noopener noreferrer" className="block h-full">
                {children}
            </a>
        ) : (
            <div className="h-full">{children}</div>
        );

    return (
        <CardWrapper>
            <div
                className="bg-white overflow-hidden border border-gray-300 flex flex-col h-full w-full"
                style={{ borderRadius: '26px' }}
            >
                {/* Image Section - Simplified for visibility */}
                <div
                    className="w-full h-60 md:h-64 overflow-hidden bg-gray-100 flex items-center justify-center"
                    style={{ borderRadius: '26px 26px 0 0' }}
                >
                    <img
                        src={typeof image === 'string' ? image : image.src}
                        alt={title}
                        className="w-full h-full object-cover"
                    />
                </div>

                {/* Content Section */}
                <div className="p-6 md:p-6 flex flex-col gap-4 flex-1 font-sans">
                    {/* Blue Box Badge */}
                    {source && (
                        <div className="flex">
                            <span
                                className="bg-[#111C55] text-white text-[10px] md:text-[14px] font-semibold uppercase tracking-wider px-4 rounded-sm text-center"
                                style={{ height: '22px', display: 'inline-flex', alignItems: 'center' }}
                            >
                                {source}
                            </span>
                        </div>
                    )}

                    {/* Headline */}
                    <h3 className="text-[#6B7280] text-[14px] md:text-[18px] leading-snug font-medium">
                        {title}
                    </h3>

                    {/* Footer Date */}
                    <div className="mt-1">
                        <p className="text-[#111C55] text-[14px] md:text-[18px]">
                            {date}
                        </p>
                    </div>
                </div>
            </div>
        </CardWrapper>
    );
}
