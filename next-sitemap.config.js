/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://example.com",
  generateRobotsTxt: true,
  generateIndexSitemap: false,
  outDir: "public",
  exclude: ["/studio", "/studio/*"],
  robotsTxtOptions: {
    policies: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
    additionalSitemaps: ["https://example.com/sitemap.xml"],
  },
  transform: async (config, path) => ({
    loc: path,
    changefreq: path === "/" ? "weekly" : "monthly",
    priority: path === "/" ? 1 : 0.8,
    lastmod: new Date().toISOString(),
    alternateRefs: config.alternateRefs ?? [],
  }),
};
