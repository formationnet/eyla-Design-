import { Briefcase, GraduationCap } from "lucide-react";
import { useLocale } from "next-intl";
import type { ExperienceEntry, EducationEntry } from "@/content/profile";

export function Timeline({
  items,
}: {
  items: (ExperienceEntry | EducationEntry)[];
}) {
  const locale = useLocale() as "en" | "fr";

  return (
    <ol className="space-y-6">
      {items.map((item, index) => {
        const isExperience = "company" in item;
        const title = isExperience ? item.role[locale] : item.degree[locale];
        const subtitle = isExperience ? item.company : item.school;
        const Icon = isExperience ? Briefcase : GraduationCap;

        return (
          <li
            key={index}
            className="group relative rounded-lg border border-border bg-card p-6 transition-colors hover:border-accent/40 sm:pl-20"
          >
            <span className="absolute left-6 top-6 hidden size-10 shrink-0 items-center justify-center rounded-full border border-accent/30 bg-accent/10 text-accent sm:flex">
              <Icon className="size-4" aria-hidden="true" />
            </span>

            <div className="flex flex-wrap items-center gap-3 sm:hidden">
              <span className="flex size-8 shrink-0 items-center justify-center rounded-full border border-accent/30 bg-accent/10 text-accent">
                <Icon className="size-3.5" aria-hidden="true" />
              </span>
              <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
                {item.period}
              </p>
            </div>

            <p className="mt-3 hidden text-xs font-medium uppercase tracking-wide text-muted-foreground sm:block">
              {item.period}
            </p>
            <h3 className="mt-2 text-xl">{title}</h3>
            <p className="text-muted-foreground">
              {subtitle} — {item.location}
            </p>
            {isExperience && item.bullets.length > 0 && (
              <ul className="mt-4 space-y-2 text-sm leading-relaxed text-muted-foreground">
                {item.bullets.map((bullet, i) => (
                  <li key={i} className="flex gap-2">
                    <span aria-hidden className="mt-2 size-1 shrink-0 rounded-full bg-accent" />
                    <span>{bullet[locale]}</span>
                  </li>
                ))}
              </ul>
            )}
            {!isExperience && item.honors && (
              <p className="mt-3 text-sm text-muted-foreground">
                {item.honors[locale]}
              </p>
            )}
          </li>
        );
      })}
    </ol>
  );
}
