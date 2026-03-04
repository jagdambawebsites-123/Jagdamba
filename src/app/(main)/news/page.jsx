import NewsCard from "@/components/NewsCard";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";

import N1 from "@/assets/news-media/N1.svg";
import N2 from "@/assets/news-media/N2.svg";
import N3 from "@/assets/news-media/N3.svg";
import N4 from "@/assets/news-media/N4.svg";
import N5 from "@/assets/news-media/N5.svg";
import N6 from "@/assets/news-media/N6.svg";

const FALLBACK_NEWS = [
    {
        id: 1,
        image: N6,
        source: "Motor India",
        title: "Jagdamba Trailers: Standing tall as leading player in Indian trailer industry.",
        date: "17 Apr, 2024",
    },
    {
        id: 2,
        image: N4,
        source: "Insight Success",
        title: "An emerging brand in Indian trailer industry.",
        date: "June 18, 2024",
    },
    {
        id: 3,
        image: N5,
        source: "Motor India",
        title: "Jagdamba Trailers goes into expansion mode amidst growing popularity and surging demand.",
        date: "22 Apr, 2024",
    },
    {
        id: 4,
        image: N2,
        source: "Motor India",
        title: "Jagdamba Trailers bags order for 100 flatbed trailers from Concor.",
        date: "27 Apr, 2023",
    },
    {
        id: 5,
        image: N1,
        title: "AMNS places an 8,000-ton order with Jagdamba Structures, marking a significant milestone in their collaboration.",
        date: "22 Apr, 2024",
    },
    {
        id: 6,
        image: N3,
        source: "Motor India",
        title: "Jagdamba Trailers secures approval from Ashok Leyland and Tata Motors.",
        date: "Sep 28, 2023",
    },
];

async function getNews() {
    try {
        if (!process.env.NEXT_PUBLIC_SANITY_PROJECT_ID) {
            console.warn("Sanity Project ID missing. Using fallback data.");
            return FALLBACK_NEWS;
        }
        const query = `*[_type == "newsPost"] | order(date desc)`;
        const news = await client.fetch(query, {}, { next: { revalidate: 60 } });

        if (!news || news.length === 0) return FALLBACK_NEWS;

        return news.map(post => ({
            id: post._id,
            image: post.mainImage ? urlFor(post.mainImage).url() : null,
            source: post.source,
            title: post.title,
            date: new Date(post.date).toLocaleDateString('en-GB', {
                day: '2-digit',
                month: 'short',
                year: 'numeric'
            }),
            href: post.slug?.current ? `/news/${post.slug.current}` : null
        }));
    } catch (error) {
        console.error("Error fetching news from Sanity:", error);
        return FALLBACK_NEWS;
    }
}

export default async function NewsMediaPage() {
    const newsItems = await getNews();

    return (
        <main className="w-full min-h-screen bg-[#F5F5F5] pt-28 md:pt-36 pb-24 px-6 md:px-12 xl:px-24">
            <div className="max-w-screen-xl mx-auto">

                {/* Page Heading */}
                <div className="text-center mt-20 sm:mt-24 md:mt-24 lg:mt-12 mb-10 md:mb-14">
                    <h1 className="text-[24px] md:text-[40px] font-serif">
                        <span className="text-[#111C55]">News &amp; </span>
                        <span className="text-[#B88C2E]">Media</span>
                    </h1>
                </div>

                {/* News Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                    {newsItems.map((item) => (
                        <NewsCard
                            key={item.id}
                            image={item.image}
                            source={item.source}
                            title={item.title}
                            date={item.date}
                            href={item.href}
                        />
                    ))}
                </div>
            </div>
        </main>
    );
}


