import TimelineSection from '@/components/timeline/TimelineSection';
import ScrollLock from '@/components/ScrollLock';
import Footer from '@/components/Footer';

import DottedLine from '../../../assets/our-history/DottedLine.png';
import T1 from '../../../assets/our-history/T1.png';
import T2 from '../../../assets/our-history/T2.png';
import T3 from '../../../assets/our-history/T3.png';
import T4 from '../../../assets/our-history/T4.png';
import T5 from '../../../assets/our-history/T5.png';
import T6 from '../../../assets/our-history/T6.png';
import T7 from '../../../assets/our-history/T7.png';
import T9 from '../../../assets/our-history/T9.png';
import T10 from '../../../assets/our-history/T10.png';
import T11 from '../../../assets/our-history/T11.png';
import T13 from '../../../assets/our-history/T13.png';
import T15 from '../../../assets/our-history/T15.png';
import T17 from '../../../assets/our-history/T17.png';

import T2_bg from '../../../assets/our-history/T2_bg.png';
import T4_bg from '../../../assets/our-history/T4_bg.png';
import T6_bg from '../../../assets/our-history/T6_bg.png';
import T8_bg from '../../../assets/our-history/T8_bg.png';
import T10_bg from '../../../assets/our-history/T10_bg.png';
import T12_bg from '../../../assets/our-history/T12_bg.png';
import T14_bg from '../../../assets/our-history/T14_bg.png';

import Stroke1 from '../../../assets/our-history/Stroke1.png';
import Stroke2 from '../../../assets/our-history/Stroke2.png';

const milestones = [
  {
    year: '2002',
    title: 'Machining & Casting',
    description:
      'In 2002, Jagdamba made a significant leap in its industrial endeavors by establishing its first mining and calcining plant in Jorapali.',
    contentImg: T1,
    stroke1: Stroke1,
    stroke2: Stroke2,
    isReversed: false,
  },
  {
    year: '2005',
    title: 'Mining & Calcining',
    description:
      'Jagdamba Group into the machining and casting industry, establishing a formidable presence and setting new industry standards within a few years.',
    contentImg: T2,
    bgImg: T2_bg,
    isReversed: true,
  },
  {
    year: '2013',
    title: 'Grand mall',
    description:
      "Jagdamba Group opens Raigarh's first mall, The Grand Mall, bringing shopping & entertainment experience to Raigarh.",
    contentImg: T3,
    stroke1: Stroke1,
    stroke2: Stroke2,
    isReversed: false,
  },
  {
    year: '2014',
    title: 'Jagdamba Fun World',
    description:
      "Jagdamba Group unveils Jagdamba Fun World, Raigarh's premier waterpark, redefining family entertainment and leisure with a splash of excitement and adventure.",
    contentImg: T4,
    bgImg: T4_bg,
    isReversed: true,
  },
  {
    year: '2019',
    title: 'Jagdamba Trailers',
    description:
      "Jagdamba Group revolutionizes India's trailer manufacturing industry, marking a pivotal step in the company's growth and delivering cutting-edge transportation solutions that set new bench mark of efficiency and reliability",
    contentImg: T5,
    stroke1: Stroke1,
    stroke2: Stroke2,
    isReversed: false,
  },
  {
    year: '2020',
    title: 'Jagdamba Structure',
    description:
      "Jagdamba Group pioneers Jagdamba Structures, setting new benchmarks in construction excellence and innovation, and becoming a cornerstone of the company's growth and success",
    contentImg: T6,
    bgImg: T6_bg,
    isReversed: true,
  },
  {
    year: '2022',
    title: 'Jagdamba Trailers bags order from Concor',
    description:
      "This partnership with Concor highlights Jagdamba Trailers' continued growth and its pivotal role in the logistics and transportation industry.",
    contentImg: T7,
    stroke1: Stroke1,
    stroke2: Stroke2,
    isReversed: false,
    titleClassName: "text-[18px] md:text-[28px] font-serif font-normal text-[#111C55] mb-3 leading-[100%] md:leading-[40px] tracking-normal capitalize",
  },
  {
    year: '2022',
    title: 'Powering Defense with Precision',
    description:
      "Jagdamba Trailers designs and manufactures state-of-the-art missile-carrying trailers for DRDO, enhancing India's defence capabilities with precision and innovation",
    bgImg: T8_bg,
    textOnly: true,
    titleClassName: "text-[24px] md:text-[48px] font-serif font-normal text-[#b89146] mb-6 leading-[100%] md:leading-[28px] tracking-normal capitalize text-center",
    descClassName: "text-white/75 font-sans font-medium text-[14px] md:text-[28px] leading-[152%] md:leading-[40px] tracking-normal max-w-6xl text-center",
  },
  {
    year: '2022',
    title: '1 million safe working hours',
    description:
      "JSW awards Jagdamba Structures for achieving 1 million safe working hours, recognizing their unwavering commitment to safety and excellence in the construction industry",
    contentImg: T9,
    stroke1: Stroke1,
    stroke2: Stroke2,
    isReversed: false,
  },
  {
    year: '2023',
    title: 'Secures approval from Tata Motors and Ashok Leyland',
    description:
      "In the field of trailer and transportation solutions, Jagdamba Trailers has been making waves. Their recent feat of securing the endorsement of industry titans such as Tata Motors and Ashok Leyland",
    contentImg: T10,
    bgImg: T10_bg,
    isReversed: true,
    titleClassName: "text-[18px] md:text-[24px] font-serif font-normal text-[#111C55] mb-3 leading-[100%] md:leading-[40px] tracking-normal capitalize",
  },
  {
    year: '2023',
    title: 'Elevating India on the World Stage.',
    description:
      "Jagdamba Trailer has made history by securing its place on the prestigious Global Trailer OEM ranking list. As the sole Indian trailer manufacturer to achieve this distinction, Jagdamba trailer has proudly represented India on the global trailer manufacturing landscape.",
    contentImg: T11,
    stroke1: Stroke1,
    stroke2: Stroke2,
    isReversed: false,
    titleClassName: "text-[18px] md:text-[28px] font-serif font-normal text-[#111C55] mb-3 leading-[100%] md:leading-[40px] tracking-normal capitalize",
  },
  {
    year: '2023',
    title: 'Expo participant award',
    description:
      "Mumbai Steel honours Jagdamba Structures with the Expo Participant Award, celebrating their outstanding contributions and presence in the industry.",
    bgImg: T12_bg,
    textOnly: true,
    titleClassName: "text-[24px] md:text-[64px] font-serif font-normal text-[#b89146] mb-6 leading-[100%] tracking-normal capitalize text-center",
    descClassName: "text-white/75 font-sans font-medium text-[14px] md:text-[28px] leading-[21px] md:leading-[40px] tracking-normal max-w-6xl text-center",
  },
  {
    year: '2023',
    title: 'Jagdamba Trailer Service',
    description:
      "In 2023, we introduced Jagdamba Trailer Service to provide dedicated maintenance and support for the trailer industry. Built to ensure reliability on every journey, this division keeps fleets running smoothly with expert care and timely solutions.",
    contentImg: T13,
    stroke1: Stroke1,
    stroke2: Stroke2,
    isReversed: false,
  },
  {
    year: '2024',
    title: 'LÃ Fountain Resort',
    description:
      "In 2024, Jagdamba Group opens a luxurious LA Fountain resort in Raigarh, Chhattisgarh, offering an unparalleled blend of comfort and elegance. Redefining hospitality standards in the region, providing guests with an exceptional experience amidst the serene landscapes of Raigarh.",
    bgImg: T14_bg,
    textOnly: true,
    overlayClass: 'hidden',
    bgImgClass: 'opacity-100',
    titleClassName: "text-[24px] md:text-[64px] font-serif font-normal text-[#b89146] mb-6 leading-[100%] tracking-normal capitalize text-center",
    descClassName: "text-white/75 font-sans font-medium text-[14px] md:text-[28px] leading-[21px] md:leading-[40px] tracking-normal max-w-6xl text-center",
  },
  {
    year: '2025',
    title: 'Jagdamba Global Equipment Solution FZC',
    description:
      "In 2025, we expanded to the UAE with the launch of Jagdamba Global Equipment Solution FZC. Based in Dubai, this facility focuses on trailer manufacturing, pressure vessels, and industrial fabrication—serving the refining and mixed-industry sectors with world-class engineering.",
    contentImg: T15,
    stroke1: Stroke1,
    stroke2: Stroke2,
    isReversed: false,
    titleClassName: "text-[18px] md:text-[28px] font-serif font-normal text-[#111C55] mb-3 leading-[100%] md:leading-[40px] tracking-normal capitalize",
    descClassName: "text-[#737373] font-sans font-normal text-[12px] md:text-[18px] leading-[18px] md:leading-[26px] tracking-normal",
  },
  {
    year: '2025',
    title: 'Swapan Engineering Co.',
    description:
      "Our journey on the tracks begins. In April 2025, we set up Swapan Engineering Co. in Kolkata—our gateway into railway electrical equipment manufacturing, driving progress in India's rail network.",
    bgImg: T14_bg,
    textOnly: true,
    overlayClass: 'hidden',
    bgImgClass: 'opacity-100',
    titleClassName: "text-[24px] md:text-[64px] font-serif font-normal text-[#b89146] mb-6 leading-[100%] tracking-normal capitalize text-center",
    descClassName: "text-white/75 font-sans font-medium text-[14px] md:text-[28px] leading-[21px] md:leading-[40px] tracking-normal max-w-6xl text-center",
  },
  {
    year: '2025',
    title: 'Jagdamba Agro',
    description:
      "Launched in 2025, Jagdamba Agro marks our entry into the agricultural sector. With a focus on manufacturing tractor trolleys and reliable farming equipment, we aim to support India's farmers with tools that drive productivity and ease in the field.",
    contentImg: T17,
    stroke1: Stroke1,
    stroke2: Stroke2,
    isReversed: false,
    titleClassName: "text-[18px] md:text-[28px] font-serif font-normal text-[#111C55] mb-3 leading-[100%] md:leading-[40px] tracking-normal capitalize",
    descClassName: "text-[#737373] font-sans font-normal text-[12px] md:text-[18px] leading-[18px] md:leading-[26px] tracking-normal",
  },
];

const yearList = [...new Set(milestones.map((m) => m.year))];

export default function About() {
  return (
    <main className="overflow-x-hidden md:overflow-y-scroll md:snap-y md:snap-mandatory md:scroll-smooth md:h-screen bg-[#111C55] hide-scrollbar">
      <ScrollLock />

      <section className="relative w-full h-screen flex flex-col items-center snap-start text-center px-4 bg-[#111C55] pt-72">

        <div className="flex flex-col items-center justify-center flex-1 px-4">
          <h1 className="text-[26px] md:text-[70px] font-(family-name:--font-sanomat) font-normal text-[#b89146] mb-6 max-w-4xl leading-[135%] md:leading-[84px] tracking-normal text-center animate-fade-in-up">
            20+ Years of Pioneering Excellence And Innovation
          </h1>

          <div className="h-12 md:h-16 my-4 md:my-6 animate-fade-in-up" style={{ width: '3px', backgroundImage: 'repeating-linear-gradient(to bottom, white 0, white 8px, transparent 8px, transparent 26px)', animationDelay: '0.2s' }} />

          <p className="max-w-3xl text-white/70 font-sans font-normal text-[16px] md:text-[30px] leading-[21px] md:leading-[48px] tracking-normal text-center animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            Our vision has driven us, our passion has inspired us,
            <br className="hidden sm:block" />
            and our relentless pursuit of excellence has defined
            <br className="hidden sm:block" />
            us for over 20 years.
          </p>
        </div>

        <div className="flex flex-col items-center flex-1">
          <div className="w-px h-full" style={{ width: '3px', backgroundImage: 'repeating-linear-gradient(to bottom, white 0, white 8px, transparent 8px, transparent 26px)' }} />
        </div>
      </section>

      {milestones.map((milestone, index) => (
        <TimelineSection
          key={index}
          {...milestone}
          dottedLineImg={DottedLine}
          allYears={yearList}
          isDarkBlue={!!(milestone.stroke1)}
        />
      ))}

      <div className="block snap-start">
        <Footer forceShow />
      </div>
    </main>
  );
}