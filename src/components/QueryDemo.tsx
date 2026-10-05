import { useEffect, useRef, useState } from "react";
import "./QueryDemo.css";

type Datum = { label: string; value: number; display: string };
type QA = { q: string; caption: string; unit: string; data: Datum[] };

/* Natural-language questions → a little chart that "answers" - a nod to
   conversational, Copilot-style BI (Sravan's differentiator). */
const ITEMS: QA[] = [
  {
    q: "revenue by region this quarter",
    caption: "West is pacing ahead at $2.4M.",
    unit: "$M",
    data: [
      { label: "West", value: 2.4, display: "$2.4M" },
      { label: "East", value: 1.8, display: "$1.8M" },
      { label: "Central", value: 1.3, display: "$1.3M" },
      { label: "South", value: 0.9, display: "$0.9M" },
    ],
  },
  {
    q: "top product lines by margin",
    caption: "Accessories carry the highest margin.",
    unit: "%",
    data: [
      { label: "Accessories", value: 42, display: "42%" },
      { label: "Hardware", value: 31, display: "31%" },
      { label: "Software", value: 28, display: "28%" },
      { label: "Services", value: 19, display: "19%" },
    ],
  },
  {
    q: "active users, last 6 months",
    caption: "Steady growth, up 38% since March.",
    unit: "k",
    data: [
      { label: "Mar", value: 5.1, display: "5.1k" },
      { label: "Apr", value: 5.6, display: "5.6k" },
      { label: "May", value: 6.0, display: "6.0k" },
      { label: "Jun", value: 6.4, display: "6.4k" },
      { label: "Jul", value: 6.7, display: "6.7k" },
      { label: "Aug", value: 7.0, display: "7.0k" },
    ],
  },
];

export default function QueryDemo() {
  const [idx, setIdx] = useState(0);
  const [typed, setTyped] = useState("");
  const [answered, setAnswered] = useState(false);
  const reduce = useRef(false);

  useEffect(() => {
    reduce.current =
      typeof window !== "undefined" &&
      window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;

    if (reduce.current) {
      setTyped(ITEMS[0].q);
      setAnswered(true);
      return;
    }

    let cancelled = false;
    const timers: number[] = [];
    const wait = (ms: number, fn: () => void) => {
      const t = window.setTimeout(() => !cancelled && fn(), ms);
      timers.push(t);
    };

    const run = (i: number) => {
      const item = ITEMS[i];
      setIdx(i);
      setAnswered(false);
      setTyped("");
      let c = 0;
      const type = () => {
        if (cancelled) return;
        c++;
        setTyped(item.q.slice(0, c));
        if (c < item.q.length) wait(42, type);
        else {
          wait(450, () => setAnswered(true));
          wait(4600, () => run((i + 1) % ITEMS.length));
        }
      };
      wait(500, type);
    };

    run(0);
    return () => {
      cancelled = true;
      timers.forEach(clearTimeout);
    };
  }, []);

  const item = ITEMS[idx];
  const max = Math.max(...item.data.map((d) => d.value));

  return (
    <div className="qd" role="img" aria-label="Conversational BI demo: a natural-language question answered with a chart">
      <div className="qd__head">
        <span className="qd__dots" aria-hidden="true">
          <i /> <i /> <i />
        </span>
        <span className="qd__title">Ask your data</span>
        <span className="qd__badge">AI</span>
      </div>

      <div className="qd__ask">
        <span className="qd__prompt" aria-hidden="true">
          &gt;
        </span>
        <span className="qd__typed">
          {typed}
          <span className="qd__cursor" aria-hidden="true" />
        </span>
      </div>

      <div className={`qd__answer ${answered ? "is-on" : ""}`}>
        <div className="qd__chart">
          {item.data.map((d, i) => (
            <div className="qd__row" key={d.label}>
              <span className="qd__label">{d.label}</span>
              <span className="qd__track">
                <span
                  className="qd__fill"
                  style={{
                    width: answered ? `${(d.value / max) * 100}%` : "0%",
                    transitionDelay: `${i * 70}ms`,
                  }}
                />
              </span>
              <span className="qd__val">{d.display}</span>
            </div>
          ))}
        </div>
        <p className="qd__caption">
          <span className="qd__spark" aria-hidden="true">
            ✦
          </span>
          {item.caption}
        </p>
      </div>
    </div>
  );
}
