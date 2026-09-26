import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { navItems } from "../data/nav";
import { site } from "../data/site";
import "./NavBar.css";

const isHash = (to: string) => to.startsWith("#");

export default function NavBar() {
  const [open, setOpen] = useState(false);
  const [activeHash, setActiveHash] = useState("");

  // Close the mobile sheet on Escape.
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  // Scroll-spy: highlight the nav tab whose section is in view.
  useEffect(() => {
    const ids = navItems
      .filter((i) => i.ready && isHash(i.to))
      .map((i) => i.to.slice(1));
    const els = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => Boolean(el));
    if (!els.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveHash("#" + entry.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 }
    );
    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  // Render a single nav entry (locked span / hash anchor / route link).
  const renderTab = (
    item: (typeof navItems)[number],
    onClick?: () => void
  ) => {
    if (!item.ready) {
      return (
        <span
          className="nav__tab is-locked"
          aria-disabled="true"
          title="Coming soon"
        >
          {item.label}
        </span>
      );
    }
    const active = isHash(item.to) && item.to === activeHash;
    const className = `nav__tab${active ? " is-active" : ""}`;
    return isHash(item.to) ? (
      <a href={item.to} className={className} onClick={onClick}>
        {item.label}
      </a>
    ) : (
      <NavLink to={item.to} className={className} onClick={onClick}>
        {item.label}
      </NavLink>
    );
  };

  return (
    <header className="nav">
      <div className="container nav__inner">
        {/* Wordmark */}
        <NavLink to="/" className="nav__brand" onClick={() => setOpen(false)}>
          {site.wordmark}
        </NavLink>

        {/* Desktop nav - links grouped in a light-gray pill */}
        <nav className="nav__desktop" aria-label="Main">
          <ul className="nav__pill">
            {navItems.map((item) => (
              <li key={item.to}>{renderTab(item)}</li>
            ))}
          </ul>
        </nav>

        {/* Right side: résumé text-link + Let's talk button + hamburger */}
        <div className="nav__right">
          {site.resume.ready ? (
            <a className="btn btn--link nav__cv" href={site.resume.href} download>
              {site.resumeLabel}
            </a>
          ) : (
            <span
              className="btn btn--link nav__cv is-disabled"
              aria-disabled="true"
              title="Coming soon"
            >
              {site.resumeLabel}
            </span>
          )}
          <a className="btn nav__talk" href="#contact">
            Let&apos;s talk
          </a>
          <button
            className="nav__toggle"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <span className={`nav__burger ${open ? "is-open" : ""}`}>
              <span />
              <span />
              <span />
            </span>
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      <div className={`nav__mobile ${open ? "is-open" : ""}`}>
        <ul className="nav__mobile-links">
          {navItems.map((item) => (
            <li key={item.to}>{renderTab(item, () => setOpen(false))}</li>
          ))}
        </ul>
        <div className="nav__mobile-cta">
          {site.resume.ready ? (
            <a
              className="btn btn--ghost"
              href={site.resume.href}
              download
              onClick={() => setOpen(false)}
            >
              {site.resumeLabel}
            </a>
          ) : (
            <span
              className="btn btn--ghost is-disabled"
              aria-disabled="true"
              title="Coming soon"
            >
              {site.resumeLabel}
            </span>
          )}
          <a
            className="btn"
            href="#contact"
            onClick={() => setOpen(false)}
          >
            Let&apos;s talk
          </a>
        </div>
      </div>
    </header>
  );
}
