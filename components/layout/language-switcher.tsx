"use client";

import { useLocale, useTranslations } from "next-intl";
import { usePathname, useRouter } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";
import { useParams } from "next/navigation";
import { Button } from "@/components/ui/button";

const localeLabels: Record<(typeof routing.locales)[number], string> = {
  en: "EN",
  fr: "FR",
};

export function LanguageSwitcher() {
  const t = useTranslations("nav");
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const params = useParams();

  return (
    <div
      role="group"
      aria-label={t("languageSwitcherLabel")}
      className="flex items-center gap-1"
    >
      {routing.locales.map((cur) => (
        <Button
          key={cur}
          variant={cur === locale ? "default" : "ghost"}
          size="sm"
          aria-current={cur === locale ? "true" : undefined}
          onClick={() =>
            router.replace(
              // @ts-expect-error -- pathname is dynamic across routes
              { pathname, params },
              { locale: cur },
            )
          }
        >
          {localeLabels[cur]}
        </Button>
      ))}
    </div>
  );
}
