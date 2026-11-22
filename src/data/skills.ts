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
    "From LLM apps and data pipelines to the semantic model and the last pixel of a report.",
  groups: [
    {
      id: "ai",
      title: "AI, ML & LLMs",
      descriptor: "What I'm building now.",
      items: [
        { name: "LLM apps & agents", glyph: "agent" },
        { name: "Prompt & context engineering", glyph: "prompt" },
        { name: "RAG & text-to-SQL", glyph: "llm" },
        { name: "LangChain", icon: "/tech/langchain.svg" },
        { name: "PyTorch", icon: "/tech/pytorch.svg" },
        { name: "Multimodal / VLMs", glyph: "vision" },
        { name: "scikit-learn", icon: "/tech/scikitlearn.svg" },
      ],
    },
    {
      id: "de",
      title: "Data engineering",
      descriptor: "Pipelines, modeling, and trust.",
      items: [
        { name: "dbt", icon: "/tech/dbt.svg" },
        { name: "Microsoft Fabric", icon: "/tech/fabric-expo-icon.svg" },
        { name: "PySpark", icon: "/tech/apachespark.svg" },
        { name: "Azure Data Factory", icon: "/tech/azure.svg" },
        { name: "DuckDB", icon: "/tech/duckdb.svg" },
        { name: "Power Query", glyph: "powerquery" },
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
      id: "bi",
      title: "BI & semantic modeling",
      descriptor: "Where I spent most of my career.",
      items: [
        { name: "Power BI", icon: "/tech/powerbi.svg" },
        { name: "DAX", glyph: "dax" },
        { name: "Tabular Editor", glyph: "tabulareditor" },
        { name: "DAX Studio", glyph: "daxstudio" },
        { name: "Tableau", icon: "/tech/tableau.svg" },
        { name: "Copilot & Q&A", glyph: "qna" },
        { name: "Paginated / SSRS", glyph: "ssrs" },
      ],
    },
    {
      id: "code",
      title: "Languages & frameworks",
      descriptor: "What I build the systems with.",
      items: [
        { name: "Python", icon: "/tech/python.svg" },
        { name: "FastAPI", icon: "/tech/fastapi.svg" },
        { name: "React", icon: "/tech/react.svg" },
        { name: "TypeScript", icon: "/tech/typescript.svg" },
        { name: "Streamlit", icon: "/tech/streamlit.svg" },
        { name: "PowerShell", icon: "/tech/powershell.svg" },
        { name: "R", icon: "/tech/r.svg" },
      ],
    },
    {
      id: "cloud",
      title: "Cloud, platform & DevOps",
      descriptor: "Shipping, securing, and automating.",
      items: [
        { name: "Azure", icon: "/tech/azure.svg" },
        { name: "Azure DevOps", icon: "/tech/azuredevops.svg" },
        { name: "Docker", icon: "/tech/docker.svg" },
        { name: "Git", icon: "/tech/git.svg" },
        { name: "CI/CD pipelines", glyph: "cicd" },
        { name: "Power BI Service admin", glyph: "pbiadmin" },
        { name: "Data gateways", glyph: "gateway" },
      ],
    },
  ],
};
