/* Work - projects Sravan has built / is building. Edit copy here. */
export type Project = {
  id: string;
  name: string;
  domain: string;           // BrowserFrame address; "" when noFrame
  href: string | null;
  status?: string;          // small badge, e.g. "Live", "In progress"
  visual: "arcus" | "dashdrop" | "report" | "capstone";
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
    "A shipped product, an AI capstone pushing into generative BI, a platform in progress, and a gallery of enterprise dashboards.",
  flagships: [
    {
      id: "arcus",
      name: "Arcus Planner",
      domain: "arcus-planner.web.app",
      href: "https://arcus-planner.web.app",
      status: "Live",
      visual: "arcus",
      description:
        "A complete personal-productivity suite I designed and built end to end. Tasks live as cards you can organize on Kanban boards or in flat lists, alongside a Gantt-style planner for scheduling, a calendar, a focus board for deep-work sessions, and a journal with live transliteration. Any item can be shared with another account and stays in sync in real time. Evidence that a BI professional can also deliver production-grade software.",
      role: "Built as a pure client-side application: authentication and per-user data through Firebase Auth, an offline-first store on localStorage so it stays fully usable with no connection, and Firestore syncing changes to the cloud the moment you reconnect. Deployed on Firebase Hosting.",
      stack: [
        "JavaScript",
        "HTML",
        "CSS",
        "Firebase Auth",
        "Firestore",
        "Firebase Hosting",
        "SVG",
      ],
      linkLabel: "Open live demo",
    },
    {
      id: "capstone",
      name: "AI Agent for Engineering Data Extraction",
      kicker: "Graduate Capstone · AI / Generative BI",
      // Name-swap: change `sponsor` to "Bosch" and set sponsorNamed:true (+ sponsorLogo)
      // ONLY after written sponsor/professor approval is on record. Default = unnamed.
      sponsor: "a global industrial manufacturer",
      sponsorNamed: false,
      domain: "",
      href: null,
      noLink: true,
      noFrame: true,
      visual: "capstone",
      status: "Academic",
      description:
        "An AI agent that turns messy engineering drawings and CAD files into one clean, structured, trustworthy dataset. Feeds automated quoting, design validation, and digital-twin population.",
      approach:
        "AI as a scalpel, not a hammer. Parse the data deterministically where it is already authored in the file, apply multimodal vision and language models only where the information is locked in pixels, and route anything missing to a human. Everything normalizes into one structured schema, and every value carries a confidence score and its source.",
      roleBullets: [
        "Co-designed the end-to-end solution architecture and process flow: ingest, format routing, deterministic-vs-AI lanes, normalize and fuse into a common schema, human-in-the-loop, and an evaluation loop.",
        "Researched and presented the published literature grounding the approach: VLM-based drawing parsing, STEP-as-language feature recognition, and agentic reference architectures.",
        "Mapped the sponsor scope onto the reference architecture to set the MVP boundary: the perception layer in scope, the cognitive and collaboration layers as stretch.",
        "Built the per-value confidence and source-tracking model on top of the client-provided output schema.",
        "Drove the deterministic-vs-AI routing logic: parse what is authored in the file, use AI only where information is locked in pixels.",
      ],
      stack: [
        "Multimodal AI (VLMs)",
        "Agentic pipeline",
        "Generative AI",
        "Structured extraction",
        "Confidence + source model",
      ],
      disclaimer:
        "Academic capstone project (UIC MSBA, 5-person team). No proprietary data or internal architecture is shown. All examples use publicly available or synthetic data.",
      linkLabel: "",
    },
  ],
  more: [
    {
      id: "dashdrop",
      name: "DashDrop",
      domain: "localhost:3000",
      href: null,
      status: "In progress",
      visual: "dashdrop",
      description:
        "Upload an Excel or CSV file and receive a clean, auto-generated dashboard with room for light customization. The BI, software, and AI concept I am currently prototyping.",
      role: "Planned: a typed React front end, a charting layer, client-side spreadsheet parsing, and an AI assist that picks the right visuals for your data.",
      stack: ["React", "TypeScript", "Charting", "XLSX / CSV", "AI assist"],
      linkLabel: "Coming soon",
      locked: true,
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
