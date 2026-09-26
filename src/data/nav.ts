/* ============================================================
   Navigation model. `ready` flips to true as each page ships.
   Only ready:true items are clickable; others render disabled.
   ============================================================ */
export type NavItem = {
  label: string;
  to: string;
  ready: boolean;
};

// Same-page anchors start with "#"; separate pages start with "/".
// `ready` flips true as each section/page ships; locked items render disabled.
export const navItems: NavItem[] = [
  { label: "About", to: "#top", ready: true }, // scrolls to the hero (top of page)
  { label: "Work", to: "#work", ready: true },
  { label: "Skills", to: "#stack", ready: true },
  { label: "Experience", to: "#experience", ready: true },
  { label: "Testimonials", to: "#testimonials", ready: true },
  // BI Showcase (/dashboards) is reached from the Work section's gallery card;
  // add it back here once that page ships (watch for 6-item wrap on tablet).
];
