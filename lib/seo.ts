import { routing } from "@/i18n/routing";
import { siteUrl } from "@/lib/site-config";

/**
 * Builds the `alternates.languages` map for generateMetadata, including
 * x-default, for a given locale-relative path (e.g. "" or "/about").
 */
export function buildLanguageAlternates(path: string) {
  const languages: Record<string, string> = {};
  for (const locale of routing.locales) {
    languages[locale] = `${siteUrl}/${locale}${path}`;
  }
  languages["x-default"] = `${siteUrl}/${routing.defaultLocale}${path}`;
  return languages;
}

export function canonicalUrl(locale: string, path: string) {
  return `${siteUrl}/${locale}${path}`;
}
