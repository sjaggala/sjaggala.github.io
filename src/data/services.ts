/* "What I do" — three pillars framing the BI → AI story. Edit copy here. */
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
    "Seven years of enterprise BI, and a growing edge in AI. Hand me the data model, the report layer, or the whole pipeline — all three work.",
  items: [
    {
      id: "bi",
      icon: "database",
      title: "Enterprise BI & governance",
      body: "Centralized semantic models, DAX that stays fast, and governed reporting that scales past one team. Star schemas, row-level security, incremental refresh, and clean migrations off Oracle BIEE, QlikView, SSRS and Excel — without breaking the numbers people already trust.",
    },
    {
      id: "embedded",
      icon: "layers",
      title: "Custom & embedded analytics",
      body: "Analytics that live inside the product, not just a report tab. Custom Power BI visuals in React and TypeScript, reports embedded through Azure app registrations and REST APIs, and CI/CD with Azure DevOps and PowerShell so releases stop being manual — one deploy cut the effort by 80%.",
    },
    {
      id: "ai",
      icon: "sparkles",
      title: "Generative & conversational BI",
      body: "Natural language brought to business data. Power BI Q&A models trained for the questions people actually ask, prompt-driven visualization interfaces built alongside AI/ML engineers, and a UIC MS in Business Analytics — ML, DBMS, optimization — sharpening the AI side.",
    },
  ],
};
