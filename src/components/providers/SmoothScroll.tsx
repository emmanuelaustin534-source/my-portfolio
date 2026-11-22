"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import Lenis from "lenis";
import { gsap, ScrollTrigger, registerGsap } from "@/lib/gsap";
import { lenisStore } from "@/lib/lenis";

/** Lenis smooth scrolling, driven by the GSAP ticker so ScrollTrigger stays in sync. */
export function SmoothScroll({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  useEffect(() => {
    registerGsap();
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;

    const lenis = new Lenis({ lerp: 0.1, smoothWheel: true });
    lenisStore.current = lenis;
    lenis.on("scroll", ScrollTrigger.update);

    const tick = (time: number) => {
      lenis.raf(time * 1000);
    };
    gsap.ticker.add(tick);
    gsap.ticker.lagSmoothing(0);

    return () => {
      gsap.ticker.remove(tick);
      lenis.destroy();
      lenisStore.current = null;
    };
  }, []);

  useEffect(() => {
    lenisStore.current?.scrollTo(0, { immediate: true });
    const timer = window.setTimeout(() => ScrollTrigger.refresh(), 700);
    return () => window.clearTimeout(timer);
  }, [pathname]);

  return <>{children}</>;
}
