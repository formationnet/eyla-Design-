import type { ReactNode } from "react";

export function PageHeader({
  eyebrow,
  title,
  subtitle,
  actions,
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
  actions?: ReactNode;
}) {
  return (
    <div className="flex flex-wrap items-end justify-between gap-6 border-b border-border pb-8">
      <div>
        <p className="text-sm uppercase tracking-[0.2em] text-accent">
          {eyebrow}
        </p>
        <h1 className="mt-3 text-4xl sm:text-5xl">{title}</h1>
        {subtitle && (
          <p className="mt-3 max-w-xl text-muted-foreground">{subtitle}</p>
        )}
      </div>
      {actions && <div className="flex flex-wrap gap-3">{actions}</div>}
    </div>
  );
}
