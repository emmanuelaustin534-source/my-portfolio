import type Lenis from "lenis";

/** Holds the active Lenis instance so other components can scroll through it. */
export const lenisStore: { current: Lenis | null } = { current: null };

export function scrollToTop(): void {
  if (typeof window === "undefined") return;
  if (lenisStore.current) {
    lenisStore.current.scrollTo(0);
  } else {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
}
