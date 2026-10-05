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
  client?: string; // client served while employed via a staffing partner
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
  community: { org: string; role: string; period: string; href: string; note: string; logo?: string };
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
        "Led a five-person analytics team and, in my final year, took on Associate Manager responsibilities, owning end-to-end Power BI delivery while remaining hands-on in the data models.",
        "Designed Power BI CI/CD pipelines on Azure DevOps using PowerShell and the REST APIs, reducing manual deployment effort by approximately 80%.",
        "Optimized the central semantic models by pushing transformation logic back to the source through query folding and introducing incremental refresh; dataset refresh times fell from 2.5 hours to 7 minutes.",
        "Partnered with AI/ML engineers to build natural-language Q&A experiences, and used Copilot in Power BI to generate reports, pages, and visuals from prompts, letting stakeholders work with data in plain language.",
        "Developed custom Power BI visuals in React and TypeScript, deployed organization-wide.",
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
        "Embedded Power BI reports into external Azure applications using the REST APIs and app registrations, delivering analytics directly within client-facing products.",
        "Collaborated with .NET developers to ensure the integration was secure and seamless.",
      ],
    },
    {
      company: "HCL Technologies",
      title: "Senior Software Engineer",
      period: "Dec 2020 – Jan 2022",
      duration: "1 yr 1 mo",
      location: "Haryana, India",
      logo: "/companies/hcltech-logo.svg",
      logoH: 15, // hcltech wordmark reads large - trim it down to match the row
      points: [
        "Migrated a legacy Oracle BIEE reporting estate to Power BI, guiding business teams through the transition to the new workflows.",
        "Built governance dashboards on the Power BI REST APIs, with routine updates automated through PowerShell.",
      ],
    },
    {
      company: "LTI Mindtree",
      title: "Technical Advisor",
      client: "Microsoft",
      period: "Apr 2019 – Sep 2020",
      duration: "1 yr 5 mos",
      location: "Hyderabad, India",
      logo: "/companies/LTM-Logo.svg",
      logoH: 16, // LTI Mindtree wordmark reads large at the tier height - trim to match the row
      points: [
        "Led a five-engineer Power BI support and advisory team for Microsoft, resolving advanced development and configuration cases.",
        "Administered Power BI at the tenant level: workspaces, capacity, access control, and deployment pipelines.",
        "Configured and managed on-premises data gateways, handling data source connections, credential management, and scheduled refresh for secure hybrid connectivity.",
        "Worked directly with Microsoft product teams on complex technical issues and contributed field feedback to feature development.",
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
        "Developed and enhanced Power BI reports alongside senior engineers, the starting point of my BI career.",
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
  community: {
    org: "Microsoft Fabric Community",
    role: "Solution Specialist",
    period: "2022 – 2024",
    href: "https://community.fabric.microsoft.com/users/_sfrost/276096",
    note: "Answered analytics, data-modeling, and reporting questions from users worldwide, with 43 accepted solutions.",
    logo: "/tech/fabric-expo-icon.svg",
  },
};
