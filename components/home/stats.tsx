import { Users, Layers } from "lucide-react";
import { useTranslations } from "next-intl";

const stats = [
  { value: "20+", key: "statsClients", Icon: Users },
  { value: "32+", key: "statsProjects", Icon: Layers },
] as const;

export function Stats() {
  const t = useTranslations("home");

  return (
    <section className="relative overflow-hidden border-y border-border bg-muted/30">
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[linear-gradient(to_right,var(--border)_1px,transparent_1px),linear-gradient(to_bottom,var(--border)_1px,transparent_1px)] bg-[size:64px_64px] opacity-40"
      />

      <div className="relative mx-auto grid max-w-6xl grid-cols-1 divide-y divide-border sm:grid-cols-2 sm:divide-x sm:divide-y-0">
        {stats.map(({ value, key, Icon }, index) => (
          <div
            key={key}
            style={{ animationDelay: `${index * 120}ms` }}
            className="flex flex-col items-center gap-4 px-4 py-16 text-center opacity-0 [animation:fade-up_0.6s_ease-out_forwards] sm:px-6 lg:px-8"
          >
            <span className="flex size-12 items-center justify-center rounded-full border border-accent/30 bg-accent/10 text-accent">
              <Icon className="size-5" aria-hidden="true" />
            </span>
            <p className="text-6xl text-accent sm:text-7xl">{value}</p>
            <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground">
              {t(key)}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
