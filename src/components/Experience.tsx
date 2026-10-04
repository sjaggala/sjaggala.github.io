import { experience } from "../data/experience";
import { type LogoTiers } from "../utils/logoHeight";
import { useNormalizeLogos } from "../hooks/useNormalizeLogos";
import { useReveal } from "../hooks/useReveal";
import "./Experience.css";

const LOGO_TIERS: LogoTiers = { wide: 26, mid: 32, compact: 38 };
const EDU_TIERS: LogoTiers = { wide: 34, mid: 40, compact: 44 };

export default function Experience() {
  useReveal();
  useNormalizeLogos(".xp__logo", LOGO_TIERS);
  useNormalizeLogos(".xp__edu-img", EDU_TIERS);
  return (
    <section id="experience" className="xp">
      <div className="container">
        <div className="xp__head reveal">
          <span className="eyebrow">{experience.eyebrow}</span>
          <h2 className="xp__title">{experience.heading}</h2>
          <p className="xp__lead">{experience.subhead}</p>
        </div>

        <div className="xp__roles">
          {experience.roles.map((role, i) => (
            <article
              key={role.company}
              className="xp__card reveal"
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              <div className="xp__logo-slot">
                {role.logo ? (
                  <img
                    src={role.logo}
                    alt={role.company}
                    className="xp__logo"
                    data-logo-h={role.logoH}
                  />
                ) : (
                  <span className="xp__logo-word">{role.company}</span>
                )}
              </div>

              <div className="xp__main">
                <div className="xp__top">
                  <div className="xp__ident">
                    <h3 className="xp__role">{role.title}</h3>
                    <p className="xp__co">
                      {role.company}
                      {role.via && (
                        <span className="xp__via"> · via {role.via}</span>
                      )}
                      {role.client && (
                        <span className="xp__via"> · Client: {role.client}</span>
                      )}
                    </p>
                  </div>
                  <div className="xp__meta">
                    <span className="xp__period">
                      {role.period} <span className="xp__dur">· {role.duration}</span>
                    </span>
                    <span className="xp__loc">{role.location}</span>
                  </div>
                </div>

                <ul className="xp__points" role="list">
                  {role.points.map((p, j) => (
                    <li key={j} className="xp__point">
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>

        <div className="xp__info-grid reveal">
          <div className="xp__info-card">
          <h3 className="xp__info-title">Education</h3>
          <ul className="xp__edu-list" role="list">
            {experience.education.map((ed) => (
              <li key={ed.school} className="xp__edu-item">
                <div className="xp__edu-logo">
                  {ed.logo ? (
                    <img src={ed.logo} alt={ed.school} className="xp__edu-img" />
                  ) : (
                    <span className="xp__edu-mono">{ed.mono}</span>
                  )}
                </div>
                <div className="xp__edu-body">
                  <div className="xp__edu-head">
                    <span className="xp__sub-primary">{ed.degree}</span>
                    <span className="xp__sub-period">{ed.period}</span>
                  </div>
                  <span className="xp__sub-secondary">{ed.school}</span>
                  {ed.note && <span className="xp__sub-note">{ed.note}</span>}
                </div>
              </li>
            ))}
          </ul>
          </div>
          {experience.community && (
            <div className="xp__info-card">
              <h3 className="xp__info-title">Community</h3>
              <a
                className="xp__comm"
                href={experience.community.href}
                target="_blank"
                rel="noreferrer"
              >
                <span className="xp__sub-primary">{experience.community.org}</span>
                <span className="xp__sub-secondary">
                  {experience.community.role} · {experience.community.period}
                </span>
                <span className="xp__sub-note">{experience.community.note}</span>
              </a>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
