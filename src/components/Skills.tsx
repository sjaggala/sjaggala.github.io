import { skills } from "../data/skills";
import { skillGlyphs } from "../data/skillGlyphs";
import { useReveal } from "../hooks/useReveal";
import "./Skills.css";

export default function Skills() {
  useReveal();
  return (
    <section id="stack" className="sk">
      <div className="container">
        <div className="sk__head reveal">
          <span className="eyebrow">{skills.eyebrow}</span>
          <h2 className="sk__title">{skills.heading}</h2>
          <p className="sk__lead">{skills.subhead}</p>
        </div>

        <ul className="sk__grid" role="list">
          {skills.groups.map((group, i) => (
            <li
              key={group.id}
              className="sk__card reveal"
              style={{ transitionDelay: `${i * 70}ms` }}
            >
              <div className="sk__card-head">
                <h3 className="sk__card-title">{group.title}</h3>
                <p className="sk__card-desc">{group.descriptor}</p>
              </div>
              <ul className="sk__items" role="list">
                {group.items.map((item) =>
                  item.icon ? (
                    <li key={item.name} className="sk__item">
                      <span className="sk__ico">
                        <img src={item.icon} alt="" loading="lazy" />
                      </span>
                      <span className="sk__name">{item.name}</span>
                    </li>
                  ) : item.glyph && skillGlyphs[item.glyph] ? (
                    <li key={item.name} className="sk__item">
                      <span className="sk__ico sk__ico--glyph">
                        {skillGlyphs[item.glyph]}
                      </span>
                      <span className="sk__name">{item.name}</span>
                    </li>
                  ) : (
                    <li key={item.name} className="sk__item sk__item--chip">
                      {item.name}
                    </li>
                  )
                )}
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
