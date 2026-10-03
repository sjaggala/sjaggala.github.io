/* Experience section content. Facts follow the resolved résumé facts in CLAUDE.md:
   grad Dec 2026; Mouri = "Senior Technical Consultant" (functioned as Associate
   Manager in the final year); Mouri Apr 2023–Dec 2025 (never "Present");
   refresh metric = 2.5h → 7min. Voice = plain, confident, results-oriented. */
export type Role = {
  company: string;
  title: string;
  period: string;
  duration: string; // e.g. "2 yrs 8 mos" - shown next to the period like the reference
  location: string;
  logo?: string; // company logo (left column, like the reference); else wordmark fallback
  logoH?: number; // per-logo height override (px) when a mark reads optically off
  mono?: string; // legacy initials - unused now that we render logos/wordmarks
  via?: string; // staffing/partner arrangement, shown subtly
  current?: boolean;
  points: string[];
};

export type Education = {
  school: string;
  degree: string;
  period: string;
  note?: string;
  logo?: string; // school logo; else a monogram fallback
  mono?: string; // monogram initials when no logo yet
};

export type Award = { title: string; org: string; year: string };

export const experience: {
  eyebrow: string;
  heading: string;
  subhead: string;
  roles: Role[];
  education: Education[];
  awards: Award[];
} = {
  eyebrow: "Experience",
  heading: "Seven years of client-facing BI.",
  subhead:
    "Report developer, then advisor, then delivery lead. Here's the honest summary; the full version is in the résumé.",
  roles: [
    {
      company: "Mouri Tech",
      title: "Senior Technical Consultant",
      period: "Apr 2023 – Dec 2025",
      duration: "2 yrs 8 mos",
      location: "Hyderabad, India",
      logo: "/companies/MT-Home-Logo-1-1.png",
      current: true,
      points: [
        "Led a team of five and, in my last year, stepped into an Associate Manager role, owning Power BI delivery end to end while staying hands-on in the models myself.",
        "Deployments used to be a manual, error-prone slog. I built CI/CD pipelines on Azure DevOps with PowerShell and the REST APIs that cut that manual effort by about 80%.",
        "Rebuilt the central semantic models with row-level security and incremental refresh, dropping dataset refreshes from 2.5 hours to 7 minutes. Dashboards stopped being stale by the time anyone opened them.",
        "Worked with AI/ML engineers to train Power BI Q&A models and build prompt-driven interfaces, so people could ask a report a plain-English question instead of waiting on me for a new view.",
        "Built custom Power BI visuals in React and TypeScript that shipped across the whole organization.",
      ],
    },
    {
      company: "Blue Yonder",
      title: "Business Consultant",
      period: "Feb 2022 – Dec 2022",
      duration: "10 mos",
      location: "Hyderabad, India",
      logo: "/companies/blue-yonder-logo-blue.webp",
      points: [
        "Embedded Power BI reports into external-facing Azure apps using the REST APIs and app registrations, so analytics showed up where customers already were.",
        "Teamed up with .NET developers to keep it secure and properly integrated, not bolted on.",
      ],
    },
    {
      company: "HCL Technologies",
      title: "Senior Software Engineer",
      period: "Dec 2020 – Jan 2022",
      duration: "1 yr 1 mo",
      location: "Haryana, India",
      logo: "/companies/hcltech-logo.svg",
      logoH: 18, // hcltech wordmark reads large - trim it down to match the row
      points: [
        "Moved a legacy Oracle BIEE estate onto Power BI and walked the business teams through the new workflows. Migrations only stick if people come along.",
        "Built governance dashboards on the Power BI REST APIs and automated the upkeep with PowerShell.",
      ],
    },
    {
      company: "Microsoft",
      title: "Technical Advisor",
      period: "Apr 2019 – Sep 2020",
      duration: "1 yr 5 mos",
      location: "Hyderabad, India",
      logo: "/clients/microsoft.svg",
      logoH: 22, // Microsoft lockup reads large - trim slightly
      via: "LTIMindtree",
      points: [
        "Led a five-engineer team on Microsoft's toughest Power BI support and advisory cases, the ones escalated past the usual channels.",
        "Worked directly with Microsoft's product teams on the hardest issues, and fed real-world gaps back into the product.",
      ],
    },
    {
      company: "Ness Technologies",
      title: "Software Engineer Trainee",
      period: "Feb 2016 – Jun 2017",
      duration: "1 yr 4 mos",
      location: "Bangalore, India",
      logo: "/clients/ness-technologies-dark.svg",
      logoH: 46, // compact round mark reads small - bump it up to match the row
      points: [
        "Where it started: building and refining Power BI reports next to senior engineers, and getting hooked on the craft.",
      ],
    },
  ],
  education: [
    {
      school: "University of Illinois Chicago",
      degree: "M.S., Business Analytics",
      period: "Jan 2026 – Dec 2026",
      note: "STEM-designated · College of Business Administration",
      logo: "/schools/UIC.SVG",
    },
    {
      school: "GATES Institute of Technology",
      degree: "B.Tech, Computer Science & Engineering",
      period: "Graduated 2015",
      note: "Affiliated to JNTU Anantapur",
      logo: "/schools/jntua-emblem-logo.6563a949.png",
    },
  ],
  awards: [
    { title: "Employee of the Quarter", org: "Mouri Tech", year: "2025" },
    { title: "GEM & SPOT Awards", org: "Mouri Tech", year: "2024" },
    { title: "Top Innovator Award", org: "Blue Yonder", year: "2022" },
  ],
};
