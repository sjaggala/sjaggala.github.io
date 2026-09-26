/* Clients trust bar — mirrors sagarshah.dev's trust-bar (renders inside the hero,
   split off by a hairline). These are END CLIENTS Sravan delivered BI for.
   Logo files live in /public/clients (most supplied by Sravan); any client
   without a logo yet renders as a styled text wordmark — the same logo-or-
   wordmark fallback the reference uses. Drop an SVG/PNG in /public/clients and
   add its `logo` path here to upgrade a wordmark to a real logo. */
export type Client = { name: string; logo?: string };

export const clients: { intro: string; marks: Client[] } = {
  intro: "Companies I've delivered BI for",
  marks: [
    { name: "Microsoft", logo: "/clients/microsoft.svg" },
    { name: "Stanley Black & Decker", logo: "/clients/sbd.svg" },
    { name: "Helen of Troy", logo: "/clients/helenoftroy.svg" },
    { name: "American Tire Distributors", logo: "/clients/atd-logo-dark.svg" },
    { name: "TBC Corporation", logo: "/clients/TBC-Corporation-Logo.svg" },
    { name: "Orora Packaging Solutions", logo: "/clients/orora-logo-black.svg" },
    { name: "Hudson Advisors", logo: "/clients/hudson-advisors-logo.svg" },
    { name: "SIPEF", logo: "/clients/sipef_logo@2x.png" },
    { name: "Insulectro", logo: "/clients/insulectro-logo-2.svg" },
  ],
};
