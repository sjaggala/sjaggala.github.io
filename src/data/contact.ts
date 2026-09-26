/* Contact content - mirrors sagarshah.dev's CTA band (a centered muted card).
   Email + links only, no phone (per resolved build decisions in CLAUDE.md). */
import { site } from "./site";

export const contact = {
  eyebrow: "Contact",
  heading: "Let's put your data to work.",
  subhead:
    "Tell me about the role or the problem you're hiring for. I'll tell you honestly whether I'm the right fit, and how I'd approach it.",
  primary: { label: "Start a conversation", href: `mailto:${site.email}` },
  secondary: { label: "Connect on LinkedIn", href: site.links.linkedin },
  contactsLead: "You'll also find me here.",
} as const;
