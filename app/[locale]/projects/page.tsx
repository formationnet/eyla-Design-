import type { Metadata } from "next";
import Image from "next/image";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { routing } from "@/i18n/routing";
import { PageHeader } from "@/components/shared/page-header";
import { profile } from "@/content/profile";
import { projects } from "@/content/projects";
import { buildLanguageAlternates, canonicalUrl } from "@/lib/seo";

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: PageProps<"/[locale]/projects">): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "projects" });
  return {
    title: t("title"),
    alternates: {
      canonical: canonicalUrl(locale, "/projects"),
      languages: buildLanguageAlternates("/projects"),
    },
  };
}

export default async function ProjectsPage({
  params,
}: PageProps<"/[locale]/projects">) {
  const { locale } = await params;
  setRequestLocale(locale);
  const l = locale as "en" | "fr";
  const t = await getTranslations("projects");

  return (
    <div id="main-content" className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
      <PageHeader
        eyebrow={profile.title[l]}
        title={t("title")}
        subtitle={t("subtitle")}
      />

      {projects.length === 0 ? (
        <p className="mt-12 border border-dashed border-border p-12 text-center text-muted-foreground">
          {t("empty")}
        </p>
      ) : (
        <ul className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <li key={project.id} className="border border-border">
              <div className="relative aspect-[4/3] overflow-hidden bg-muted">
                <Image
                  src={project.image}
                  alt={project.imageAlt[l]}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>
              <div className="p-5">
                <p className="text-xs uppercase tracking-[0.2em] text-accent">
                  {[project.category[l], project.year].filter(Boolean).join(" · ")}
                </p>
                <h2 className="mt-2 text-xl">{project.title[l]}</h2>
                {project.location && (
                  <p className="mt-1 text-sm text-muted-foreground">
                    {project.location}
                  </p>
                )}
                <p className="mt-3 text-sm text-muted-foreground">
                  {project.description[l]}
                </p>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
