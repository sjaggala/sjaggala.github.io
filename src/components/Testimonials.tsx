import { testimonials } from "../data/testimonials";
import { useReveal } from "../hooks/useReveal";
import "./Testimonials.css";

export default function Testimonials() {
  useReveal();
  return (
    <section id="testimonials" className="tst">
      <div className="container">
        <div className="tst__head reveal">
          <span className="eyebrow">{testimonials.eyebrow}</span>
          <h2 className="tst__title">{testimonials.heading}</h2>
          <p className="tst__lead">{testimonials.subhead}</p>
        </div>

        <ul className="tst__grid" role="list">
          {testimonials.items.map((t, i) => (
            <li key={t.id} className="reveal" style={{ transitionDelay: `${i * 80}ms` }}>
              <figure className="tst__card">
                <figcaption className="tst__by">
                  <span className={`tst__avatar tst__avatar--${t.tone}`} aria-hidden="true">
                    {t.initials}
                  </span>
                  <span className="tst__who">
                    <span className="tst__name">{t.name}</span>
                    <span className="tst__role">{t.title}</span>
                  </span>
                </figcaption>
                <blockquote className="tst__quote">{t.quote}</blockquote>
              </figure>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
