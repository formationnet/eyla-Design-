import { ImageResponse } from "next/og";
import { getTranslations } from "next-intl/server";
import { profile } from "@/content/profile";
import { routing } from "@/i18n/routing";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function OpengraphImage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "home" });

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          backgroundColor: "#18181b",
          color: "#fafafa",
          padding: "80px",
        }}
      >
        <div style={{ fontSize: 28, letterSpacing: 4, color: "#a1a1aa" }}>
          {t("tagline").toUpperCase()}
        </div>
        <div style={{ fontSize: 96, marginTop: 24, display: "flex" }}>
          {profile.name}
        </div>
        <div
          style={{
            marginTop: 40,
            width: 120,
            height: 6,
            backgroundColor: "#f59e0b",
          }}
        />
      </div>
    ),
    { ...size },
  );
}
