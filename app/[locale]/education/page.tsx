import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { routing } from "@/i18n/routing";
import { Timeline } from "@/components/about/timeline";
import { PageHeader } from "@/components/shared/page-header";
import { profile } from "@/content/profile";
import { buildLanguageAlternates, canonicalUrl } from "@/lib/seo";

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: PageProps<"/[locale]/education">): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "education" });
  return {
    title: t("title"),
    alternates: {
      canonical: canonicalUrl(locale, "/education"),
      languages: buildLanguageAlternates("/education"),
    },
  };
}

export default async function EducationPage({
  params,
}: PageProps<"/[locale]/education">) {
  const { locale } = await params;
  setRequestLocale(locale);
  const l = locale as "en" | "fr";
  const t = await getTranslations("education");

  return (
    <div id="main-content" className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
      <PageHeader eyebrow={profile.title[l]} title={t("title")} />

      <div className="mt-12">
        <Timeline items={profile.education} />
      </div>
    </div>
  );
}
