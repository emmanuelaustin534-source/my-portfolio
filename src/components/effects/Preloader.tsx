"use client";

import { useEffect, useRef } from "react";
import { gsap } from "@/lib/gsap";
import { site } from "@/data/site";

const SESSION_KEY = "ea-preloaded";

/** Logo reveal intro. Plays once per browser session. */
export function Preloader() {
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    const html = document.documentElement;
    if (html.hasAttribute("data-preloaded")) return;

    const finish = () => {
      try {
        sessionStorage.setItem(SESSION_KEY, "1");
      } catch {
        /* storage unavailable, ignore */
      }
      html.setAttribute("data-preloaded", "");
    };

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      finish();
      return;
    }

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ onComplete: finish });
      tl.from("[data-pre='mark']", { scale: 0.6, opacity: 0, duration: 0.7, ease: "back.out(1.6)" })
        .from("[data-pre='name']", { y: 16, opacity: 0, duration: 0.6, ease: "power3.out" }, "-=0.2")
        .fromTo("[data-pre='bar']", { scaleX: 0 }, { scaleX: 1, duration: 0.8, ease: "power2.inOut" }, "-=0.3")
        .to(root, { yPercent: -100, duration: 0.8, ease: "power4.inOut" }, "+=0.15");
    }, root);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={rootRef}
      className="preloader fixed inset-0 z-[90] grid place-items-center bg-canvas"
      aria-hidden="true"
    >
      <div className="flex flex-col items-center gap-6">
        <svg data-pre="mark" viewBox="0 0 40 40" className="h-20 w-20 drop-shadow-[0_0_30px_var(--brand)]">
          <defs>
            <linearGradient id="pre-grad" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0" stopColor="var(--brand-400)" />
              <stop offset="1" stopColor="var(--brand-700)" />
            </linearGradient>
          </defs>
          <rect width="40" height="40" rx="11" fill="url(#pre-grad)" />
          <path d="M13 11h15v4.5H18v3h8.5v4.5H18v3h10V30H13z" fill="#fff" />
        </svg>
        <p data-pre="name" className="font-display text-lg font-semibold text-ink">
          {site.name}
        </p>
        <div className="h-0.5 w-40 overflow-hidden rounded-full bg-line">
          <div data-pre="bar" className="h-full origin-left bg-brand-500" />
        </div>
      </div>
    </div>
  );
}
