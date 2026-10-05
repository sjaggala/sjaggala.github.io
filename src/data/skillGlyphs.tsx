import type { ReactElement } from "react";

/* Cohesive line-glyphs for tools/concepts that have no clean brand logo.
   All share one style: 24x24 viewBox, no fill, currentColor stroke, 1.7 weight,
   round caps/joins - so they read as one intentional icon family sitting
   alongside the colored brand logos in /public/tech. These are original,
   representative marks (NOT copies of vendor brand logos). */
const base = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.7,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
};

export const skillGlyphs: Record<string, ReactElement> = {
  /* Microsoft Fabric - woven mesh (a "fabric") */
  fabric: (
    <svg {...base}>
      <path d="M4 9c4-3 12-3 16 0M4 15c4 3 12 3 16 0" />
      <path d="M9 4c-3 4-3 12 0 16M15 4c3 4 3 12 0 16" />
    </svg>
  ),

  /* Power Query - funnel (filter + transform) */
  powerquery: (
    <svg {...base}>
      <path d="M4 5h16l-6 7v5l-4 2v-7z" />
    </svg>
  ),

  /* Paginated / SSRS - report page with a folded corner + lines */
  ssrs: (
    <svg {...base}>
      <path d="M8 3h6l4 4v12a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 6 19V4.5A1.5 1.5 0 0 1 7.5 3z" />
      <path d="M14 3v4h4" />
      <path d="M9.5 12h6M9.5 15.5h6" />
    </svg>
  ),

  /* DAX - sigma (aggregation / measures) */
  dax: (
    <svg {...base}>
      <path d="M16.5 5H7l6 7-6 7h9.5" />
    </svg>
  ),

  /* DAX Studio - query editor window with a prompt */
  daxstudio: (
    <svg {...base}>
      <rect x="3.5" y="5" width="17" height="14" rx="2" />
      <path d="M3.5 9h17" />
      <path d="M7 12.5l2.2 2.2L7 16.9M12 16.9h4.5" />
    </svg>
  ),

  /* Tabular Editor - semantic model tree */
  tabulareditor: (
    <svg {...base}>
      <circle cx="12" cy="5" r="2.2" />
      <circle cx="6" cy="15" r="2.2" />
      <circle cx="12" cy="15" r="2.2" />
      <circle cx="18" cy="15" r="2.2" />
      <path d="M12 7.2v2.3M12 9.5H6v3.3M12 9.5h6v3.3M12 9.5v3.3" />
    </svg>
  ),

  /* ALM Toolkit - schema compare (two panels, two-way sync) */
  almtoolkit: (
    <svg {...base}>
      <rect x="3" y="5" width="7" height="14" rx="1.5" />
      <rect x="14" y="5" width="7" height="14" rx="1.5" />
      <path d="M10.5 10h3m0 0-1.3-1.3M13.5 10l-1.3 1.3" />
      <path d="M13.5 14h-3m0 0 1.3-1.3M10.5 14l1.3 1.3" />
    </svg>
  ),

  /* T-SQL - query a database (cylinder + prompt caret) */
  tsql: (
    <svg {...base}>
      <ellipse cx="11" cy="6" rx="6.5" ry="2.3" />
      <path d="M4.5 6v5.5c0 1.2 2.9 2.2 6.5 2.2" />
      <path d="M17.5 6v3.2" />
      <path d="M6 17.5l2.3 2L6 21.5M10.8 21.5H16.5" />
    </svg>
  ),

  /* REST APIs - braces with endpoint dots (code / JSON) */
  restapi: (
    <svg {...base}>
      <path d="M8.5 5C6.5 5 6.5 7 6.5 8.5s0 3.5-2 3.5c2 0 2 2 2 3.5S6.5 19 8.5 19" />
      <path d="M15.5 5c2 0 2 2 2 3.5s0 3.5 2 3.5c-2 0-2 2-2 3.5S17.5 19 15.5 19" />
      <circle cx="9.7" cy="12" r=".55" fill="currentColor" stroke="none" />
      <circle cx="12" cy="12" r=".55" fill="currentColor" stroke="none" />
      <circle cx="14.3" cy="12" r=".55" fill="currentColor" stroke="none" />
    </svg>
  ),

  /* CI/CD pipelines - DevOps infinity loop */
  cicd: (
    <svg {...base}>
      <path d="M6.4 8.5a3.5 3.5 0 1 0 0 7c2 0 3.1-1.9 5.6-3.5s3.6-3.5 5.6-3.5a3.5 3.5 0 1 1 0 7c-2 0-3.1-1.9-5.6-3.5S8.4 8.5 6.4 8.5Z" />
    </svg>
  ),

  /* Conversational BI / Copilot - speech bubble with mini bars (ask your data) */
  qna: (
    <svg {...base}>
      <path d="M3 6a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H9l-4 3v-3H5a2 2 0 0 1-2-2z" />
      <path d="M8 11.5V9M12 11.5V7.5M16 11.5V8.5" />
    </svg>
  ),

  /* Conversational BI - chat bubble with a prompt caret */
  prompt: (
    <svg {...base}>
      <path d="M3 6a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H9l-4 3v-3H5a2 2 0 0 1-2-2z" />
      <path d="M7.5 7.5l2.2 2.2-2.2 2.2M12.6 11.9H16" />
    </svg>
  ),

  /* Multimodal AI (VLMs) - an eye (vision) */
  vision: (
    <svg {...base}>
      <path d="M2.5 12S6 6 12 6s9.5 6 9.5 6-3.5 6-9.5 6-9.5-6-9.5-6z" />
      <circle cx="12" cy="12" r="2.6" />
    </svg>
  ),

  /* Agentic pipeline - connected nodes (a small graph) */
  agent: (
    <svg {...base}>
      <circle cx="5" cy="12" r="1.9" />
      <circle cx="12" cy="5.5" r="1.9" />
      <circle cx="12" cy="18.5" r="1.9" />
      <circle cx="19" cy="12" r="1.9" />
      <path d="M6.6 11 10.4 6.9M6.6 13 10.4 17.1M13.6 6.9 17.4 11M13.6 17.1 17.4 13" />
    </svg>
  ),

  /* LLM APIs / generative AI - sparkles */
  llm: (
    <svg {...base}>
      <path d="M11 3.5l1.5 4.2 4.2 1.5-4.2 1.5L11 15l-1.5-4.3L5.3 9.2l4.2-1.5z" />
      <path d="M17.5 14l.8 2.2 2.2.8-2.2.8-.8 2.2-.8-2.2-2.2-.8 2.2-.8z" />
    </svg>
  ),

  /* Power BI Service administration - gear inside a shield (govern + manage) */
  pbiadmin: (
    <svg {...base}>
      <path d="M12 3l7 2.5v5.6c0 4.3-3 7.2-7 8.9-4-1.7-7-4.6-7-8.9V5.5z" />
      <circle cx="12" cy="11" r="2.1" />
      <path d="M12 7.4v1.5M12 13.1v1.5M8.6 11h1.3M14.1 11h1.3" />
    </svg>
  ),

  /* Data gateway - on-prem and cloud nodes bridged (hybrid connectivity) */
  gateway: (
    <svg {...base}>
      <rect x="3" y="9.5" width="4.5" height="8" rx="1" />
      <rect x="16.5" y="9.5" width="4.5" height="8" rx="1" />
      <path d="M7.5 7.2a6 6 0 0 1 9 0" />
      <path d="M7.5 13.5h6.4M12 11.4l2.3 2.1-2.3 2.1" />
    </svg>
  ),
};
