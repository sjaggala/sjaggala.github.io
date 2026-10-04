import { useState } from "react";
import { contact } from "../data/contact";
import { site } from "../data/site";
import { useReveal } from "../hooks/useReveal";
import { useContactModal } from "./ContactModal";
import "./Contact.css";

function CopyButton({ value }: { value: string }) {
  const [copied, setCopied] = useState(false);
  return (
    <button
      type="button"
      className="ct__copy"
      aria-label={copied ? "Copied!" : "Copy email address"}
      title={copied ? "Copied!" : "Copy"}
      onClick={async () => {
        try {
          await navigator.clipboard.writeText(value);
          setCopied(true);
          setTimeout(() => setCopied(false), 1600);
        } catch {
          /* clipboard unavailable - no-op */
        }
      }}
    >
      {copied ? (
        <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M20 6L9 17l-5-5" />
        </svg>
      ) : (
        <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <rect x="9" y="9" width="11" height="11" rx="2" />
          <path d="M5 15V5a2 2 0 0 1 2-2h10" />
        </svg>
      )}
    </button>
  );
}

export default function Contact() {
  useReveal();
  const openContact = useContactModal();
  return (
    <section id="contact" className="ct">
      <div className="container">
        <div className="ct__card reveal">
          <span className="eyebrow">{contact.eyebrow}</span>
          <h2 className="ct__title">{contact.heading}</h2>
          <p className="ct__lead">{contact.subhead}</p>

          <div className="ct__actions">
            <button type="button" className="btn" onClick={openContact}>
              {contact.primary.label}
            </button>
            <a
              className="btn btn--ghost"
              href={contact.secondary.href}
              target="_blank"
              rel="noopener noreferrer"
            >
              {contact.secondary.label}
            </a>
          </div>

          <p className="ct__rows-lead">{contact.contactsLead}</p>
          <ul className="ct__rows" role="list">
            <li className="ct__row">
              <span className="ct__ico" aria-hidden="true">
                <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="5" width="18" height="14" rx="2" />
                  <path d="m3 7 9 6 9-6" />
                </svg>
              </span>
              <a className="ct__link" href={`mailto:${site.email}`}>
                {site.email}
              </a>
              <CopyButton value={site.email} />
            </li>

            <li className="ct__row">
              <span className="ct__ico" aria-hidden="true">
                <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
                  <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13zM7.12 20.45H3.55V9h3.57v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.73v20.53C0 23.22.79 24 1.77 24h20.45c.98 0 1.78-.78 1.78-1.74V1.73C24 .77 23.2 0 22.22 0z" />
                </svg>
              </span>
              <a className="ct__link" href={site.links.linkedin} target="_blank" rel="noopener noreferrer">
                LinkedIn
              </a>
            </li>

            <li className="ct__row">
              <span className="ct__ico" aria-hidden="true">
                <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
                  <path d="M12 .5C5.37.5 0 5.87 0 12.5c0 5.3 3.44 9.8 8.21 11.39.6.11.82-.26.82-.58 0-.29-.01-1.05-.02-2.06-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.09-.75.08-.73.08-.73 1.21.09 1.84 1.24 1.84 1.24 1.07 1.84 2.81 1.31 3.5 1 .11-.78.42-1.31.76-1.61-2.67-.3-5.47-1.34-5.47-5.95 0-1.31.47-2.39 1.24-3.23-.12-.31-.54-1.53.12-3.18 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 6.01 0c2.29-1.55 3.3-1.23 3.3-1.23.66 1.65.24 2.87.12 3.18.77.84 1.23 1.92 1.23 3.23 0 4.62-2.81 5.64-5.49 5.94.43.37.81 1.1.81 2.22 0 1.6-.01 2.9-.01 3.29 0 .32.22.7.83.58A12.01 12.01 0 0 0 24 12.5C24 5.87 18.63.5 12 .5z" />
                </svg>
              </span>
              <a className="ct__link" href={site.links.github} target="_blank" rel="noopener noreferrer">
                GitHub
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
