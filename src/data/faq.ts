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
        "Yes. As a STEM graduate, I am eligible for OPT plus the 24-month STEM extension, which provides roughly three years of work authorization without H-1B sponsorship. In practical terms, I can start as soon as my OPT begins in January 2027, with no sponsorship needed for years.",
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
        "Leading teams isn't new for me. I led teams and owned end-to-end delivery well before the title caught up with it; at Mouri Tech that was formalized when I was promoted to Associate Manager in my final year, and earlier, at LTI Mindtree, I led a five-member team supporting Microsoft. I've stayed hands-on in the models and reports throughout, I prefer to lead close to the work.",
    },
    {
      id: "start",
      question: "Are you available, and how do we start?",
      answer:
        "I'm graduating in December 2026 and available to start in January 2027, when my STEM OPT work authorization begins. Email sravan.jaggala@outlook.com with the role and what you're trying to solve; if it's a fit, I'll come back with how I'd approach it, and if it isn't, I'll say so.",
    },
  ],
};
