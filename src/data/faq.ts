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
        "Primarily AI engineer and applied ML / LLM roles, plus analytics and data engineering roles where that overlaps. I'm strongest where real data engineering meets AI: agents, RAG and text-to-SQL, and generative BI, backed by seven years building the data platforms behind enterprise analytics. Open to full-time or consulting.",
    },
    {
      id: "relocation",
      question: "Where are you based, and will you relocate?",
      answer:
        "I'm in Chicago (Central time) and open to relocating anywhere in the US for the right role. I'm just as comfortable fully remote; most of my career has been delivering for clients across time zones.",
    },
    {
      id: "stack",
      question: "What's your stack?",
      answer:
        "Python for the AI and data work: LLM apps with LangChain, RAG and text-to-SQL, PyTorch and scikit-learn, with FastAPI and React for the applications. For data: dbt, Microsoft Fabric, Snowflake, and PySpark, with SQL across SQL Server, Oracle, and BigQuery. For BI: Power BI end to end, DAX, semantic models, and embedded analytics, shipped through Azure DevOps CI/CD.",
    },
    {
      id: "generative-bi",
      question: "What's the AI side of your work?",
      answer:
        "It's applied, not research. I architected a Bosch-sponsored agent that extracts engineering data from CAD files and drawings, with honest accuracy measured against ground truth, and I'm building Plainsight, a platform that turns a raw spreadsheet into trustworthy, plain-English answers. On the BI side, I've built natural-language Q&A and used Copilot in Power BI. My UIC MS in Business Analytics (STEM) adds the ML, database, and optimization grounding underneath.",
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
        "I'm graduating in December 2026 and available to start in January 2027, when my OPT work authorization begins. Email sravan.jaggala@outlook.com with the role and what you're trying to solve; if it's a fit, I'll come back with how I'd approach it, and if it isn't, I'll say so.",
    },
  ],
};
