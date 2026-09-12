"use client";

import { useEffect, useRef } from "react";

type SignatureProps = {
  text: string;
  /** How far (in px) the glare reaches before fading to nothing. */
  radius?: number;
};

export default function Signature({ text, radius = 220 }: SignatureProps) {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Respect people who've asked their system to reduce motion —
    // just leave the signature static for them.
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReduced) return;

    let frame = 0;

    function handleMove(e: MouseEvent) {
      // Throttle to one update per animation frame instead of per pixel
      // of mouse movement — keeps this smooth and cheap.
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        if (!el) return;
        const rect = el.getBoundingClientRect();

        // Closest point on the text's bounding box to the cursor —
        // this is what makes "near" work even when the mouse is
        // above/below/beside the text, not just on top of it.
        const nearestX = Math.max(rect.left, Math.min(e.clientX, rect.right));
        const nearestY = Math.max(rect.top, Math.min(e.clientY, rect.bottom));
        const dist = Math.hypot(e.clientX - nearestX, e.clientY - nearestY);

        const strength = Math.max(0, 1 - dist / radius);
        const xPct = ((e.clientX - rect.left) / rect.width) * 100;

        el.style.setProperty("--strength", strength.toFixed(2));
        el.style.setProperty("--gx", `${xPct.toFixed(1)}%`);
      });
    }

    window.addEventListener("mousemove", handleMove);
    return () => {
      window.removeEventListener("mousemove", handleMove);
      cancelAnimationFrame(frame);
    };
  }, [radius]);

  // data-text drives a decorative ::after in CSS that overlays the
  // shiny gradient version on top of the plain, always-visible text.
  return (
    <span ref={ref} className="signature-mark" data-text={text}>
      {text}
    </span>
  );
}
