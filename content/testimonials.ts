import type { Bilingual } from "@/content/profile";

export interface Testimonial {
  id: string;
  quote: Bilingual;
  name: string;
  role: Bilingual;
  /** True for illustrative sample content — not a real client. */
  isPlaceholder: boolean;
}

// No real client testimonials were provided. These are illustrative SAMPLE
// entries only, written to show how the section looks populated — they are
// NOT real client feedback and must not be presented as genuine. Each entry
// uses a non-identifying initials-style name rather than a realistic full
// name, and `isPlaceholder: true` keeps a "Sample" badge visible in the UI.
// Replace every entry with real, attributable client testimonials before
// this section ships publicly, and remove `isPlaceholder` once it's real.
export const testimonials: Testimonial[] = [
  {
    id: "sample-1",
    quote: {
      en: "Eya understood exactly what we wanted before we could explain it ourselves. Our living space finally feels like us.",
      fr: "Eya a compris exactement ce que nous voulions avant même que nous sachions l'exprimer. Notre espace de vie nous ressemble enfin.",
    },
    name: "S. B.",
    role: {
      en: "Sample — Residential project, Mahdia",
      fr: "Exemple — Projet résidentiel, Mahdia",
    },
    isPlaceholder: true,
  },
  {
    id: "sample-2",
    quote: {
      en: "Professional, precise, and full of ideas. The 3D renders matched the final result almost perfectly.",
      fr: "Professionnelle, précise et pleine d'idées. Les rendus 3D correspondaient presque parfaitement au résultat final.",
    },
    name: "K. T.",
    role: {
      en: "Sample — Commercial fit-out, Monastir",
      fr: "Exemple — Aménagement commercial, Monastir",
    },
    isPlaceholder: true,
  },
  {
    id: "sample-3",
    quote: {
      en: "She managed every detail of the site supervision so we didn't have to. Delivered on time and on budget.",
      fr: "Elle a géré chaque détail du suivi de chantier pour que nous n'ayons pas à le faire. Livré dans les délais et le budget prévus.",
    },
    name: "N. A.",
    role: {
      en: "Sample — Interior renovation, Sousse",
      fr: "Exemple — Rénovation intérieure, Sousse",
    },
    isPlaceholder: true,
  },
];
