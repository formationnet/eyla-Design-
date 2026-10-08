import type { MetadataRoute } from "next";
import { routing } from "@/i18n/routing";
import { siteUrl } from "@/lib/site-config";
import { buildLanguageAlternates } from "@/lib/seo";

const staticPaths = ["", "/about", "/experience", "/education", "/contact"];

export default function sitemap(): MetadataRoute.Sitemap {
  return staticPaths.flatMap((path) =>
    routing.locales.map((locale) => ({
      url: `${siteUrl}/${locale}${path}`,
      alternates: { languages: buildLanguageAlternates(path) },
      lastModified: new Date(),
    })),
  );
}
