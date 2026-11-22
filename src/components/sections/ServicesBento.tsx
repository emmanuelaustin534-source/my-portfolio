import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { services } from "@/data/services";
import { cn } from "@/lib/utils";
import { Container } from "@/components/ui/Container";
import { Icon } from "@/components/ui/Icon";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TiltCard } from "@/components/ui/TiltCard";

const spans = [
  "lg:col-span-4",
  "lg:col-span-2",
  "lg:col-span-2",
  "lg:col-span-4",
  "lg:col-span-3",
  "lg:col-span-3",
];

interface ServicesBentoProps {
  showHeading?: boolean;
}

export function ServicesBento({ showHeading = true }: ServicesBentoProps) {
  return (
    <section className="py-20 sm:py-28" aria-labelledby={showHeading ? "services-heading" : undefined}>
      <Container>
        {showHeading ? (
          <Reveal>
            <div id="services-heading">
              <SectionHeading
                title="Video, and the workflow behind it"
                description="Six services that cover making the content, finishing it and getting it published, so you can use one or combine several."
              />
            </div>
          </Reveal>
        ) : null}

        <ul className={cn("grid gap-5 lg:grid-cols-6", showHeading && "mt-14")}>
          {services.map((service, index) => (
            <li key={service.slug} className={cn("flex", spans[index % spans.length])}>
              <Reveal delay={(index % 3) * 0.08} className="flex w-full">
                <TiltCard className="flex w-full">
                  <Link
                    href={`/services/${service.slug}`}
                    className="group relative flex w-full flex-col justify-between overflow-hidden rounded-3xl border border-line bg-card p-7 transition-colors hover:border-brand-400/70 sm:p-9"
                  >
                    <span
                      className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-brand-500/25 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100"
                      aria-hidden="true"
                    />
                    <div className="relative">
                      <span className="grid h-12 w-12 place-items-center rounded-2xl border border-line bg-canvas-2 text-accent shadow-[0_0_30px_-8px_var(--brand)]">
                        <Icon name={service.icon} className="h-6 w-6" />
                      </span>
                      <h3 className="mt-6 text-2xl font-semibold">{service.title}</h3>
                      <p className="mt-3 max-w-xl text-mute">{service.short}</p>
                    </div>
                    <span className="relative mt-8 inline-flex items-center gap-1.5 text-sm font-semibold text-accent">
                      Read more
                      <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden="true" />
                    </span>
                  </Link>
                </TiltCard>
              </Reveal>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
