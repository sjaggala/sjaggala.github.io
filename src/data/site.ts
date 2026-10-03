/* ============================================================
   Site-wide content + config. Edit copy here, not in JSX.
   ============================================================ */

export const site = {
  name: "Sravan Jaggala",
  wordmark: "sjaggala.github.io",
  initials: "SJ",
  role: "BI & Analytics Engineer",
  badge: "BI & Analytics Engineer · 7 years shipping Power BI",
  // Hero headline (two lines) + emoji
  heroLine1: "Hi, I'm Sravan",
  heroLine2: "I build BI that answers back.",
  // One-liner shown under the headline in the hero
  positioning:
    "Business Intelligence engineer and architect with seven years in enterprise Power BI: the models underneath, the reports on top, and the governance that keeps the numbers trustworthy. Lately I've been pulling AI into the work, conversational and generative BI.",
  availability: "Available for full-time roles",
  location: "Chicago, IL · CT (UTC-6)", // city + timezone (per Sravan 2026-09-25); no street address / phone
  email: "sravan.jaggala@outlook.com",
  links: {
    linkedin: "https://www.linkedin.com/in/sravan-jaggala/",
    github: "https://github.com/sjaggala",
  },
  // Résumé PDF lives in /public once generated; button stays disabled until then.
  resumeLabel: "Download résumé",
  resume: {
    href: "/Sravan-Jaggala-Resume.pdf",
    ready: true,
  },
  headshot: "/headshot.png",
} as const;

/* Proof stats for the hero strip */
export const stats: { value: string; label: string }[] = [
  { value: "7+", label: "Years in BI & analytics" },
  { value: "6", label: "Enterprise clients served" },
  { value: "2.5h → 7m", label: "Refresh time, rebuilt" },
  { value: "80%", label: "Less manual deployment (CI/CD)" },
];

/* The three pillars of what Sravan does - frames the BI → AI story */
export const focusAreas: {
  title: string;
  blurb: string;
  points: string[];
}[] = [
  {
    title: "Enterprise BI & Governance",
    blurb:
      "Centralized semantic models, DAX, and governed reporting that scale across an organization.",
    points: [
      "Star-schema semantic models, RLS, incremental refresh",
      "Power Query / ETL, dataflows, reusable entities",
      "Migrations from Oracle BIEE, QlikView, SSRS & Excel",
    ],
  },
  {
    title: "Custom & Embedded Analytics",
    blurb:
      "Analytics that live inside products and pipelines, not just in a report tab.",
    points: [
      "Custom Power BI visuals in React & TypeScript",
      "Embedded reports via Azure app registrations & REST APIs",
      "CI/CD for Power BI with Azure DevOps & PowerShell",
    ],
  },
  {
    title: "Generative & Conversational BI",
    blurb:
      "Bringing natural-language and AI-driven interfaces to business data.",
    points: [
      "Power BI Q&A / natural-language models in production",
      "Prompt-driven visualization interfaces",
      "UIC MS in Business Analytics (STEM): ML, DBMS, optimization",
    ],
  },
];

/* Featured work teasers for the Home page (full detail on their own pages later) */
export const featured: {
  key: string;
  name: string;
  kind: string;
  blurb: string;
  tags: string[];
  status: "live" | "building" | "gallery";
  statusLabel: string;
  liveHref?: string;
}[] = [
  {
    key: "arcus",
    name: "Arcus Planner",
    kind: "Flagship product",
    blurb:
      "A full productivity suite (tasks & Kanban, Gantt planning, calendar, journaling, focus board, and real-time sharing), built end to end with cloud sync.",
    tags: ["React-style SPA", "Firebase Auth", "Firestore", "Realtime sync"],
    status: "live",
    statusLabel: "Live",
    liveHref: "https://arcus-planner.web.app",
  },
  {
    key: "bi-showcase",
    name: "Power BI Showcase",
    kind: "Dashboard gallery",
    blurb:
      "A gallery of enterprise dashboards rebuilt with synthetic data across retail, manufacturing, finance and more, each opening an embedded, interactive report.",
    tags: ["Power BI", "DAX", "Embedded", "Data modeling"],
    status: "gallery",
    statusLabel: "In progress",
  },
];
