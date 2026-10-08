import type { ReactNode } from "react";
import type { LucideIcon } from "lucide-react";

export function IconListItem({
  icon: Icon,
  title,
  subtitle,
}: {
  icon: LucideIcon;
  title: ReactNode;
  subtitle?: ReactNode;
}) {
  return (
    <li className="flex items-start gap-3">
      <span className="mt-0.5 flex size-8 shrink-0 items-center justify-center rounded-full border border-accent/30 bg-accent/10 text-accent">
        <Icon className="size-3.5" aria-hidden="true" />
      </span>
      <div className="text-sm">
        <p>{title}</p>
        {subtitle && <p className="text-muted-foreground">{subtitle}</p>}
      </div>
    </li>
  );
}

export function LanguageBadge({ code }: { code: string }) {
  return (
    <span className="flex size-8 shrink-0 items-center justify-center rounded-full border border-accent/30 bg-accent/10 text-xs font-medium text-accent">
      {code}
    </span>
  );
}
