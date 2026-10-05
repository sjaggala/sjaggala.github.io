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
    "Seven years of enterprise BI, and a growing edge in AI. Hand me the data model, the report layer, or the whole pipeline. All three work.",
  items: [
    {
      id: "bi",
      icon: "database",
      title: "Enterprise BI & governance",
      body: "Centralized, star-schema semantic models, performant DAX, row-level security, and incremental refresh: the governed foundation that scales beyond a single team. I administer the Power BI tenant end to end, workspaces, capacity, access, and on-premises gateways, and have migrated teams off Oracle BIEE, QlikView, SSRS, and Excel to Power BI without breaking the numbers they already rely on.",
    },
    {
      id: "embedded",
      icon: "layers",
      title: "Custom & embedded analytics",
      body: "Analytics delivered inside the product rather than confined to a report tab: custom Power BI visuals in React and TypeScript, reports embedded through Azure app registrations and the REST APIs, and CI/CD on Azure DevOps and PowerShell that replaced manual releases. One pipeline reduced deployment effort by 80%.",
    },
    {
      id: "ai",
      icon: "sparkles",
      title: "Generative & conversational BI",
      body: "Natural-language and AI-driven interfaces for business data: conversational Q&A experiences built around the questions users actually ask, plus Copilot in Power BI generating reports, pages, and visuals from prompts, built with AI/ML engineers. A UIC MS in Business Analytics reinforces the underlying ML, database, and optimization foundations.",
    },
  ],
};
