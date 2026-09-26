import { faq } from "../data/faq";
import { useReveal } from "../hooks/useReveal";
import "./Faq.css";

/* Accordion is native <details name> — the browser closes the open sibling,
   zero JS. Mirrors sagarshah.dev's FAQ band. */
export default function Faq() {
  useReveal();
  return (
    <section id="faq" className="faq">
      <div className="container">
        <div className="faq__head reveal">
          <span className="eyebrow">{faq.eyebrow}</span>
          <h2 className="faq__title">{faq.heading}</h2>
          <p className="faq__lead">{faq.subhead}</p>
        </div>

        <ul className="faq__list reveal" role="list">
          {faq.items.map((item) => (
            <li key={item.id}>
              <details name={faq.groupName} className="faq__item">
                <summary className="faq__q">
                  <span className="faq__q-text">{item.question}</span>
                  <span className="faq__chevron" aria-hidden="true">
                    <svg
                      viewBox="0 0 24 24"
                      width="20"
                      height="20"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M6 9l6 6 6-6" />
                    </svg>
                  </span>
                </summary>
                <p className="faq__a">{item.answer}</p>
              </details>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
