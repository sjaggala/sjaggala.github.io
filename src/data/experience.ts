/* Experience section content. Titles follow the résumé versions in
   Resume/Final Version (role-descriptive, not official HR titles, per Sravan):
   Mouri = "Lead Analytics Engineer", etc. Current role = UIC Graduate Hourly
   (Feb 2026 - Present). Bullets show the DE/BI depth under the AI-lead hero.
   Voice = plain, confident, results-oriented. No em dashes. */
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
  heading: "Seven years behind enterprise analytics.",
  subhead:
    "Data and BI engineering across retail, manufacturing, finance, and supply chain. The short version is below; the full story is in the résumé.",
  roles: [
    {
      company: "University of Illinois Chicago",
      title: "Graduate Hourly, Admissions & Recruitment",
      period: "Feb 2026 – Present",
      duration: "Part-time",
      location: "Chicago, IL",
      logo: "/schools/UIC.SVG",
      logoH: 32,
      current: true,
      points: [
        "Build and maintain CRM queries, datasets, and Tableau dashboards from Slate admissions data, supporting daily recruitment operations for the College of Business Administration.",
      ],
    },
    {
      company: "Mouri Tech",
      title: "Lead Analytics Engineer",
      period: "Apr 2023 – Dec 2025",
      duration: "2 yrs 8 mos",
      location: "Hyderabad, India",
      logo: "/companies/MT-Home-Logo-1-1.png",
      points: [
        "Owned end-to-end dbt-fabric modeling across staging, conformed dimensions, and a gold star schema with Type 2 SCD, and built the reconciliation checks that gated every cutover, validated within 0.01% of source with zero post-cutover data-trust escalations.",
        "Tuned a six-billion-row inventory fact table with partitioning, V-Order, and OPTIMIZE, keeping Power BI and warehouse queries fast under load without triggering capacity throttling.",
        "Hand-rewrote Snowflake SQL and stored procedures into Fabric T-SQL and PySpark with no first-party translator, confirming semantic equivalence before every production promotion.",
        "Pushed transformation logic to the source through query folding and incremental refresh, cutting a client's dataset refresh from 2.5 hours to about 7 minutes.",
        "Built natural-language Q&A experiences and used Copilot in Power BI to generate reports, pages, and visuals from prompts, broadening self-service adoption alongside AI/ML engineers.",
        "Led teams of two to six engineers across concurrent engagements and, in the final year, functioned as an associate manager owning delivery direction end to end.",
      ],
    },
    {
      company: "Blue Yonder",
      title: "Analytics Engineer, Embedded Analytics",
      period: "Feb 2022 – Dec 2022",
      duration: "10 mos",
      location: "Hyderabad, India",
      logo: "/companies/blue-yonder-logo-blue.webp",
      points: [
        "Delivered a secure embedded-analytics experience by integrating Power BI into an external Azure-hosted application with .NET developers, using Azure app registrations and REST APIs to serve external users.",
        "Designed and built the Azure SQL warehouse tables and transformation logic behind the embedded datasets, and tuned them so customer-facing reports stayed responsive under load.",
        "Implemented multi-tenant row-level security and authored the reconciliation and data-quality tests that caught definition drift before it reached the embedded reports.",
      ],
    },
    {
      company: "HCL Technologies",
      title: "Senior Analytics Engineer",
      period: "Dec 2020 – Jan 2022",
      duration: "1 yr 1 mo",
      location: "Haryana, India",
      logo: "/companies/hcltech-logo.svg",
      logoH: 15, // hcltech wordmark reads large - trim it down to match the row
      points: [
        "Led a platform migration from Oracle to Snowflake, re-engineering the data models as tested, version-controlled dbt models across staging, intermediate, and mart layers.",
        "Implemented the Oracle-to-Snowflake schema and data-type conversions, resolving semantic traps like Oracle DATE's embedded time and empty-string-as-NULL so converted data matched source exactly.",
        "Migrated the top 100 of 2,000+ legacy Oracle BIEE reports with proof-of-concept parity validation against the source system.",
        "Owned reporting end to end as an individual contributor and administered the Power BI tenant for 250+ users, managing workspaces, gateways, and gateway clusters.",
      ],
    },
    {
      company: "LTI Mindtree",
      title: "Power BI Technical Advisor",
      client: "Microsoft",
      period: "Apr 2019 – Sep 2020",
      duration: "1 yr 5 mos",
      location: "Hyderabad, India",
      logo: "/companies/LTM-Logo.svg",
      logoH: 16, // LTI Mindtree wordmark reads large at the tier height - trim to match the row
      points: [
        "Designed and maintained Kimball-style dimensional models in SQL Server through T-SQL views and stored procedures, giving reports one reusable foundation rather than report-specific queries.",
        "Developed and owned the semantic layer in SSAS Tabular and Power BI datasets, defining business measures in DAX once so metrics stayed consistent across every report.",
        "Supported the Microsoft Power BI product for a global user base; promoted to Technical Advisor within six months and led a team of five, sustaining a 4.7+/5 customer satisfaction rating.",
        "Administered tenant settings and on-premises data gateways for enterprise customers, partnering with the Microsoft product team on complex issues and feature feedback.",
      ],
    },
    {
      company: "Ness Technologies",
      title: "Analytics Engineer",
      period: "Feb 2016 – Jun 2017",
      duration: "1 yr 4 mos",
      location: "Bangalore, India",
      logo: "/clients/ness-technologies-dark.svg",
      logoH: 46, // compact round mark reads small - bump it up to match the row
      points: [
        "Built SQL transformation logic and enterprise Power BI reports, learning dimensional modeling and ETL fundamentals on production systems, the start of my data career.",
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
