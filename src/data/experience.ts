/* Experience section content. Facts follow the resolved résumé facts in CLAUDE.md:
   grad Dec 2026; Mouri = "Senior Technical Consultant" (functioned as Associate
   Manager in the final year); Mouri Apr 2023–Dec 2025 (never "Present");
   refresh metric = 2.5h → 7min. Voice = plain, confident, results-oriented. */
export type Role = {
  company: string;
  title: string;
  period: string;
  duration: string; // e.g. "2 yrs 8 mos" — shown next to the period like the reference
  location: string;
  logo?: string; // company logo (left column, like the reference); else wordmark fallback
  logoH?: number; // per-logo height override (px) when a mark reads optically off
  mono?: string; // legacy initials — unused now that we render logos/wordmarks
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
    "Report developer, then advisor, then delivery lead. Here's the honest summary — the full version is in the résumé.",
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
        "Functioned as an Associate Manager in my final year — led a team of five and owned end-to-end delivery of enterprise Power BI solutions.",
        "Built Power BI CI/CD pipelines on Azure DevOps with PowerShell and the REST APIs, cutting manual deployment effort by ~80%.",
        "Re-architected centralized semantic models with row-level security and incremental refresh — dataset refreshes fell from 2.5 hours to 7 minutes.",
        "Trained Power BI Q&A models and built prompt-driven visualization interfaces with AI/ML engineers, making reports answerable in plain English.",
        "Developed custom Power BI visuals in React & TypeScript, deployed across the organization.",
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
        "Embedded Power BI into external Azure applications using the REST APIs and app registrations.",
        "Partnered with .NET developers to ship secure, integrated analytics.",
      ],
    },
    {
      company: "HCL Technologies",
      title: "Senior Software Engineer",
      period: "Dec 2020 – Jan 2022",
      duration: "1 yr 1 mo",
      location: "Haryana, India",
      logo: "/companies/hcltech-logo.svg",
      logoH: 18, // hcltech wordmark reads large — trim it down to match the row
      points: [
        "Migrated legacy Oracle BIEE reporting to Power BI and trained business teams on the new workflows.",
        "Built governance dashboards with the Power BI REST APIs, automated via PowerShell.",
      ],
    },
    {
      company: "Microsoft",
      title: "Technical Advisor",
      period: "Apr 2019 – Sep 2020",
      duration: "1 yr 5 mos",
      location: "Hyderabad, India",
      logo: "/clients/microsoft.svg",
      logoH: 22, // Microsoft lockup reads large — trim slightly
      via: "LTIMindtree",
      points: [
        "Led a five-engineer Power BI support team, resolving advanced development and advisory cases.",
        "Worked directly with Microsoft product teams on complex issues and feature feedback.",
      ],
    },
    {
      company: "Ness Technologies",
      title: "Software Engineer Trainee",
      period: "Feb 2016 – Jun 2017",
      duration: "1 yr 4 mos",
      location: "Bangalore, India",
      logo: "/clients/ness-technologies-dark.svg",
      logoH: 46, // compact round mark reads small — bump it up to match the row
      points: [
        "Developed and enhanced Power BI reports alongside senior engineers — where the BI career started.",
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
