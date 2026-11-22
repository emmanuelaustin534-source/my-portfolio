"use client";

import { useEffect, useRef } from "react";
import { animate, useInView, useReducedMotion } from "framer-motion";
import { site } from "@/data/site";
import { Container } from "@/components/ui/Container";

interface CounterProps {
  value: number;
  suffix: string;
}

function Counter({ value, suffix }: CounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "0px 0px -60px 0px" });
  const reduce = useReducedMotion();

  useEffect(() => {
    const node = ref.current;
    if (!node || !inView) return;
    if (reduce) {
      node.textContent = `${value}${suffix}`;
      return;
    }
    const controls = animate(0, value, {
      duration: 1.6,
      ease: "easeOut",
      onUpdate: (latest) => {
        node.textContent = `${Math.round(latest)}${suffix}`;
      },
    });
    return () => controls.stop();
  }, [inView, reduce, value, suffix]);

  return <span ref={ref}>{`0${suffix}`}</span>;
}

export function Stats() {
  return (
    <section aria-label="At a glance" className="py-16 sm:py-20">
      <Container>
        <dl className="grid grid-cols-2 gap-px overflow-hidden rounded-3xl border border-line bg-line lg:grid-cols-4">
          {site.stats.map((stat) => (
            <div key={stat.label} className="bg-canvas px-5 py-8 sm:px-8 sm:py-10">
              <dd className="font-display text-5xl font-semibold text-ink sm:text-6xl">
                <Counter value={stat.value} suffix={stat.suffix} />
              </dd>
              <dt className="mt-3 text-sm text-mute">{stat.label}</dt>
            </div>
          ))}
        </dl>
      </Container>
    </section>
  );
}
