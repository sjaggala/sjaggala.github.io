/* Logos come in wildly different aspect ratios, so a single fixed height makes
   wide wordmarks look huge and square marks look tiny. This normalizes optical
   size: compact/square logos get more height, very wide ones get less - so the
   row reads as one consistent size. Runs on load (and immediately for cached
   images via a ref). Auto-adjusts future logos too, no per-logo tuning. */
export type LogoTiers = { wide: number; mid: number; compact: number };

export function normalizeLogoHeight(img: HTMLImageElement, t: LogoTiers) {
  // Per-logo override (data-logo-h) wins - some marks read optically bigger or
  // smaller than their aspect tier and need a hand-tuned height.
  const fixed = img.dataset.logoH;
  if (fixed) {
    img.style.height = `${fixed}px`;
    return;
  }
  const w = img.naturalWidth;
  const h = img.naturalHeight;
  if (!w || !h) return;
  const aspect = w / h;
  const px = aspect >= 3.2 ? t.wide : aspect >= 2 ? t.mid : t.compact;
  img.style.height = `${px}px`;
}
