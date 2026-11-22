"use client";

import { useLayoutEffect, useRef } from "react";
import { site } from "@/data/site";
import { gsap, registerGsap } from "@/lib/gsap";
import { initials } from "@/lib/utils";
import { Container } from "@/components/ui/Container";
import { ButtonLink } from "@/components/ui/Button";
import { Media } from "@/components/ui/Media";

export function Hero() {
  const rootRef = useRef<HTMLElement>(null);
  const words = site.hero.headline.split(" ");

  useLayoutEffect(() => {
    registerGsap();
    const root = rootRef.current;
    if (!root) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const delay = document.documentElement.hasAttribute("data-preloaded") ? 0.1 : 1.9;

    const ctx = gsap.context(() => {
      gsap.set("[data-word]", { yPercent: 115 });
      gsap.set("[data-fade]", { opacity: 0, y: 22 });
      gsap.set("[data-visual]", { opacity: 0, y: 40 });

      const tl = gsap.timeline({ delay });
      tl.to("[data-word]", { yPercent: 0, duration: 0.9, ease: "power4.out", stagger: 0.06 })
        .to(
          "[data-fade]",
          { opacity: 1, y: 0, duration: 0.7, ease: "power3.out", stagger: 0.1 },
          "-=0.55",
        )
        .to("[data-visual]", { opacity: 1, y: 0, duration: 1, ease: "power3.out" }, "-=1");

      const steps = gsap.utils.toArray<HTMLElement>("[data-step]");
      if (steps.length > 0) {
        const loop = gsap.timeline({ repeat: -1, delay: delay + 1.2 });
        steps.forEach((step) => {
          loop
            .to(step, { scale: 1.5, opacity: 1, duration: 0.35, ease: "power2.out" })
            .to(step, { scale: 1, opacity: 0.45, duration: 0.5, ease: "power2.inOut" }, "+=0.25");
        });
      }

      gsap.to("[data-parallax]", {
        yPercent: -9,
        ease: "none",
        scrollTrigger: { trigger: root, start: "top top", end: "bottom top", scrub: true },
      });
    }, root);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={rootRef}
      className="grain relative isolate overflow-hidden pb-20 pt-32 lg:pb-28 lg:pt-44"
    >
      <div className="mesh absolute inset-0 -z-10" aria-hidden="true" />
      <div className="grid-lines absolute inset-0 -z-10" aria-hidden="true" />

      <Container className="grid items-center gap-16 lg:grid-cols-[1.2fr_0.8fr]">
        <div>
          <p
            data-fade
            className="inline-flex items-center gap-2.5 rounded-full border border-line bg-card px-4 py-1.5 text-sm text-mute"
          >
            <span className="relative flex h-2 w-2" aria-hidden="true">
              <span className="absolute inset-0 animate-pulse-ring rounded-full bg-brand-400" />
              <span className="relative h-2 w-2 rounded-full bg-brand-400" />
            </span>
            {site.role}
          </p>

          <h1 className="mt-7 text-balance text-[2.4rem] font-semibold leading-[1.04] sm:text-6xl lg:text-7xl">
            {words.map((word, index) => (
              <span key={`${word}-${index}`}>
                <span className="inline-block overflow-hidden pb-[0.14em] align-bottom">
                  <span data-word className="inline-block">
                    {word}
                  </span>
                </span>{" "}
              </span>
            ))}
          </h1>

          <p data-fade className="mt-7 max-w-xl text-pretty text-base text-mute sm:text-lg">
            {site.tagline}
          </p>

          <div data-fade className="mt-9 flex flex-wrap items-center gap-4">
            <ButtonLink href={site.hero.primaryCta.href} size="lg" magnetic>
              {site.hero.primaryCta.label}
            </ButtonLink>
            <ButtonLink href={site.hero.secondaryCta.href} variant="secondary" size="lg" magnetic>
              {site.hero.secondaryCta.label}
            </ButtonLink>
          </div>
        </div>

        <div data-visual className="relative mx-auto w-full max-w-md lg:max-w-none">
          <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] border border-line shadow-[0_30px_120px_-40px_var(--brand)]">
            <div data-parallax className="absolute -inset-x-0 -inset-y-[10%]">
              {site.images.portrait ? (
                <Media
                  src={site.images.portrait}
                  alt={site.images.portraitAlt}
                  priority
                  sizes="100vw"
                  quality={90}
                  imageClassName="object-[45%_50%]"
                  className="h-full w-full"
                />
              ) : (
                <div
                  className="relative grid h-full w-full place-items-center overflow-hidden bg-[linear-gradient(160deg,var(--brand-900),var(--canvas-2)_65%,var(--canvas))]"
                  role="img"
                  aria-label={site.images.portraitAlt}
                >
                  <div className="mesh absolute inset-0 opacity-80" aria-hidden="true" />
                  <span className="relative font-display text-[7rem] font-semibold leading-none text-white/90 glow-text sm:text-[9rem]">
                    {initials(site.name)}
                  </span>
                </div>
              )}
            </div>
          </div>

          <div className="glass absolute -bottom-6 left-1/2 w-[88%] -translate-x-1/2 rounded-2xl border border-line p-4 shadow-xl sm:-left-6 sm:bottom-10 sm:w-56 sm:translate-x-0">
            <p className="text-sm font-semibold">From idea to published</p>
            <ol className="mt-3 space-y-2.5" aria-label="Content pipeline">
              {site.hero.pipeline.map((step, index) => (
                <li key={step} className="relative flex items-center gap-3 text-sm text-mute">
                  {index < site.hero.pipeline.length - 1 ? (
                    <span
                      className="absolute left-[5px] top-4 h-[calc(100%+0.1rem)] w-px bg-line"
                      aria-hidden="true"
                    />
                  ) : null}
                  <span
                    data-step
                    className="relative z-10 h-[11px] w-[11px] rounded-full bg-brand-400 opacity-45"
                    aria-hidden="true"
                  />
                  {step}
                </li>
              ))}
            </ol>
          </div>
        </div>
      </Container>
    </section>
  );
}
