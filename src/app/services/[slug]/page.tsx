import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowUpRight, Check } from "lucide-react";
import { getService, services } from "@/data/services";
import { buildMetadata } from "@/lib/seo";
import { Container } from "@/components/ui/Container";
import { Icon } from "@/components/ui/Icon";
import { PageHeader } from "@/components/sections/PageHeader";
import { CTABand } from "@/components/sections/CTABand";
import { ButtonLink } from "@/components/ui/Button";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export const dynamicParams = false;

export function generateStaticParams(): { slug: string }[] {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return {};
  return buildMetadata({
    title: service.title,
    description: service.short,
    path: `/services/${service.slug}`,
  });
}

export default async function ServiceDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  const others = services.filter((item) => item.slug !== service.slug);

  return (
    <>
      <PageHeader title={service.title} description={service.short} />

      <section className="pb-20 pt-12 sm:pb-28 sm:pt-16">
        <Container className="grid gap-10 lg:grid-cols-[1.4fr_0.9fr] lg:gap-16">
          <div>
            <span className="grid h-14 w-14 place-items-center rounded-2xl border border-line bg-canvas-2 text-accent shadow-[0_0_40px_-8px_var(--brand)]">
              <Icon name={service.icon} className="h-7 w-7" />
            </span>
            <p className="mt-8 text-xl leading-relaxed">{service.description}</p>

            <h2 className="mt-12 text-2xl font-semibold">What this usually covers</h2>
            <ul className="mt-5 space-y-3">
              {service.typicalScope.map((item) => (
                <li key={item} className="flex items-start gap-3 text-mute">
                  <Check className="mt-1 h-5 w-5 shrink-0 text-accent" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>

            {service.honestNote ? (
              <p className="mt-10 rounded-2xl border border-brand-400/40 bg-brand-500/10 p-5 text-sm">
                {service.honestNote}
              </p>
            ) : null}
          </div>

          <aside className="space-y-6">
            <div className="rounded-3xl border border-line bg-card p-7">
              <h2 className="text-xl font-semibold">Good fit if you are</h2>
              <ul className="mt-4 space-y-3 text-mute">
                {service.bestFor.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span
                      className="mt-2.5 h-1.5 w-1.5 shrink-0 rotate-45 bg-brand-500"
                      aria-hidden="true"
                    />
                    {item}
                  </li>
                ))}
              </ul>
              <div className="mt-7">
                <ButtonLink href="/contact" magnetic>
                  Discuss this service
                </ButtonLink>
              </div>
            </div>
          </aside>
        </Container>
      </section>

      <section className="pb-20 sm:pb-28" aria-labelledby="other-services">
        <Container>
          <h2 id="other-services" className="text-2xl font-semibold sm:text-3xl">
            Other services
          </h2>
          <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {others.map((item) => (
              <li key={item.slug}>
                <Link
                  href={`/services/${item.slug}`}
                  className="group flex h-full items-center justify-between gap-3 rounded-2xl border border-line bg-card p-5 transition-colors hover:border-brand-400/70"
                >
                  <span className="font-semibold">{item.title}</span>
                  <ArrowUpRight className="h-5 w-5 shrink-0 text-accent" aria-hidden="true" />
                </Link>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <CTABand />
    </>
  );
}
