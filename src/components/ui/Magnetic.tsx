"use client";

import { useEffect, useRef } from "react";
import { gsap } from "@/lib/gsap";

interface MagneticProps {
  children: React.ReactNode;
  strength?: number;
  className?: string;
}

/** Pulls its child slightly toward the pointer. Desktop only; skipped for reduced motion. */
export function Magnetic({ children, strength = 0.28, className }: MagneticProps) {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const canHover = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!canHover || reduce) return;

    let xTo: (value: number) => unknown = () => undefined;
    let yTo: (value: number) => unknown = () => undefined;
    const ctx = gsap.context(() => {
      xTo = gsap.quickTo(el, "x", { duration: 0.5, ease: "power3.out" });
      yTo = gsap.quickTo(el, "y", { duration: 0.5, ease: "power3.out" });
    }, el);

    const onMove = (event: PointerEvent) => {
      const rect = el.getBoundingClientRect();
      xTo((event.clientX - (rect.left + rect.width / 2)) * strength);
      yTo((event.clientY - (rect.top + rect.height / 2)) * strength);
    };
    const onLeave = () => {
      xTo(0);
      yTo(0);
    };

    el.addEventListener("pointermove", onMove);
    el.addEventListener("pointerleave", onLeave);
    return () => {
      el.removeEventListener("pointermove", onMove);
      el.removeEventListener("pointerleave", onLeave);
      ctx.revert();
    };
  }, [strength]);

  return (
    <span ref={ref} className={className ?? "inline-block"}>
      {children}
    </span>
  );
}
