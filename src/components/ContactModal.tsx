/* Global contact modal + success toast.
   Any CTA ("Get in touch", "Start a conversation", "Let's talk") calls the
   openContactModal() hook; the dialog is rendered once at the app root.
   Submits to Web3Forms (a relay: delivers to the inbox, stores nothing). The
   access key is public by design - a delivery token, not inbox access. A hidden
   honeypot field (botcheck) drops bots. If no key is configured yet, the modal
   degrades to a mailto link so nothing is broken in the meantime. */
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
  type ReactNode,
} from "react";
import { contact } from "../data/contact";
import { site } from "../data/site";
import "./ContactModal.css";

type Status = "idle" | "sending" | "error";

const ContactModalContext = createContext<() => void>(() => {});

/** Returns a function that opens the global contact modal. */
export function useContactModal() {
  return useContext(ContactModalContext);
}

export function ContactModalProvider({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);
  const [toast, setToast] = useState(false);

  const openModal = useCallback(() => setOpen(true), []);
  const closeModal = useCallback(() => setOpen(false), []);

  const showToast = useCallback(() => {
    setToast(true);
    window.setTimeout(() => setToast(false), 4500);
  }, []);

  return (
    <ContactModalContext.Provider value={openModal}>
      {children}
      {open && (
        <ContactDialog
          onClose={closeModal}
          onSuccess={() => {
            closeModal();
            showToast();
          }}
        />
      )}
      <SuccessToast show={toast} onClose={() => setToast(false)} />
    </ContactModalContext.Provider>
  );
}

function ContactDialog({
  onClose,
  onSuccess,
}: {
  onClose: () => void;
  onSuccess: () => void;
}) {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const firstFieldRef = useRef<HTMLInputElement>(null);
  const dialogRef = useRef<HTMLDivElement>(null);
  const configured = contact.web3formsKey.trim().length > 0;

  // Focus the first field on open, lock body scroll, close on Escape.
  useEffect(() => {
    firstFieldRef.current?.focus();
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prevOverflow;
      document.removeEventListener("keydown", onKey);
    };
  }, [onClose]);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    // Honeypot: a real person never fills this hidden field.
    if ((data.get("botcheck") as string)?.length) {
      onSuccess(); // silently pretend success; drop the bot
      return;
    }

    const name = (data.get("name") as string)?.trim();
    const email = (data.get("email") as string)?.trim();
    const message = (data.get("message") as string)?.trim();
    if (!name || !email || !message) {
      setStatus("error");
      setErrorMsg("Please fill in your name, email, and a short message.");
      return;
    }

    setStatus("sending");
    setErrorMsg("");
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: contact.web3formsKey,
          subject: `Portfolio inquiry from ${name}`,
          from_name: "sjaggala.github.io",
          name,
          email,
          company: (data.get("company") as string)?.trim() || "(not provided)",
          role: (data.get("role") as string)?.trim() || "(not provided)",
          job_link: (data.get("job_link") as string)?.trim() || "(not provided)",
          message,
        }),
      });
      const result = await res.json();
      if (result.success) {
        form.reset();
        setStatus("idle");
        onSuccess();
      } else {
        throw new Error(result.message || "Submission failed");
      }
    } catch {
      setStatus("error");
      setErrorMsg(
        "Something went wrong sending that. Please try again, or email me directly at " +
          site.email +
          ".",
      );
    }
  }

  return (
    <div
      className="cm__overlay"
      onMouseDown={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div
        className="cm__dialog"
        role="dialog"
        aria-modal="true"
        aria-labelledby="cm-title"
        ref={dialogRef}
      >
        <button
          type="button"
          className="cm__close"
          aria-label="Close contact form"
          onClick={onClose}
        >
          <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
            <path d="M18 6 6 18M6 6l12 12" />
          </svg>
        </button>

        <h2 id="cm-title" className="cm__title">
          Start a conversation
        </h2>
        <p className="cm__lead">
          Tell me about the role or the problem you're hiring for. I usually reply
          within a day.
        </p>

        {configured ? (
          <form className="cm__form" onSubmit={handleSubmit} noValidate>
            {/* Honeypot - visually hidden, off the tab order */}
            <input
              type="text"
              name="botcheck"
              className="cm__hp"
              tabIndex={-1}
              autoComplete="off"
              aria-hidden="true"
            />

            <div className="cm__grid">
              <label className="cm__label">
                Name <span className="cm__req">*</span>
                <input
                  ref={firstFieldRef}
                  className="cm__input"
                  type="text"
                  name="name"
                  required
                  autoComplete="name"
                />
              </label>
              <label className="cm__label">
                Email <span className="cm__req">*</span>
                <input
                  className="cm__input"
                  type="email"
                  name="email"
                  required
                  autoComplete="email"
                />
              </label>
              <label className="cm__label">
                Company
                <input
                  className="cm__input"
                  type="text"
                  name="company"
                  autoComplete="organization"
                />
              </label>
              <label className="cm__label">
                Role / position
                <input className="cm__input" type="text" name="role" />
              </label>
            </div>

            <label className="cm__label">
              Job post link
              <input
                className="cm__input"
                type="url"
                name="job_link"
                inputMode="url"
                placeholder="https://..."
              />
            </label>

            <label className="cm__label">
              Message <span className="cm__req">*</span>
              <textarea
                className="cm__input cm__textarea"
                name="message"
                rows={4}
                required
              />
            </label>

            {status === "error" && (
              <p className="cm__error" role="alert">
                {errorMsg}
              </p>
            )}

            <div className="cm__actions">
              <button type="submit" className="btn" disabled={status === "sending"}>
                {status === "sending" ? "Sending..." : "Send message"}
              </button>
              <button type="button" className="btn btn--ghost" onClick={onClose}>
                Cancel
              </button>
            </div>
          </form>
        ) : (
          <div className="cm__actions">
            <a className="btn" href={`mailto:${site.email}`}>
              Email me directly
            </a>
            <button type="button" className="btn btn--ghost" onClick={onClose}>
              Close
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

function SuccessToast({ show, onClose }: { show: boolean; onClose: () => void }) {
  if (!show) return null;
  return (
    <div className="cm__toast" role="status" onClick={onClose}>
      <span className="cm__toast-ico" aria-hidden="true">
        <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M20 6 9 17l-5-5" />
        </svg>
      </span>
      Thanks! Your message is on its way. I'll be in touch soon.
    </div>
  );
}
