import { getTranslations } from "next-intl/server";
import { profile } from "@/content/profile";

export async function SiteFooter() {
  const t = await getTranslations("footer");
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border/60">
      <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-10 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
        <p>
          © {year} {profile.name} — {t("rights")}
        </p>
        <p>{t("madeWith")}</p>
      </div>
    </footer>
  );
}
