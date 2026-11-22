/* "What I do" - three pillars framing the BI → AI story. Edit copy here. */
export type ServiceItem = {
  id: string;
  icon: "database" | "layers" | "sparkles";
  title: string;
  body: string;
};

export const whatIDo: {
  eyebrow: string;
  heading: string;
  subhead: string;
  items: ServiceItem[];
} = {
  eyebrow: "What I do",
  heading: "What I bring to a team.",
  subhead:
    "An AI engineer who can build the model and the data platform under it. Hand me an agent, a pipeline, or the semantic layer and reports on top.",
  items: [
    {
      id: "ai",
      icon: "sparkles",
      title: "AI & LLM systems",
      body: "LLM applications and agents taken all the way to production: tool-using agents, RAG and text-to-SQL over governed data, multimodal extraction, and the evaluation harnesses that prove they work. I architected a Bosch-sponsored agent that pulls engineering data from CAD files and technical drawings, and I'm building Plainsight, a self-serve generative BI platform. I focus on the part most model projects skip: dependable pipelines, honest evaluation, and real deployment.",
    },
    {
      id: "de",
      icon: "database",
      title: "Data engineering & platforms",
      body: "The data layer under the analytics: dbt models across staging, conformed, and gold layers, dimensional modeling with Type 2 history, and migrations onto Microsoft Fabric and Snowflake. I tune for scale with partitioning, V-Order, query folding, and incremental refresh, and gate every cutover with reconciliation checks validated to within a fraction of a percent of source.",
    },
    {
      id: "bi",
      icon: "layers",
      title: "BI & semantic modeling",
      body: "Governed semantic models and the reports on top: performant DAX, SSAS Tabular, row-level security, embedded analytics, and tenant administration end to end. I've migrated teams off Oracle BIEE, QlikView, and SSRS to Power BI without breaking the numbers they rely on, and shipped custom visuals in React and TypeScript.",
    },
  ],
};
