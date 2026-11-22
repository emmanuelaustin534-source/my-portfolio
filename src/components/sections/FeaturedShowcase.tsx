"use client";

import { useLayoutEffect, useRef } from "react";
import Link from "next/link";
import { gsap, registerGsap } from "@/lib/gsap";
import { cn } from "@/lib/utils";
import { Container } from "@/components/ui/Container";
import { Media } from "@/components/ui/Media";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ButtonLink } from "@/components/ui/Button";
import type { IconName } from "@/types";

export interface ShowcaseItem {
  title: string;
  category: string;
  summary: string;
  href?: string;
  image?: string;
  icon: IconName;
}

interface FeaturedShowcaseProps {
  items: ShowcaseItem[];
  title: string;
  description: string;
}

/** Pinned horizontal scroll on desktop; a swipeable row on mobile and for reduced-motion users. */
export function FeaturedShowcase({ items, title, description }: FeaturedShowcaseProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const wrapRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLUListElement>(null);

  useLayoutEffect(() => {
    registerGsap();
    const section = sectionRef.current;
    const wrap = wrapRef.current;
    const track = trackRef.current;
    if (!section || !wrap || !track) return;

    const mm = gsap.matchMedia();
    mm.add("(min-width: 1024px) and (prefers-reduced-motion: no-preference)", () => {
      wrap.style.overflowX = "hidden";
      const distance = () => Math.max(0, track.scrollWidth - wrap.clientWidth);
      if (distance() <= 0) {
        return () => {
          wrap.style.overflowX = "";
        };
      }
      gsap.to(track, {
        x: () => -distance(),
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: () => `+=${distance()}`,
          pin: true,
          scrub: 0.6,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });
      return () => {
        wrap.style.overflowX = "";
      };
    });

    return () => mm.revert();
  }, [items.length]);

  return (
    <section ref={sectionRef} className="relative overflow-hidden py-20 sm:py-28" aria-labelledby="showcase-heading">
      <Container>
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div id="showcase-heading">
            <SectionHeading title={title} description={description} />
          </div>
          <ButtonLink href="/portfolio" variant="secondary" className="self-start lg:self-auto">
            View portfolio
          </ButtonLink>
        </div>
      </Container>

      <div ref={wrapRef} className="mt-12 snap-x snap-mandatory overflow-x-auto pb-4 [scrollbar-width:none] lg:snap-none">
        <ul ref={trackRef} className="flex w-max gap-6 px-5 sm:px-8 lg:px-[max(2.5rem,calc((100vw-80rem)/2+2.5rem))]">
          {items.map((item) => {
            const body = (
              <>
                <Media
                  src={item.image}
                  alt={item.title}
                  icon={item.icon}
                  label={item.title}
                  sizes="(min-width: 1024px) 32rem, 82vw"
                  className="aspect-[4/3] w-full rounded-3xl border border-line"
                />
                <div className="mt-5 px-1">
                  <p className="text-sm text-accent">{item.category}</p>
                  <h3 className="mt-1 text-2xl font-semibold">{item.title}</h3>
                  <p className="mt-2 text-mute">{item.summary}</p>
                </div>
              </>
            );
            return (
              <li key={item.title} className="w-[82vw] shrink-0 snap-start sm:w-[26rem] lg:w-[32rem]">
                {item.href ? (
                  <Link href={item.href} className={cn("block rounded-3xl transition-opacity hover:opacity-90")}>
                    {body}
                  </Link>
                ) : (
                  <div>{body}</div>
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
