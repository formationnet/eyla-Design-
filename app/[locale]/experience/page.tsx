import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { Download } from "lucide-react";
import { routing } from "@/i18n/routing";
import { Button } from "@/components/ui/button";
import { Timeline } from "@/components/about/timeline";
import { PageHeader } from "@/components/shared/page-header";
import { profile } from "@/content/profile";
import { buildLanguageAlternates, canonicalUrl } from "@/lib/seo";

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: PageProps<"/[locale]/experience">): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "experience" });
  return {
    title: t("title"),
    description: t("subtitle"),
    alternates: {
      canonical: canonicalUrl(locale, "/experience"),
      languages: buildLanguageAlternates("/experience"),
    },
  };
}

export default async function ExperiencePage({
  params,
}: PageProps<"/[locale]/experience">) {
  const { locale } = await params;
  setRequestLocale(locale);
  const l = locale as "en" | "fr";
  const t = await getTranslations("experience");

  return (
    <div id="main-content" className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
      <PageHeader
        eyebrow={profile.title[l]}
        title={t("title")}
        subtitle={t("subtitle")}
        actions={
          <>
            <Button asChild variant="outline">
              <a href="/resume/resume-en.pdf" download>
                <Download className="size-4" />
                {t("downloadEn")}
              </a>
            </Button>
            <Button asChild variant="outline">
              <a href="/resume/resume-fr.pdf" download>
                <Download className="size-4" />
                {t("downloadFr")}
              </a>
            </Button>
          </>
        }
      />

      <div className="mt-12">
        <Timeline items={profile.experience} />
      </div>
    </div>
  );
}
