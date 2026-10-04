import { site } from "../data/site";
import QueryDemo from "./QueryDemo";
import TrustBar from "./TrustBar";
import { useContactModal } from "./ContactModal";
import "./Hero.css";

export default function Hero() {
  const openContact = useContactModal();
  return (
    <section className="hero" id="top">
      <div className="container hero__inner">
        <div className="hero__copy">
          <div className="hero__idrow">
            <img
              src={site.headshot}
              alt={site.name}
              className="hero__avatar"
              width={36}
              height={36}
            />
            <span className="hero__badge">{site.badge}</span>
          </div>

          <h1 className="hero__title">
            <span className="hero__l1">
              {site.heroLine1}{" "}
              <span className="hero__wave" aria-hidden="true">
                👋
              </span>
            </span>
            <span className="hero__l2">{site.heroLine2}</span>
          </h1>

          <p className="hero__lead">{site.positioning}</p>

          <div className="hero__actions">
            <button type="button" onClick={openContact} className="btn">
              Get in touch
            </button>
            <a href="#work" className="btn btn--ghost">
              See my work
            </a>
          </div>

          <div className="hero__meta">
            <span className="hero__loc">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              {site.location}
            </span>
            <span className="hero__avail">
              <span className="hero__dot" aria-hidden="true" />
              {site.availability}
            </span>
          </div>

          <div className="hero__socials">
            <a
              href={site.links.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="hero__social"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.07 2.07 0 1 1 0-4.14 2.07 2.07 0 0 1 0 4.14zM7.12 20.45H3.55V9h3.57v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.22.79 24 1.77 24h20.45c.98 0 1.78-.78 1.78-1.73V1.73C24 .77 23.2 0 22.22 0z" />
              </svg>
            </a>
            <a
              href={site.links.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="hero__social"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M12 .5C5.37.5 0 5.87 0 12.5c0 5.3 3.44 9.8 8.2 11.39.6.11.82-.26.82-.58v-2.03c-3.34.73-4.04-1.6-4.04-1.6-.55-1.4-1.34-1.77-1.34-1.77-1.09-.75.08-.73.08-.73 1.2.09 1.84 1.24 1.84 1.24 1.07 1.84 2.81 1.3 3.5.99.11-.78.42-1.3.76-1.6-2.67-.3-5.47-1.34-5.47-5.96 0-1.32.47-2.4 1.24-3.24-.12-.3-.54-1.52.12-3.18 0 0 1.01-.32 3.3 1.24a11.5 11.5 0 0 1 6 0c2.29-1.56 3.3-1.24 3.3-1.24.66 1.66.24 2.88.12 3.18.77.84 1.24 1.92 1.24 3.24 0 4.63-2.8 5.65-5.48 5.95.43.37.81 1.1.81 2.22v3.29c0 .32.22.7.83.58A12 12 0 0 0 24 12.5C24 5.87 18.63.5 12 .5z" />
              </svg>
            </a>
          </div>
        </div>

        <div className="hero__demo">
          <QueryDemo />
        </div>
      </div>

      <TrustBar />
    </section>
  );
}
