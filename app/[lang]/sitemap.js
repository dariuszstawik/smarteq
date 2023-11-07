// import { i18n } from "@/i18n.config";
// import { MetadataRoute } from "next";

// export default function sitemap() {
//   const lang = i18n.defaultLocale;
//   return [
//     {
//       url: "https://smart-equestrian.pl",
//       lastModified: new Date(),
//       changeFrequency: "monthly",
//       priority: 1,
//     },
//     {
//       url: {`https://smart-equestrian.pl/${lang}/exercises`},
//       lastModified: new Date(),
//       changeFrequency: "weekly",
//       priority: 0.8,
//     },
//     {
//         url: {`https://smart-equestrian.pl/${lang}/horse-for-sale`},
//         lastModified: new Date(),
//         changeFrequency: "weekly",
//         priority: 0.8,
//       },
//   ];
// }

import { i18n } from "@/i18n.config";
import { MetadataRoute } from "next";

const generateSitemapEntry = (lang, path) => {
  return {
    url: `https://smart-equestrian.pl/${lang}/${path}`,
    lastModified: new Date(),
    changeFrequency: "daily",
    priority: 0.8,
  };
};

export default function sitemap() {
  const lang = i18n.defaultLocale;
  const exercisesSitemapEntry = generateSitemapEntry(lang, "exercises");
  const horsesForSaleSitemapEntry = generateSitemapEntry(
    lang,
    "horse-for-sale"
  );

  return [
    {
      url: "https://smart-equestrian.pl",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    exercisesSitemapEntry,
    horsesForSaleSitemapEntry,
  ];
}
