/* Work - projects Sravan has built / is building. Edit copy here. */
export type Project = {
  id: string;
  name: string;
  domain: string;           // BrowserFrame address; "" when noFrame
  href: string | null;
  status?: string;          // small badge, e.g. "Live", "In progress"
  visual: "arcus" | "arcuscompact" | "dashdrop" | "plainsight" | "report" | "capstone";
  description: string;
  role?: string;            // single-line role (existing cards)
  roleBullets?: string[];   // capstone: multiple contributions
  stack: string[];
  linkLabel: string;
  locked?: boolean;         // link not active yet
  noLink?: boolean;         // render no link at all (academic / NDA card)
  noFrame?: boolean;        // render the visual without a browser frame
  // --- capstone / sponsored-academic fields ---
  kicker?: string;          // small tag line above the title
  sponsor?: string;         // "a global industrial manufacturer" or "Bosch"
  sponsorNamed?: boolean;   // gate: only show a sponsor logo once named & approved
  sponsorLogo?: string;     // optional logo path, only when sponsorNamed
  approach?: string;        // body paragraph (how it works, pillar level)
  value?: string;           // business value line
  disclaimer?: string;      // academic / NDA disclaimer, kept visible
};

export const work: {
  eyebrow: string;
  heading: string;
  subhead: string;
  flagships: Project[];
  more: Project[];
} = {
  eyebrow: "Work",
  heading: "Things I've built.",
  subhead:
    "A generative BI platform I'm building, a Bosch-sponsored AI agent, a shipped productivity app, and a gallery of enterprise dashboards.",
  flagships: [
    {
      id: "plainsight",
      name: "Plainsight",
      domain: "plainsight.app",
      href: null,
      status: "In progress",
      visual: "plainsight",
      description:
        "A self-serve generative BI platform. A non-technical user uploads a raw spreadsheet; Plainsight infers a semantic layer from a domain template, then answers plain-English questions with fully visible, verifiable logic, compressing the usual modeling-and-dashboard workflow into a single step. This is where my data-engineering background and the agentic-AI direction meet.",
      approach:
        "It fills the gap between enterprise copilots that only work on a pre-built semantic model and consumer chat-with-your-file tools that offer no governance or trust. A router sends governed metric questions to text-to-SQL over the inferred semantic layer and open-ended questions to sandboxed Python. Every answer exposes its SQL or Python, states its assumptions, runs reconciliation checks, and asks a clarifying question instead of guessing.",
      roleBullets: [
        "Sole designer and builder across AI and data engineering: product definition, competitive analysis, architecture, backend, frontend, and evaluation.",
        "Designed a semantic-inference layer that profiles an uploaded file, matches it to a domain template (retail, finance, supply chain), and maps messy columns to governed metric definitions, surfacing gaps for the user to confirm.",
        "Engineered a dual answering engine with a router: governed text-to-SQL over the inferred semantic layer for defined metrics, and sandboxed Python code generation for open-ended exploration.",
        "Built trust in as a first-class feature: answers expose their SQL or Python, state assumptions, run reconciliation checks, and keep generated SQL read-only; LLM-generated code runs with no network or filesystem access.",
        "Architected a decoupled FastAPI and React system with DuckDB as the in-process engine and LangChain for orchestration, keeping the LLM provider swappable behind a clean interface.",
      ],
      stack: [
        "Python",
        "FastAPI",
        "React",
        "LangChain",
        "LLM APIs",
        "text-to-SQL",
        "DuckDB",
        "Semantic layer",
      ],
      linkLabel: "Coming soon",
      locked: true,
    },
    {
      id: "capstone",
      name: "Engineering Intelligence Agent",
      kicker: "Graduate Capstone · AI Systems",
      sponsor: "Bosch",
      sponsorNamed: true,
      sponsorLogo: "/companies/bosch.svg",
      domain: "",
      href: null,
      noLink: true,
      noFrame: true,
      visual: "capstone",
      status: "Graduate Capstone",
      description:
        "A Bosch-sponsored AI agent that reads engineering drawings in any format, vector PDFs, STEP 3D models, DXF/DWG CAD files, and scanned images, and extracts their GD&T, dimensions, datums, and title-block data into one machine-readable schema, with accuracy measured honestly against NIST and Bosch ground truth.",
      approach:
        "One schema, four parsing lanes. Each format converts into a single Pydantic EngineeringRecord through a tested per-lane converter, so every consumer (dashboard, evaluation, batch jobs) reads one identical record. The agent parses deterministically where the data is authored in the file and uses vision models only where it is locked in pixels, tags every value with a confidence score and its source, and flags uncertainty instead of inventing values.",
      roleBullets: [
        "Technical architect and evaluation lead on a five-person team: owned the common schema, the evaluation lane, the Streamlit dashboard, and integration across all four extraction lanes.",
        "Designed one EngineeringRecord schema that four independent parsing lanes (vector PDF, STEP, DXF/DWG, OCR) converge on through tested per-lane converters, so every downstream consumer reads one identical record.",
        "Built the shared evaluation harness, one record-to-scorable bridge feeding a semantic matcher for NIST and a spatial matcher for Bosch, replacing three divergent per-lane scorers.",
        "Diagnosed a low STEP recall as a unit-measurement artifact and fixed it with per-file unit scoring, a semantic-PMI gate, and per-case variant de-duplication, raising the honest recall from 45% to 80% (294 of 366) on live NIST data.",
        "Caught an evaluation flaw that would have inflated the headline metric by silently dropping a hard test case, and set the practice of verifying every metric claim against live ground truth.",
        "Served as the team's architecture reviewer, gating every lane's pull requests for correctness and cross-lane consistency under a branch-to-peer-review-to-squash-merge workflow.",
      ],
      stack: [
        "Python",
        "Pydantic v2",
        "PyMuPDF",
        "OpenCASCADE (STEP)",
        "ezdxf (DXF/DWG)",
        "PaddleOCR / OpenCV",
        "Streamlit",
        "pytest",
      ],
      disclaimer:
        "Graduate capstone (UIC MS, IDS 560), a five-person team sponsored by Bosch. Accuracy is measured against public NIST drawings and sponsor-provided ground truth; no proprietary data is shown.",
      linkLabel: "",
    },
  ],
  more: [
    {
      id: "arcus",
      name: "Arcus Planner",
      domain: "arcus-planner.web.app",
      href: "https://arcus-planner.web.app",
      status: "Live",
      visual: "arcuscompact",
      description:
        "A productivity suite I designed and built end to end: tasks on Kanban or in lists, a Gantt planner, calendar, focus board, and journaling, with real-time sharing and offline-first cloud sync. Proof that a data engineer can also ship production software.",
      role: "Next: an agentic layer that reads your Gmail and Outlook mail and calendars to auto-create tasks and events, plus an assistant you can talk to for summaries and natural-language task management.",
      stack: ["JavaScript", "Firebase Auth", "Firestore", "Agentic layer (planned)", "Gmail / Outlook (planned)"],
      linkLabel: "Open live demo",
    },
    {
      id: "gallery",
      name: "Power BI Gallery",
      domain: "power-bi-gallery",
      href: "/dashboards",
      status: "Gallery",
      visual: "report",
      description:
        "Enterprise dashboards originally built for clients, rebuilt with synthetic data across retail, manufacturing, finance, and more, demonstrating the modeling, DAX, and layout without any confidential material. Interactive gallery coming soon.",
      role: "Power BI: semantic modeling, DAX, custom visuals, embedded reports.",
      stack: ["Power BI", "DAX", "Power Query", "Embedded"],
      linkLabel: "Coming soon",
      locked: true,
    },
  ],
};
