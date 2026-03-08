import Image from "next/image";

const galleryImages = [
  "/images/business/mall/mg1.png",
  "/images/business/mall/mg2.png",
  "/images/business/mall/mg3.png",
  "/images/business/mall/mg4.png",
  "/images/business/mall/mg5.png",
  "/images/business/mall/mg6.png",
  "/images/business/mall/mg7.png",
  "/images/business/mall/mg8.png",
  "/images/business/mall/mg9.png",
  "/images/business/mall/mg10.png",
  "/images/business/mall/mg11.png",
  "/images/business/mall/mg12.png",
  "/images/business/mall/mg13.png",
  "/images/business/mall/mg14.png",
  "/images/business/mall/mg15.png",
  "/images/business/mall/mg16.png",
];

const infiniteImages = [...galleryImages, ...galleryImages];

export default function MallGallerySection() {
  return (
    <div className="w-full bg-[#F5F5F5]">
      <div className="flex flex-col lg:flex-row items-center lg:items-start py-12 md:py-16 lg:py-24 gap-8 md:gap-10 lg:gap-0">
        <div className="w-full lg:w-[40%] flex flex-col justify-start items-center lg:items-start text-center lg:text-left px-6 md:px-10 xl:px-25 gap-6 shrink-0">
          <h2 className="font-serif font-normal text-[24px] lg:text-[40px] leading-[150%] lg:leading-[100%] capitalize text-[#111C55]">
            Gallery
          </h2>
          <p className="text-[#464646] font-sans font-normal text-[12px] lg:text-[16px] leading-[17px] lg:leading-[24px] lg:font-medium">
            Explore the vibrant experiences that await you at Grand Mall through
            our gallery. From chic storefronts and gourmet dining to exciting
            events and serene spaces, every image captures the essence of our
            premier shopping and entertainment destination. Discover the allure
            and elegance of Grand Mall, and envision the memorable moments that
            await your visit.
          </p>
        </div>

        <div className="w-full lg:w-[60%] overflow-hidden relative shrink-0">
          <div className="flex w-max animate-gallery-scroll gap-4 md:gap-5 lg:gap-6">
            {infiniteImages.map((src, index) => (
              <div
                key={index}
                className="w-[170.616px] h-[107px] lg:w-[669.708px] lg:h-[420px] shrink-0 overflow-hidden"
              >
                <Image
                  src={src}
                  alt={`Gallery image ${(index % 16) + 1}`}
                  width={818}
                  height={513}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
