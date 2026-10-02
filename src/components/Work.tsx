import type { ReactNode } from "react";
import { BrowserFrame } from "./BrowserFrame";
import { work, type Project } from "../data/work";
import { useReveal } from "../hooks/useReveal";
import "./Work.css";

/* --- In-frame visuals (high-fidelity recreations, sample data only) --- */
function ArNavIcon({ name }: { name: string }) {
  const p: Record<string, ReactNode> = {
    home: <path d="M3 10.5 12 3l9 7.5M5 9.5V20h14V9.5" />,
    projects: <path d="M3 7a2 2 0 0 1 2-2h4l2 2h8a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />,
    calendar: (
      <>
        <rect x="3" y="4.5" width="18" height="16" rx="2" />
        <path d="M3 9h18M8 2.5v4M16 2.5v4" />
      </>
    ),
    focus: (
      <>
        <circle cx="12" cy="12" r="8" />
        <circle cx="12" cy="12" r="3" />
      </>
    ),
    lists: <path d="M8 6h13M8 12h13M8 18h13M3.5 6h.01M3.5 12h.01M3.5 18h.01" />,
    people: (
      <>
        <circle cx="9" cy="8" r="3" />
        <path d="M3 20c0-3.3 2.7-6 6-6s6 2.7 6 6M16 5.5a3 3 0 0 1 0 6M21 20c0-2.5-1.3-4-3-5" />
      </>
    ),
  };
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {p[name]}
    </svg>
  );
}

function ArPri({ level }: { level: "high" | "med" | "low" }) {
  return (
    <span className={`ar__pri ar__pri--${level}`}>
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        {level === "high" ? (
          <path d="M12 19V5M6 11l6-6 6 6" />
        ) : level === "low" ? (
          <path d="M12 5v14M6 13l6 6 6-6" />
        ) : (
          <path d="M5 9h14M5 15h14" />
        )}
      </svg>
      {level === "high" ? "High" : level === "low" ? "Low" : "Medium"}
    </span>
  );
}

function ArcusMock() {
  const nav = ["home", "projects", "calendar", "focus", "lists", "people"];
  const navLabels: Record<string, string> = {
    home: "Home", projects: "Projects", calendar: "Calendar",
    focus: "Focus", lists: "Lists", people: "People",
  };
  const tasks: {
    t: string; s: string; st: string; pr: "high" | "med" | "low";
    proj: string; d: string; due?: boolean;
  }[] = [
    { t: "Design review · Planner shell", s: "In Progress", st: "prog", pr: "high", proj: "Planner App", d: "Jun 21", due: true },
    { t: "Ship Kanban drag fix", s: "In Progress", st: "prog", pr: "high", proj: "Planner App", d: "Jun 21", due: true },
    { t: "Write streak-reminder spec", s: "Backlog", st: "back", pr: "low", proj: "Planner App", d: "Jun 21", due: true },
    { t: "Polish empty states", s: "Backlog", st: "back", pr: "med", proj: "Planner App", d: "Jun 21", due: true },
    { t: "Wire up quick search", s: "Backlog", st: "back", pr: "med", proj: "Planner App", d: "Jun 21", due: true },
    { t: "Create-task modal", s: "Backlog", st: "back", pr: "med", proj: "Planner App", d: "Jun 21", due: true },
    { t: "Audit onboarding flow", s: "In Progress", st: "prog", pr: "med", proj: "Mobile", d: "Jun 22" },
    { t: "Draft pricing model v2", s: "Review", st: "rev", pr: "high", proj: "Marketing", d: "Jun 25" },
  ];
  const days: {
    day: string; date: string;
    items: { time: string; t?: string; meta?: string; badge?: string; now?: boolean }[];
  }[] = [
    {
      day: "Today", date: "Jun 21",
      items: [
        { time: "All day", t: "Tax filing deadline", meta: "Ops", badge: "Deadline" },
        { now: true, time: "12:18 AM" },
        { time: "9:00 AM", t: "Send weekly digest", meta: "Marketing" },
        { time: "10:00 AM", t: "Team standup", meta: "Planner App" },
        { time: "12:30 PM", t: "Lunch with design team", meta: "Planner App" },
        { time: "4:30 PM", t: "1:1 with Priya", meta: "Planner App" },
        { time: "5:30 PM", t: "Beta cut review", meta: "Planner App" },
      ],
    },
    { day: "Tomorrow", date: "Jun 22", items: [{ time: "11:00 AM", t: "Onboarding sync", meta: "Mobile" }] },
    { day: "Tuesday", date: "Jun 23", items: [{ time: "11:00 AM", t: "User interviews (3 scheduled)", meta: "Marketing" }] },
    { day: "Wednesday", date: "Jun 24", items: [{ time: "10:00 AM", t: "Sprint planning", meta: "Planner App" }] },
  ];

  return (
    <div className="mock mock--arcus">
      {/* sidebar */}
      <aside className="ar__side">
        <div className="ar__logo">
          <span className="ar__logo-sq">A</span>
          <span className="ar__logo-w">Arcus</span>
        </div>
        <nav className="ar__nav">
          {nav.map((n) => (
            <span key={n} className={`ar__navitem ${n === "home" ? "is-active" : ""}`}>
              <ArNavIcon name={n} />
              {navLabels[n]}
            </span>
          ))}
        </nav>
      </aside>

      {/* main */}
      <div className="ar__main">
        <div className="ar__top">
          <span className="ar__crumb">Home <b>/</b> Tasks</span>
          <span className="ar__top-r">
            <span className="ar__search">⌘ Ctrl + F to quick search</span>
            <span className="ar__ava">SJ</span>
          </span>
        </div>

        <div className="ar__greet">
          <div>
            <div className="ar__hi">Good morning, Sravan</div>
            <div className="ar__date">Sunday, June 21</div>
          </div>
          <span className="ar__week">This Week ▾</span>
        </div>

        <div className="ar__tabs">
          <span className="ar__tab is-active">Tasks <b>8</b></span>
          <span className="ar__tab">Events <b>9</b></span>
          <span className="ar__gear" aria-hidden="true">⚙</span>
        </div>

        <div className="ar__table">
          <div className="ar__thead">
            <span>Title</span><span>Status</span><span>Priority</span><span>Project</span><span>Due date</span>
          </div>
          {tasks.map((t) => (
            <div key={t.t} className="ar__trow">
              <span className="ar__tt">{t.t}</span>
              <span><span className={`ar__status ar__status--${t.st}`}>{t.s}</span></span>
              <span><ArPri level={t.pr} /></span>
              <span className="ar__proj">{t.proj}</span>
              <span className={t.due ? "ar__due" : "ar__due ar__due--plain"}>{t.d}</span>
            </div>
          ))}
        </div>
      </div>

      {/* schedule */}
      <aside className="ar__sched">
        <div className="ar__sched-h">
          <span className="ar__sched-t">Schedule</span>
          <span className="ar__sched-w">This Week</span>
        </div>
        <div className="ar__timeline">
          {days.map((d) => (
            <div key={d.day} className="ar__daygrp">
              <div className="ar__dayhead">
                {d.day} <span>{d.date}</span>
              </div>
              {d.items.map((it, i) =>
                it.now ? (
                  <div key={i} className="ar__now">
                    <span className="ar__now-time">{it.time}</span>
                    <span className="ar__now-dot" />
                    <span className="ar__now-line" />
                    <span className="ar__now-lab">NOW</span>
                  </div>
                ) : (
                  <div key={i} className="ar__ev">
                    <span className="ar__ev-time">{it.time}</span>
                    <span className="ar__ev-dot" />
                    <span className="ar__ev-body">
                      <span className="ar__ev-t">
                        {it.t}
                        {it.badge ? <span className="ar__ev-badge">{it.badge}</span> : null}
                      </span>
                      <span className="ar__ev-meta">{it.meta}</span>
                    </span>
                  </div>
                )
              )}
            </div>
          ))}
        </div>
      </aside>
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

/* Original, abstract concept visual for the capstone: "many formats in, one
   structured schema out". All synthetic/placeholder content. No sponsor data,
   files, logos, or internal diagrams are used. */
function CapstoneMock() {
  const inputs = [
    { t: "DXF / DWG", s: "2D CAD" },
    { t: "Scan / photo", s: "pixels" },
    { t: "PDF", s: "drawings" },
    { t: "STEP", s: "3D model" },
  ];
  const rows = [
    { f: "Diameter", v: "24.0 mm", c: "0.98", tone: "hi" },
    { f: "Tolerance", v: "±0.10", c: "0.95", tone: "hi" },
    { f: "Material", v: "placeholder", c: "0.72", tone: "mid" },
    { f: "Finish", v: "needs review", c: "0.41", tone: "low" },
  ];
  return (
    <div className="mock mock--cap">
      <div className="cap__col cap__inputs">
        {inputs.map((i) => (
          <div key={i.t} className="cap__file">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
              <path d="M14 2v6h6" />
            </svg>
            <span className="cap__file-t">{i.t}</span>
            <span className="cap__file-s">{i.s}</span>
          </div>
        ))}
      </div>

      <div className="cap__flow" aria-hidden="true">
        <svg width="26" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M5 12h14" /><path d="m13 6 6 6-6 6" />
        </svg>
      </div>

      <div className="cap__agent">
        <span className="cap__agent-ico" aria-hidden="true">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 3v3M12 18v3M3 12h3M18 12h3" />
            <rect x="7" y="7" width="10" height="10" rx="2.5" />
            <circle cx="12" cy="12" r="1.6" fill="currentColor" stroke="none" />
          </svg>
        </span>
        <span className="cap__agent-t">AI agent</span>
        <span className="cap__agent-s">parse · route · extract</span>
      </div>

      <div className="cap__flow" aria-hidden="true">
        <svg width="26" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M5 12h14" /><path d="m13 6 6 6-6 6" />
        </svg>
      </div>

      <div className="cap__col cap__schema">
        <div className="cap__sh">
          <span>Field</span><span>Value</span><span>Conf.</span>
        </div>
        {rows.map((r) => (
          <div key={r.f} className="cap__row">
            <span className="cap__rf">{r.f}</span>
            <span className="cap__rv">{r.v}</span>
            <span className={`cap__conf cap__conf--${r.tone}`}>{r.c}</span>
          </div>
        ))}
        <div className="cap__legend">
          <span className="cap__src" aria-hidden="true" /> source-tracked
        </div>
      </div>
    </div>
  );
}

function Visual({ v }: { v: Project["visual"] }) {
  if (v === "arcus") return <ArcusMock />;
  if (v === "dashdrop") return <DashDropMock />;
  if (v === "capstone") return <CapstoneMock />;
  return <ReportMock />;
}

function ProjectCard({ project, wide }: { project: Project; wide?: boolean }) {
  const link = project.noLink ? null : project.locked ? (
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

  const shot = (
    <div className={`work__shot ${wide ? "work__shot--wide" : ""}`}>
      <Visual v={project.visual} />
    </div>
  );

  return (
    <article className={`work__card ${wide ? "work__card--wide" : ""}`}>
      {project.noFrame ? (
        <div className="work__concept">{shot}</div>
      ) : (
        <BrowserFrame domain={project.domain}>{shot}</BrowserFrame>
      )}

      <div className="work__meta">
        {project.kicker ? <span className="work__kicker">{project.kicker}</span> : null}
        <div className="work__titlerow">
          <h3 className="work__name">{project.name}</h3>
          {project.status ? (
            <span className={`work__status work__status--${project.status.replace(/\s+/g, "").toLowerCase()}`}>
              {project.status}
            </span>
          ) : null}
        </div>
        {project.sponsor ? (
          <p className="work__sponsor">
            Sponsored by {project.sponsor}
            {project.sponsorNamed && project.sponsorLogo ? (
              <img src={project.sponsorLogo} alt={project.sponsor} className="work__sponsor-logo" />
            ) : null}
          </p>
        ) : null}
        <p className="work__desc">{project.description}</p>
        {project.approach ? <p className="work__approach">{project.approach}</p> : null}

        {project.roleBullets ? (
          <ul className="work__rolelist" role="list">
            {project.roleBullets.map((b, i) => (
              <li key={i} className="work__rolebul">{b}</li>
            ))}
          </ul>
        ) : project.role ? (
          <p className="work__role">{project.role}</p>
        ) : null}
      </div>

      <ul className="work__stack" role="list">
        {project.stack.map((s) => (
          <li key={s} className="work__tag">{s}</li>
        ))}
      </ul>

      {project.disclaimer ? <p className="work__disclaimer">{project.disclaimer}</p> : null}

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
          {work.flagships.map((p) => (
            <div key={p.id} className="work__cell work__cell--wide reveal">
              <ProjectCard project={p} wide />
            </div>
          ))}
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
