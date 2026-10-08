import { setRequestLocale } from "next-intl/server";
import { routing } from "@/i18n/routing";
import { Hero } from "@/components/home/hero";
import { Stats } from "@/components/home/stats";
import { Testimonials } from "@/components/home/testimonials";

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function HomePage({
  params,
}: PageProps<"/[locale]">) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <div id="main-content">
      <Hero />
      <Stats />
      <Testimonials />
    </div>
  );
}
