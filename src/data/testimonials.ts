/* Testimonials — real, attributed endorsements Sravan provided (2026-09-25).
   Quotes are trimmed for length but kept faithful to the source wording. */
export type Testimonial = {
  id: string;
  name: string;
  title: string;
  quote: string;
  initials: string;
  tone: "violet" | "emerald" | "orange" | "pink";
};

export const testimonials: {
  eyebrow: string;
  heading: string;
  subhead: string;
  items: Testimonial[];
} = {
  eyebrow: "Testimonials",
  heading: "What it's like to work with me.",
  subhead: "Words from the managers and teammates I delivered for.",
  items: [
    {
      id: "avalon",
      name: "Avalon D'Souza",
      title: "Director of Analytics, American Tire Distributors",
      quote:
        "Sravan is a strong Power BI developer who always took the time to understand why the business needed an insight, not just what was asked for. His dashboards were clean, intuitive and widely used because they delivered real value to stakeholders. Any organization would be lucky to have him.",
      initials: "AD",
      tone: "violet",
    },
    {
      id: "srinivasulu",
      name: "Srinivasulu Bejawada",
      title: "R&R nomination · TBC project, MOURI Tech",
      quote:
        "Sravan is the most reliable teammate and a vital player in TBC. His knowledge of Power BI is excellent, and he delivers cutting-edge solutions using numerous Power BI strategies. His leadership abilities are noteworthy — he has the potential to be a terrific leader.",
      initials: "SB",
      tone: "emerald",
    },
    {
      id: "naveen",
      name: "Naveen Kyatham",
      title: "Associate Director, Advanced Analytics · MOURI Tech",
      quote:
        "He takes ownership of end-to-end projects, from gathering requirements to delivering solutions, while mentoring his peers and guiding his team. His curiosity and drive to explore new tools set him apart.",
      initials: "NK",
      tone: "orange",
    },
  ],
};
