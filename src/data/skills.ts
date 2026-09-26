/* Skills / toolkit - grouped like sagarshah.dev's Stack band.
   Each item renders in priority order:
     1. `icon`  → a colored brand logo from /public/tech
     2. `glyph` → a monochrome line-glyph key from skillGlyphs.tsx
     3. neither → a plain text chip (last resort). */
export type SkillItem = { name: string; icon?: string; glyph?: string };
export type SkillGroup = {
  id: string;
  title: string;
  descriptor: string;
  items: SkillItem[];
};

export const skills: {
  eyebrow: string;
  heading: string;
  subhead: string;
  groups: SkillGroup[];
} = {
  eyebrow: "Toolkit",
  heading: "The tools I work in.",
  subhead:
    "From the semantic model to the last pixel of a report, and the languages and platforms that ship it.",
  groups: [
    {
      id: "bi",
      title: "BI & Visualization",
      descriptor: "Where I've spent most of my career.",
      items: [
        { name: "Power BI", icon: "/tech/powerbi.svg" },
        { name: "Tableau", icon: "/tech/tableau.svg" },
        { name: "Microsoft Fabric", glyph: "fabric" },
        { name: "Excel", icon: "/tech/excel.svg" },
        { name: "Paginated / SSRS", glyph: "ssrs" },
      ],
    },
    {
      id: "model",
      title: "Semantic modeling",
      descriptor: "Measures, models, and the tooling around them.",
      items: [
        { name: "DAX", glyph: "dax" },
        { name: "Power Query", glyph: "powerquery" },
        { name: "Tabular Editor", glyph: "tabulareditor" },
        { name: "DAX Studio", glyph: "daxstudio" },
        { name: "ALM Toolkit", glyph: "almtoolkit" },
      ],
    },
    {
      id: "db",
      title: "Databases",
      descriptor: "Modeling and querying at scale.",
      items: [
        { name: "SQL Server", icon: "/tech/sqlserver.svg" },
        { name: "Oracle", icon: "/tech/oracle.svg" },
        { name: "Snowflake", icon: "/tech/snowflake.svg" },
        { name: "BigQuery", icon: "/tech/bigquery.svg" },
        { name: "SAP HANA", icon: "/tech/sap.svg" },
        { name: "T-SQL", glyph: "tsql" },
      ],
    },
    {
      id: "code",
      title: "Languages & code",
      descriptor: "Logic, transforms, and custom visuals.",
      items: [
        { name: "Python", icon: "/tech/python.svg" },
        { name: "R", icon: "/tech/r.svg" },
        { name: "TypeScript", icon: "/tech/typescript.svg" },
        { name: "React", icon: "/tech/react.svg" },
        { name: "PowerShell", icon: "/tech/powershell.svg" },
      ],
    },
    {
      id: "cloud",
      title: "Cloud, platform & DevOps",
      descriptor: "Shipping and automating analytics.",
      items: [
        { name: "Azure", icon: "/tech/azure.svg" },
        { name: "Azure DevOps", icon: "/tech/azuredevops.svg" },
        { name: "Git", icon: "/tech/git.svg" },
        { name: "Power BI REST APIs", glyph: "restapi" },
        { name: "CI/CD pipelines", glyph: "cicd" },
        { name: "Power Automate", icon: "/tech/powerautomate.svg" },
      ],
    },
  ],
};
