/* FAQ content - mirrors sagarshah.dev's FAQ band (native <details> accordion).
   Voice = plain, confident, honest. The work-authorization answer is the
   strategic one: framed as a positive (STEM OPT ≈ 3 yrs runway, no immediate
   sponsorship). Facts per CLAUDE.md resolved facts. */
export type FaqItem = { id: string; question: string; answer: string };

export const faq: {
  eyebrow: string;
  heading: string;
  subhead: string;
  groupName: string; // shared <details name> → one-open accordion, zero JS
  items: FaqItem[];
} = {
  eyebrow: "FAQ",
  heading: "Questions worth asking upfront.",
  subhead: "Short, honest answers. Anything else, just email me.",
  groupName: "faq",
  items: [
    {
      id: "work-auth",
      question: "Are you authorized to work in the US?",
      answer:
        "Yes. As a STEM graduate, I am eligible for OPT plus the 24-month STEM extension, which provides roughly three years of work authorization without H-1B sponsorship. In practical terms, I can begin immediately, and sponsorship would not become a consideration for years.",
    },
    {
      id: "roles",
      question: "What roles are you looking for?",
      answer:
        "Full-time BI Developer / BI Architect, Analytics Engineer, or AI/BI roles. I'm strongest where a semantic model, governed reporting, and a bit of engineering meet, and increasingly where BI meets generative AI.",
    },
    {
      id: "relocation",
      question: "Where are you based, and will you relocate?",
      answer:
        "I'm in Chicago (Central time) and open to relocating anywhere in the US for the right role. I'm just as comfortable fully remote; most of my career has been delivering for clients across time zones.",
    },
    {
      id: "stack",
      question: "What's your BI stack?",
      answer:
        "Power BI end to end: DAX, Power Query, star-schema semantic models, RLS and incremental refresh, running on SQL Server, Oracle, Snowflake and BigQuery. Around it: Azure DevOps CI/CD, the Power BI REST APIs, embedded analytics, and custom visuals in React and TypeScript.",
    },
    {
      id: "generative-bi",
      question: "What's the AI / “generative BI” angle?",
      answer:
        "It's applied, not research. I've trained Power BI Q&A models so reports answer plain-English questions, and built prompt-driven interfaces with AI/ML engineers that turn a question into a visualization. My UIC MS in Business Analytics (STEM) adds the ML, database and optimization grounding underneath.",
    },
    {
      id: "leadership",
      question: "Have you led teams, or just built reports?",
      answer:
        "Both. In my last year at Mouri Tech I functioned as an Associate Manager, leading a team of five and owning delivery end to end, while still hands-on in the models and reports. I like staying close to the work.",
    },
    {
      id: "start",
      question: "Are you available, and how do we start?",
      answer:
        "I'm available for full-time roles now. Email sravan.jaggala@outlook.com with the role and what you're trying to solve. If it's a fit, I'll come back with how I'd approach it; if it isn't, I'll say so.",
    },
  ],
};
