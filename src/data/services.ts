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
      body: "The foundation work: star-schema semantic models, DAX that stays fast as data grows, row-level security, and incremental refresh. I've moved whole teams off Oracle BIEE, QlikView, SSRS and Excel onto Power BI without breaking the numbers they already trusted.",
    },
    {
      id: "embedded",
      icon: "layers",
      title: "Custom & embedded analytics",
      body: "Analytics that live inside the product, not off in a report tab. I build custom Power BI visuals in React and TypeScript, embed reports into apps through Azure and the REST APIs, and wire up CI/CD so releases stop being a manual chore. One pipeline cut that effort by 80%.",
    },
    {
      id: "ai",
      icon: "sparkles",
      title: "Generative & conversational BI",
      body: "The newer edge: making data answer plain-English questions. I've trained Power BI Q&A models around how people actually ask, and built prompt-driven interfaces with AI/ML engineers that turn a question into the right chart. A UIC MS in Business Analytics is sharpening the ML and modeling underneath.",
    },
  ],
};
