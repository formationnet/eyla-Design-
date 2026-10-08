import type { Metadata } from "next";
import Image from "next/image";
import { getTranslations, setRequestLocale } from "next-intl/server";
import {
  Wrench,
  Languages,
  Award,
  Users,
  IdCard,
  Trophy,
  GraduationCap,
  Newspaper,
  Crown,
  Rocket,
  BookOpen,
} from "lucide-react";
import { routing } from "@/i18n/routing";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PageHeader } from "@/components/shared/page-header";
import { skillIcon } from "@/components/about/skill-icon";
import { IconListItem, LanguageBadge } from "@/components/about/icon-list-item";
import { profile } from "@/content/profile";
import { buildLanguageAlternates, canonicalUrl } from "@/lib/seo";

function activityIcon(titleEn: string) {
  return /president/i.test(titleEn) ? Crown : Rocket;
}

function teachingIcon(roleEn: string) {
  return /mentoring/i.test(roleEn) ? Users : BookOpen;
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: PageProps<"/[locale]/about">): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "about" });
  return {
    title: t("title"),
    alternates: {
      canonical: canonicalUrl(locale, "/about"),
      languages: buildLanguageAlternates("/about"),
    },
  };
}

export default async function AboutPage({
  params,
}: PageProps<"/[locale]/about">) {
  const { locale } = await params;
  setRequestLocale(locale);
  const l = locale as "en" | "fr";
  const t = await getTranslations("about");

  return (
    <div id="main-content" className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
      <PageHeader eyebrow={profile.title[l]} title={t("title")} />

      <div className="mt-12 grid grid-cols-1 gap-10 sm:grid-cols-[auto_1fr] sm:items-start">
        <div className="mx-auto overflow-hidden rounded-full border border-border sm:mx-0">
          <Image
            src={profile.photo.src}
            alt={profile.photo.alt[l]}
            width={160}
            height={160}
            priority
            className="size-40 object-cover"
          />
        </div>

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[2fr_1fr]">
          <section>
            <h2 className="text-sm font-medium uppercase tracking-wide text-muted-foreground">
              {t("bioTitle")}
            </h2>
            <p className="mt-3 max-w-prose text-xl leading-relaxed">
              {profile.bio[l]}
            </p>
            <p className="mt-4 italic text-muted-foreground">
              “{profile.quote[l]}”
            </p>
          </section>

          <aside className="rounded-lg border-l-2 border-accent bg-muted/40 p-6">
            <h2 className="text-sm font-medium uppercase tracking-wide text-muted-foreground">
              {t("approachTitle")}
            </h2>
            <p className="mt-3 leading-relaxed text-muted-foreground">
              {t("approachBody")}
            </p>
          </aside>
        </div>
      </div>

      <div className="mt-16">
        <h2 className="flex items-center gap-2 text-sm font-medium uppercase tracking-wide text-muted-foreground">
          <Trophy className="size-4 text-accent" aria-hidden="true" />
          {t("achievementsTitle")}
        </h2>
        <div className="mt-4 grid grid-cols-1 gap-6 sm:grid-cols-2">
          {profile.achievements.map((achievement) => (
            <div
              key={achievement.title.en}
              className="overflow-hidden rounded-lg border border-accent/30 bg-accent/5"
            >
              {achievement.image && (
                <div className="relative h-64 bg-muted">
                  <Image
                    src={achievement.image.src}
                    alt={achievement.image.alt[l]}
                    fill
                    sizes="(min-width: 640px) 50vw, 100vw"
                    className="object-contain"
                  />
                </div>
              )}
              <div className="p-6">
                <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
                  {achievement.date}
                </p>
                <h3 className="mt-2 text-lg">{achievement.title[l]}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {achievement.detail[l]}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-16">
        <h2 className="flex items-center gap-2 text-sm font-medium uppercase tracking-wide text-muted-foreground">
          <Newspaper className="size-4 text-accent" aria-hidden="true" />
          {t("pressTitle")}
        </h2>
        <div className="mt-4 grid grid-cols-1 gap-6 sm:grid-cols-3">
          {profile.press.map((item) => (
            <figure key={item.title.en}>
              <div className="relative aspect-[4/3] overflow-hidden rounded-lg bg-muted">
                <Image
                  src={item.image.src}
                  alt={item.image.alt[l]}
                  fill
                  sizes="(min-width: 640px) 33vw, 100vw"
                  className="object-cover"
                />
              </div>
              <figcaption className="mt-2 text-sm">
                <p>{item.title[l]}</p>
                <p className="text-muted-foreground">
                  {item.outlet} · {item.date}
                </p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>

      <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2">
        <Card className="sm:col-span-2">
          <CardHeader>
            <CardTitle className="flex items-center justify-between gap-2 text-sm uppercase tracking-wide text-muted-foreground">
              <span className="flex items-center gap-2">
                <Wrench className="size-4 text-accent" aria-hidden="true" />
                {t("skillsTitle")}
              </span>
              <span className="flex items-center gap-1 text-xs normal-case text-muted-foreground">
                <IdCard className="size-3.5" aria-hidden="true" />
                {t("drivingLicenseLabel")}: B
              </span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
              {profile.software.map((s) => {
                const Icon = skillIcon(s);
                return (
                  <div
                    key={s}
                    className="flex flex-col items-center gap-2 rounded-lg border border-border p-4 text-center transition-colors hover:border-accent/40"
                  >
                    <span className="flex size-10 items-center justify-center rounded-full border border-accent/30 bg-accent/10 text-accent">
                      <Icon className="size-5" aria-hidden="true" />
                    </span>
                    <span className="text-sm">{s}</span>
                  </div>
                );
              })}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-sm uppercase tracking-wide text-muted-foreground">
              <Languages className="size-4 text-accent" aria-hidden="true" />
              {t("languagesTitle")}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-4">
              {profile.languages.map((lang) => (
                <li key={lang.language.en} className="flex items-center gap-3">
                  <LanguageBadge
                    code={lang.language.en.slice(0, 2).toUpperCase()}
                  />
                  <div className="text-sm">
                    <p>{lang.language[l]}</p>
                    <p className="text-muted-foreground">{lang.level[l]}</p>
                  </div>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-sm uppercase tracking-wide text-muted-foreground">
              <Award className="size-4 text-accent" aria-hidden="true" />
              {t("certificationsTitle")}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-4">
              {profile.certifications.map((cert) => (
                <IconListItem
                  key={cert.name}
                  icon={Award}
                  title={cert.name}
                  subtitle={`${cert.issuer} · ${cert.year}`}
                />
              ))}
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-sm uppercase tracking-wide text-muted-foreground">
              <Users className="size-4 text-accent" aria-hidden="true" />
              {t("activitiesTitle")}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-4">
              {profile.activities.map((activity) => (
                <IconListItem
                  key={activity.title.en}
                  icon={activityIcon(activity.title.en)}
                  title={activity.title[l]}
                  subtitle={activity.period}
                />
              ))}
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-sm uppercase tracking-wide text-muted-foreground">
              <GraduationCap className="size-4 text-accent" aria-hidden="true" />
              {t("teachingTitle")}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-4">
              {profile.teaching.map((item, i) => (
                <IconListItem
                  key={i}
                  icon={teachingIcon(item.role.en)}
                  title={`${item.role[l]} — ${item.company}`}
                  subtitle={item.period}
                />
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
