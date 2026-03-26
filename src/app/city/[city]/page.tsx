import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  createPageMetadata,
  getCityBySlug,
  toAbsoluteUrl,
} from "@/lib/seo";

type CityPageProps = {
  params: Promise<{
    city: string;
  }>;
};

export const dynamicParams = false;

export function generateStaticParams() {
  return ["bangalore", "chennai", "delhi", "mumbai"].map((city) => ({
    city,
  }));
}

export async function generateMetadata({
  params,
}: CityPageProps): Promise<Metadata> {
  const { city } = await params;
  const cityEntry = getCityBySlug(city);

  if (!cityEntry) {
    return {};
  }

  return createPageMetadata({
    title: `Best Places to Live in ${cityEntry.name}`,
    description: `Best Places to Live in ${cityEntry.name}: discover lifestyle, connectivity, infrastructure, and growth opportunities in ${cityEntry.region}.`,
    path: `/city/${cityEntry.slug}`,
    image: "/images/aboutPage/about-awards/indiaMap.png",
    keywords: [
      `best places to live in ${cityEntry.name.toLowerCase()}`,
      `${cityEntry.name.toLowerCase()} city guide`,
      `${cityEntry.name.toLowerCase()} lifestyle`,
      "city living India",
    ],
  });
}

export default async function CityPage({ params }: CityPageProps) {
  const { city } = await params;
  const cityEntry = getCityBySlug(city);

  if (!cityEntry) {
    notFound();
  }

  const placeJsonLd = {
    "@context": "https://schema.org",
    "@type": "Place",
    name: cityEntry.name,
    description: cityEntry.description,
    url: toAbsoluteUrl(`/city/${cityEntry.slug}`),
    address: {
      "@type": "PostalAddress",
      addressLocality: cityEntry.name,
      addressRegion: cityEntry.region,
      addressCountry: "IN",
    },
  };

  return (
    <main className="bg-[#F5F5F5] text-[#111C55]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(placeJsonLd) }}
      />
      <section className="container mx-auto px-6 py-20 md:px-10 xl:px-25 md:py-28">
        <div className="mx-auto max-w-4xl space-y-8">
          <p className="text-sm uppercase tracking-[0.3em] text-[#B88C2E]">
            City Guide
          </p>
          <h1 className="font-serif text-4xl leading-tight md:text-6xl">
            Best Places to Live in {cityEntry.name}
          </h1>
          <p className="max-w-3xl text-base leading-8 text-[#535D77] md:text-xl">
            {cityEntry.description}
          </p>
          <div className="grid gap-6 md:grid-cols-3">
            <article className="rounded-3xl bg-white p-6 shadow-sm">
              <h2 className="font-serif text-2xl">Connectivity</h2>
              <p className="mt-3 leading-7 text-[#535D77]">
                {cityEntry.name} offers strong access to key transport corridors,
                employment centers, and everyday essentials that support a
                comfortable urban lifestyle.
              </p>
            </article>
            <article className="rounded-3xl bg-white p-6 shadow-sm">
              <h2 className="font-serif text-2xl">Lifestyle</h2>
              <p className="mt-3 leading-7 text-[#535D77]">
                Residents benefit from a mix of retail, hospitality, dining, and
                recreation that makes the city appealing for families and working
                professionals alike.
              </p>
            </article>
            <article className="rounded-3xl bg-white p-6 shadow-sm">
              <h2 className="font-serif text-2xl">Growth</h2>
              <p className="mt-3 leading-7 text-[#535D77]">
                Long-term investment in infrastructure and business activity
                continues to strengthen {cityEntry.name}&apos;s position as a
                desirable place to live.
              </p>
            </article>
          </div>
        </div>
      </section>
    </main>
  );
}
