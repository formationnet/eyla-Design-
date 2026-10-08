import Image from "next/image";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { Button } from "@/components/ui/button";
import { profile } from "@/content/profile";
import heroImage from "@/assets/images/hero.png";

export function Hero() {
  const t = useTranslations("home");

  return (
    <section className="relative flex min-h-[85vh] items-end overflow-hidden bg-primary">
      <Image
        src={heroImage}
        alt={t("heroImageAlt")}
        fill
        priority
        placeholder="blur"
        sizes="100vw"
        className="object-cover"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/10"
      />

      <div className="relative mx-auto w-full max-w-6xl px-4 pb-16 pt-32 text-white sm:px-6 lg:px-8">
        <p className="text-sm uppercase tracking-[0.2em] text-white/80">
          {t("tagline")}
        </p>
        <h1 className="mt-4 max-w-2xl text-5xl sm:text-7xl">{profile.name}</h1>
        <div className="mt-8">
          <Button asChild size="lg">
            <Link href="/contact">{t("contactCta")}</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
