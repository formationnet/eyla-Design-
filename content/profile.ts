// Extracted from content/resume.pdf. Updated 2026-10-07 from a newer 8-page
// "CV & Portfolio" document (apercu-portfolio.pdf) — the most detailed and
// current source so far. It confirmed and corrected several dates from the
// previous single-page CV, and added: a Master's degree in progress, two
// new jobs (EYLA Design, and a promotion at Studio 212), a dedicated
// Teaching & Mentoring history, two competition awards, and a Behance link.
// Only information present in a resume is used; resumes are in French —
// English copy is translated.
//
// Two fields are explicit approximations, flagged inline:
// - `languages[].level`: the original source shows proficiency as unlabeled
//   graphic bars (no text level like "B2"/"native"), so levels here are a
//   reasonable reading of relative bar length, not a certified level.
// - `contact.instagram`: constructed from the handle text shown on an
//   earlier CV ("eyachebbeh"); `contact.facebook` only had a display name,
//   no handle/URL, so it is kept as plain text — do not link it without
//   confirming the URL.
//
// Note: the user separately dictated the bio line mentioning "Renova
// Design" — this newer resume names the same kind of venture "Renovation
// Design" (an in-progress furniture-restoration platform born from the 1st
// prize win below). The bio was kept as the user dictated it; flagging the
// naming discrepancy here rather than silently changing user-provided copy.

export type Locale = "en" | "fr";

export interface Bilingual {
  en: string;
  fr: string;
}

export interface ContactInfo {
  email: string;
  phone: string;
  linkedin: string;
  instagram: string;
  facebookName: string;
  behance: string;
  address: string;
}

export interface ProfilePhoto {
  src: string;
  alt: Bilingual;
}

export interface EducationEntry {
  degree: Bilingual;
  field: Bilingual;
  school: string;
  location: string;
  period: string;
  honors?: Bilingual;
}

export interface ExperienceEntry {
  role: Bilingual;
  company: string;
  location: string;
  period: string;
  bullets: Bilingual[];
}

export interface CertificationEntry {
  name: string;
  issuer: string;
  year: string;
}

export interface LanguageEntry {
  language: Bilingual;
  level: Bilingual;
}

export interface ActivityEntry {
  title: Bilingual;
  org?: string;
  period: string;
}

export interface AchievementEntry {
  title: Bilingual;
  detail: Bilingual;
  date: string;
  image?: { src: string; alt: Bilingual };
}

export interface PressEntry {
  title: Bilingual;
  outlet: string;
  date: string;
  image: { src: string; alt: Bilingual };
}

export interface Profile {
  name: string;
  title: Bilingual;
  bio: Bilingual;
  quote: Bilingual;
  photo: ProfilePhoto;
  contact: ContactInfo;
  drivingLicense: Bilingual;
  education: EducationEntry[];
  experience: ExperienceEntry[];
  teaching: ExperienceEntry[];
  software: string[];
  languages: LanguageEntry[];
  certifications: CertificationEntry[];
  activities: ActivityEntry[];
  achievements: AchievementEntry[];
  press: PressEntry[];
}

export const profile: Profile = {
  name: "Eya CHEBBAH",
  title: {
    en: "Interior Designer",
    fr: "Designer d'intérieur",
  },
  bio: {
    en: "Interior Designer | Space Designer | Founder of EYLA Design | Entrepreneurship Mentor | Founder of Renova Design",
    fr: "Designer d'intérieur | Designer d'espace | Fondatrice d'EYLA Design | Mentor en entrepreneuriat | Fondatrice de Renova Design",
  },
  quote: {
    en: "Challenge yourself to change yourself",
    fr: "Challenge yourself to change yourself",
  },
  photo: {
    src: "/images/profile.png",
    alt: {
      en: "Portrait of Eya Chebbah",
      fr: "Portrait d'Eya Chebbah",
    },
  },
  contact: {
    email: "ayachebbah@gmail.com",
    phone: "+216 53 028 584",
    linkedin: "https://linkedin.com/in/eya-chebbah",
    instagram: "https://instagram.com/eyachebbeh",
    facebookName: "Eya chebbah",
    behance: "https://behance.net/eyachebbah",
    address: "Rue de la République, Ezzahra - Mahdia",
  },
  drivingLicense: {
    en: "Driving license — Category B",
    fr: "Permis de conduire — Catégorie B",
  },
  education: [
    {
      degree: {
        en: "Research Master's in Design",
        fr: "Master de recherche en design",
      },
      field: { en: "Design", fr: "Design" },
      school: "Institut Supérieur des Arts et Métiers de Mahdia (ISAMM)",
      location: "Mahdia, Tunisie",
      period: "2025 – Present",
    },
    {
      degree: {
        en: "Bachelor's degree in Interior Architecture",
        fr: "Licence appliquée en Architecture d'intérieur",
      },
      field: { en: "Interior Architecture", fr: "Architecture d'intérieur" },
      school: "Institut Supérieur des Arts et Métiers de Mahdia (ISAMM)",
      location: "Mahdia, Tunisie",
      period: "2021 – 2024",
      honors: {
        en: "Top of cohort (major de la promotion)",
        fr: "Major de la promotion",
      },
    },
    {
      degree: {
        en: "Bachelor's degree in Chemistry",
        fr: "Licence fondamentale en Chimie",
      },
      field: {
        en: "Senior Chemistry Technician",
        fr: "Technicienne supérieure en Chimie",
      },
      school: "Faculté des Sciences de Monastir",
      location: "Monastir, Tunisie",
      period: "2015 – 2018",
      honors: {
        en: "Good standing (mention assez bien)",
        fr: "Mention assez bien",
      },
    },
    {
      degree: {
        en: "Baccalauréat, Experimental Sciences",
        fr: "Baccalauréat sciences expérimentales",
      },
      field: { en: "Experimental Sciences", fr: "Sciences expérimentales" },
      school: "Lycée Taher Sfar Mahdia",
      location: "Mahdia, Tunisie",
      period: "2014 – 2015",
      honors: {
        en: "Good standing (mention assez bien)",
        fr: "Mention assez bien",
      },
    },
  ],
  experience: [
    {
      role: {
        en: "Interior Designer & Founder",
        fr: "Designer d'intérieur et Fondatrice",
      },
      company: "EYLA Design",
      location: "Mahdia, Tunisie",
      period: "2024 – Present",
      bullets: [],
    },
    {
      role: {
        en: "Interior Architect",
        fr: "Architecte d'intérieur",
      },
      company: "Cabinet d'architecture d'intérieur Studio 212",
      location: "Tunisie",
      period: "Sep 2024 – Feb 2025",
      bullets: [],
    },
    {
      role: {
        en: "Intern — Graduation Project",
        fr: "Stagiaire — Projet de fin d'études",
      },
      company: "Cabinet d'architecture d'intérieur Studio 212",
      location: "Tunisie",
      period: "Jan 2024 – Sep 2024",
      bullets: [
        {
          en: "Completed the final-year internship closing the Interior Architecture degree.",
          fr: "Réalisation du stage de fin d'études clôturant la licence en architecture d'intérieur.",
        },
      ],
    },
    {
      role: {
        en: "Interior Architecture Intern — 3D Design",
        fr: "Stagiaire en architecture d'intérieur — conception tridimensionnelle",
      },
      company: "Cabinet d'architecture AD \"Asma Dermech\"",
      location: "Tunisie",
      period: "Jul 2023",
      bullets: [
        {
          en: "Worked on three-dimensional (3D) design and modeling for interior architecture projects.",
          fr: "Conception tridimensionnelle (3D) pour des projets d'architecture d'intérieur.",
        },
      ],
    },
    {
      role: {
        en: "Interior Architecture Intern — 2D Design",
        fr: "Stagiaire en architecture d'intérieur — conception bidimensionnelle",
      },
      company: "Cabinet d'architecture d'intérieur \"Mouna Hamza\"",
      location: "Mahdia, Tunisie",
      period: "Jun 2023",
      bullets: [
        {
          en: "Worked on two-dimensional (2D) drafting for interior architecture projects.",
          fr: "Conception bidimensionnelle (2D) pour des projets d'architecture d'intérieur.",
        },
      ],
    },
  ],
  teaching: [
    {
      role: { en: "Mentoring", fr: "Mentoring" },
      company: "Institut Supérieur des Arts et Métiers de Mahdia (ISAMM)",
      location: "Mahdia, Tunisie",
      period: "Jan 2026 – May 2026",
      bullets: [],
    },
    {
      role: { en: "Mentoring", fr: "Mentoring" },
      company: "Institut Supérieur des Arts et Métiers de Mahdia (ISAMM)",
      location: "Mahdia, Tunisie",
      period: "Jan 2025 – May 2025",
      bullets: [],
    },
    {
      role: { en: "Mentoring", fr: "Mentoring" },
      company: "École préparatoire de Monastir",
      location: "Monastir, Tunisie",
      period: "Jan 2024 – May 2024",
      bullets: [],
    },
    {
      role: {
        en: "Physics–Chemistry Teacher (middle school)",
        fr: "Enseignante de physique-chimie (niveau collège)",
      },
      company: "Skill's Up Academy",
      location: "Tunisie",
      period: "Jan 2022 – Jun 2024",
      bullets: [],
    },
  ],
  software: [
    "AutoCAD",
    "3ds Max",
    "SketchUp",
    "V-Ray",
    "Corona Renderer",
    "Adobe Photoshop",
    "Adobe Illustrator",
    "Canva",
  ],
  languages: [
    {
      language: { en: "Arabic", fr: "Arabe" },
      level: { en: "Native", fr: "Langue maternelle" },
    },
    {
      language: { en: "French", fr: "Français" },
      level: { en: "Fluent", fr: "Courant" },
    },
    {
      language: { en: "English", fr: "Anglais" },
      level: { en: "Intermediate", fr: "Intermédiaire" },
    },
  ],
  certifications: [
    {
      name: "CEFE — Enterprise creation & entrepreneurship training",
      issuer: "Centre Entreprendre Mahdia",
      year: "2019",
    },
    {
      name: "Commercial feasibility study training",
      issuer: "Centre d'affaires Mahdia",
      year: "2019",
    },
    {
      name: "Train-the-trainer program",
      issuer: "Méditerranéen Global Training",
      year: "2019",
    },
    {
      name: "Business Model Canvas (BMC) training",
      issuer: "Université de Monastir",
      year: "2023",
    },
    {
      name: "Mentoring program",
      issuer: "Université de Monastir / TUIcare Fondation / Mentor Arabia",
      year: "2023",
    },
  ],
  activities: [
    {
      title: {
        en: "President, ATD ISAMM Mahdia",
        fr: "Présidente, AT ISAMM Mahdia",
      },
      period: "2024",
    },
    {
      title: {
        en: "Student entrepreneur — Innovator status",
        fr: "Étudiante-entrepreneure — Statut innovateur",
      },
      period: "2024 – 2025",
    },
    {
      title: {
        en: "Student entrepreneur — Initiator status",
        fr: "Étudiante-entrepreneure — Statut initiateur",
      },
      period: "2023 – 2024",
    },
  ],
  achievements: [
    {
      title: {
        en: "1st prize — International competition",
        fr: "1er prix — Concours international",
      },
      detail: {
        en: "Prize with funding and mentoring support, in partnership with Université de Monastir, Mentor Arabia, and TUI Care Foundation. Led to the creation of a furniture-restoration platform (project in progress).",
        fr: "Prix assorti d'un financement et d'un suivi, en partenariat avec l'Université de Monastir, Mentor Arabia et TUI Care Foundation. A donné naissance à une plateforme de rénovation de meubles artisanale (projet en cours de réalisation).",
      },
      date: "Jan 2025",
      image: {
        src: "/images/achievements/prize-tui-futureshapers.jpg",
        alt: {
          en: "Eya Chebbah receiving the TUI Futureshapers Rising Entrepreneur Award, a €5,000 grant",
          fr: "Eya Chebbah recevant le TUI Futureshapers Rising Entrepreneur Award, une bourse de 5 000 €",
        },
      },
    },
    {
      title: {
        en: "2nd national prize — Hackathon'CIAL",
        fr: "2e prix national — Hackathon'CIAL",
      },
      detail: {
        en: "Won with a team of students from Université de Monastir.",
        fr: "Remporté avec une équipe d'étudiants de l'Université de Monastir.",
      },
      date: "Oct 2023",
      image: {
        src: "/images/achievements/prize-hackathon-cial.jpg",
        alt: {
          en: "Award ceremony for the Hackathon'CIAL and Créax competition, Hammamet, October 2023",
          fr: "Cérémonie de remise des prix Hackathon'CIAL et Créax, Hammamet, octobre 2023",
        },
      },
    },
  ],
  press: [
    {
      title: {
        en: "Radio interview — Monastir",
        fr: "Intervention à Radio Monastir",
      },
      outlet: "Radio Monastir",
      date: "Jan 2025",
      image: {
        src: "/images/press/radio-monastir.jpg",
        alt: {
          en: "Eya Chebbah at a Radio Monastir interview presenting her projects and academic path",
          fr: "Eya Chebbah lors d'une intervention à Radio Monastir, présentant ses projets et son parcours universitaire",
        },
      },
    },
    {
      title: {
        en: "Student-entrepreneur status awarded",
        fr: "Obtention du statut étudiant entrepreneur",
      },
      outlet: "Pôle Étudiant Entrepreneur – Université de Monastir (PEEM)",
      date: "Jun 2024",
      image: {
        src: "/images/press/peem-certificate.jpg",
        alt: {
          en: "Certificate ceremony for the student-entrepreneur status at PEEM, Université de Monastir",
          fr: "Cérémonie de remise du statut étudiant entrepreneur au PEEM, Université de Monastir",
        },
      },
    },
    {
      title: {
        en: "TUI Futureshapers mentoring certificate ceremony",
        fr: "Remise des certificats de mentoring — TUI Futureshapers",
      },
      outlet: "TUI Care Foundation · Mentor Arabia · Université de Monastir",
      date: "2025",
      image: {
        src: "/images/press/tui-mentoring-ceremony.jpg",
        alt: {
          en: "Group photo at the TUI Futureshapers mentoring certificate ceremony",
          fr: "Photo de groupe lors de la cérémonie de remise des certificats de mentoring TUI Futureshapers",
        },
      },
    },
  ],
};
