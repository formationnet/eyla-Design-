import { Quote } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";
import { Badge } from "@/components/ui/badge";
import { testimonials } from "@/content/testimonials";

function initials(name: string) {
  return name
    .split(/[\s.]+/)
    .filter(Boolean)
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

export function Testimonials() {
  const locale = useLocale() as "en" | "fr";
  const t = useTranslations("home");

  return (
    <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
      <div className="text-center">
        <p className="text-sm uppercase tracking-[0.2em] text-accent">
          {t("testimonialsEyebrow")}
        </p>
        <h2 className="mt-3 text-3xl sm:text-4xl">{t("testimonialsTitle")}</h2>
      </div>

      <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {testimonials.map((item, index) => (
          <div
            key={item.id}
            style={{ animationDelay: `${index * 120}ms` }}
            className="group relative flex flex-col gap-6 rounded-lg border border-border bg-card p-6 opacity-0 shadow-sm [animation:fade-up_0.6s_ease-out_forwards] hover:border-accent/40 hover:shadow-md"
          >
            {item.isPlaceholder && (
              <Badge className="absolute right-4 top-4" variant="secondary">
                {t("testimonialsSampleBadge")}
              </Badge>
            )}

            <Quote
              aria-hidden="true"
              className="size-8 text-accent/25 transition-colors group-hover:text-accent/40"
              strokeWidth={1.5}
            />

            <p className="flex-1 leading-relaxed text-muted-foreground">
              {item.quote[locale]}
            </p>

            <div className="flex items-center gap-3 border-t border-border pt-4">
              <span className="flex size-10 shrink-0 items-center justify-center rounded-full border border-accent/30 bg-accent/10 text-sm font-medium text-accent">
                {initials(item.name)}
              </span>
              <div>
                <p className="font-medium">{item.name}</p>
                <p className="text-sm text-muted-foreground">
                  {item.role[locale]}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
