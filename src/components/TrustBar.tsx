import { clients } from "../data/clients";
import { useNormalizeLogos } from "../hooks/useNormalizeLogos";
import { type LogoTiers } from "../utils/logoHeight";
import "./TrustBar.css";

const TIERS: LogoTiers = { wide: 24, mid: 28, compact: 34 };

/* Renders inside the Hero, split off by a hairline - like sagarshah.dev's
   trust bar. Logo where one exists, styled wordmark otherwise. Logo heights are
   normalized by aspect ratio so the row reads as one consistent size. */
export default function TrustBar() {
  useNormalizeLogos(".trust__logo", TIERS);
  return (
    <div className="container trust">
      <p className="trust__intro">{clients.intro}</p>
      <ul className="trust__marks" role="list">
        {clients.marks.map((mark) => (
          <li key={mark.name} className="trust__item">
            {mark.logo ? (
              <img src={mark.logo} alt={mark.name} className="trust__logo" />
            ) : (
              <span className="trust__wordmark">{mark.name}</span>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
