/* Résumé download dropdown: recruiters pick the version that matches the role.
   Used in the nav (desktop text-link + mobile ghost button). */
import { useEffect, useRef, useState } from "react";
import { site } from "../data/site";
import "./ResumeMenu.css";

export default function ResumeMenu({
  variant = "link",
  className = "",
  onPick,
}: {
  variant?: "link" | "ghost";
  className?: string;
  onPick?: () => void;
}) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const onDoc = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("mousedown", onDoc);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onDoc);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const btnClass =
    variant === "ghost" ? "btn btn--ghost rm__btn" : "btn btn--link rm__btn";

  return (
    <div
      className={`rm ${variant === "ghost" ? "rm--ghost" : ""} ${className}`}
      ref={ref}
    >
      <button
        type="button"
        className={btnClass}
        aria-haspopup="menu"
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
      >
        {site.resumeLabel}
        <svg className={`rm__chev ${open ? "is-open" : ""}`} width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="m6 9 6 6 6-6" />
        </svg>
      </button>

      {open && (
        <div className="rm__menu" role="menu">
          {site.resumes.map((r) => (
            <a
              key={r.href}
              className="rm__item"
              role="menuitem"
              href={r.href}
              download={r.file}
              onClick={() => {
                setOpen(false);
                onPick?.();
              }}
            >
              <span className="rm__item-text">
                <span className="rm__item-label">{r.label}</span>
                <span className="rm__item-focus">{r.focus}</span>
              </span>
              <svg className="rm__dl" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M12 3v12M7 10l5 5 5-5M5 21h14" />
              </svg>
            </a>
          ))}
        </div>
      )}
    </div>
  );
}
