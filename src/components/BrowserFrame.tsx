import type { ReactNode } from "react";
import "./BrowserFrame.css";

/* Fake browser chrome (replicated from sagarshah.dev's BrowserFrame):
   rounded border, a bar with three dots + a URL pill, then the content. */
export function BrowserFrame({
  domain,
  children,
}: {
  domain: string;
  children: ReactNode;
}) {
  return (
    <div className="bf">
      <div className="bf__bar" aria-hidden="true">
        <div className="bf__dots">
          <span />
          <span />
          <span />
        </div>
        <div className="bf__url">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
            <path d="M7 11V7a5 5 0 0 1 10 0v4" />
          </svg>
          <span className="bf__domain">{domain}</span>
        </div>
      </div>
      <div className="bf__body">{children}</div>
    </div>
  );
}
