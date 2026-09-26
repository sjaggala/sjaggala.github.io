import { whatIDo, type ServiceItem } from "../data/services";
import { useReveal } from "../hooks/useReveal";
import "./WhatIDo.css";

function ServiceIcon({ name }: { name: ServiceItem["icon"] }) {
  const common = {
    width: 22,
    height: 22,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.5,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true,
  };
  if (name === "database") {
    return (
      <svg {...common}>
        <ellipse cx="12" cy="5" rx="9" ry="3" />
        <path d="M3 5v14c0 1.66 4.03 3 9 3s9-1.34 9-3V5" />
        <path d="M3 12c0 1.66 4.03 3 9 3s9-1.34 9-3" />
      </svg>
    );
  }
  if (name === "layers") {
    return (
      <svg {...common}>
        <path d="m12 2 9 5-9 5-9-5 9-5z" />
        <path d="m3 12 9 5 9-5" />
        <path d="m3 17 9 5 9-5" />
      </svg>
    );
  }
  // sparkles
  return (
    <svg {...common}>
      <path d="M9 3l1.6 4.4L15 9l-4.4 1.6L9 15l-1.6-4.4L3 9l4.4-1.6z" />
      <path d="M18 13l.9 2.5L21.5 16l-2.6.9L18 19.5l-.9-2.6L14.5 16l2.6-.9z" />
    </svg>
  );
}

export default function WhatIDo() {
  useReveal();
  return (
    <section id="services" className="wid section--tint">
      <div className="container">
        <div className="wid__head reveal">
          <span className="eyebrow">{whatIDo.eyebrow}</span>
          <h2 className="wid__title">{whatIDo.heading}</h2>
          <p className="wid__lead">{whatIDo.subhead}</p>
        </div>

        <ul className="wid__grid" role="list">
          {whatIDo.items.map((item, i) => (
            <li
              key={item.id}
              className="wid__card reveal"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <span className="wid__icon">
                <ServiceIcon name={item.icon} />
              </span>
              <h3 className="wid__card-title">{item.title}</h3>
              <p className="wid__card-body">{item.body}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
