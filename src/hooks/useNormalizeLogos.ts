import { useEffect } from "react";
import { normalizeLogoHeight, type LogoTiers } from "../utils/logoHeight";

/* Normalizes every logo matching `selector` to a consistent optical size.
   Polls naturalWidth instead of relying on the load event — some embedded
   browsers fire onLoad unreliably, but naturalWidth becomes available once an
   image is decoded. Retries briefly to catch images that decode a beat late. */
export function useNormalizeLogos(selector: string, tiers: LogoTiers) {
  useEffect(() => {
    const imgs = Array.from(
      document.querySelectorAll<HTMLImageElement>(selector)
    );
    if (!imgs.length) return;
    let cancelled = false;
    let tries = 0;
    const tick = () => {
      if (cancelled) return;
      let pending = false;
      for (const img of imgs) {
        if (img.naturalWidth) normalizeLogoHeight(img, tiers);
        else pending = true;
      }
      tries += 1;
      if (pending && tries < 40) setTimeout(tick, 120);
    };
    tick();
    return () => {
      cancelled = true;
    };
  }, [selector, tiers]);
}
