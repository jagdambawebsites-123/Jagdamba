import type { Metadata } from "next";

export const SITE_URL = "https://example.com";
export const SITE_NAME = "Jagdamba Group";
export const SITE_TITLE = "Jagdamba Group";
export const DEFAULT_DESCRIPTION =
  "Jagdamba Group operates across trailers, steel structures, machining and casting, mining, hospitality, retail, and recreation with a long-term focus on quality and growth.";
export const DEFAULT_OG_IMAGE = "/images/landingPage/award-ceremony.jpg";
export const DEFAULT_KEYWORDS = [
  "Jagdamba Group",
  "Jagdamba",
  "industrial group India",
  "trailers",
  "steel structures",
  "machining and casting",
  "mining and calcining",
  "hospitality",
  "retail",
  "waterpark",
];

export const staticRoutes = [
  "/",
  "/about/about-awards",
  "/about/aboutUs",
  "/about/our-history",
  "/business/machining-casting",
  "/business/mall",
  "/business/mining-calcining",
  "/business/resort",
  "/business/structure-manufacturing",
  "/business/trailer",
  "/business/waterpark",
  "/chairman",
  "/boards-of-directors",
  "/contact",
  "/managing-directors",
  "/news",
] as const;

export type CitySeoEntry = {
  slug: string;
  name: string;
  region: string;
  description: string;
};

export const cityPages: CitySeoEntry[] = [
  {
    slug: "bangalore",
    name: "Bangalore",
    region: "Karnataka, India",
    description:
      "Explore why Bangalore stands out for connectivity, business growth, lifestyle, and infrastructure in this city spotlight from Jagdamba Group.",
  },
  {
    slug: "chennai",
    name: "Chennai",
    region: "Tamil Nadu, India",
    description:
      "Discover what makes Chennai attractive for industry, urban convenience, and long-term livability with this curated city overview.",
  },
  {
    slug: "delhi",
    name: "Delhi",
    region: "Delhi, India",
    description:
      "See why Delhi remains a compelling place to live with access to major business hubs, infrastructure, and cultural landmarks.",
  },
  {
    slug: "mumbai",
    name: "Mumbai",
    region: "Maharashtra, India",
    description:
      "Learn what makes Mumbai one of the best places to live for opportunity, connectivity, and an always-active urban lifestyle.",
  },
];

export function toAbsoluteUrl(path = "/") {
  return new URL(path, SITE_URL).toString();
}

export function getCityBySlug(slug: string) {
  return cityPages.find((city) => city.slug === slug.toLowerCase());
}

export function createPageMetadata({
  title,
  description,
  path,
  image = DEFAULT_OG_IMAGE,
  keywords = DEFAULT_KEYWORDS,
}: {
  title: string;
  description: string;
  path: string;
  image?: string;
  keywords?: string[];
}): Metadata {
  const url = toAbsoluteUrl(path);
  const imageUrl = toAbsoluteUrl(image);

  return {
    title,
    description,
    keywords,
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1,
      },
    },
    alternates: {
      canonical: url,
    },
    openGraph: {
      type: "website",
      url,
      title,
      description,
      siteName: SITE_NAME,
      locale: "en_IN",
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [imageUrl],
    },
  };
}

export const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: SITE_NAME,
  url: SITE_URL,
  description: DEFAULT_DESCRIPTION,
  inLanguage: "en-IN",
};

export const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: SITE_NAME,
  url: SITE_URL,
  logo: toAbsoluteUrl("/images/logo-dark.png"),
};
