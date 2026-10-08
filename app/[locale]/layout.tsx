import type { Metadata } from "next";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { Outfit, Rubik } from "next/font/google";
import { routing } from "@/i18n/routing";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { siteUrl } from "@/lib/site-config";
import { buildLanguageAlternates, canonicalUrl } from "@/lib/seo";
import { JsonLd } from "@/components/seo/json-ld";
import { InlineScript } from "@/components/shared/inline-script";
import { profile } from "@/content/profile";
import "../globals.css";

const outfit = Outfit({
  variable: "--font-heading",
  subsets: ["latin"],
  display: "swap",
});

const rubik = Rubik({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
});

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: LayoutProps<"/[locale]">): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "metadata" });

  return {
    metadataBase: new URL(siteUrl),
    title: {
      default: t("title"),
      template: `%s | ${t("siteName")}`,
    },
    description: t("description"),
    alternates: {
      canonical: canonicalUrl(locale, ""),
      languages: buildLanguageAlternates(""),
    },
    openGraph: {
      type: "website",
      locale,
      siteName: t("siteName"),
      title: t("title"),
      description: t("description"),
      url: canonicalUrl(locale, ""),
      images: [`/${locale}/opengraph-image`],
    },
    twitter: {
      card: "summary_large_image",
      title: t("title"),
      description: t("description"),
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: LayoutProps<"/[locale]">) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  setRequestLocale(locale);

  return (
    <html
      lang={locale}
      className={`${outfit.variable} ${rubik.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <head>
        {/* Runs before paint to avoid a flash of the wrong theme. Reads the
            OS preference only — there is no manual theme toggle in the UI. */}
        <InlineScript
          html={`(function(){try{var m=window.matchMedia("(prefers-color-scheme: dark)");document.documentElement.classList.toggle("dark",m.matches);}catch(e){}})();`}
        />
      </head>
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <JsonLd
          data={{
            "@context": "https://schema.org",
            "@type": "Person",
            name: profile.name,
            jobTitle: profile.title[locale as "en" | "fr"],
            email: `mailto:${profile.contact.email}`,
            telephone: profile.contact.phone,
            address: profile.contact.address,
            url: canonicalUrl(locale, ""),
            sameAs: [profile.contact.linkedin, profile.contact.instagram],
            image: `${siteUrl}${profile.photo.src}`,
          }}
        />
        <NextIntlClientProvider>
          <SiteHeader />
          <main className="flex-1">{children}</main>
          <SiteFooter />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
