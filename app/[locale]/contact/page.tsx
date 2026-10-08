import type { Metadata } from "next";
import { Mail, Phone, Link2 } from "lucide-react";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { routing } from "@/i18n/routing";
import { ContactForm } from "@/components/contact/contact-form";
import { InstagramIcon, LinkedinIcon } from "@/components/icons/social";
import { profile } from "@/content/profile";
import { buildLanguageAlternates, canonicalUrl } from "@/lib/seo";

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: PageProps<"/[locale]/contact">): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "contact" });
  return {
    title: t("title"),
    description: t("subtitle"),
    alternates: {
      canonical: canonicalUrl(locale, "/contact"),
      languages: buildLanguageAlternates("/contact"),
    },
  };
}

export default async function ContactPage({
  params,
}: PageProps<"/[locale]/contact">) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("contact");

  return (
    <div id="main-content" className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
      <h1 className="text-4xl">{t("title")}</h1>
      <p className="mt-2 text-muted-foreground">{t("subtitle")}</p>

      <div className="mt-12 grid grid-cols-1 gap-12 lg:grid-cols-[1fr_1.5fr]">
        <div className="space-y-6">
          <a
            href={`mailto:${profile.contact.email}`}
            className="flex items-center gap-3 text-sm transition-colors hover:text-accent"
          >
            <Mail className="size-4 shrink-0" aria-hidden="true" />
            <span>{profile.contact.email}</span>
          </a>
          <a
            href={`tel:${profile.contact.phone.replace(/\s+/g, "")}`}
            className="flex items-center gap-3 text-sm transition-colors hover:text-accent"
          >
            <Phone className="size-4 shrink-0" aria-hidden="true" />
            <span>{profile.contact.phone}</span>
          </a>
          <a
            href={profile.contact.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 text-sm transition-colors hover:text-accent"
          >
            <LinkedinIcon className="size-4 shrink-0" />
            <span>LinkedIn</span>
          </a>
          <a
            href={profile.contact.behance}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 text-sm transition-colors hover:text-accent"
          >
            <Link2 className="size-4 shrink-0" aria-hidden="true" />
            <span>Behance</span>
          </a>
          <a
            href={profile.contact.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 text-sm transition-colors hover:text-accent"
          >
            <InstagramIcon className="size-4 shrink-0" />
            <span>Instagram</span>
          </a>
          <p className="flex items-center gap-3 text-sm text-muted-foreground">
            <Link2 className="size-4 shrink-0" aria-hidden="true" />
            <span>Facebook — {profile.contact.facebookName}</span>
          </p>
        </div>

        <div>
          <h2 className="text-sm font-medium uppercase tracking-wide text-muted-foreground">
            {t("formTitle")}
          </h2>
          <div className="mt-6">
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
}
