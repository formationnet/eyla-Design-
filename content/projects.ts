import type { Bilingual } from "@/content/profile";

export interface Project {
  id: string;
  title: Bilingual;
  category: Bilingual;
  location?: string;
  year?: string;
  description: Bilingual;
  /** Path under /public, e.g. "/projects/villa-mahdia/cover.jpg". */
  image: string;
  imageAlt: Bilingual;
}

// Add projects here — the /projects page renders this list automatically.
// While it's empty, a "coming soon" message is shown instead.
export const projects: Project[] = [];
