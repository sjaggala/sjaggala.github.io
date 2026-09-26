/* Work — projects Sravan has built / is building. Edit copy here. */
export type Project = {
  id: string;
  name: string;
  domain: string;
  href: string | null;
  status?: string;          // small badge, e.g. "Live", "In progress"
  visual: "arcus" | "dashdrop" | "report";
  description: string;
  role: string;
  stack: string[];
  linkLabel: string;
  locked?: boolean;         // link not active yet
};

export const work: {
  eyebrow: string;
  heading: string;
  subhead: string;
  flagship: Project;
  more: Project[];
} = {
  eyebrow: "Work",
  heading: "Things I've built.",
  subhead:
    "A product shipped end to end, a platform in progress, and a gallery of enterprise dashboards — poke around.",
  flagship: {
    id: "arcus",
    name: "Arcus Planner",
    domain: "arcus-planner.web.app",
    href: "https://arcus-planner.web.app",
    status: "Live",
    visual: "arcus",
    description:
      "A full personal-productivity suite — dashboard, tasks (Kanban + list), a Gantt-style planner, calendar, journaling with live transliteration, a focus board, and real-time sharing between accounts.",
    role: "Built end to end — a pure client-side app with Firebase Auth and Firestore cloud sync, offline-first on localStorage, deployed on Firebase Hosting.",
    stack: [
      "JavaScript",
      "HTML",
      "CSS",
      "Firebase Auth",
      "Firestore",
      "Firebase Hosting",
      "SVG",
    ],
    linkLabel: "Open live demo",
  },
  more: [
    {
      id: "dashdrop",
      name: "DashDrop",
      domain: "localhost:3000",
      href: null,
      status: "In progress",
      visual: "dashdrop",
      description:
        "Drop in an Excel or CSV file and get a clean, auto-generated dashboard back — with light customization on top. The BI-plus-software-plus-AI idea I'm prototyping now.",
      role: "Planned: a typed React front end, a charting layer, client-side spreadsheet parsing, and an AI assist that picks the right visuals for your data.",
      stack: ["React", "TypeScript", "Charting", "XLSX / CSV", "AI assist"],
      linkLabel: "In development",
      locked: true,
    },
    {
      id: "gallery",
      name: "Power BI Gallery",
      domain: "power-bi-gallery",
      href: "/dashboards",
      status: "Gallery",
      visual: "report",
      description:
        "Enterprise reports I built for clients, rebuilt with synthetic data — retail, manufacturing, finance and more. Each tile opens a full, interactive Power BI report.",
      role: "Power BI — semantic modeling, DAX, custom visuals, embedded reports.",
      stack: ["Power BI", "DAX", "Power Query", "Embedded"],
      linkLabel: "Explore the gallery",
      locked: true,
    },
  ],
};
