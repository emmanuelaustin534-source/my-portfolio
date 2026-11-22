"use client";

import { useEffect, useRef } from "react";
import { gsap } from "@/lib/gsap";

/** Custom cursor ring. Rendered for fine pointers (desktop) only. */
export function Cursor() {
  const ringRef = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ring = ringRef.current;
    const dot = dotRef.current;
    if (!ring || !dot) return;
    const fine = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!fine || reduce) return;

    let ringX: (value: number) => unknown = () => undefined;
    let ringY: (value: number) => unknown = () => undefined;
    let dotX: (value: number) => unknown = () => undefined;
    let dotY: (value: number) => unknown = () => undefined;

    const ctx = gsap.context(() => {
      gsap.set([ring, dot], { xPercent: -50, yPercent: -50, opacity: 0 });
      ringX = gsap.quickTo(ring, "x", { duration: 0.45, ease: "power3.out" });
      ringY = gsap.quickTo(ring, "y", { duration: 0.45, ease: "power3.out" });
      dotX = gsap.quickTo(dot, "x", { duration: 0.1, ease: "power3.out" });
      dotY = gsap.quickTo(dot, "y", { duration: 0.1, ease: "power3.out" });
    });

    let visible = false;
    const onMove = (event: PointerEvent) => {
      if (!visible) {
        visible = true;
        gsap.to([ring, dot], { opacity: 1, duration: 0.3 });
      }
      ringX(event.clientX);
      ringY(event.clientY);
      dotX(event.clientX);
      dotY(event.clientY);
    };
    const onOver = (event: PointerEvent) => {
      const target = event.target instanceof Element ? event.target : null;
      const interactive = target?.closest("a, button, input, textarea, select, [data-cursor]");
      gsap.to(ring, { scale: interactive ? 1.7 : 1, duration: 0.25, ease: "power2.out", overwrite: "auto" });
    };
    const onLeaveWindow = () => {
      visible = false;
      gsap.to([ring, dot], { opacity: 0, duration: 0.2 });
    };

    window.addEventListener("pointermove", onMove);
    window.addEventListener("pointerover", onOver);
    document.documentElement.addEventListener("pointerleave", onLeaveWindow);
    return () => {
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerover", onOver);
      document.documentElement.removeEventListener("pointerleave", onLeaveWindow);
      ctx.revert();
    };
  }, []);

  return (
    <>
      <div
        ref={ringRef}
        aria-hidden="true"
        className="pointer-events-none fixed left-0 top-0 z-[95] hidden h-9 w-9 rounded-full border border-brand-400/80 opacity-0 [@media(hover:hover)_and_(pointer:fine)]:block"
      />
      <div
        ref={dotRef}
        aria-hidden="true"
        className="pointer-events-none fixed left-0 top-0 z-[95] hidden h-1.5 w-1.5 rounded-full bg-brand-400 opacity-0 [@media(hover:hover)_and_(pointer:fine)]:block"
      />
    </>
  );
}
