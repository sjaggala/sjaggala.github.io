import { site } from "../data/site";
import "./Footer.css";

const year = new Date().getFullYear();

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__brand">
          <span className="footer__mark" aria-hidden="true">
            {site.initials}
          </span>
          <div>
            <div className="footer__name">{site.name}</div>
            <div className="footer__role">{site.role}</div>
          </div>
        </div>

        <p className="footer__line">
          Open to full-time BI / Analytics Engineer &amp; AI-BI roles across the
          U.S.
        </p>

        <div className="footer__links">
          <a href={`mailto:${site.email}`} className="footer__link">
            Email
          </a>
          <a
            href={site.links.linkedin}
            className="footer__link"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
          <a
            href={site.links.github}
            className="footer__link"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
        </div>
      </div>

      <div className="container footer__base">
        <span>
          © {year} {site.name}
        </span>
        <span className="footer__built">Built with React &amp; TypeScript</span>
      </div>
    </footer>
  );
}
