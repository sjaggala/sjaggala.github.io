import { BrowserFrame } from "./BrowserFrame";
import { work, type Project } from "../data/work";
import { useReveal } from "../hooks/useReveal";
import "./Work.css";

/* --- In-frame visuals (high-fidelity recreations, sample data only) --- */
function ArcusMock() {
  const stats = [
    { n: "4", l: "Projects" },
    { n: "3", l: "Active Goals" },
    { n: "1", l: "Overdue" },
    { n: "8", l: "Pending Tasks" },
  ];
  const events = [
    { t: "Team standup", d: "Today", tag: "Today", tone: "now", today: true },
    { t: "Design review", d: "Sep 26", tag: "Reminder", tone: "amber" },
    { t: "Sprint planning", d: "Sep 28", tag: "Reminder", tone: "amber" },
    { t: "Product launch", d: "Oct 2", tag: "Deadline", tone: "red" },
  ];
  const tasks = [
    { t: "Draft homepage copy", m: "Product Launch · 09-27", p: "High", tone: "high" },
    { t: "Review design mockups", m: "Product Launch · 09-26", p: "Medium", tone: "med" },
    { t: "Prep demo dataset", m: "Analytics · 09-30", p: "Medium", tone: "med" },
    { t: "Publish release notes", m: "Docs · 10-01", p: "Low", tone: "low" },
  ];
  return (
    <div className="mock mock--arcus">
      <div className="am__nav">
        <span className="am__brand">Arc<span>us</span></span>
        <span className="am__links">
          <span className="am__link is-active">Home</span>
          <span className="am__link">Projects</span>
          <span className="am__link">Tasks</span>
          <span className="am__link">Events</span>
          <span className="am__link">Journal</span>
          <span className="am__link">Focus</span>
        </span>
        <span className="am__ava">SJ</span>
      </div>
      <div className="am__body">
        <div className="am__head">
          <div>
            <div className="am__hi">Good evening, Sravan!</div>
            <div className="am__sub">Friday, September 25, 2026</div>
            <div className="am__sub am__sub--dim">Graduate Student</div>
          </div>
          <div className="am__stats">
            {stats.map((s) => (
              <div key={s.l} className="am__stat">
                <div className="am__stat-n">{s.n}</div>
                <div className="am__stat-l">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="am__cols">
          <div className="am__panel">
            <div className="am__panel-top">
              <span className="am__panel-h">Upcoming Events</span>
              <span className="am__btn">+ Event</span>
            </div>
            {events.map((e) => (
              <div key={e.t} className={`am__row ${e.today ? "is-today" : ""}`}>
                <span className="am__row-l">
                  <span className="am__row-t">{e.t}</span>
                  <span className={`am__chip ${e.today ? "am__chip--now" : ""}`}>{e.d}</span>
                </span>
                <span className={`am__tag am__tag--${e.tone}`}>{e.tag}</span>
              </div>
            ))}
          </div>
          <div className="am__panel">
            <div className="am__panel-top">
              <span className="am__panel-h">Tasks Due</span>
              <span className="am__btn">+ Task</span>
            </div>
            {tasks.map((t) => (
              <div key={t.t} className="am__row">
                <span className="am__row-l">
                  <span className="am__row-t">{t.t}</span>
                  <span className="am__row-m">{t.m}</span>
                </span>
                <span className={`am__tag am__tag--${t.tone}`}>{t.p}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function Spark({ up }: { up: boolean }) {
  const pts = up ? "0,10 8,7 16,8 24,4 32,5 40,1" : "0,3 8,5 16,4 24,7 32,6 40,10";
  return (
    <svg className={`kpi__spark ${up ? "is-up" : "is-down"}`} viewBox="0 0 40 12" preserveAspectRatio="none" aria-hidden="true">
      <polyline points={pts} fill="none" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

function DashDropMock() {
  const bars = [48, 66, 42, 80, 58, 72];
  return (
    <div className="mock mock--dd">
      {/* uploaded spreadsheet */}
      <div className="dd__sheet">
        <div className="dd__sheet-h">
          <span className="dd__file">
            <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
              <path d="M14 2v6h6" />
            </svg>
            sales_2026.xlsx
          </span>
          <span className="dd__ready">Ready</span>
        </div>
        <div className="dd__grid">
          {Array.from({ length: 5 }).map((_, r) => (
            <div key={r} className={`dd__grow ${r === 0 ? "is-head" : ""}`}>
              <span /><span /><span /><span />
            </div>
          ))}
        </div>
      </div>

      <div className="dd__arrow" aria-hidden="true">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M5 12h14" /><path d="m13 6 6 6-6 6" />
        </svg>
      </div>

      {/* generated dashboard (compact, detailed) */}
      <div className="dd__dash">
        <div className="dd__dh">
          <span className="dd__dh-t">Sales overview</span>
          <span className="dd__dh-dots" aria-hidden="true"><i /><i /><i /></span>
        </div>
        <div className="dd__kpis">
          <div className="dd__k">
            <span className="dd__k-l">Revenue</span>
            <b className="dd__k-v">$2.4M</b>
            <span className="dd__k-d">+18%</span>
          </div>
          <div className="dd__k">
            <span className="dd__k-l">Orders</span>
            <b className="dd__k-v">1,284</b>
            <span className="dd__k-d">+6%</span>
          </div>
        </div>
        <div className="dd__charts">
          <div className="dd__bars">
            <div className="dd__bars-grid" aria-hidden="true"><i /><i /><i /></div>
            <div className="dd__bars-set">
              {bars.map((h, i) => (
                <span key={i} style={{ height: `${h}%` }} />
              ))}
            </div>
          </div>
          <div className="dd__donut" />
        </div>
        <svg className="dd__spark" viewBox="0 0 100 16" preserveAspectRatio="none" aria-hidden="true">
          <polygon className="dd__spark-fill" points="0,12 18,9 36,10 54,5 72,7 90,3 100,2 100,16 0,16" />
          <polyline className="dd__spark-line" points="0,12 18,9 36,10 54,5 72,7 90,3 100,2" fill="none" strokeWidth="1.4" />
        </svg>
      </div>
    </div>
  );
}

function ReportMock() {
  const kpis = [
    { v: "$2.4M", l: "Revenue", d: "+12%", up: true },
    { v: "42.0%", l: "Gross margin", d: "+3pt", up: true },
    { v: "1,284", l: "Orders", d: "+6%", up: true },
    { v: "3.1%", l: "Return rate", d: "-0.4pt", up: true },
  ];
  const grouped = [
    [64, 44], [80, 52], [58, 70], [90, 61], [72, 48], [84, 66],
  ];
  const rows = [{ w: 88 }, { w: 62 }, { w: 44 }];
  return (
    <div className="mock mock--rp">
      <div className="rp__bar">
        <span className="rp__title">Sales Performance</span>
        <span className="rp__fy">FY2026 · Q4</span>
        <span className="rp__dots" aria-hidden="true"><i /><i /><i /></span>
      </div>

      <div className="rp__slicers">
        <span>Region <b>▾</b></span>
        <span>Category <b>▾</b></span>
        <span>Quarter <b>▾</b></span>
        <span>Segment <b>▾</b></span>
      </div>

      <div className="rp__kpis">
        {kpis.map((k) => (
          <div key={k.l} className="kpi">
            <div className="kpi__top">
              <span className="kpi__l">{k.l}</span>
              <Spark up={k.up} />
            </div>
            <div className="kpi__v">{k.v}</div>
            <div className={`kpi__d ${k.up ? "is-up" : "is-down"}`}>{k.d}</div>
          </div>
        ))}
      </div>

      <div className="rp__grid">
        <div className="viz viz--bars">
          <div className="viz__h">
            Revenue by region
            <span className="viz__legend"><span className="dot dot--c1" />Actual<span className="dot dot--c2" />Target</span>
          </div>
          <div className="plot">
            <div className="plot__grid" aria-hidden="true"><i /><i /><i /><i /></div>
            <div className="plot__bars plot__bars--grouped">
              {grouped.map(([a, b], i) => (
                <span key={i} className="grp">
                  <span className="bar bar--c1" style={{ height: `${a}%` }} />
                  <span className="bar bar--c2" style={{ height: `${b}%` }} />
                </span>
              ))}
            </div>
          </div>
          <div className="axis"><span>NA</span><span>EMEA</span><span>APAC</span><span>LATAM</span><span>MEA</span><span>ANZ</span></div>
        </div>

        <div className="viz viz--donut">
          <div className="viz__h">Category mix</div>
          <div className="donutrow">
            <div className="donut donut--rp" />
            <ul className="legend">
              <li><span className="dot dot--c1" />Hardware</li>
              <li><span className="dot dot--c2" />Software</li>
              <li><span className="dot dot--c3" />Services</li>
            </ul>
          </div>
        </div>

        <div className="viz viz--line">
          <div className="viz__h">Monthly trend</div>
          <div className="plot">
            <div className="plot__grid" aria-hidden="true"><i /><i /><i /><i /></div>
            <svg className="area" viewBox="0 0 100 34" preserveAspectRatio="none" aria-hidden="true">
              <polygon className="area__fill" points="0,26 14,20 28,23 42,12 56,15 70,7 84,10 100,4 100,34 0,34" />
              <polyline className="area__line" points="0,26 14,20 28,23 42,12 56,15 70,7 84,10 100,4" fill="none" strokeWidth="1.4" />
            </svg>
          </div>
          <div className="axis"><span>Jul</span><span>Aug</span><span>Sep</span><span>Oct</span><span>Nov</span><span>Dec</span></div>
        </div>

        <div className="viz viz--table">
          <div className="viz__h">Top products</div>
          <div className="tbl">
            <div className="tbl__head"><span>Product</span><span>Units</span><span>Revenue</span></div>
            {rows.map((r, i) => (
              <div key={i} className="tbl__row">
                <span className="tbl__name" />
                <span className="tbl__num" />
                <span className="tbl__bar"><i style={{ width: `${r.w}%` }} /></span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function Visual({ v }: { v: Project["visual"] }) {
  if (v === "arcus") return <ArcusMock />;
  if (v === "dashdrop") return <DashDropMock />;
  return <ReportMock />;
}

function ProjectCard({ project, wide }: { project: Project; wide?: boolean }) {
  const link = project.locked ? (
    <span className="work__link is-disabled" aria-disabled="true" title="Coming soon">
      {project.linkLabel}
      <Arrow />
    </span>
  ) : (
    <a
      className="work__link"
      href={project.href ?? "#"}
      target={project.href?.startsWith("http") ? "_blank" : undefined}
      rel="noreferrer"
    >
      {project.linkLabel}
      <Arrow />
    </a>
  );

  return (
    <article className={`work__card ${wide ? "work__card--wide" : ""}`}>
      <BrowserFrame domain={project.domain}>
        <div className={`work__shot ${wide ? "work__shot--wide" : ""}`}>
          <Visual v={project.visual} />
        </div>
      </BrowserFrame>

      <div className="work__meta">
        <div className="work__titlerow">
          <h3 className="work__name">{project.name}</h3>
          {project.status ? (
            <span className={`work__status work__status--${project.status.replace(/\s+/g, "").toLowerCase()}`}>
              {project.status}
            </span>
          ) : null}
        </div>
        <p className="work__desc">{project.description}</p>
        <p className="work__role">{project.role}</p>
      </div>

      <ul className="work__stack" role="list">
        {project.stack.map((s) => (
          <li key={s} className="work__tag">{s}</li>
        ))}
      </ul>

      {link}
    </article>
  );
}

function Arrow() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M7 17 17 7" />
      <path d="M7 7h10v10" />
    </svg>
  );
}

export default function Work() {
  useReveal();
  return (
    <section id="work" className="work">
      <div className="container">
        <div className="work__head reveal">
          <span className="eyebrow">{work.eyebrow}</span>
          <h2 className="work__title">{work.heading}</h2>
          <p className="work__lead">{work.subhead}</p>
        </div>

        <div className="work__grid">
          <div className="work__cell work__cell--wide reveal">
            <ProjectCard project={work.flagship} wide />
          </div>
          {work.more.map((p, i) => (
            <div key={p.id} className="work__cell reveal" style={{ transitionDelay: `${i * 80}ms` }}>
              <ProjectCard project={p} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
